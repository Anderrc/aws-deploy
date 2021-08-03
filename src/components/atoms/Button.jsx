import styled from 'styled-components';
import * as colors from '../styles/colors';


function backgroundColor(variantColor){  
    console.log(variantColor);
    if(variantColor==="primary"){
        return colors.PRIMARY_BLUE;
    }
    if(variantColor==="secondary"){
        return colors.PRIMARY_GRAY;
    }
    if(variantColor==="tertiary"){
        return colors.PRIMARY_GREEN;
    }
    return colors.PRIMARY_BLUE;  //si no le paso ninguna variant igual tomara este
}

const Button=styled.button`
    background:${(props)=>backgroundColor(props.variantColor)};
    color:black;
    font-family:arial;
    padding: 0.5rem 1rem;
    box-sizen:border-box;
    border:none;
    font-size:4rem;
    border-radius:4px;
    width:35%;
    cursor:pointer;
`
export{
    Button
   
}