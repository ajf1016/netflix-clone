import React, { useEffect, useState } from "react";
import "./Nav.css";
import one from "./one.png";
import two from "./two.png";

function Nav() {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false); 
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);
	return (
		<>
			<div className={`nav ${show && 'nav_black'}`}>
				<img src={one} alt="Netflix Logo" className="nav_logo" />
				<img src={two} alt="Avatar Logo" className="avatar_logo" />
			</div>
		</>
	);
}

export default Nav;
