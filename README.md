Welcome to my [Next.js](https://nextjs.org/) DnD Character Sheet.

## See the deployment here:

[Yong Character Sheet on Vercel](https://yong-character-sheet.vercel.app/)

## Features

### Accessibility
* Readex google font for dislexia
* Document title is unique to each page and present (Next JS makes this tricky)
* Font size is large enough to read more easily
* Skip to content link in header for easier screen reader navigation
* Pages use landmarks: header (banner), main, and footer for easier navigation with screen reader
* Headings are in order for easier navigation with screen reader
* Colors that pass WebAIM contrast minimums
* For users who Prefer reduced motion, animations and transitions are turned off
* Aria-live region in dice roll function so the roll is updated for the screen reader
* Open in new tab icon accompanies links that take user to a new site

### Usability 
* User preferences for light or dark mode
* Responsive design for all devices
* Table of contents on Spells page for easier navigation 
* Back to top button for easier spell navigation

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.