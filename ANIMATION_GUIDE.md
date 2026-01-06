# 🎬 Animation System Documentation

Production-ready animation system for modern React websites. Inspired by sujitpradhan.com with premium interactions and smooth scroll-based animations.

## 📁 Folder Structure

```
src/
├── hooks/                          # Custom animation hooks
│   ├── useScrollTrigger.js        # GSAP ScrollTrigger hook
│   ├── useParallax.js             # Parallax animation hook
│   ├── useSmoothScroll.js         # Lenis smooth scroll hook
│   ├── useCountUp.js              # Number count-up hook
│   └── index.js                   # Exports all hooks
│
├── components/animations/          # Reusable animation components
│   ├── Reveal.jsx                 # Scroll-based reveal component
│   ├── AnimatedButton.jsx         # Button with ripple & magnetic hover
│   ├── CustomCursor.jsx           # Custom cursor with scale effects
│   ├── PageLoader.jsx             # Page load animation
│   ├── CountUp.jsx                # Number counter component
│   ├── AnimatedButton.css         # Button styles
│   ├── CustomCursor.css           # Cursor styles
│   ├── PageLoader.css             # Loader styles
│   ├── CountUp.css                # Counter styles
│   └── index.js                   # Exports all components
│
└── utils/                          # Animation utilities
    ├── pageTransitions.js         # Framer Motion page transitions
    └── animationUtils.js          # Performance & accessibility utils
```

## 🎯 Installation & Setup

### 1. Install Dependencies
```bash
npm install gsap framer-motion lenis
```

### 2. Update App.jsx
```jsx
import React, { useEffect } from "react";
import { useSmoothScroll } from "./hooks";
import { CustomCursor, PageLoader } from "./components/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useSmoothScroll();

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <PageLoader duration={2000} />
      <CustomCursor />
      {/* Your routes/content */}
    </>
  );
};

export default App;
```

## 🎨 Components & Usage

### 1. **Reveal Component** - Scroll-based reveals
```jsx
import { Reveal } from "@/components/animations";

// Basic usage
<Reveal direction="up" duration={0.8}>
  <h1>Your Content</h1>
</Reveal>

// Staggered children
<Reveal direction="up" stagger staggerDelay={0.1}>
  <h1>Title</h1>
  <p>Subtitle</p>
  <button>Action</button>
</Reveal>
```

**Props:**
- `direction`: 'up' | 'down' | 'left' | 'right'
- `delay`: Animation delay (seconds)
- `duration`: Animation duration (seconds)
- `stagger`: Animate children sequentially
- `staggerDelay`: Delay between staggered items
- `className`: Additional CSS classes

---

### 2. **AnimatedButton** - Interactive button with ripple & magnetic hover
```jsx
import { AnimatedButton } from "@/components/animations";

// Primary variant
<AnimatedButton variant="primary" onClick={handleClick}>
  Get Started
</AnimatedButton>

// Magnetic hover effect
<AnimatedButton variant="magnetic">
  Hover Me
</AnimatedButton>

// Secondary outline variant
<AnimatedButton variant="secondary">
  Learn More
</AnimatedButton>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'magnetic'
- `onClick`: Click handler
- `disabled`: Disabled state
- `className`: Additional CSS classes

---

### 3. **CustomCursor** - Premium custom cursor
```jsx
// Add to root App.jsx
import { CustomCursor } from "@/components/animations";

<CustomCursor />
```

**Features:**
- Inner dot + outer ring design
- Scales on interactive elements
- Smooth interpolation
- Auto-hides on touch devices
- Respects reduced-motion preferences

---

### 4. **PageLoader** - Initial page loading animation
```jsx
// Add to root App.jsx
import { PageLoader } from "@/components/animations";

<PageLoader duration={2000}>
  <h1>PREWELL</h1>
</PageLoader>
```

**Props:**
- `duration`: Display duration in milliseconds
- `children`: Custom loader content

---

### 5. **CountUp** - Number counter animation
```jsx
import { CountUp } from "@/components/animations";

<CountUp end={100} label="Projects" suffix="+" />
<CountUp end={50} label="Happy Clients" duration={3} />
```

**Props:**
- `end`: Final count value
- `duration`: Animation duration (seconds)
- `label`: Description text
- `suffix`: Suffix ('+', '%', etc.)

---

## 🪝 Custom Hooks

### useScrollTrigger
```jsx
import { useScrollTrigger } from "@/hooks";

