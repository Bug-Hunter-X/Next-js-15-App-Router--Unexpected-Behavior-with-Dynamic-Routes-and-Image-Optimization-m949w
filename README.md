# Next.js 15 App Router Bug: Dynamic Routes and Image Optimization

This repository demonstrates a bug encountered in Next.js 15's App Router when using dynamic routes in conjunction with image optimization.  The issue results in unexpected behavior, potentially rendering issues or incorrect image display. 

## Bug Description

The bug involves a combination of dynamic routes and image optimization within the Next.js 15 app directory. When a dynamic route parameter is used to generate an image path, the image optimization process might fail or produce unexpected results leading to broken images or incorrect image display on the client side. This problem is particularly noticeable in scenarios that involve complex route structures or deeply nested image paths.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Navigate to a dynamic route (e.g. `/product/[slug]`) where the image optimization is used. Note any unexpected behavior or missing/broken images.

## Expected Behavior

Images should render correctly regardless of the dynamic route parameter.  Image optimization should function as expected, serving correctly sized and formatted images.

## Actual Behavior

Images either fail to load, display incorrectly (e.g., wrong size or broken image), or show completely unexpected behavior related to dynamic route segments.

## Solution

A solution (provided in `bugSolution.js`) might involve adjustments to the image optimization configuration or resolving inconsistencies between the dynamic route parameter usage and the way image paths are constructed within the application. Refer to `bugSolution.js` for a potential fix. 