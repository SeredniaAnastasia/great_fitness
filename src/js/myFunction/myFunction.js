
// const year = document.querySelector('.copyright .year')
// year && (year.innerText = new Date().getFullYear())


document.body.addEventListener('click', (event) => {
  event.stopPropagation()
  submenuClick(event)
})

function submenuClick(event) {
  const parentElement = event.target.closest('.submenu-click-parent');
  const list = parentElement?.querySelector('.submenu-click-list');
  list?.classList.toggle('open-click')
  console.log(list)
}

{
  const items = document.querySelectorAll('.menu-list .menu-item')
  items.forEach((e) => e.style.width = (+e.clientWidth * 1.1) + "px")

}
