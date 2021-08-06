import styled from "styled-components";

export const Container = styled.main`
    display:flex;
    padding: 22px;
    min-height: 70vh;
    width: 100%;
    /* flex-direction: row; */
`;

export const ButtonReload = styled.button`
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
	padding: 5px 20px;
	border: none;
	/* font-size: 24px; */
	border-radius: 4px;
	cursor: pointer;
    color: white;
    background: #00979E;
    margin-right: 20px;

	&:active{
		background: #008288;
	}

	&:hover{
		background: #00ADB5;
		transform: scale(1.03);
        img{
            -moz-transform: rotate(-360deg);
            -o-transform: rotate(-360deg);
            -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
            animation-iteration-count: infinite;
            transition: all 2s;
        }
	}

	&:disabled,
	&[disabled]{
		border: 1px solid #999999;
		background-color: #cccccc;
		color: #666666;
	}
`
export const AlertDeploy = styled.div`
    width: 50%;
    height: 100%;
    min-height: 80vh;
    border-radius: 12px;
    border: 1px solid white;
    padding: 22px;
    
    h2{
        font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
        color: white;
    }
`

export const PrincipalContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    

`