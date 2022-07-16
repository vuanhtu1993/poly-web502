import './style.css'
import typescriptLogo from './typescript.svg'
import Navigo from 'navigo'
import AdminPage from './pages/Admin'
import HomePage from './pages/Home'
import AddProductPage from './pages/Admin/Product/add'

const router = new Navigo('/', {linksSelector: "a"})

type ComponentBase = {
  render: () => Promise<string>;
  afterRender?: () => void
}

const print = async (component: ComponentBase, params?: any) => {
  document.getElementById('app').innerHTML = await component.render()
  if(component.afterRender) {
    component.afterRender()
  }
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