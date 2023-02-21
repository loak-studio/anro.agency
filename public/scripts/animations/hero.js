import { animate, stagger } from "motion"
import { inView } from "motion"
animate(".hero__pill", {
  x: [-50, 0],
  opacity: [0, 1]
}, {
  duration: .5
})
animate(".hero__content", {
  x: [50, 0],
  opacity: [0, 1]
}, {
  duration: .5,
  delay: .5
})
animate(".hero__title", {
  y: [-50, 0],
  opacity: [0, 1]
}, {
  duration: .5,
  delay: 1
})


const heroNumbers = document.querySelector(".hero__numbers")
heroNumbers.style.opacity = 0
inView(heroNumbers, () => {
  heroNumbers.style.opacity = 1
  animate(
    ".hero-number",
    { y: [50, 0], opacity: [0, 1] },
    {
      delay: stagger(0.1),
      duration: 0.5,
      easing: [.22, .03, .26, 1],
    }
  )
}, { amount: 1 })