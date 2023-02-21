import { animate, stagger } from "motion"
import { inView } from "motion"

const services = document.querySelectorAll('.service')

services.forEach(service=>{
  service.style.opacity = 0
  const figures = service.querySelectorAll('.service__figure')
  figures.forEach((figure)=>{
    figure.style.opacity = 0
  })
  inView(service,()=>{
    setTimeout(()=>{
      animate(
        figures,
        { x: [50, 0], opacity: [0, 1] },
        {
          delay: stagger(0.2),
          duration: 0.5,
          easing: [.22, .03, .26, 1],
        }
      )
    }, 200)
    animate(service, {
      opacity:[0,1],
      y:[50,0]
    })
  },{amount:.3})



})