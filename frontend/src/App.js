import './App.css';
import AdminRoutes from './routes/AdminRoutes';
import BarberRoutes from './routes/BarberRoutes';
import CommonRoutes from './routes/CommonRoutes';
import CustomerRoutes from './routes/CustomerRoutes';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
          <CommonRoutes />
          <CustomerRoutes />
          <BarberRoutes />
          <AdminRoutes />
          <ToastContainer />
    </div>
  );
}

export default App;
