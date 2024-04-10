export const progressBarDemo = `<div>
  <div class="animate-scale-to-right timeline">
    <!-- The progress bar is controlled by the anonymous scroll(y) timeline. -->
  </div>
  <div>
    ...
  </div>
</div>`

export const progressBarKeyframes = `@keyframes scale-to-right {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}`

export const rangeDemo = `<div class="scope/navbar">
  <!-- The --navbar timeline has scope outside its defining element -->
  <div class="animate-translate-down timeline/navbar range-on-exit">
    <!-- Navbar is shown when the controlling element starts to leave the frame -->
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
    <!-- The element is controlled by its own anonymous view() timeline. -->
  </div>
  ...
</div>`

export const appearKeyframes = `@keyframes appear {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  33% {
    opacity: 1;
    transform: scale(1.1);
  }

  50%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
}`
