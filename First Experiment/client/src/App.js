
import './App.css';
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import { SignUp } from './Componets/Private/Authantications/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
