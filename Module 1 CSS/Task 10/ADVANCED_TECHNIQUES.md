# Advanced Responsive Design Techniques

This document provides additional advanced responsive design patterns and techniques beyond the main project.

## 🎯 Advanced Responsive Strategies

### 1. **Container Queries (Future Standard)**
```css
/* Respond to container size, not viewport */
@container (min-width: 400px) {
    .service-card {
        padding: 2rem;
    }
}

@container (min-width: 700px) {
    .service-card {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

### 2. **Aspect Ratio for Images**
```css
/* Maintain aspect ratio for images and videos */
.portfolio-item {
    aspect-ratio: 16 / 9;
    overflow: hidden;
}

.portfolio-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

### 3. **Fluid Typography (Scale with Viewport)**
```css
/* Font size scales between 16px (320px) and 24px (1280px) */
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
}

h2 {
    font-size: clamp(1.25rem, 4vw, 2.5rem);
}

p {
    font-size: clamp(1rem, 2vw, 1.25rem);
}
```

### 4. **Responsive Padding with clamp()**
```css
/* Padding scales automatically */
.section {
    padding: clamp(1rem, 5vw, 3rem) 1rem;
}

.container {
    padding: clamp(1rem, 10vw, 4rem);
}
```

### 5. **Mobile Menu Toggle (CSS-only)**
```html
<!-- HTML -->
<input type="checkbox" id="menu-toggle">
<label for="menu-toggle">☰ Menu</label>
<nav class="nav">
    <!-- navigation items -->
</nav>
```

```css
/* CSS */
#menu-toggle {
    display: none;
}

.nav {
    display: flex;
    flex-direction: column;
}

/* Show menu toggle button on mobile */
@media (max-width: 767px) {
    label[for="menu-toggle"] {
        display: block;
        cursor: pointer;
        padding: 1rem;
    }
    
    /* Hide nav by default */
    #menu-toggle:not(:checked) ~ .nav {
        display: none;
    }
}
```

## 📐 Responsive Grid Patterns

### **Auto-fit Grid (Auto-responsive)**
```css
/* Automatically adjust columns based on available space */
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}
```

### **Auto-fill Grid**
```css
.auto-fill-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
}
```

### **Responsive Grid with Minmax**
```css
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(
        auto-fit,
        minmax(min(100%, 300px), 1fr)
    );
    gap: 2rem;
}
```

## 🎨 Advanced Flexbox Patterns

### **Flex Wrap with Min-width**
```css
/* Items wrap automatically when needed */
.flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.flex-item {
    flex: 1;
    min-width: min(100%, 300px);
}
```

### **Responsive Navigation with Flex Gap**
```css
.nav {
    display: flex;
    flex-wrap: wrap;
    gap: clamp(0.5rem, 2vw, 2rem);
    justify-content: space-between;
}

.nav-link {
    flex: 0 1 auto;
    white-space: nowrap;
}
```

## 📱 Advanced Breakpoint Strategy

### **Content-based Breakpoints**
```css
/* Instead of device breakpoints, use content breakpoints */

/* Desktop layout breaks at 1200px */
@media (max-width: 1200px) {
    .desktop-only {
        display: none;
    }
}

/* Tablet layout */
@media (max-width: 768px) and (min-width: 481px) {
    /* Tablet specific styles */
}

/* Mobile landscape */
@media (max-height: 500px) and (orientation: landscape) {
    .header {
        height: auto;
    }
}
```

## 🖼️ Advanced Responsive Image Techniques

### **Picture Element for Different Images**
```html
<picture>
    <source media="(min-width: 1200px)" srcset="large-image.jpg">
    <source media="(min-width: 768px)" srcset="medium-image.jpg">
    <source media="(max-width: 767px)" srcset="small-image.jpg">
    <img src="default-image.jpg" alt="Responsive image">
</picture>
```

### **Responsive Images with srcset**
```html
<img 
    srcset="small.jpg 480w, 
            medium.jpg 768w, 
            large.jpg 1200w"
    sizes="(max-width: 480px) 100vw,
           (max-width: 768px) 90vw,
           (max-width: 1200px) 80vw,
           1000px"
    src="default.jpg" 
    alt="Responsive image">
```

## 🎬 Responsive Video/Iframe

### **Responsive Iframe Container**
```css
/* Maintain 16:9 aspect ratio */
.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    overflow: hidden;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

```html
<div class="video-container">
    <iframe src="https://www.youtube.com/embed/..."></iframe>
</div>
```

## ♿ Responsive Accessibility

### **Touch-friendly Targets**
```css
/* Minimum 44x44px touch targets */
.btn,
.nav-link,
input[type="button"],
input[type="submit"] {
    min-height: 44px;
    min-width: 44px;
}

