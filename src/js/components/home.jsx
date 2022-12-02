import React from "react";

//include images into your bundle


//import components
import GirdCardPage from "./grid-cards.jsx";
import WelcomePage from "./welcome.jsx";
import NavbarPage from "./navbar.jsx";
import FooterPage from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<NavbarPage/>
		<WelcomePage/>
		<GirdCardPage/>
		<FooterPage/>
		</>
	);
};

export default Home;
