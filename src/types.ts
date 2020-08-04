export interface OfferType {
    id: string;
    name: string;
    price: number;
    rating: number;
    type: string;
    rank: string;
    pictures: string[];
    description: string;
    bedrooms: number;
    guests: number;
    features: string[];
    host: {
      avatar: string;
      id: string;
      super: number;
      name: string;
    };
    coordinates: number[];
    reviews: {}[];
    isFavorite: boolean;
    city: string;
    previewImage: string;
}

export interface FeedbackType {
    comment: string;
    date: Date;
    id: number;
    rating: number;
    user: {
        avatarUrl: string;
        id: number;
        isPro: boolean;
        name: string;
    };
}

export interface FullOffersType {
    [index: string]: OfferType[];
}

export interface FeedbackPostType {
    comment: string;
    rating: number;
}

export interface SortingOptionType {
    name: string;
}
