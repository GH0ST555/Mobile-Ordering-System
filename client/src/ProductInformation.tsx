export class Product {
    constructor(
        public productId: number,
        public productName: string,
        public productPrice: number,
        public imageURL: string | null,
        public productDescription: string | null,
    ) {}
}