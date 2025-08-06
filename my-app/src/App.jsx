import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import AddUser from './pages/AddUser';

function App() {
  return (
    <>
    <div className="p-4">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white px-4 py-2 rounded flex gap-4 mb-4">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/UserDetail">UserDetail</Link>
        <Link to="/add-user">Add User</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
