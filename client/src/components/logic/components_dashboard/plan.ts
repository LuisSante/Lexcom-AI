import { PlanType } from "../../../interface/dashboard";
import './../../../css/Dashboard.css';

export const PlanPayment: PlanType[] = [
    {
        id: '0',
        title: "Standard Plan",
        plan: "standard",
        value: "19.90",
        n_search: "35 búsquedas", 
        value_plan: 19.90
    },
    {
        id: '1',
        title: "Business Plan",
        plan: "business",
        value: "27.90",
        n_search: "50 búsquedas", 
        value_plan: 27.90
    },
    {
        id: '2',
        title: "Premium Plan",
        plan: "premium",
        value: "40.90",
        n_search: "100 búsquedas", 
        value_plan: 49.90
    }
]
