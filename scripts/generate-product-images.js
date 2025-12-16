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
 * Generate SVG for thumbnail (800x600)
 */
function generateThumbnail(productName, category, tagline) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background gradient -->
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.secondary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.dark};stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${COLORS.primary};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${COLORS.primary};stop-opacity:0.4" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#bgGradient)"/>

  <!-- Accent bar -->
  <rect x="0" y="500" width="800" height="100" fill="url(#accentGradient)"/>

  <!-- RedHorns logo icon (devil horns) -->
  <g transform="translate(400, 250)">
    <!-- Left horn -->
    <path d="M -40,-60 Q -50,-80 -40,-100 L -30,-70 Z" fill="${COLORS.primary}"/>
    <!-- Right horn -->
    <path d="M 40,-60 Q 50,-80 40,-100 L 30,-70 Z" fill="${COLORS.primary}"/>
    <!-- Head circle -->
    <circle cx="0" cy="-40" r="35" fill="${COLORS.light}" opacity="0.1"/>
  </g>

  <!-- Category badge -->
  <rect x="30" y="30" width="${category.length * 12 + 40}" height="35" rx="17.5" fill="${COLORS.primary}"/>
  <text x="50" y="52" font-family="Arial, sans-serif" font-size="16" font-weight="600" fill="${COLORS.light}" text-anchor="start">${category.toUpperCase()}</text>

  <!-- Product name -->
  <text x="400" y="360" font-family="Georgia, serif" font-size="56" font-weight="700" fill="${COLORS.light}" text-anchor="middle">${productName}</text>

  <!-- Tagline -->
  <text x="400" y="405" font-family="Arial, sans-serif" font-size="22" font-style="italic" fill="${COLORS.gray}" text-anchor="middle" opacity="0.9">${tagline}</text>

  <!-- RedHorns Inc branding -->
  <text x="770" y="585" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="${COLORS.light}" text-anchor="end" opacity="0.6">REDHORNS INC.</text>
</svg>`;
}

/**
 * Generate SVG for hero image (1200x600)
 */
function generateHero(productName, category, tagline) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background gradient -->
  <defs>
    <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.secondary};stop-opacity:1" />
      <stop offset="50%" style="stop-color:#16213e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.dark};stop-opacity:1" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${COLORS.light}" stroke-width="0.5" opacity="0.05"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="600" fill="url(#heroBg)"/>
  <rect width="1200" height="600" fill="url(#grid)"/>

  <!-- Decorative elements -->
  <circle cx="100" cy="100" r="150" fill="${COLORS.primary}" opacity="0.1"/>
  <circle cx="1100" cy="500" r="200" fill="${COLORS.primary}" opacity="0.08"/>

  <!-- Content container -->
  <rect x="80" y="150" width="1040" height="300" fill="${COLORS.dark}" opacity="0.3" rx="12"/>

  <!-- Category badge -->
  <rect x="100" y="180" width="${category.length * 14 + 50}" height="40" rx="20" fill="${COLORS.primary}"/>
  <text x="125" y="207" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="${COLORS.light}" text-anchor="start">${category.toUpperCase()}</text>

  <!-- Product name -->
  <text x="600" y="310" font-family="Georgia, serif" font-size="72" font-weight="700" fill="${COLORS.light}" text-anchor="middle">${productName}</text>

  <!-- Tagline -->
  <text x="600" y="370" font-family="Arial, sans-serif" font-size="28" font-style="italic" fill="${COLORS.gray}" text-anchor="middle" opacity="0.95">${tagline}</text>

  <!-- Bottom branding bar -->
  <rect y="540" width="1200" height="60" fill="${COLORS.primary}" opacity="0.15"/>
  <text x="1150" y="580" font-family="Arial, sans-serif" font-size="16" font-weight="600" fill="${COLORS.light}" text-anchor="end" opacity="0.7">REDHORNS INCORPORATED</text>
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
