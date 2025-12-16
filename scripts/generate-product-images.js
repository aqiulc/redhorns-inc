#!/usr/bin/env node

/**
 * RedHorns Inc. - Product Image Generator
 * Generates branded SVG placeholder images for products
 * Part of the automated CCO workflow
 */

const fs = require('fs');
const path = require('path');

// Brand colors
const COLORS = {
  primary: '#DC143C',      // Crimson red
  secondary: '#1a2332',    // Dark blue
  light: '#f8f9fa',
  dark: '#0a0a0a',
  gray: '#6c757d'
};

/**
 * Generate SVG for thumbnail (800x600) - Abstract geometric design
 */
function generateThumbnail(productName, category, tagline) {
  // Generate unique pattern based on product name
  const hash = productName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const rotation = (hash % 360);
  const circleX = 200 + (hash % 400);
  const circleY = 150 + (hash % 300);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.secondary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:#16213e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.dark};stop-opacity:1" />
    </linearGradient>
    <!-- Noise texture -->
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
      <feColorMatrix values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 0.03 0"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#bgGradient)"/>
  <rect width="800" height="600" filter="url(#noise)" opacity="0.5"/>

  <!-- Abstract geometric shapes -->
  <circle cx="${circleX}" cy="${circleY}" r="180" fill="${COLORS.primary}" opacity="0.15"/>
  <circle cx="${800 - circleX}" cy="${600 - circleY}" r="220" fill="${COLORS.primary}" opacity="0.08"/>

  <!-- Rotated rectangles for visual interest -->
  <g transform="translate(400, 300) rotate(${rotation})">
    <rect x="-300" y="-2" width="600" height="4" fill="${COLORS.primary}" opacity="0.3"/>
    <rect x="-250" y="-40" width="500" height="2" fill="${COLORS.primary}" opacity="0.2"/>
  </g>

  <!-- Large devil horns icon (centered, abstract) -->
  <g transform="translate(400, 280) scale(3)">
    <path d="M -25,-30 Q -35,-50 -30,-65 Q -28,-70 -22,-60 L -18,-35 Z" fill="${COLORS.primary}" opacity="0.4"/>
    <path d="M 25,-30 Q 35,-50 30,-65 Q 28,-70 22,-60 L 18,-35 Z" fill="${COLORS.primary}" opacity="0.4"/>
    <circle cx="0" cy="-20" r="28" fill="${COLORS.light}" opacity="0.05" stroke="${COLORS.primary}" stroke-width="1" stroke-opacity="0.2"/>
  </g>

  <!-- Subtle branding -->
  <text x="400" y="560" font-family="Arial, sans-serif" font-size="11" font-weight="600" fill="${COLORS.light}" text-anchor="middle" opacity="0.3" letter-spacing="2">REDHORNS</text>
</svg>`;
}

/**
 * Generate SVG for hero image (1200x600) - Abstract geometric design
 */
function generateHero(productName, category, tagline) {
  // Generate unique pattern based on product name (different positions than thumbnail)
  const hash = productName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const rotation1 = (hash % 360);
  const rotation2 = ((hash * 2) % 360);
  const circle1X = 150 + (hash % 300);
  const circle1Y = 100 + (hash % 200);
  const circle2X = 900 + (hash % 250);
  const circle2Y = 400 + (hash % 150);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.secondary};stop-opacity:1" />
      <stop offset="40%" style="stop-color:#16213e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.dark};stop-opacity:1" />
    </linearGradient>
    <!-- Grid pattern -->
    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="${COLORS.light}" stroke-width="0.5" opacity="0.03"/>
    </pattern>
    <!-- Noise texture -->
    <filter id="heroNoise">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
      <feColorMatrix values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 0.02 0"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="600" fill="url(#heroBg)"/>
  <rect width="1200" height="600" fill="url(#grid)"/>
  <rect width="1200" height="600" filter="url(#heroNoise)" opacity="0.6"/>

  <!-- Abstract geometric shapes - positioned uniquely per product -->
  <circle cx="${circle1X}" cy="${circle1Y}" r="200" fill="${COLORS.primary}" opacity="0.12"/>
  <circle cx="${circle2X}" cy="${circle2Y}" r="250" fill="${COLORS.primary}" opacity="0.08"/>
  <circle cx="${1200 - circle1X}" cy="${600 - circle1Y}" r="180" fill="${COLORS.primary}" opacity="0.06"/>

  <!-- Rotated lines for visual interest -->
  <g transform="translate(600, 300) rotate(${rotation1})">
    <rect x="-500" y="-3" width="1000" height="6" fill="${COLORS.primary}" opacity="0.25"/>
    <rect x="-450" y="-50" width="900" height="3" fill="${COLORS.primary}" opacity="0.15"/>
    <rect x="-400" y="45" width="800" height="2" fill="${COLORS.primary}" opacity="0.1"/>
  </g>

  <!-- Secondary rotation layer -->
  <g transform="translate(300, 300) rotate(${rotation2})">
    <rect x="-200" y="-1" width="400" height="2" fill="${COLORS.light}" opacity="0.08"/>
  </g>

  <!-- Large devil horns icon (scaled up, centered) -->
  <g transform="translate(600, 300) scale(4.5)">
    <path d="M -25,-30 Q -35,-50 -30,-65 Q -28,-70 -22,-60 L -18,-35 Z" fill="${COLORS.primary}" opacity="0.3"/>
    <path d="M 25,-30 Q 35,-50 30,-65 Q 28,-70 22,-60 L 18,-35 Z" fill="${COLORS.primary}" opacity="0.3"/>
    <circle cx="0" cy="-20" r="32" fill="none" stroke="${COLORS.primary}" stroke-width="1.5" stroke-opacity="0.15"/>
  </g>

  <!-- Subtle branding -->
  <text x="1170" y="585" font-family="Arial, sans-serif" font-size="12" font-weight="600" fill="${COLORS.light}" text-anchor="end" opacity="0.25" letter-spacing="3">REDHORNS</text>
</svg>`;
}

