const subLists = document.querySelectorAll('button.header__navigation-label')

subLists.forEach(subList=>{
  subList.addEventListener('click',()=>{
    subList.nextElementSibling.classList.toggle('active')
  })
})