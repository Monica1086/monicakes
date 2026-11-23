
export interface Product {
  objectId: string;
  ProductName: string;
  Category: string;
  Description: string;
  Price: number;
  Size: string;
  image: string;
  isActive: boolean;
  isfeatured: boolean | null;
  sortOrder: number | null;
}
