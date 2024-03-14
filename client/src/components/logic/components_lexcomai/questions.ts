import { QuestionType } from "./interface";
import { visual_analysis} from './visual_analysis';
import { technical_analysis } from './technical_analysis';
import { strategic_analysis } from "./strategic_analysis";
import { financial_analysis } from "./financial_analysis";

export interface attibute_bool {
    usabilidad: boolean;
    innovacion: boolean;
    diversificacion: boolean;
    conformidad: boolean;
    necesidad: boolean;
    pasion: boolean;
    calidad: boolean;
    portabilidad: boolean;
    complementariedad: boolean;
    reconocimiento: boolean;
    disponibilidad: boolean;
    competencia: boolean;
    frecuencia: boolean;
    perdurabilidad: boolean;
    innovacion_tecnica: boolean;
    valoraciones: boolean;
    realismo: boolean;
    internacionalizacion: boolean;
    estacionalidad: boolean;
    abastecimiento: boolean;
    percepcion_valor: boolean;
    tamano: boolean;
    frecuencia_estrategica: boolean;
    agrupamiento: boolean;
    rentabilidad: boolean;
    analisis_ventas: boolean;
    gastos_fijos: boolean;
    publicidad: boolean;
}

function splitArrayInHalf(array: QuestionType[]) {
    const halfLength = Math.ceil(array.length / 2);
    return {
        firstHalf: array.slice(0, halfLength),
        secondHalf: array.slice(halfLength)
    };
}

export const { firstHalf: firstColumnItems_visual, secondHalf: secondColumnItems_visual } = splitArrayInHalf(visual_analysis);
export const { firstHalf: firstColumnItems_technical, secondHalf: secondColumnItems_technical } = splitArrayInHalf(technical_analysis);
export const { firstHalf: firstColumnItems_strategic, secondHalf: secondColumnItems_strategic } = splitArrayInHalf(strategic_analysis);
export const { firstHalf: firstColumnItems_financial, secondHalf: secondColumnItems_financial } = splitArrayInHalf(financial_analysis);