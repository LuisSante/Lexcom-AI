export interface QuestionType {
  id: string;
  question: string;
}

export interface attibute_bool {
  persepcion_visual: boolean;
  persepcion_unisex: boolean;
  relevancia: boolean;
  usabilidad: boolean;
  innovacion: boolean;
  diversificacion: boolean;
  conformidad: boolean;
  necesidad: boolean;
  pasion: boolean;
  calidad: boolean;
  portabilidad: boolean;
  complementariedad: boolean;
  ads_library: boolean;
  disponibilidad: boolean;
  competencia: boolean;
  frecuencia: boolean;
  perdurabilidad: boolean;
  innovacion_tecnica: boolean;
  valoraciones: boolean;
  realismo: boolean;
  internacionalizacion: boolean;
  estacionalidad: boolean;
  variantes: boolean;
  unisex: boolean;
  emociones: boolean;
  tamano: boolean;
  frecuencia_estrategica: boolean;
  agrupamiento: boolean;
  utilidad: boolean;
  rentabilidad: boolean;
  analisis_ventas: boolean;
  gastos_fijos: boolean;
  publicidad: boolean;
}

export interface FormValues {
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

export interface ChildrenProps {
  children: ReactNode;
}
