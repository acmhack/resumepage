import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserComponent from "./components/users.component";

function App() {
  return (
	<Router>
	  <div className="container">
		<br />
		<Route path="/" exact component={UserComponent} />
	  </div>
	</Router>
  );
}

export default App;
