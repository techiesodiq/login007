import React from "react";
import foodImg from "./chicken-and-fries.jpg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<div className="col-2"></div>
					<div className="login-container col-8">
						<div className="post">
							<h2>FoodCafe</h2>
							<p>Tasty & Healthy</p>
						</div>
						<footer>
							<img className="footer-img" src={foodImg} alt="" />
						</footer>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		</div>
	);
}

export default App;
