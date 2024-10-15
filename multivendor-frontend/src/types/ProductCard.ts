// Product type interface
interface Product {
  id?: number;
  productName: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  productImage: string;
  thumbnails?: string[];
  rating: number;
  reviews: number;
  reviewsMembers?: ReviewsMembers[];
  brandName?: string;
  productType?: string;
  isNew?: boolean;
  isBestSelling?: boolean;
  favorites: number;
  isFeatured?: boolean;
  isOnDeal?: boolean;
  isLatest?: boolean;
  stock?: number;
  discount?: number;
  colors?: string[];
  types?: string[];
  description?: string;
}

/*  Type for review data */
interface ReviewsMembers {
  id?: number;
  reviewerName: string;
  reviewDate: string;
  rating: number;
  comment: string;
  reviewerAvatar: string;
  productImage: string;
}

/*  Type for more items */
interface MoreItem {
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviews: number;
}

// taype for categories
interface Categories {
  title: string;
  productsCount: number;
  link: string;
  items: {
    name: string;
    image: string;
    quntite: number;
    price: number;
  }[];
}

interface Coupon {
  title: string;
  shop: string;
  code: string;
  icon: string;
}

export type { Product, ReviewsMembers, MoreItem, Categories, Coupon };
