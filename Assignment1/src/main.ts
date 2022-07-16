import './style.css'
import typescriptLogo from './typescript.svg'
import Navigo from 'navigo'
import AdminPage from './pages/Admin'
import HomePage from './pages/Home'
import AddProductPage from './pages/Admin/Product/add'

const router = new Navigo('/', {linksSelector: "a"})

type ComponentBase = {
  render: () => string
}

const print = (component: ComponentBase, params?: any) => {
  document.getElementById('app').innerHTML = component.render()
}

router.on({
  "/": () => {
    print(HomePage)
  },
  "/admin": () => {
    print(AdminPage)
  },
  "/admin/products/add": () => {
    print(AddProductPage)
  }
})
router.resolve()