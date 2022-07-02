import instance from "./instance";

export function getAll() {
    return instance.get('/pokemons')
}