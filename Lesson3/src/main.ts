import Navigo from 'navigo'
import Header from './components/header'
import DetailPage from './pages/Detail'
import HomePage from './pages/Home'
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const print = async (component: ComponentBase) => {
  app.innerHTML = await component.render()
}

interface ComponentBase {
  render: () => Promise<string>
}

const routes = new Navigo('/', {linksSelector: "a"})
routes.on({
  '/': () => {
    print(HomePage)
    console.log('HomePage')
  },
  '/pokemon/:id': () => {
    print(DetailPage)
  }
}) 
routes.resolve()