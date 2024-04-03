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

export const rangeDemo = `<div class="scope/range">
  <div class="animate-translate-down timeline/range range-start-exit-crossing range-end">
    Navbar
  </div>
  <div>
    ...
    <div className="view-timeline/range">
      Show the navbar
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
    'Luke, he is your father!'
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
