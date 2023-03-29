// Importação do módulo de CSS do styled-components
import styled, { css } from "styled-components";

// Cria um elemento chamado ButtonContainer que recebe um HTML do tipo 'button' e faz a formatação pelo CSS.
// ${({ elemento }) => condição && `executar_se_verdadeiro`} é uma arrow function onde verifica se a propriedade variant do botão é diferente de 'primary' e aplica a formatação se for verdadeiro 
export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    
    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #E4105D;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
        
    `}
`