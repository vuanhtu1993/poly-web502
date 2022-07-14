import instance from "./instance";

export const getAll = () => {
    const uri = "/pokemons"
    return instance.get(uri)
}
