# ExpertiseHero GTM Engine Visualization

A high-fidelity, production-ready React component extracted from the ExpertiseHero landing page. It features the "GTM Core Tile"—an animated hub-and-spoke visualization displaying core growth metrics with satellite nodes.

## Tech Stack
*   **React 18+**
*   **TypeScript**
*   **Tailwind CSS** (Styling)
*   **Framer Motion** (Orchestration & Animation)
*   **Lucide React** (Icons)

## Components
1.  **GtmCoreTile.tsx**: The standalone, animated 600x600 (responsive) component. It features SVG path drawing, floating nodes with spring physics, and glowing pulse effects.
2.  **App.tsx**: The full landing page demonstrating the tile in its intended context.

## Usage
Import the component:
```tsx
import GtmCoreTile from './components/GtmCoreTile';

function MyPage() {
  return (
    <div className="w-[800px] h-[600px]">
      <GtmCoreTile />
    </div>
  );
}
```
The component is responsive but designed to look best in a container with an aspect ratio close to square (e.g., 600x600 or responsive grid columns).

## Color Palette

The application uses a strict high-contrast dark mode palette.

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Deep Navy (Page)** | `#020410` | Main application background |
| **Midnight (Tile)** | `#040715` | Component container background |
| **Card Surface** | `#0F1528` | Inner cards and floating elements |
| **Stroke / Border** | `#1E2745` | Separators, outlines, and rings |
| **Electric Cyan** | `#00F0FF` | Primary Accent (Growth, Design, Scale) |
| **Sunset Orange** | `#FF5E00` | Secondary Accent (Efficiency, Audit) |
| **Signal Gold** | `#FFD700` | Highlight Accent (ROI, Enablement) |
| **Slate Blue** | `#64748B` | Secondary text, labels, muted elements |
| **White** | `#FFFFFF` | Primary headings and values |