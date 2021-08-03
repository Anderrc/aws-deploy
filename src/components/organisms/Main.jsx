import React from 'react';
import { Button } from '../atoms/Button';
import { Container } from '../atoms/Container';
import  Header  from '../molecules/Header';

const Main = () => {

    const handleClick=()=>{
        console.log("button1");

        //   fetch para enviar una petición POST con datos codificados en JSON
        const url = 'https://6p06k47f75.execute-api.us-east-2.amazonaws.com/ted';
        //const data = {username: 'example'};   --  body: JSON.stringify(data), // data can be `string` or {object}!

        fetch(url, {
        method: 'GET', // or 'PUT'
        headers: new Headers({ 'Content-type': 'application/json'}),
        mode: 'no-cors'
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:'));
         
    }
    return (
        <>
            <Header></Header>
            <Container>
              <Button onClick={handleClick} variantColor="primary">holas</Button>  
              <Button variantColor="secondary">holas</Button>  
            </Container>
        </>
    )
}

export default Main;
