// import all of our components

import AllSpices from "./pages/AllSpices";
import SingleSpice from "./pages/SingleSpice";
import Form from "./pages/Form";

//import React and hooks
import React, { useState, useEffect } from "react";

//import components from React Router

import { Route, Switch } from "react-router-dom";

function App(props) {
  //style objects

  const h1 = {
    textAlign: 'center',
    margin: "10px",

  };

  //state and other variables

  //our API URL

  const url = "https://spice-rack1.herokuapp.com/spices/";

  //state to hold the list of all spices

  const [spices, setSpices] = useState([]);

  //Function//
  //function to get all spices

  const getSpices = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setSpices(data);
  };

  //useEffect//

  //useEffect to get a list of spices when page loads

  useEffect(() => {
    getSpices();
  }, []);

  //returned JSX//

  return (
    <div>
      <h1 style={h1}>My Spice List</h1>
        <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllSpices {...routerProps} spices={spices} />}
          />
        <Route
         path="/spice/:id"
         render={(routerProps) =>(
           <SingleSpice {...routerProps} spice={spices} />
         )}
        />
        <Route
         path="/new"
         render={(routerProps) => <Form {...routerProps} />}
        />
        <Route
        path="edit"
        render={(routerProps) => <Form {...routerProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;



