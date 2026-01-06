# 🎬 Animation System - Quick Start Guide

Get started with premium animations in your Prewell Digitech website in 5 minutes.

## ⚡ What's Included

### ✅ Installed
- **GSAP 3.12+** - Industry-standard animation library
- **Framer Motion 10.16+** - React animation library
- **Lenis 1.1+** - Premium smooth scrolling
- **Tailwind CSS** - Utility-first styling

### ✅ Ready to Use Components
- `<Reveal />` - Scroll-triggered reveals
- `<AnimatedButton />` - Interactive buttons with ripple & magnetic hover
- `<CustomCursor />` - Premium custom cursor
- `<PageLoader />` - Elegant page loading animation
- `<CountUp />` - Number counter animations

### ✅ Custom Hooks
- `useScrollTrigger()` - GSAP ScrollTrigger wrapper
- `useParallax()` - Parallax background effects
- `useSmoothScroll()` - Lenis smooth scrolling
- `useCountUp()` - Number animations

---

## 🚀 Quick Examples

### 1. Basic Reveal Animation
```jsx
import { Reveal } from "@/components/animations";

export const Hero = () => {
  return (
    <Reveal direction="up" duration={0.8}>
      <h1>Welcome to Prewell</h1>
      <p>Transform your business with cutting-edge technology</p>
    </Reveal>
  );
};
```

### 2. Staggered Children
```jsx
<Reveal direction="up" stagger staggerDelay={0.15}>
  <h1>Our Services</h1>
  <p>Professional digital marketing solutions</p>
  <button>Learn More</button>
</Reveal>
```

### 3. Animated Button
```jsx
import { AnimatedButton } from "@/components/animations";

<AnimatedButton 
  variant="primary" 
  onClick={() => console.log('Clicked!')}
>
  Get Started
</AnimatedButton>
```

### 4. Parallax Background
```jsx
import { useParallax } from "@/hooks";

const HeroSection = () => {
  const { ref } = useParallax({ 
    speed: 0.5,
    distance: 100 
  });

  return (
    <section ref={ref} className="hero">
      <h1>Parallax Content</h1>
    </section>
  );
};
```

### 5. Counter Animation
```jsx
import { CountUp } from "@/components/animations";

<div className="stats-grid">
  <CountUp end={100} label="Projects" suffix="+" />
  <CountUp end={50} label="Clients" suffix="+" />
  <CountUp end={8} label="Years" />
</div>
```

---

## 📱 Responsive Design Considerations

All animations are **mobile-optimized**:

```jsx
// Automatically handles reduced motion on mobile
import { prefersReducedMotion } from "@/utils/animationUtils";

if (prefersReducedMotion()) {
  // Disable heavy animations
}
```

---

## 🎨 Animation Directions

### Reveal Component Directions
```jsx
<Reveal direction="up">      {/* Default */}
<Reveal direction="down">
<Reveal direction="left">
<Reveal direction="right">
```

---

## 🔧 Custom GSAP Animations

### Using useScrollTrigger Hook
```jsx
import { useScrollTrigger } from "@/hooks";

const Component = () => {
  const { trigger } = useScrollTrigger({
    trigger: '.element',
    animation: {
      rotation: 360,
      opacity: 1,
      duration: 1,
    },
    start: 'top center',
    end: 'bottom center',
    once: true,
  });

  return <div ref={trigger}>Content</div>;
};
```

---

## 🎬 Button Variants

```jsx
// Primary - Blue gradient
<AnimatedButton variant="primary">Get Started</AnimatedButton>

// Secondary - Outlined style
<AnimatedButton variant="secondary">Learn More</AnimatedButton>

// Magnetic - Cursor-following effect
<AnimatedButton variant="magnetic">Hover Me</AnimatedButton>
```

---

## 🖱️ Custom Cursor Features

Automatically enabled in App.jsx:
- ✅ Scales up on hover over links & buttons
- ✅ Inner dot + outer ring design
- ✅ Smooth interpolation
- ✅ Auto-hides on touch devices
- ✅ Respects accessibility preferences

---

## ⏱️ Page Loader

