import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "@/routes/RouterConfig";
import { type ReactElement } from "react";

// import { Auth } from "./component/auth";
// import { Counter } from "./component/counter";
// import { ToggleSwitch } from "./component/toggle_switch";
import "./App.css";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>

  );
}

export default App;