@media (min-width: 768px) {
    /* Can be smaller on desktop with pointer */
    .btn {
        min-height: 40px;
    }
}
```

### **Readable Line Length**
```css
/* Optimal line length: 50-75 characters */
p, li {
    max-width: 70ch;
}

@media (max-width: 480px) {
    /* More forgiving on mobile */
    p, li {
        max-width: 100%;
    }
}
```

### **Sufficient Color Contrast**
```css
/* 7:1 ratio for AAA compliance */
body {
    color: #1a1a1a;      /* Dark text */
    background: #ffffff; /* Light background */
}

/* For focus states */
a:focus {
    outline: 2px solid #4a90e2;
    outline-offset: 2px;
}
```

## 🌙 Dark Mode with Media Query

```css
/* Respect user's OS preference */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #1a1a1a;
        color: #e0e0e0;
    }
    
    .card {
        background-color: #2d2d2d;
    }
}

@media (prefers-color-scheme: light) {
    body {
        background-color: #ffffff;
        color: #333333;
    }
}
```

## ⚡ Print Optimization

```css
@media print {
    /* Hide interactive elements */
    .header, .nav, .footer, .contact {
        display: none;
    }
    
    /* Optimize for print */
    body {
        font-size: 12pt;
        line-height: 1.6;
        color: #000;
        background: #fff;
    }
    
    /* Break pages appropriately */
    .section {
        page-break-inside: avoid;
    }
    
    /* Show URLs for links */
    a::after {
        content: " (" attr(href) ")";
    }
    
    /* Adjust images */
    img {
        max-width: 100%;
        height: auto;
    }
}
```

## 🎯 Orientation-based Responsive Design

```css
/* Portrait orientation */
@media (orientation: portrait) {
    .gallery {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Landscape orientation */
@media (orientation: landscape) {
    .gallery {
        grid-template-columns: repeat(4, 1fr);
    }
    
    /* Reduce header height on landscape mobile */
    .header {
        padding: 0.5rem 1rem;
    }
}

/* Mobile landscape specific */
@media (max-height: 500px) and (orientation: landscape) {
    .hero {
        min-height: auto;
        padding: 2rem 1rem;
    }
}
```

## 🔄 Responsive Columns (Multi-column Layout)

```css
/* Text flows across multiple columns responsively */
.article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

/* Alternative using CSS columns */
.text-columns {
    column-count: 1;
    column-gap: 2rem;
}

@media (min-width: 768px) {
    .text-columns {
        column-count: 2;
    }
}

@media (min-width: 1200px) {
    .text-columns {
        column-count: 3;
    }
}
```

## 📊 Responsive Typography Scale

```css
:root {
    /* Mobile scale (1:1.125) */
    --font-xs: 0.75rem;
    --font-sm: 0.875rem;
    --font-base: 1rem;
    --font-lg: 1.125rem;
    --font-xl: 1.25rem;
    --font-2xl: 1.5rem;
    --font-3xl: 1.875rem;
}

@media (min-width: 768px) {
    :root {
        /* Tablet scale (1:1.25) */
        --font-xs: 0.75rem;
        --font-sm: 0.875rem;
        --font-base: 1rem;
        --font-lg: 1.25rem;
        --font-xl: 1.5rem;
        --font-2xl: 1.875rem;
        --font-3xl: 2.25rem;
    }
}

@media (min-width: 1024px) {
    :root {
        /* Desktop scale (1:1.333) */
        --font-xs: 0.75rem;
        --font-sm: 0.875rem;
        --font-base: 1rem;
        --font-lg: 1.333rem;
        --font-xl: 1.777rem;
        --font-2xl: 2.369rem;
        --font-3xl: 3.157rem;
    }
}

/* Usage */
h1 { font-size: var(--font-3xl); }
h2 { font-size: var(--font-2xl); }
p { font-size: var(--font-base); }
```

## 🎪 Useful CSS Functions

### **clamp() - Responsive Sizing**
```css
/* Minimum, Preferred, Maximum */
font-size: clamp(1rem, 5vw, 3rem);
padding: clamp(1rem, 5vw, 3rem);
width: clamp(250px, 80%, 800px);
```

### **min() - Take Smallest Value**
```css
width: min(100%, 500px);      /* 100% or 500px, whichever is smaller */
max-width: min(100vw, 1200px);
```

### **max() - Take Largest Value**
```css
padding: max(1rem, 5vw);      /* At least 1rem, but could be more */
font-size: max(16px, 1.5rem);
```

---

## 📚 Reference Links

- [MDN Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Container_queries)
