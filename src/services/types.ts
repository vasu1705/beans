export interface FoodItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  customizationOptions?: CustomizationOption[]; // Optional
  count?:number
  totalItemPrice:number
}

export interface FoodSection {
  sectionTitle: string;
  sectionDescription?: string;
  items: FoodItem[];
}

export type FoodSections = FoodSection[];

export interface OptionItem {
  optionItemName: string;
  optionItemPrice: string; // or number
  optionItemSelected?:boolean
}

export interface CustomizationOption {
  optionOfferName: string;
  type: 'checkbox' | 'radio';
  isRequired: boolean;
  maxSelectable?: number; // Only for checkboxes
  description: string;
  optionOfferItemAndPrice: OptionItem[];
}


export interface FoodSection {
  sectionTitle: string;
  sectionDescription?: string;
  items: FoodItem[];
}


export interface OrderItem {
  itemName:string,
  itemId:number
  itemCount:number,
  itemPrice:number,
  status: 'pending' | 'in-progress' | 'ready' | 'served' | 'done';
  selectedCustomizations?: OptionItem[];
}

// One full order
export interface Order {
  orderId: number;
  tableNumber?: number;           // Optional: Dine-in only
  customerName?: string;          // Optional: Takeaway/delivery
  items: OrderItem[];             // Each item and its state
  extras?: string[];              // e.g., water, cutlery, sauces
  totalPrice: number;             // Derived from items + extras
  status: 'new' | 'accepted' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: Date;
}
