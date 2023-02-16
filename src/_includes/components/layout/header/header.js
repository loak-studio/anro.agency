const subLists = document.querySelectorAll('button.header__navigation-label')
const header = document.querySelector('.header')
const body = document.querySelector('body')
const closeLayout = document.createElement('div')
closeLayout.classList.add('close-layout')


subLists.forEach(subList=>{
  subList.addEventListener('click',()=>{
    subList.nextElementSibling.classList.add('header__sub-navigation--active')
    body.appendChild(closeLayout)
    closeLayout.addEventListener('click',()=>{
      subList.nextElementSibling.classList.remove('header__sub-navigation--active')
      body.removeChild(closeLayout)
    }, {once:true})
  })
})

const button = document.querySelector('#hamburger')

button.addEventListener('click',()=>{
  header.classList.toggle('header--active')
})
