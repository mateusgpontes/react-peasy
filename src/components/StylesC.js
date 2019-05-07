import Styled from "styled-components";

export const Form = Styled.form`
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const ListaUsuario = Styled.div`
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
`;

export const ListaImg = Styled.img`
    width:${props => `${props.width}px`};
    height:${props => `${props.height}px`};    
`;

export const ListaAncora = Styled.a`
    text-align:center;
`;
