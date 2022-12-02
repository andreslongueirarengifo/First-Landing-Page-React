import React from "react";
import Button from 'react-bootstrap/Button';

const WelcomePage = ()=>{
    return(
        <div className="content-welcome">
            <h2>A Warm Welcome!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim velit quo 
                fuga voluptatum officiis ipsa ipsam dolorem quae delectus provident vitae, 
                nam, cupiditate harum similique inventore consequuntur, laboriosam quis corporis!</p>
                <Button variant="primary">More info</Button>
        </div>
    );
}

export default WelcomePage;