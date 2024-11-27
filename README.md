# Scroll-driven Animations for Tailwind CSS

**Unofficial** and experimental plugin for Tailwind CSS v3.4+ that provides utilities for scroll-driven animations.

`unofficial` `experimental` `chrome-115+`

## Installation

Install the plugin from npm:

```sh
npm install @adam.plesnik/tailwindcss-scroll-driven-animations
```

Then add the plugin to your `tailwind.config.js`:

```js
module.exports = {
  plugins: [
    require('@adam.plesnik/tailwindcss-scroll-driven-animations'),
    // ...
  ],
}
```

## Usage

The plugin provides utilities for a subset of CSS scroll-driven animation properties.

- `animation-timeline`
- `animation-range`
- `scroll-timeline`, `view-timeline`
- `timeline-scope`

### Animation Timeline

The single most impressive feature of scroll-driven animations is an anonymous animation timeline. It allows user to easily trigger anything just by scrolling the page. The plugin allows user to use the `.timeline` CSS class which defaults to `animation-timeline: scroll(y)` and also provides an option to set custom timeline name with a modifier.

### Scroll and View Timeline

Scroll and View timelines provide user with better control over the animations. Both `.scroll-timeline` and `.view-timeline` are meant to be used with modifiers to set the timeline name.

### Range

Animation range controls start and end of an animation. Utility class `.range` offers various options along with a possibility to use length modifiers.

### Scope

Timeline scope allows to control animated elements outside the parent which defines the timeline. Utility `.scope` should be used with a modifier to define the timeline name set by `.scroll-timeline` or `.view-timeline`.

### Browser Support

Scroll-driven animations are not broadly supported yet. Use the `no-animations:...` variant for fallback styling.
