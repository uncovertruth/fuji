import '../node_modules/basscss/css/basscss.css'
import './scss/screen.scss'

const ACTION = window.ontouchstart === undefined ? 'click' : 'touchend'
const toggle = document.getElementById('toggle') as HTMLElement
const overlay = document.getElementById('overlay') as HTMLElement
toggle.addEventListener(ACTION, () => {
  const ACTIVE = 'active'
  const OPEN = 'open'
  if (toggle.classList.contains(ACTIVE)) {
    toggle.classList.remove(ACTIVE)
    overlay.classList.remove(OPEN)
    return
  }
  toggle.classList.add(ACTIVE)
  overlay.classList.add(OPEN)
})
