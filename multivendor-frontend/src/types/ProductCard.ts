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

export type { Product, ReviewsMembers, MoreItem };
