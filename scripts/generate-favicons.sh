#!/bin/bash

# Convert SVG to various PNG sizes
convert public/naturatua-favicon.svg -resize 16x16 public/favicon-16x16.png
convert public/naturatua-favicon.svg -resize 32x32 public/favicon-32x32.png
convert public/naturatua-favicon.svg -resize 180x180 public/apple-touch-icon.png
convert public/naturatua-favicon.svg -resize 192x192 public/android-chrome-192x192.png
convert public/naturatua-favicon.svg -resize 512x512 public/android-chrome-512x512.png

# Create ICO file
convert public/naturatua-favicon.svg -resize 256x256 public/favicon.ico 