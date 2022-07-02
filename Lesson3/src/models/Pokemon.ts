export class Pokemon {
    abilities: any[];
    height: number;
    id:number;
    image: string;
    name: string;
    type: any[];
    weight: number;
    constructor(abilities: any[], height: number, id: number, image: string, name: string, type: any[], weight: number) {
        this.abilities = abilities;
        this.height = height;
        this.id = id;
        this.image = image;
        this.name = name;
        this.type = type;
        this.weight = weight;
    }
}