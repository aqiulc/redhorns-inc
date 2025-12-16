# RedHorns Inc. - Image Generation System

## Overview

Automated product image generation system that creates branded SVG placeholder images for products. This is part of the CCO (Chief Content Officer) workflow and enables full automation of product launches without manual image creation.

## Features

- **100% Free**: No API costs, no external dependencies
- **Branded Design**: Consistent RedHorns visual identity
- **Multiple Formats**: Thumbnail (800x600) and Hero (1200x600) images
- **SVG Format**: Scalable, small file sizes, perfect for web
- **Automated**: Integrated into CCO agent workflow

## Usage

### Command Line

```bash
node scripts/generate-product-images.js <slug> <name> <category> <tagline>
```

**Example:**
```bash
node scripts/generate-product-images.js bodyfutures "BodyFutures" "Mortality Finance" "Your future has value. Unlock it today."
```

### Parameters

- **slug**: URL-friendly product identifier (e.g., `bodyfutures`, `classworkpro`)
- **name**: Product display name (e.g., "BodyFutures")
- **category**: Product category (e.g., "Mortality Finance")
- **tagline**: Product tagline/slogan

### Output

The script generates two SVG files:
- `website/static/images/work/{slug}-thumb.svg` - Thumbnail for work grid (800x600)
- `website/static/images/work/{slug}-hero.svg` - Hero image for product pages (1200x600)

## Integration with CCO Workflow

The image generation is part of the automated CCO workflow:

1. **CEO approves** product (`projects/{product}/ceo/approval.md`)
2. **CCO reads** all department outputs
3. **CCO generates** product images using this script
4. **CCO creates** all content (press release, blog post, website)
5. **CCO updates** product markdown files with image paths
6. **CCO publishes** everything in `PUBLISH_READY.md`

## Design Specifications

### Color Palette
- **Primary Red**: `#DC143C` (Crimson)
- **Secondary Dark**: `#1a2332` (Dark Navy)
- **Light**: `#f8f9fa`
- **Dark**: `#0a0a0a`
- **Gray**: `#6c757d`

### Thumbnail Design (800x600)
- Dark gradient background (secondary → dark)
- Red accent bar at bottom
- RedHorns devil horn logo icon
- Category badge (red pill)
- Large product name (centered)
- Tagline below name
- "REDHORNS INC." branding

### Hero Design (1200x600)
- Wider dark gradient background
- Grid pattern overlay (subtle)
- Decorative circles (red, faded)
- Dark semi-transparent content container
- Category badge
- Large product name
- Tagline
- Bottom branding bar

## Examples

### Generated for BodyFutures
```bash
✓ Generated: /website/static/images/work/bodyfutures-thumb.svg
✓ Generated: /website/static/images/work/bodyfutures-hero.svg

Image paths:
  - Thumbnail: /images/work/bodyfutures-thumb.svg
  - Hero: /images/work/bodyfutures-hero.svg
```

### Generated for ClassWork Pro
```bash
✓ Generated: /website/static/images/work/classworkpro-thumb.svg
✓ Generated: /website/static/images/work/classworkpro-hero.svg

Image paths:
  - Thumbnail: /images/work/classworkpro-thumb.svg
  - Hero: /images/work/classworkpro-hero.svg
```

## Why SVG?

1. **Scalable**: Perfect quality at any size
2. **Small**: ~2-3KB per image vs 50-500KB for JPG/PNG
3. **Fast Loading**: Minimal impact on page performance
4. **No Dependencies**: Pure text files, no external tools needed
5. **Editable**: Easy to modify colors, text, layout
6. **Browser Support**: Works in all modern browsers

## Future Enhancements

Potential improvements (if budget becomes available):
- Add AI image generation option (DALL-E, Stable Diffusion)
- Generate team member photos
- Create animated SVGs
- Add more design variations
- Support for custom brand colors per product

## Troubleshooting

### Images not showing on website?
- Check file paths in product markdown frontmatter
- Ensure SVG files were generated in `website/static/images/work/`
- Verify Hugo server is running and picked up new files

### Script won't run?
- Ensure Node.js is installed (`node --version`)
- Run from project root directory
- Check file permissions if needed

### Need to regenerate images?
Just run the script again - it will overwrite existing files.

## Notes

This system is designed for the RedHorns satirical website. All images use placeholder designs suitable for a parody/satire project. For production use with real products, consider upgrading to AI-generated or professional photography.

---

**Part of RedHorns Inc. Full Automation Pipeline**
*Because even corporate satire should have proper DevOps.*