/**
 * Convert SVG to data and save as file
 */
function saveSVGAsFile(svgContent, outputPath) {
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Save as SVG (can be used directly or converted to PNG/JPG later)
  fs.writeFileSync(outputPath, svgContent, 'utf8');
  console.log(`✓ Generated: ${outputPath}`);
}

/**
 * Generate all images for a product
 */
function generateProductImages(productSlug, productName, category, tagline) {
  const imageDir = path.join(__dirname, '..', 'website', 'static', 'images', 'work');

  // Generate thumbnail
  const thumbSVG = generateThumbnail(productName, category, tagline);
  saveSVGAsFile(thumbSVG, path.join(imageDir, `${productSlug}-thumb.svg`));

  // Generate hero
  const heroSVG = generateHero(productName, category, tagline);
  saveSVGAsFile(heroSVG, path.join(imageDir, `${productSlug}-hero.svg`));

  return {
    thumbnail: `/images/work/${productSlug}-thumb.svg`,
    hero: `/images/work/${productSlug}-hero.svg`
  };
}

/**
 * Main function - can be called from CLI or imported
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length < 4) {
    console.log('Usage: node generate-product-images.js <slug> <name> <category> <tagline>');
    console.log('Example: node generate-product-images.js bodyfutures "BodyFutures" "Mortality Finance" "Your future has value"');
    process.exit(1);
  }

  const [slug, name, category, tagline] = args;
  const images = generateProductImages(slug, name, category, tagline);

  console.log('\n✓ All images generated successfully!');
  console.log('Image paths:');
  console.log(`  - Thumbnail: ${images.thumbnail}`);
  console.log(`  - Hero: ${images.hero}`);
}

// Export for use in other scripts
module.exports = { generateProductImages };

// Run if called directly
if (require.main === module) {
  main();
}
