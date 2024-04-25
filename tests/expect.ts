export const expectedCss = String.raw`
.timeline {
  animation-timeline: scroll(y)
}
.timeline-auto {
  animation-timeline: auto 
}
.timeline-none {
  animation-timeline: none
}
.timeline-scroll-x {
  animation-timeline: scroll(x)
}
.timeline-view {
  animation-timeline: view()
}
.timeline\/test {
  animation-timeline: --test
}
.scroll-timeline {
  scroll-timeline: none y
}
.scroll-timeline-block {
  scroll-timeline: none block
}
.scroll-timeline-block\/test {
  scroll-timeline: --test block
}
.scroll-timeline-x {
  scroll-timeline: none x
}
.scroll-timeline-x\/test {
  scroll-timeline: --test x
}
.scroll-timeline\/test {
  scroll-timeline: --test y
}
.view-timeline {
  view-timeline: none y
}
.view-timeline-block {
  view-timeline: none block
}
.view-timeline-block\/test {
  view-timeline: --test block
}
.view-timeline-x {
  view-timeline: none x
}
.view-timeline-x\/test {
  view-timeline: --test x
}
.view-timeline\/test {
  view-timeline: --test y
}
.scope\/test {
  timeline-scope: --test
}
.range {
  animation-range: cover 0 cover 100%
}
.range-contain {
  animation-range: contain 0 contain 100%
}
.range-contain\/10px_100px {
  animation-range: contain 10px contain 100px
}
.range-on-entry {
  animation-range: entry 0 entry 100%
}
.range-on-entry\/10px_100px {
  animation-range: entry 10px entry 100px
}
.range-on-exit {
  animation-range: exit 0 exit 100%
}
.range-on-exit\/10px_100px {
  animation-range: exit 10px exit 100px
}
.range\/10px_100px {
  animation-range: cover 10px cover 100px
}
@supports not (animation-range: cover) {
  .no-animations\:px-0 {
    padding-left: 0px;
    padding-right: 0px
  }
}`