const MyComponent = () => {
  const { trigger } = useScrollTrigger({
    trigger: '.element',
    animation: { rotation: 360, opacity: 1 },
    start: 'top center',
    end: 'bottom center',
    once: true,
    onEnter: () => console.log('Entered viewport'),
  });

  return <div ref={trigger}>Content</div>;
};
```

### useParallax
```jsx
import { useParallax } from "@/hooks";

const HeroSection = () => {
  const { ref } = useParallax({
    speed: 0.5,
    direction: 'vertical',
    distance: 100,
  });

  return <div ref={ref}>Content</div>;
};
```

### useSmoothScroll
```jsx
import { useSmoothScroll } from "@/hooks";

// Automatically handles Lenis initialization
useSmoothScroll({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
```

### useCountUp
```jsx
import { useCountUp } from "@/hooks";

const Stats = () => {
  const { ref, value } = useCountUp({ end: 500, duration: 3 });

  return <div ref={ref}>Projects: {value}</div>;
};
```

---

## ⚡ Animation Utilities

### Performance Optimization
```jsx
import {
  enableGPUAcceleration,
  prefersReducedMotion,
  getAnimationConfig,
  isInViewport,
} from "@/utils/animationUtils";

// Check user preferences
if (prefersReducedMotion()) {
  // Disable animations
}

// Enable GPU acceleration
enableGPUAcceleration(element);

// Get safe animation config
const config = getAnimationConfig();
```

---

## 🎬 Page Transitions

### Framer Motion Integration
```jsx
import { AnimatedPage, pageVariants } from "@/utils/pageTransitions";

const HomePage = () => {
  return (
    <AnimatedPage variants={pageVariants}>
      <h1>Home</h1>
    </AnimatedPage>
  );
};
```

---

## 🎯 Best Practices

### 1. **Accessibility**
- ✅ Respects `prefers-reduced-motion` setting
- ✅ Keyboard navigation on all interactive elements
- ✅ Touch-friendly cursor handling
- ✅ Semantic HTML structure

### 2. **Performance**
- ✅ GPU acceleration on transforms
- ✅ Throttled scroll events
- ✅ Proper cleanup in useEffect
- ✅ RequestAnimationFrame batching

### 3. **Code Quality**
- ✅ Modular component structure
- ✅ Configurable animations
- ✅ Clear prop documentation
- ✅ Error handling & edge cases

### 4. **Mobile Optimization**
- ✅ Touch event handling
- ✅ Responsive animations
- ✅ Reduced motion on mobile
- ✅ Performance testing

---

## 🚀 Advanced Examples

### Hero Section with Parallax
```jsx
import { useParallax } from "@/hooks";
import { Reveal } from "@/components/animations";

const Hero = () => {
  const { ref } = useParallax({ speed: 0.5, distance: 100 });

  return (
    <section ref={ref} className="hero">
      <Reveal direction="up" stagger>
        <h1>Welcome</h1>
        <p>Subheading</p>
        <AnimatedButton>Explore</AnimatedButton>
      </Reveal>
    </section>
  );
};
```

### Stats Section with CountUp
```jsx
import { CountUp } from "@/components/animations";
import { Reveal } from "@/components/animations";

const Stats = () => {
  return (
    <Reveal direction="up" stagger>
      <div className="stats-grid">
        <CountUp end={100} label="Projects" suffix="+" />
        <CountUp end={50} label="Clients" suffix="+" />
        <CountUp end={8} label="Years" />
      </div>
    </Reveal>
  );
};
```

---

## 📱 Responsive Considerations

All animations are mobile-optimized:
- Reduced motion on small screens
- Touch-friendly interactive areas
- Performance-aware GPU acceleration
- Responsive breakpoints integrated

---

## 🔧 Troubleshooting

### Animations not triggering
```js
// Ensure ScrollTrigger is registered
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### Smooth scroll conflicts
```js
// Ensure only one smooth scroll library is active
useSmoothScroll(); // Lenis will be the only smooth scroll
```

### Performance issues
```js
// Disable animations for users with reduced motion
import { prefersReducedMotion } from "@/utils/animationUtils";

if (prefersReducedMotion()) {
  // Use instant transitions instead
}
```

---

## 📦 Dependencies

- **gsap** (3.12+) - Animation engine
- **framer-motion** (10.16+) - React motion library
- **lenis** (1.1+) - Smooth scrolling
- **react** (18+) - Core framework

---

## 🎓 Learning Resources

- [GSAP ScrollTrigger Docs](https://greensock.com/scrolltrigger/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lenis Docs](https://lenis.studiofreight.com/)
- [Web Animation Performance](https://web.dev/animations-guide/)

---

Created with ❤️ for premium web experiences.
