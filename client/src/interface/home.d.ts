export interface ComponentProps {
  id?: string;
}

export interface FieldType {
  password: string;
  email: string;
  // remember: string;
}

export interface FormValues {
  title: string;
  description: string;
  completed: boolean;
  key: string;
  name: string;
  surname: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  email: string;
  password: string;
  user: string;
  gender: string;
  date_of_birth: Date;
}

export interface FAQItemsType {
  key: string;
  question?: string;
  answer?: string;
}

export interface ForYouItemsType {
  id: string;
  key: number;
  text: string;
}

export interface NavbarItem {
  key: string;
  title: string;
  url: string;
  id_: string;
}

export interface ItemsProps {
  items: NavbarItem[];
}
