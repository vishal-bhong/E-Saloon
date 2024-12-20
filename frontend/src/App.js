import './App.css';
import BarberRoutes from './routes/BarberRoutes';
import CustomerRoutes from './routes/CustomerRoutes';


function App() {
  return (
    <div className="App">
          <CustomerRoutes />
          <BarberRoutes />
    </div>
  );
}

export default App;
