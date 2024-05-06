export interface PlanType {
  id: string;
  title: string;
  plan: string;
  value: string;
  n_search: string;
  value_plan: number;
}

export interface ButtonPlanType {
  plan: string;
  value: string;
  styleButton: React.CSSProperties;
}

export interface FormPayProps {
  plan: string;
  totalPrice: string;
  onClick: () => void;
}

export interface PaymentPlan {
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export interface UserType {
  id: number;
  username: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  gender: string;
  date_of_birth: string;
}

export interface DescriptionItemProps {
  title: string;
  content: React.ReactNode;
}

export interface PayType {
  number_target: string;
  MM_AA: string;
  code_security: string;
  titular: string;
  code_postal: string;
  email: string;
}
