export const progressBarDemo = `<div>
  <div class="animate-scale-to-right timeline">
    <!-- The progress bar is controlled by the anonymous scroll(y) timeline. -->
  </div>
  <div>
    ...
  </div>
</div>`

export const progressBarKeyframes = `@keyframes scale-to-right {
  to {
    width: 100%;
  }
}`

export const rangeDemo = `<div class="scope/navbar">
  <!-- The --navbar timeline has scope outside its defining element -->
  <div class="animate-translate-down timeline/navbar range-on-exit">
    <!-- Navbar is shown when the controlling element leaves the frame -->
  </div>
  <div>
    ...
    <div className="view-timeline/navbar">
      <!-- Controlling element -->
    </div>
    ...
  </div>
</div>`

export const rangeKeyframes = `@keyframes translate-down {
  to {
    transform: translateY(0);
  }
}`

export const appearDemo = `<div>
  ...
  <div class="animate-appear timeline-view">
    <!-- This element is controlled by its own anonymous view() timeline. -->
  </div>
  ...
</div>`

export const appearKeyframes = `@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  40% {
    opacity: 1;
    transform: scale(1.1);
  }

  60%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
}`

export const multiRange = `<div class="scope/demo">
  <!-- The --demo timeline has scope outside its defining element -->
  <div class="animate-scale-to-right range-on-entry timeline/demo">
    <!-- This element is controlled by the --demo timeline -->
  </div>
  ...
  <div className="view-timeline/demo">
    <!-- Controlling element -->
  </div>
</div>`

export const multiRangeKeyframes = `@keyframes scale-to-right {
  to {
    width: 100%;
  }
}`

export const supports = `<div>
  <div class="animate-translate-down timeline -translate-y-20 no-animations:translate-y-0">
    <!-- This element falls back to translate-y-0 -->
  </div>
  ...   
</div>`
