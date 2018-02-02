import '../node_modules/basscss/css/basscss.css'
import './scss/screen.scss'

const ACTION = window.ontouchstart === undefined ? 'click' : 'touchend'
const toggle: any = document.getElementById('toggle')
const overlay: any = document.getElementById('overlay')
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
