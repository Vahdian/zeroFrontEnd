import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AllRoutes from './core/routes/AllRoutes';
function App() {
  return (
    <div>
     <BrowserRouter>
     <AllRoutes></AllRoutes>
     </BrowserRouter>
    </div>
  );
}

export default App;
