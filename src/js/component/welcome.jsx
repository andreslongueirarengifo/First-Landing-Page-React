import React from "react";
import ButtonPage from "./button.jsx";

const WelcomePage = ()=>{
    return(
        <div className="content-welcome">
            <h2>A Warm Welcome</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim velit quo 
                fuga voluptatum officiis ipsa ipsam dolorem quae delectus provident vitae, 
                nam, cupiditate harum similique inventore consequuntur, laboriosam quis corporis!</p>
            <ButtonPage text="Call to action!"/>
        </div>
    );
}

export default WelcomePage;