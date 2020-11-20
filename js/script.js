function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function() {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function(support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
}); 

// const navMain = document.querySelector('.main-nav')
// const navToggle = document.querySelector('.main-nav__toggle')
// const links = document.querySelectorAll('.main-nav__link')

// navToggle.addEventListener('click', function () {
//   this.classList.toggle('toggle--active')
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed')
//     navMain.classList.add('main-nav--opened')
//   } else {
//     navMain.classList.add('main-nav--closed')
//     navMain.classList.remove('main-nav--opened')
//   }
// })

// navMain.addEventListener('click', function(e) {
//   const link = e.target
//   console.log(link)
// })



const devices = [/Android/i, /BlackBerry/i, /iPhone|iPad|iPod/i, /Opera Mini/i, /IEMobile/i]
const isMobile = devices.some(device => navigator.userAgent.match(device) !== null)

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const subMenuList = document.querySelectorAll('.sub-list')

const subMenuButton = document.querySelectorAll('.sub-btn-arrow')
const links = document.querySelectorAll('.menu__list a')
const headerBody = document.querySelector('.header__body')
console.log(subMenuButton);

burger.addEventListener('click', (e) => {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
  body.classList.toggle('lock')
  headerBody.classList.toggle('hide')
  subMenuButton.forEach(element => {
    element.classList.remove('active')
  })
  subMenuList.forEach(menu => {
    menu.classList.remove('open')
  })
})

if(isMobile) {
  body.classList.add('touch')
  subMenuButton.forEach(element => {
    const subMenu = element.nextSibling
    element.addEventListener('click', () => {
      subMenu.classList.toggle('open')
      element.classList.toggle('active')
    })
  })
} else {
  body.classList.add('mouse')
}

if(isMobile) {
  links.forEach(link => {
    link.addEventListener('click', () => {
      headerBody.classList.remove('hide')
      burger.classList.remove('active')
      menu.classList.remove('active')
      body.classList.toggle('lock')
      subMenuList.forEach(menu => {
        menu.classList.remove('open')
      })
      subMenuButton.forEach(btn => {
        btn.classList.remove('active')
      })
    })
  })
}