import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const {
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET
} = process.env;

// Configuration
cloudinary.config({
  cloud_name: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true
});

const BASE_DIR = path.join(process.cwd(), 'public', 'GymHub');
const ALLOWED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];

/**
 * Recursively find all files in a directory
 */
function getFiles(dir, allFiles = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, allFiles);
    } else {
      if (ALLOWED_EXTENSIONS.includes(path.extname(name).toLowerCase())) {
        allFiles.push(name);
      }
    }
  }
  return allFiles;
}

/**
 * Bulk upload images to Cloudinary
 */
async function uploadImages() {
  console.log('🚀 Starting Cloudinary Bulk Upload...');

  if (!NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.error('❌ Missing Cloudinary credentials in .env.local');
    process.exit(1);
  }

  const files = getFiles(BASE_DIR);
  console.log(`📂 Found ${files.length} images in ${BASE_DIR}\n`);

  const results = [];

  for (const filePath of files) {
    // Determine relative path from GymHub folder
    const relativePath = path.relative(BASE_DIR, filePath);
    const fileNameWithExt = path.basename(filePath);
    const fileName = path.parse(fileNameWithExt).name;

    // Construct folder path in Cloudinary
    // Example local: public/GymHub/trainers/male/trainer_01.png
    // Example Cloudinary Folder: GymHub/trainers/male
    const subFolder = path.dirname(relativePath).replace(/\\/g, '/');
    const folderPath = subFolder === '.' ? 'GymHub' : `GymHub/${subFolder}`;
    const publicId = fileName;

    try {
      console.log(`⬆️ Uploading: ${relativePath}...`);

      const result = await cloudinary.uploader.upload(filePath, {
        folder: folderPath,
        public_id: publicId,
        overwrite: true,
        resource_type: 'auto'
      });

      console.log(`✅ Success: ${result.secure_url}`);
      results.push({
        local: relativePath,
        remote: result.secure_url,
        publicId: result.public_id
      });
    } catch (error) {
      console.error(`❌ Failed to upload ${relativePath}:`, error.message);
    }
  }

  console.log('\n✨ Upload Complete!');
  console.log('-------------------');
  console.table(results.map(r => ({ File: r.local, URL: r.remote })));
}

uploadImages().catch(err => {
  console.error('💥 Fatal Error:', err);
  process.exit(1);
});
