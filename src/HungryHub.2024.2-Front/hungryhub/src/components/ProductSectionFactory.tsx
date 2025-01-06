import { Product } from '../interfaces/product.interface';

const mockProduct: Product = {
    id: '1',
    name: 'Pizza',
    description: 'Pizza com refrigerante',
    price: 40.90,
    rating: 4.7,
    isFavorite: false,
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    sales: 1600
};

export interface HomeSection {
    title: string;
    products: Product[];
}

abstract class SectionFactory {
    abstract createSection(): HomeSection;

    protected createProduct(id: string, modifications: Partial<Product> = {}): Product {
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
                this.createProduct('rec1', { rating: 4.9 }),
                this.createProduct('rec2', { rating: 4.8 }),
                this.createProduct('rec3', { rating: 4.7 })
            ]
        };
    }
}

export class PromotionSectionFactory extends SectionFactory {
    createSection(): HomeSection {
        return {
            title: 'Promoções',
            products: [
                this.createProduct('promo1', { price: mockProduct.price * 0.8 }),
                this.createProduct('promo2', { price: mockProduct.price * 0.9 })
            ]
        };
    }
}

export class FrequentOrdersSectionFactory extends SectionFactory {
    createSection(): HomeSection {
        return {
            title: 'Seus pedidos frequentes',
            products: [
                this.createProduct('freq1', { sales: 2000 }),
                this.createProduct('freq2', { sales: 1800 }),
                this.createProduct('freq3', { sales: 1700 })
            ]
        };
    }
}