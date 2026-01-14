export interface Product {
    id: string;
    title: string;
    price: string;
    originalPrice: string;
    image: string;
    soldCount: string;
    isViral: boolean;
    rating?: number;
    reviews?: number;
    discount?: string;
}

export interface Coupon {
    id: string;
    store: string;
    offer: string;
    description: string;
    usedCount: string;
    logo: string;
    bgColor: string;
}

export interface SavedItem {
    id: string;
    title: string;
    price: string;
    originalPrice?: string;
    image: string;
    priceDrop?: boolean;
}