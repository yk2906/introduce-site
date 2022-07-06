// import './App.css';

import "./style.css";
import { RecoilRoot } from "recoil";
import { Router } from "./router/Router";

function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
