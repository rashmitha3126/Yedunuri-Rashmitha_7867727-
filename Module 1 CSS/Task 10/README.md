# Responsive Web Design with Media Queries - Task 10

## Overview
This project demonstrates a fully responsive portal that adapts seamlessly to phones, tablets, and desktops using CSS media queries, flexible layouts, and modern CSS techniques.

## 📱 Key Features Implemented

### 1. **Mobile-First Approach**
- Start with mobile design and enhance for larger screens
- Default styles are optimized for small screens
- Media queries add enhancements for larger devices

### 2. **Media Queries Breakpoints**

#### **Mobile (< 768px)** - Default/Base Styles
```css
/* Navigation stacked vertically */
.nav {
    display: flex;
    flex-direction: column;
}

/* Single column layouts */
.services-grid {
    grid-template-columns: 1fr;
}
```

#### **Tablet (≥ 768px)**
```css
@media (min-width: 768px) {
    /* Navigation horizontal */
    .nav {
        flex-direction: row;
    }
    
    /* 2 columns */
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

#### **Desktop (≥ 1024px)**
```css
@media (min-width: 1024px) {
    /* 4 columns for services */
    .services-grid {
        grid-template-columns: repeat(4, 1fr);
    }
    
    /* 3 columns for portfolio */
    .portfolio-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### 3. **Flexible Units Used**

#### **Percentages (%)**
- `.container { width: 95%; }` - Responsive container width
- Images: `width: 100%;` - Fill parent container
- Grid columns: `grid-template-columns: repeat(2, 1fr);` - Flexible fractions

#### **Viewport Units (vw, vh)**
- `min-height: 50vh;` - Hero section height (50% of viewport)
- Responsive font sizing based on viewport

#### **Relative Units (rem, em)**
- `padding: 1rem;` - Scales with root font size
- `gap: 2rem;` - Consistent spacing
- `font-size: 1.2rem;` - Readable on all devices

### 4. **Navigation Stack Vertically on Mobile**

**Mobile (Default):**
```css
.nav {
    display: flex;
    flex-direction: column;  /* Stack vertically */
    width: 100%;
    gap: 0.5rem;
}

.nav-link {
    display: block;
    padding: 0.75rem 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    text-align: center;
}
```

**Tablet & Desktop:**
```css
@media (min-width: 768px) {
    .nav {
        flex-direction: row;  /* Side by side */
        width: auto;
        gap: 1rem;
    }
    
    .nav-link {
        background-color: transparent;
        border-bottom: 2px solid transparent;
    }
    
    .nav-link:hover {
        border-bottom-color: var(--primary-color);
    }
}
```

### 5. **Responsive Image Sizing**

```css
/* Mobile - Full width */
.service-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.portfolio-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

/* Tablet - Slightly larger */
@media (min-width: 768px) {
    .portfolio-item img {
        height: 300px;
    }
}

/* Desktop - Even larger */
@media (min-width: 1024px) {
    .portfolio-item img {
        height: 350px;
    }
}
```

### 6. **Responsive Font Sizing**

```css
/* Base font size - Mobile */
html {
    font-size: 16px;
}

/* Tablet */
@media (min-width: 768px) {
    .hero h2 {
        font-size: 3rem;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    html {
        font-size: 18px;  /* Increase for larger screens */
    }
}

/* Extra small phones */
@media (max-width: 480px) {
    html {
        font-size: 14px;
    }
}
```

### 7. **Flexbox for Responsive Layouts**

**Header Navigation (Flexbox):**
```css
.header .container {
    display: flex;
    flex-direction: column;    /* Stack on mobile */
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

@media (min-width: 768px) {
    .header .container {
        flex-direction: row;   /* Side by side on tablet+ */
        justify-content: space-between;
    }
}
```

**Navigation Links (Flexbox):**
```css
.nav {
    display: flex;
    flex-direction: column;    /* Vertical on mobile */
    gap: 0.5rem;
}

@media (min-width: 768px) {
    .nav {
        flex-direction: row;   /* Horizontal on tablet+ */
        gap: 1rem;
    }
}
```

**Contact Form (Flexbox):**
```css
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 500px;
}
```

### 8. **CSS Grid for Responsive Layouts**

**Services Grid:**
```css
/* Mobile - 1 column */
.services-grid {
    display: grid;
    grid-template-columns: 1fr;
}

/* Tablet - 2 columns */
@media (min-width: 768px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop - 4 columns */
@media (min-width: 1024px) {
    .services-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

**Portfolio Grid:**
```css
/* Mobile - 1 column */
.portfolio-grid {
    display: grid;
    grid-template-columns: 1fr;
}

/* Tablet - 2 columns */
@media (min-width: 768px) {
    .portfolio-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop - 3 columns */
@media (min-width: 1024px) {
    .portfolio-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

**About Section (Grid):**
```css
/* Mobile - Stack */
.about-grid {
    display: grid;
    grid-template-columns: 1fr;
}

/* Tablet+ - Side by side */
@media (min-width: 768px) {
    .about-grid {
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
}
```

## 📊 Responsive Breakpoints Used

| Breakpoint | Size | Device | Columns |
|-----------|------|--------|---------|
| Extra Small | ≤ 480px | Small phones | 1 |
| Small | 481px - 767px | Large phones/small tablets | 1-2 |
| Medium | 768px - 1023px | Tablets | 2 |
| Large | 1024px - 1439px | Desktops | 3-4 |
| Extra Large | ≥ 1440px | Large desktops | 4 |

## 🎯 Responsive Techniques Implemented

### **1. Flexible Units**
- `%` - Percentage of parent element
- `vw/vh` - Percentage of viewport width/height
- `rem` - Relative to root font size
- `em` - Relative to element font size

### **2. Flexbox Layout**
- Navigation: Vertical on mobile → Horizontal on desktop
- Header: Column layout on mobile → Row layout on desktop
- Form: Column layout for vertical alignment

### **3. CSS Grid Layout**
- Services: 1 column → 2 columns → 4 columns
- Portfolio: 1 column → 2 columns → 3 columns
- About section: Image and text stacked → side by side

### **4. Images**
- `width: 100%` - Responsive width
- `height: auto` - Maintain aspect ratio
- `object-fit: cover` - Fill container
- Different heights for different breakpoints

### **5. Media Query Features**
- `prefers-reduced-motion` - Respects user motion preferences
- Print styles - Optimized for printing
- High-DPI screens - Better rendering

## 🔧 How to Use

### 1. **Test Responsiveness**
- Open `index.html` in a browser
- Resize the window to see layouts change
- Test on different devices (phone, tablet, desktop)
- Use browser dev tools (F12) to test different screen sizes

### 2. **Customize Breakpoints**
Edit the media query breakpoints in `styles.css`:
```css
@media (min-width: 768px) { /* Change this value */ }
```

### 3. **Modify Colors**
Update CSS variables at the top:
```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    /* Add your colors */
}
```

### 4. **Adjust Spacing**
Modify padding/margin values:
```css
padding: 3rem 1rem;  /* Change values */
gap: 2rem;           /* Change gap */
```

## 📱 Testing Checklist

- [ ] Mobile view (320px - 480px) - Vertical navigation, stacked layout
- [ ] Tablet view (768px - 1024px) - 2 columns, horizontal navigation
- [ ] Desktop view (1024px+) - 3-4 columns, full layout
- [ ] Navigation links stack vertically on mobile
- [ ] Images resize proportionally
- [ ] Font sizes adjust for readability
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets are large enough (≥ 44px)
- [ ] Contact form is usable on all sizes

## 🚀 Bonus Features

### **Sticky Header**
```css
.header {
    position: sticky;
    top: 0;
    z-index: 100;
}
```

### **Smooth Scrolling**
```css
html {
    scroll-behavior: smooth;
}
```

### **Hover Effects**
```css
.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}
```

### **Focus Styles for Accessibility**
```css
.form-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
}
```

## 📚 Concepts Demonstrated

✅ Mobile-first approach  
✅ Media queries for different screen sizes  
✅ Flexible unit system (%, vw, vh, rem, em)  
✅ Navigation stacking (vertical → horizontal)  
✅ Responsive images and font sizing  
✅ Flexbox layouts  
✅ CSS Grid layouts  
✅ CSS variables for theming  
✅ Accessibility considerations  
✅ Print styles  
✅ High-DPI screen support  

## 🎓 Learning Resources

- [MDN Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Viewport Meta Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)

---

**Created:** May 29, 2026  
**Purpose:** Demonstrate responsive web design with media queries for Task 10
