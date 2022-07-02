import './style.css'
import { getAll } from './api/pokemons'
import { Pokemon } from './models/Pokemon'
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
const print = async () => {
  const data = await getAll()
  console.log(data)
}

print()