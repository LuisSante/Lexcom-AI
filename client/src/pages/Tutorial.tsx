import React, { useState } from 'react';

const Tutorial: React.FC = () => {
  const [input, setInput] = useState<string>(''); // Estado para almacenar la entrada del usuario

  const handleButtonClick = (value: string) => {
    // Lógica para manejar clics en botones
    // Puedes construir la expresión y actualizar el estado 'input'
  };

  const handleCalculate = () => {
    // Lógica para calcular el resultado de la expresión almacenada en 'input'
  };

  return (
    <div>
      <input type="text" value={input} readOnly />
      <div>
        {/* Botones de la calculadora */}
        <p>Tutorial aqui</p>
        {/* ... Otros botones ... */}
      </div>
    </div>
  );
};

export default Tutorial;
