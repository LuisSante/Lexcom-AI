import { PlanType } from "../../../interface/dashboard";
import './../../../css/Dashboard.css';

export const PlanPayment: PlanType[] = [
    {
        id: '0',
        title: "Standard Plan",
        plan: "standard",
        value: "17.90",
        n_search: "35 búsquedas", 
        benefits1: "Porcentaje de éxito",
        benefits2: "Recomendación de ventas",
        value_plan: 19
    },
    {
        id: '1',
        title: "Business Plan",
        plan: "business",
        value: "24.90",
        n_search: "50 búsquedas", 
        benefits1: "Porcentaje de éxito",
        benefits2: "Recomendación de ventas",
        value_plan: 24.90
    },
    {
        id: '2',
        title: "Premium Plan",
        plan: "premium",
        value: "40.90",
        n_search: "100 búsquedas", 
        benefits1: "Porcentaje de éxito",
        benefits2: "Recomendación de ventas",
        value_plan: 40.90
    }
]
