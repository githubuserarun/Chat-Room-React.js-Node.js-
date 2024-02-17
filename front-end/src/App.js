import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Login from './pages/login';
import Chat from './pages/chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" exact Component={Login} />
      <Route path="/chat" Component={Chat} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;