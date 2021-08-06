import styled from "styled-components";

export const ButtonStyled = styled.button`
	font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
	padding: 5px 20px;
	border: none;
	font-size: 24px;
	border-radius: 4px;
	cursor: pointer;
    color: white;
    background: #DF4324;
    margin-right: 20px;

	&:active{
		background: #BF391F;
	}

	&:hover{
		background: #FF4C29;
		transform: scale(1.03);
	}

	&:disabled,
	&[disabled]{
		border: 1px solid #999999;
		background-color: #cccccc;
		color: #666666;
	}
`;