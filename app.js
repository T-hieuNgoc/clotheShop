const $ = document.querySelector.bind(document)

const bar = $('#bar')
const nav = $('#navbar')
const closeNav = $('#close')
const product1 = $('#product1')


bar.onclick = ()=>{
    nav.classList.add('active')
}
closeNav.onclick = ()=>{
    nav.classList.remove('active')
}

