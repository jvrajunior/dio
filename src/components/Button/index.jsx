// Importação da biblioteca React
import React from "react";

// Importação dos elementos criados em styles.js
import { ButtonContainer } from "./styles";

// Cria um componente Button com algumas propriedades
const Button = ({title, variant="primary", onClick}) => {
    return (

        // Cria um elemento ButtonContainer com as propriedades dinâmicas que serão passadas via parâmetros.
        <ButtonContainer variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>
    )
}

// Exporta o componente Button para ser usado por todo projeto.
export { Button }