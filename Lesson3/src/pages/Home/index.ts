import { getAll } from "../../api/pokemon"
import Pokemon from "../../models/Pokemon";

const HomePage = {
    render: async () => {
        const data = await getAll();
        const pokemons: Pokemon[] = data.data
        console.log(data)
        return /*html*/`
            ${pokemons.map(poke => /*html*/`<h1>${poke.name}</h1>`)}
        `
    }
}

export default HomePage