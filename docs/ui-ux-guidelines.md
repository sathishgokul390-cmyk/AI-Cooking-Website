# UI/UX Guidelines — AI Cooking Platform

Design system and guidelines for consistent, premium user experience.

---

## Design Philosophy

**Premium Simplicity** — Elegant interfaces that are intuitive and delightful.

Core Principles:
1. **Clarity** — Information hierarchy is immediately apparent
2. **Consistency** — Unified design language across all pages
3. **Delight** — Smooth animations and micro-interactions
4. **Accessibility** — WCAG 2.1 AA compliant
5. **Performance** — Fast, responsive interactions

---

## Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Forest Green | `#6BA539` | Primary CTA, accents |
| Dark Green | `#4d8822` | Hover states, active |
| Cream | `#F9F7F4` | Light backgrounds |
| Dark BG | `#121413` | Dark mode background |

### Secondary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Success Green | `#10B981` | Success messages |
| Warning Yellow | `#F59E0B` | Warnings |
| Error Red | `#EF4444` | Errors |
| Info Blue | `#3B82F6` | Information |

### Neutral Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Gray 900 | `#111827` | Text, dark cards |
| Gray 500 | `#6B7280` | Secondary text |
| Gray 300 | `#D1D5DB` | Borders |
| Gray 100 | `#F3F4F6` | Light backgrounds |

---

## Typography

### Font Families

```css
/* Headings */
font-family: "Playfair Display", serif;

/* Body Text */
font-family: "Inter", sans-serif;
```

### Type Scale

| Level | Size | Weight | Line Height |
|-------|------|--------|-------------|
| H1 | 56px | 700 | 1.08 |
| H2 | 44px | 700 | 1.10 |
| H3 | 32px | 700 | 1.12 |
| H4 | 24px | 600 | 1.14 |
| Body | 16px | 400 | 1.6 |
| Small | 14px | 400 | 1.5 |
| Caption | 12px | 500 | 1.4 |

### Usage

```tsx
<h1>Your AI Chef in Your Kitchen</h1>     {/* H1 */}
<h2>Categories</h2>                        {/* H2 */}
<p className="text-base">Body text...</p>  {/* Body */}
```

---

## Components

### Buttons

#### Primary Button
```tsx
<button className="px-7 py-3.5 rounded-full text-white font-semibold text-[15px] bg-gradient-to-r from-[#6BA539] to-[#4d8822] shadow-lg hover:shadow-xl">
  Get Cooking
</button>
```

**States:**
- Default
- Hover (scale 1.03, enhanced shadow)
- Active (scale 0.97)
- Disabled (opacity 0.5)

#### Secondary Button
```tsx
<button className="px-6 py-3.5 rounded-full bg-white dark:bg-black/30 border border-black/10 dark:border-white/10 text-sm font-medium">
  Explore Recipes
</button>
```

### Cards

#### Recipe Card
```tsx
<div className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
  {/* Image */}
  <img src={recipe.image} className="w-full h-52 object-cover" />
  {/* Content */}
  <div className="p-4">
    <h3 className="font-bold text-base mb-3">{recipe.title}</h3>
    {/* Metadata */}
  </div>
</div>
```

#### Glass Card
```tsx
<div className="bg-white/90 dark:bg-[#1c2b1e]/90 backdrop-blur-md rounded-2xl border border-white/70 dark:border-white/10 p-5">
  {/* Content */}
</div>
```

### Forms

#### Input Field
```tsx
<div className="flex items-center gap-3 bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-full px-3 py-2">
  <Search size={16} className="text-gray-400" />
  <input
    placeholder="Search recipes..."
    className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
  />
  <button className="px-3 py-1.5 rounded-full bg-[#6BA539] text-white text-sm font-medium">
    Search
  </button>
</div>
```

---

## Spacing System

```
4px   — Extra small (xs)
8px   — Small (sm)
12px  — Small medium (smd)
16px  — Medium (md)
24px  — Large (lg)
32px  — Extra large (xl)
48px  — 2XL
64px  — 3XL
```

---

## Animations

### Entrance Animations

**Fade In + Slide Up:**
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
```

**Staggered List:**
```tsx
transition={{ delay: index * 0.1 }}
```

### Hover Animations

**Scale on Hover:**
```tsx
whileHover={{ scale: 1.03 }}
whileTap={{ scale: 0.97 }}
```

**Float Animation:**
```tsx
animate={{ y: [0, -10, 0] }}
transition={{ duration: 4.2, repeat: Infinity, repeatType: "reverse" }}
```

---

## Dark Mode

### Implementation
```tsx
<div className="dark:bg-[#121413] dark:text-white">
  {/* Content */}
</div>
```

### Color Adjustments

| Light | Dark |
|-------|------|
| `#F9F7F4` | `#121413` |
| `#FFFFFF` | `#111827` |
| `#111827` | `#F3F4F6` |
| `#6B7280` | `#9CA3AF` |

---

## Responsive Breakpoints

```
Mobile:      320px - 640px
Tablet:      641px - 1024px
Desktop:     1025px - 1440px
Wide:        1440px+
```

### Media Queries
```tsx
className="text-sm md:text-base lg:text-lg"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
```

---

## Accessibility

### Color Contrast
- Normal text: 4.5:1 ratio minimum
- Large text: 3:1 ratio minimum

### ARIA Labels
```tsx
<button aria-label="Get Cooking — generate a personalized recipe">
  Get Cooking
</button>

<input aria-label="Search recipes or ingredients" />
```

### Focus States
```tsx
className="focus:outline-none focus:ring-4 focus:ring-[#6BA539]/30"
```

---

## Page Layouts

### Hero Section
- Background image with gradient overlay
- Large headline (H1) with accent color
- Supporting subtitle
- Primary + secondary CTAs
- Social proof elements

### Category Grid
- 6 items per row (desktop)
- Card hover: translate up 8px, enhance shadow
- Circular images with rings

### Recipe Grid
- 4 items per row (desktop)
- 2 rows per row (tablet)
- 1 item per row (mobile)
- Like button on hover
- Rating and metadata at bottom

### Modals
- Backdrop blur (backdrop-blur-md)
- Center positioning
- Smooth entrance (scale + fade)
- Click outside to close

---

## Loading States

### Skeleton Screens
```tsx
<div className="bg-gray-200 dark:bg-gray-700 animate-pulse rounded h-12" />
```

### Spinners
```tsx
<div className="animate-spin rounded-full h-12 w-12 border-4 border-[#6BA539] border-t-transparent" />
```

---

## Micro-interactions

1. **Button Press** — Scale down briefly
2. **Hover** — Slight scale + shadow enhancement
3. **Loading** — Smooth spinner rotation
4. **Success** — Green checkmark with brief animation
5. **Error** — Red shake animation
6. **Toast** — Slide in from bottom, auto-dismiss after 3s

---

## Component Checklist

- [ ] All interactive elements have focus states
- [ ] Hover states provide clear feedback
- [ ] Loading states are always present
- [ ] Error states are clear and helpful
- [ ] Colors meet WCAG AA standards
- [ ] Typography hierarchy is clear
- [ ] Spacing is consistent
- [ ] Animations are smooth and purposeful
- [ ] Mobile-first approach applied
- [ ] Dark mode properly implemented

---

## References

- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Lucide Icons: https://lucide.dev
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
