import './style.css'
import typescriptLogo from './typescript.svg'
import Navigo from 'navigo'
import AdminPage from './pages/Admin'
import HomePage from './pages/Home'
import AddProductPage from './pages/Admin/Product/add'
import EditProductPage from './pages/Admin/Product/edit'
import Signin from './pages/Auth/signin'
import Signup from './pages/Auth/signup'

const router = new Navigo('/', {linksSelector: "a"})

export type ComponentBase = {
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
  "/signin": () => {
    print(Signin)
  },
  "/signup": () => {
    print(Signup)
  },
  "/admin": () => {
    print(AdminPage)
  },
  "/admin/products/add": () => {
    print(AddProductPage)
  },
  "/admin/products/edit": () => {
    print(EditProductPage)
  },
})
router.resolve()