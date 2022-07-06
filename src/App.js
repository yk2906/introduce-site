// import './App.css';

import "./style.css";
import { RecoilRoot } from "recoil";
import { Button } from "./components/atoms/Button";
import { Router } from "./router/Router";

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
