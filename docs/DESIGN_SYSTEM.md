# Linear-Style Design System

This website follows a "Linear-style" aesthetic inspired by modern dev tools and SaaS products.

## 🎨 Color Palette

### Background Colors
- **Primary**: `#08090A` - Deepest charcoal (nearly black)
- **Secondary**: `#0D0E10` - Slightly lighter for cards
- **Tertiary**: `#151618` - For subtle variations

### Text Colors
- **Primary**: `#E6E6E6` - Main text
- **Secondary**: `#A0A0A0` - Subdued text
- **Tertiary**: `#6B6B6B` - Muted labels

### Accent Colors
- **Purple**: `#8B5CF6` - Primary accent
- **Blue**: `#3B82F6` - Secondary accent
- **Cyan**: `#22D3EE` - Tertiary accent

### Glow Effects
- **Purple Glow**: `rgba(139, 92, 246, 0.3)`
- **Blue Glow**: `rgba(59, 130, 246, 0.3)`
- **Cyan Glow**: `rgba(34, 211, 238, 0.3)`

### Borders
- **Subtle**: `rgba(255, 255, 255, 0.08)` - Default borders
- **Hover**: `rgba(255, 255, 255, 0.2)` - Lit-up borders

## 📐 Typography

### Font Families
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Usage
- **Sans-serif (Inter)**: Body text, headings, paragraphs
- **Monospace (JetBrains Mono)**: Labels, code blocks, technical data, small caps

### Font Weights
- Regular (400) - Body text
- Medium (500) - Subheadings
- Semibold (600) - Section labels
- Bold (700) - Main headings

## ✨ Design Elements

### 1. Glassmorphism Navigation
```css
background: rgba(8, 9, 10, 0.8);
backdrop-filter: blur(20px) saturate(180%);
```
- Translucent background
- Blur effect for depth
- Subtle border at bottom

### 2. Radial Gradient Glows
- Positioned behind key sections
- Low opacity (0.1-0.15) for subtlety
- Purple, blue, or cyan based on section
- Creates depth and visual interest

### 3. Border Shine Effects
All cards and elements use:
- Default: Extremely subtle border (`rgba(255,255,255,0.08)`)
- Hover: Border "lights up" with gradient
- Implemented using `::before` pseudo-element with `mask-composite`

### 4. Code Block Visualization
- IDE-style window with traffic light dots
- Syntax highlighting with theme colors
- Smooth line-by-line animation on load
- Hover effect with gradient border glow

## 🎭 Animations

### Timing Function
```css
cubic-bezier(0.4, 0, 0.2, 1)
```
Smooth, snappy transitions that feel native to the design.

### Stagger Effect
Elements animate in sequence with 100ms delays:
- Timeline items
- Skill cards
- Code lines

### Hover States
- Transform: `translateY(-4px)` for cards
- Border color transition
- Gradient glow appears on hover
- All transitions: 0.3s with cubic-bezier easing

## 📱 Responsive Behavior

### Breakpoints
- **Desktop**: > 1024px - Full layout
- **Tablet**: 768px - 1024px - Adjusted grid
- **Mobile**: < 768px - Single column, hamburger menu

### Mobile Optimizations
- Glassmorphism menu slides in from left
- Code block becomes full width
- Hero section stacks vertically
- Timeline maintains left alignment

## 🧩 Component Patterns

### Card Pattern
```css
background: var(--bg-secondary);
border: 1px solid var(--border-subtle);
border-radius: 12px;
```
- Consistent rounded corners (12px)
- Subtle border
- Hover state with border glow
- Transform on hover for depth

### Section Pattern
```css
<span class="section-label">LABEL</span>
<h2 class="section-title">Section Title</h2>
```
- Monospace uppercase label
- Large title below
- Consistent spacing

### Button Pattern
- Primary: Gradient background with glow
- Secondary: Transparent with border
- Both have hover transforms and effects

## 🎯 Key Principles

1. **Subtlety First**: Effects should enhance, not distract
2. **Depth Through Layers**: Use glows, borders, and shadows
3. **Consistent Motion**: Same timing and easing everywhere
4. **Monospace for Tech**: Use JetBrains Mono for technical elements
5. **Gradient Accents**: Purple → Blue → Cyan gradient theme
6. **Dark Base**: Never pure black, always subtle gray
7. **Shine on Interaction**: Borders light up on hover

## 💡 Inspiration

This design draws inspiration from:
- **Linear**: Subtle glows, glassmorphism, dark theme
- **DevTools**: Code block aesthetics, monospace labels
- **Modern SaaS**: Clean layouts, smooth animations
- **Arc Browser**: Border shine effects, subtle gradients

## 🛠️ Technical Implementation

### Glassmorphism
Uses `backdrop-filter` for blur effect (Safari compatible with `-webkit-` prefix)

### Border Glow Effect
Uses `mask-composite` to create gradient border on hover:
```css
.element::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(...);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
}
```

### Staggered Animations
Implemented with Intersection Observer API and CSS transitions:
- Elements start hidden
- Observer adds `.visible` class when in viewport
- Delays applied via setTimeout for stagger

## 🎨 Color Usage Guide

| Element | Background | Text | Border | Accent |
|---------|-----------|------|--------|--------|
| Body | `#08090A` | `#E6E6E6` | - | - |
| Cards | `#0D0E10` | `#A0A0A0` | `rgba(255,255,255,0.08)` | Purple |
| Code Block | `#0D0E10` | `#A0A0A0` | `rgba(255,255,255,0.08)` | Cyan |
| Labels | - | `#22D3EE` | - | - |
| Buttons | Gradient | White | - | Purple/Blue |

---

**Design System Version**: 1.0  
**Last Updated**: November 2025  
**Built for**: Vino Duraisamy's Portfolio

