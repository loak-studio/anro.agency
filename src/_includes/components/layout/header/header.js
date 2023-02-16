const subLists = document.querySelectorAll('button.header__navigation-label')
const header = document.querySelector('.header')
subLists.forEach(subList=>{
  subList.addEventListener('click',()=>{
    subList.nextElementSibling.classList.add('header__sub-navigation--active')
    const subNavigation = document.querySelector('.header__sub-navigation--active')
    subNavigation.addEventListener('click',()=>{
      subList.nextElementSibling.classList.remove('header__sub-navigation--active')
    }, {once:true})
  })
})

const button = document.querySelector('#hamburger')

button.addEventListener('click',()=>{
  header.classList.toggle('header--active')
})
