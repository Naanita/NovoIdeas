import './App.css';
import Login from './components/login';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
<>
<Routes>
  <Route exact path="/" element={<Login/>}/>
  
</Routes>
</>
    );
}

export default App;
