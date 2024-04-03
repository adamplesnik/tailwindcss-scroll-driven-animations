export const progressBarDemo = `<div>
  <div class="animate-scale-to-right timeline">
    <!-- The progress bar is controlled by the anonymous scroll(y) timeline. -->
  </div>
  <div>
    ...
  </div>
</div>`

export const rangeDemo = `<div class="scope/demo">
  <!-- The --demo timeline has scope outside its defining element. -->
  <div class="animate-translate-down timeline/demo range-start-exit-crossing range-end">
    <!-- The nav bar is controlled by the --demo timeline. -->
  </div>
  <div>
    ...
    <div className="view-timeline/demo">
      <!-- Element setting the --demo timeline. -->
    </div>
    ...
  </div>
</div>`
