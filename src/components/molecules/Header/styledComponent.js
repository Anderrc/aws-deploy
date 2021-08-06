import styled from 'styled-components'; 

export const NavBar=styled.nav`
    background-color:#2C394B;
    color:white;
    display: flex;
    padding:20px;
    width: 100%;
    align-items: center;
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
`;
export const Title=styled.h2`
    width: 50%;
    font-family:arial;
`;

export const NavContainer = styled.ul`
    display: flex;
    width: 50%;
    flex-direction: row;
    margin-right: 500px;
    padding: 0px 10px;
    list-style: none;
    height: 100%;
`

export const NavLink = styled.li`
    a{
        color: white;
        text-decoration: none;
        padding: 20px;
        font-size: 20px;

        &:hover{
            text-decoration: underline;
            color: #FF4C29;
        }
    }


`

