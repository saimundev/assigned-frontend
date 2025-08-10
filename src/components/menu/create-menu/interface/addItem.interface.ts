export interface CreateFormValues {
    menuName: string;
    description: string;
    restaurantName: string;
    tagLine: string;
    price: string;
    image: File | null;
    sizes: { size: string; price: string }[];
    featured: boolean;
    prepTime: string;
}