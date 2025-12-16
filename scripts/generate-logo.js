#!/usr/bin/env node

/**
 * RedHorns Inc. - Logo Generator
 * Generates branded SVG logos for header and footer
 */

const fs = require('fs');
const path = require('path');

// Brand colors
const COLORS = {
  primary: '#DC143C',      // Crimson red
  secondary: '#1a2332',    // Dark blue
  white: '#FFFFFF',
  dark: '#1a1a1a'
};

/**
 * Generate dark logo for header (red icon, dark text)
 */
function generateDarkLogo() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="240" height="70" viewBox="0 0 240 70" xmlns="http://www.w3.org/2000/svg">
  <!-- Devil horns icon -->
  <g transform="translate(35, 40)">
    <!-- Left horn -->
    <path d="M -15,-20 Q -20,-30 -18,-35 Q -17,-38 -13,-30 L -11,-20 Z"
          fill="${COLORS.primary}"
          stroke="${COLORS.primary}"
          stroke-width="0.5"/>

    <!-- Right horn -->
    <path d="M 15,-20 Q 20,-30 18,-35 Q 17,-38 13,-30 L 11,-20 Z"
          fill="${COLORS.primary}"
          stroke="${COLORS.primary}"
          stroke-width="0.5"/>

    <!-- Head/circle -->
    <circle cx="0" cy="-10" r="18"
            fill="none"
            stroke="${COLORS.primary}"
            stroke-width="2.5"/>

    <!-- Inner accent -->
    <circle cx="0" cy="-10" r="12"
            fill="none"
            stroke="${COLORS.primary}"
            stroke-width="1"
            opacity="0.3"/>
  </g>

  <!-- Company name -->
  <text x="75" y="43"
        font-family="Arial, Helvetica, sans-serif"
        font-size="24"
        font-weight="700"
        fill="${COLORS.dark}"
        letter-spacing="-0.5">RedHorns</text>

  <text x="189" y="43"
        font-family="Arial, Helvetica, sans-serif"
        font-size="16"
        font-weight="400"
        fill="${COLORS.dark}"
        opacity="0.7">Inc.</text>
</svg>`;
}

/**
 * Generate white logo for footer (white icon and text)
 */
function generateWhiteLogo() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="240" height="70" viewBox="0 0 240 70" xmlns="http://www.w3.org/2000/svg">
  <!-- Devil horns icon -->
  <g transform="translate(35, 40)">
    <!-- Left horn -->
    <path d="M -15,-20 Q -20,-30 -18,-35 Q -17,-38 -13,-30 L -11,-20 Z"
          fill="${COLORS.white}"
          stroke="${COLORS.white}"
          stroke-width="0.5"/>

    <!-- Right horn -->
    <path d="M 15,-20 Q 20,-30 18,-35 Q 17,-38 13,-30 L 11,-20 Z"
          fill="${COLORS.white}"
          stroke="${COLORS.white}"
          stroke-width="0.5"/>

    <!-- Head/circle -->
    <circle cx="0" cy="-10" r="18"
            fill="none"
            stroke="${COLORS.white}"
            stroke-width="2.5"/>

    <!-- Inner accent -->
    <circle cx="0" cy="-10" r="12"
            fill="none"
            stroke="${COLORS.white}"
            stroke-width="1"
            opacity="0.3"/>
  </g>

  <!-- Company name -->
  <text x="75" y="43"
        font-family="Arial, Helvetica, sans-serif"
        font-size="24"
        font-weight="700"
        fill="${COLORS.white}"
        letter-spacing="-0.5">RedHorns</text>

  <text x="189" y="43"
        font-family="Arial, Helvetica, sans-serif"
        font-size="16"
        font-weight="400"
        fill="${COLORS.white}"
        opacity="0.8">Inc.</text>
</svg>`;
}

/**
 * Save SVG to file
 */
function saveSVG(content, filename) {
  const outputPath = path.join(__dirname, '..', 'website', 'static', 'images', 'general', filename);
  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`✓ Generated: ${filename}`);
}

/**
 * Main function
 */
function main() {
  console.log('Generating RedHorns Inc. logos...\n');

  // Generate both versions
  const darkLogo = generateDarkLogo();
  const whiteLogo = generateWhiteLogo();

  // Save files
  saveSVG(darkLogo, 'logo.svg');
  saveSVG(whiteLogo, 'logo-white.svg');

  console.log('\n✓ All logos generated successfully!');
  console.log('Files created:');
  console.log('  - website/static/images/general/logo.svg (for header)');
  console.log('  - website/static/images/general/logo-white.svg (for footer)');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateDarkLogo, generateWhiteLogo };
