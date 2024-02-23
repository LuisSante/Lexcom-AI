interface LexcomAI_ItemsType {
    id: string,
    key: number,
    question: string,
}

const LexcomAI_Items: LexcomAI_ItemsType[] = [
    {
        id: '1', 
        key: 1, 
        question: "¿Soluciona un problema? "
    },
    {
        id: '2',
        key: 2,
        question: "¿Es fácil de usar? "
    },
    {
        id: '3',
        key: 3,
        question: "¿Es liviano?"
    },
    {
        id: '4',
        key: 4,
        question: "¿Depende de una temporada?"
    },
    {
        id: '5',
        key: 5,
        question: "¿Es de uso constante? "
    },
    {
        id: '6',
        key: 6,
        question: "¿Es novedoso (2 - 3 meses)? "
    },
    {
        id: '7',
        key: 7,
        question: "¿Es de buen material? "
    }
]

export default LexcomAI_Items