```jsx
// In App.jsx - Automatically displays for 2 seconds
<PageLoader duration={2000} />

// Custom content
<PageLoader>
  <h1>Loading...</h1>
  <p>Preparing your experience</p>
</PageLoader>
```

---

## 🔄 Smooth Scrolling

Automatically enabled in App.jsx via:
```jsx
useSmoothScroll();
```

Features:
- ✅ Smooth velocity-based scrolling
- ✅ Respects `prefers-reduced-motion`
- ✅ Touch-friendly gesture support
- ✅ Integrated with GSAP ScrollTrigger

---

## 📊 Real-World Examples from Your Site

### Updated Hero1 Component
```jsx
// Using Reveal with staggered children
<Reveal direction="up" stagger staggerDelay={0.1}>
  <h1>Transform Your Business with</h1>
  <p><TextAnimation /></p>
  <div className="flex gap-5">
    <AnimatedButton variant="primary">Get Started</AnimatedButton>
    <AnimatedButton variant="secondary">Contact Us</AnimatedButton>
  </div>
</Reveal>
```

### Updated HeroSection Component
```jsx
// Parallax entrance animations
<Reveal direction="left">
  <div className="hero-section1">
    <h1>Innovating the Future</h1>
    <p>Cutting-edge software and IT services...</p>
    <AnimatedButton>Get Started</AnimatedButton>
  </div>
</Reveal>

<Reveal direction="right">
  <img src={heroImg} alt="Hero" />
</Reveal>
```

### Updated Services Section
```jsx
<Reveal direction="up" className="text-center mb-12">
  <h2>Our Services</h2>
</Reveal>

<Reveal direction="up" stagger staggerDelay={0.1}>
  {services.map(service => (
    <div key={service.id} className="service-card">
      {/* Card content */}
    </div>
  ))}
</Reveal>
```

---

## 🎯 Performance Tips

1. **Use GPU Acceleration**
   ```jsx
   import { enableGPUAcceleration } from "@/utils/animationUtils";
   enableGPUAcceleration(element);
   ```

2. **Throttle Scroll Events**
   ```jsx
   import { throttle } from "@/utils/animationUtils";
   const throttledScroll = throttle(onScroll, 16);
   ```

3. **Check Viewport**
   ```jsx
   import { isInViewport } from "@/utils/animationUtils";
   if (isInViewport(element)) {
     // Play animation
   }
   ```

---

## 🎓 Learning Path

1. Start with `<Reveal />` for basic scroll animations
2. Add `<AnimatedButton />` to CTAs
3. Implement counters with `<CountUp />`
4. Add parallax with `useParallax()` hook
5. Create custom animations with `useScrollTrigger()`

---

## 🐛 Troubleshooting

### Animations not triggering?
```jsx
// Make sure ScrollTrigger is registered in App.jsx
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### Smooth scroll not working?
```jsx
// Must be called before routes render
useSmoothScroll();
```

### Performance issues?
```jsx
// Check for reduced motion preference
if (prefersReducedMotion()) {
  // Use instant transitions
}
```

---

## 📚 File Structure Reference

```
src/
├── components/animations/     ← Ready-to-use components
│   ├── Reveal.jsx
│   ├── AnimatedButton.jsx
│   ├── CustomCursor.jsx
│   ├── PageLoader.jsx
│   └── CountUp.jsx
│
├── hooks/                      ← Custom hooks
│   ├── useScrollTrigger.js
│   ├── useParallax.js
│   ├── useSmoothScroll.js
│   └── useCountUp.js
│
└── utils/                      ← Utilities
    ├── pageTransitions.js      ← Framer Motion setups
    └── animationUtils.js       ← Performance helpers
```

---

## 🔗 Next Steps

1. ✅ **Check your site** - Open http://localhost:5174
2. ✅ **See the animations** - Scroll and interact
3. ✅ **Customize** - Edit colors, durations, directions
4. ✅ **Explore** - Read `ANIMATION_GUIDE.md` for deep dive

---

## 💡 Pro Tips

- Use `stagger` for list/grid items
- Use `once={true}` for one-time animations
- Combine `direction` options for variety
- Test on mobile with DevTools
- Check `prefers-reduced-motion` for accessibility

---

Made with ❤️ for beautiful web experiences.
