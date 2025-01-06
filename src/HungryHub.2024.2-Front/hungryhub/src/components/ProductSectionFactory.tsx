import { Product, ProductComplete } from '../interfaces/product.interface';

const mockProduct: ProductComplete = {
    id: '1',
    name: 'Pizza',
    description: 'Pizza com refrigerante',
    price: 40.90,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    sales: 1600
};

export interface HomeSection {
    title: string;
    products: Product[];
}

abstract class SectionFactory {
    abstract createSection(): HomeSection;

    protected createProduct(id: string, modifications: Partial<ProductComplete> = {}): Product {
        return {
            ...mockProduct,
            id,
            ...modifications
        };
    }
}

export class RecommendationSectionFactory extends SectionFactory {
    createSection(): HomeSection {
        return {
            title: 'Recomendações',
            products: [
                this.createProduct('1', { rating: 4.9 }),
                this.createProduct('2', { rating: 4.8 }),
                this.createProduct('3', { rating: 4.7 })
            ]
        };
    }
}

export class PromotionSectionFactory extends SectionFactory {
    createSection(): HomeSection {
        return {
            title: 'Promoções',
            products: [
                this.createProduct('4', { price: mockProduct.price * 0.8 }),
                this.createProduct('5', { price: mockProduct.price * 0.9 })
            ]
        };
    }
}

export class FrequentOrdersSectionFactory extends SectionFactory {
    createSection(): HomeSection {
        return {
            title: 'Seus pedidos frequentes',
            products: [
                this.createProduct('6', { sales: 2000 }),
                this.createProduct('7', { sales: 1800 }),
                this.createProduct('8', { sales: 1700 })
            ]
        };
    }
}