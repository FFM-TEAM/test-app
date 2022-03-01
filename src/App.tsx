import styled from "styled-components";
import PageTemplate from "./components/PageTemplate";
import Typo from "./components/Typo";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from "./components/common/Layout";
import Login from "./components/Login";
import Join from "./components/Join";
import ResetPwd from "./components/ResetPwd";
import EmailAuth from "./components/EmailAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login>Test</Login>}></Route>
      <Route path="/join" element={<Join />}></Route>
      <Route path="/resetPwd" element={<ResetPwd>Test3</ResetPwd>} ></Route>
      <Route path="/emailAuth" element={<EmailAuth>Test4</EmailAuth>} ></Route>
    </Routes>
  )
}
export default App;
