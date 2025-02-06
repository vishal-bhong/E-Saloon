import './App.css';
import BarberRoutes from './routes/BarberRoutes';
import CustomerRoutes from './routes/CustomerRoutes';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
          <CustomerRoutes />
          <BarberRoutes />
          <ToastContainer />
    </div>
  );
}

export default App;
