// Cloudinary Configuration
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dfq1xxerr';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

interface CloudinaryOptions {
  width?: number;
  height?: number;
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  crop?: 'fill' | 'fit' | 'scale' | 'thumb';
  gravity?: 'face' | 'center' | 'auto';
}

/**
 * Generate an optimized Cloudinary URL from an image path.
 *
 * @param path - The Cloudinary public ID (e.g. "GymHub/trainers/male/trainer_01")
 * @param options - Transformation options for width, height, quality, etc.
 * @returns Fully qualified Cloudinary URL with transformations
 */
export function getCloudinaryUrl(path: string, options: CloudinaryOptions = {}): string {
  // Support for external URLs
  if (path.startsWith('http')) {
    return path;
  }

  const isLocal = process.env.NEXT_PUBLIC_USE_LOCAL_ASSETS === 'true' || process.env.NODE_ENV === 'development';

  if (isLocal) {
    // Local fallback: Use provided path, assuming they are in /public/
    // Hero, Blog, and About assets are usually .jpg, others are .png
    const isJpg = path.includes('hero') || path.includes('blog') || path.includes('about');
    const extension = isJpg ? 'jpg' : 'png';
    return `/${path}.${extension}`;
  }

  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    gravity = 'auto',
  } = options;

  const transforms: string[] = [];

  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  transforms.push(`q_${quality}`);
  transforms.push(`f_${format}`);
  if (crop) transforms.push(`c_${crop}`);
  if (gravity) transforms.push(`g_${gravity}`);

  const transformString = transforms.join(',');

  return `${BASE_URL}/${transformString}/${path}`;
}

/**
 * Get theme-aware hero image path.
 */
export function getHeroImage(mode: 'male' | 'female'): string {
  return `GymHub/hero/hero-${mode === 'male' ? 'men' : 'women'}`;
}

/**
 * Get trainer image path by ID and content mode.
 */
export function getTrainerImage(trainerId: string, contentMode: 'male' | 'female'): string {
  return `GymHub/trainers/${contentMode}/${trainerId}`;
}

/**
 * Get program image path.
 */
export function getProgramImage(imagePath: string): string {
  return imagePath;
}
