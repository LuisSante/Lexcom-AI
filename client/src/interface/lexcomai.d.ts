export interface QuestionType {
    id: string,
    question: string,
}

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

export interface FormValues {
    relevancia: number;
    check: attibute_bool;
}

export interface TypePrediction {
    labels: string[];
    datasets: {
        data: number[];
        backgroundColor: string[];
        borderColor: string[];
        borderWidth: number;
    }[];
}