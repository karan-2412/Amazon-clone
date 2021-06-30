import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <h2>SubTotal</h2>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This Contains a gift if you are lucky!
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/payment")}>
        Proceed to CheckOut
      </button>
    </div>
  );
}

export default Subtotal;

//03:36:57
