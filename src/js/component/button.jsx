import React from "react";
import Button from 'react-bootstrap/Button';

const ButtonPage = (prompt)=>{
    return(
        <Button variant="primary">{prompt.text}</Button>
    );
}

export default ButtonPage;