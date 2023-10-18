import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeListing from "./EmployeeListing";
import EmployeeCreate from "./EmployeeCreate";
import EmployeeEdit from "./EmployeeEdit";
import EmployeeDetail from "./EmployeeDetail";

function App() {
  return (
    <div className="App">
      <h1>React JS Crud Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeListing/>}></Route>
          <Route path="/employee/create" element={<EmployeeCreate />}></Route>

          <Route path="/employee/detail/:empid" element={<EmployeeDetail />}></Route>
          <Route path="/employee/edit/:empid" element={<EmployeeEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
