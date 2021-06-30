import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51J6VkvSIjcdZqiuOJUWiUy2fkypooAIGBIyNbcmVcIcJ8w9Ltm0jIXOXgfsoCOCV48D6Y5qgedZsBfBnEYmoUHnG00MQGv5inz"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will Run only Once When the App is Loaded
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS", authUser);

      if (authUser) {
        //The User Just LoggedIn or Was LoggedIn

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // THE USER IS LOGGED OUT
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// 6:33:52
