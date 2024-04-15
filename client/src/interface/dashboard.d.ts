export interface PlanType {
    id: string;
    title: string;
    plan: string;
    value: string;
    n_search: string;
    benefits1: string;
    benefits2: string;
    value_plan: number;
}

export interface ButtonPlanType {
    type: string;
    value: string;
    styleButton: React.CSSProperties;
    onOkClick?: () => void;
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
    id: number,
    username: string,
    email: string,
    name: string,
    surname: string,
    phone: string,
    country: string,
    city: string,
    address: string,
    gender: string,
    date_of_birth: string
}

export interface DescriptionItemProps {
    title: string;
    content: React.ReactNode;
}
