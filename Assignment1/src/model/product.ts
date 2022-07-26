class Product {
    name: string;
    price: number;
    image: string;
    sale?: number;
    category?: string;
    feature?: string;
    description?: string;
    shortDescription?: string;
    constructor(
        name: string,
        price: number,
        image: string,
        category?: string,
        feature?: string,
        description?: string,
        sale?:number,
        shortDescription?: string
    ) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.sale = sale;
        this.category = category;
        this.feature = feature;
        this.description = description;
        this.shortDescription = shortDescription;
    }
}

export default Product