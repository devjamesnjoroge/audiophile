// types.ts
export type Product = {
    model: string;
    image_url: string;
    price: number;
    quantity: number;
    // other product properties
  };
  
  export type Earphone = Product & {
    id: number;
    is_new: boolean;
    title: string;
    description: string;
    in_the_box: { item: string; quantity: number }[];
    gallery_images: string[];
    features: string;
    // other earphone-specific properties
  };
  