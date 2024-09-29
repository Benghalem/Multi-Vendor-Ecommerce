// Product type interface
interface Product {
  id?: number;
  productName: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  imageUrl: string;
  rating: number;
  reviews: number;
}
export default Product;
