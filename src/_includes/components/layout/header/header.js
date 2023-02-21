const subLists = document.querySelectorAll('button.header__navigation-label')
const header = document.querySelector('.header')
const body = document.querySelector('body')
const closeLayout = document.createElement('div')
closeLayout.classList.add('close-layout')


subLists.forEach(subList => {


  const clickListener = (e) => {
    subList.nextElementSibling.classList.remove('header__sub-navigation--active')
    body.removeChild(closeLayout)
    document.removeEventListener('keydown', keyListener)
  }

  const keyListener = (e) => {
    if (e.key == "Escape") {
      subList.nextElementSibling.classList.remove('header__sub-navigation--active')
      body.removeChild(closeLayout)
      closeLayout.removeEventListener('click', clickListener)
    }
  }

  subList.addEventListener('click', () => {
    subList.nextElementSibling.classList.add('header__sub-navigation--active')
    body.appendChild(closeLayout)
    document.addEventListener('keydown', keyListener, { once: true })
    closeLayout.addEventListener('click', clickListener, { once: true })
  })
})

const button = document.querySelector('#hamburger')

button.addEventListener('click', () => {
  window.scrollTo(0, 0)
  document.querySelector('html').classList.toggle('nav-open')
  header.classList.toggle('header--active')
})
