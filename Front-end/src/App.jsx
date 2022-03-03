import Home from './components/home'
import Form from './components/form'
import { render } from "react-dom"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Test from './components/test'
import ManagerAuth from './backoffice/ManagerAuth';

function App() {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/login" element={<ManagerAuth />}></Route>
        
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );

  return (
    <div className="App">
      < Home />
    </div>
  )
}

export default App
