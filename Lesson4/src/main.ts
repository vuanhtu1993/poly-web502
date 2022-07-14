import './style.css'
import typescriptLogo from './typescript.svg'
import Navigo from 'navigo'
import AdminPage from './pages/Admin'

const router = new Navigo('/', {linksSelector: "a"})

type ComponentBase = {
  render: () => string
}

const print = (component: ComponentBase, params?: any) => {
  document.getElementById('app').innerHTML = component.render()
}

router.on({
  "/": () => {
    print(AdminPage)
  },
})
router.resolve()