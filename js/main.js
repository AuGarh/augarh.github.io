/*==================== ซ่อน/โชว์เมนู ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== โชว์เมนู =====*/
/* ตรวจว่าปุ่มเปิดเมนูอยู่บ่นหน้าจอหรือไม่ */
if (navToggle) {
    navToggle.addEventListener('click', (e) => {
        navMenu.classList.add('show-menu')
    })
}

/*===== ซ่อนเมนู =====*/
/* ตรวจว่าปุ่มปิดเมนูอยู่บ่นหน้าจอหรือไม่ */
if (navClose) {
    navClose.addEventListener('click', (e) => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== ลบเมนูโทรศัพ ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // ทุกครั้งที่คลิ๊ก nav__link, ให้ลบ show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== เปิดปิดหน้า Skills ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== เปลี่ยนหน้า Background ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('background__active')
        })
        target.classList.add('background__active')

        tabs.forEach(tab => {
            tab.classList.remove('background__active')
        })
        tab.classList.add('background__active')
    })
})

/*==================== Portfolio Swiper  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*==================== เปลี่ยนไฮไลท์ตามหัวข้อที่เลื่อนผ่าน ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== เพิ่มเงาหลัง Header ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // เลื่อนจอลงมาเกิน 80vw ให้เพิ่ม scroll-header ไปที่ header
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== โชว์ปุ่ม Scroll Up ====================*/
function scrollUp() {
    const scrollup = document.getElementById('scroll-up');
    // เลื่อนจอลงมาเกิน 560vw ให้เพิ่ม show-scroll ไปที่ scroll-up
    if (this.scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== เปลี่ยนธีม ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// ตัวแปรเก็บตัวเลือกที่ผู้ใช้เคยเลือกไว้
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// ตัวแปรเก็บค่าธีมปัจจุบัน จากการตรวจสอบ คลาส dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// ตรวจว่าผู้ใช้เลือกไปแล้วหรือยัง
if (selectedTheme) {
    // ถ้าถูกเลือกไว้แล้ว ให้ลบ darkTheme และ iconTheme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// เปลี่ยนธีมด้วยการคลิ๊กปุ่ม
themeButton.addEventListener('click', () => {
    // เพิ่มและลบ darkTheme และ iconTheme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // บันทึกค่าที่ผู้ใช้เลือก
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
