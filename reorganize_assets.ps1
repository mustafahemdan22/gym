$source = "d:\next-react\gym\public\gym"
$targetBase = "d:\next-react\gym\public\GymHub"

# Create directories
$dirs = @(
    "trainers\male",
    "trainers\female",
    "programs\strength",
    "programs\cardio",
    "hero",
    "testimonials"
)

foreach ($dir in $dirs) {
    $path = Join-Path $targetBase $dir
    if (!(Test-Path $path)) {
        New-Item -ItemType Directory -Path $path -Force
    }
}

# Mapping Logic
# Hero
$heroes = Get-ChildItem -Path $source -Filter "hero-image-premium-gym-interior-wide-cinematic-sho*"
$i = 1
foreach ($f in $heroes) {
    Move-Item $f.FullName (Join-Path $targetBase "hero\hero_$( "{0:D2}" -f $i ).png") -Force
    $i++
}

# Testimonials
$tests = Get-ChildItem -Path $source -Filter "close-up-faces-happy-gym-clients-natural-lighting*"
$i = 1
foreach ($f in $tests) {
    Move-Item $f.FullName (Join-Path $targetBase "testimonials\user_$( "{0:D2}" -f $i ).png") -Force
    $i++
}

# Trainers Male (No index in name)
$males = Get-ChildItem -Path $source -Filter "enerate-high-quality--realistic-gym-images-for-a-p.*"
$i = 1
foreach ($f in $males) {
    Move-Item $f.FullName (Join-Path $targetBase "trainers\male\trainer_$( "{0:D2}" -f $i ).png") -Force
    $i++
}

# Trainers Female (Index 1)
$females = Get-ChildItem -Path $source -Filter "enerate-high-quality--realistic-gym-images-for-a-p (1)*"
$i = 1
foreach ($f in $females) {
    Move-Item $f.FullName (Join-Path $targetBase "trainers\female\trainer_$( "{0:D2}" -f $i ).png") -Force
    $i++
}

# Programs Strength (Index 2)
$strength = Get-ChildItem -Path $source -Filter "enerate-high-quality--realistic-gym-images-for-a-p (2)*"
$i = 1
foreach ($f in $strength) {
    Move-Item $f.FullName (Join-Path $targetBase "programs\strength\program_strength_$( "{0:D2}" -f $i ).png") -Force
    $i++
}

# Programs Cardio (Index 3)
$cardio = Get-ChildItem -Path $source -Filter "enerate-high-quality--realistic-gym-images-for-a-p (3)*"
$i = 1
foreach ($f in $cardio) {
    Move-Item $f.FullName (Join-Path $targetBase "programs\cardio\program_cardio_$( "{0:D2}" -f $i ).png") -Force
    $i++
}

Remove-Item $source -Recurse -Force
