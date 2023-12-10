import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/User/UserList";
import AddUser from "./components/User/AddUser";
import EditUser from "./components/User/EditUser";
import CarList from "./components/Car/CarList"; // Import CarList component
import AddCar from "./components/Car/AddCar"; // Import AddCar component
import EditCar from "./components/Car/EditCar"; // Import EditCar component
import OrderList from "./components/Order/OrderList";
import AddOrder from "./components/Order/AddOrder";
import EditOrder from "./components/Order/EditOrder";

function Dashboard() {
  return (
    <div className="container is-centered mt-4">
      <h1>Welcome to Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/users">User Table</Link>
          </li>
          <li>
            <Link to="/cars">Car Table</Link>
          </li>
          <li>
            <Link to="/orders">Order Table</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/users/" element={<UserList />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/edit/:id" element={<EditUser />} />

        {/* Car routes */}
        <Route path="/cars/" element={<CarList />} />
        <Route path="/cars/add" element={<AddCar />} />
        <Route path="/cars/edit/:id" element={<EditCar />} />

        {/* Order routes */}
        <Route path="/orders/" element={<OrderList />} />
        <Route path="/orders/add" element={<AddOrder />} />
        <Route path="/orders/edit/:id" element={<EditOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
