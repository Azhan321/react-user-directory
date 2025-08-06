import { useState } from 'react';

const AddUser = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) return;

    const newUser = {
      id: users.length + 1,
      name: form.name,
      email: form.email,
    };

    setUsers([...users, newUser]);
    setForm({ name: '', email: '' }); // clear form
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Add New User</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add User
        </button>
      </form>

      {users.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Added Users:</h3>
          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user.id} className="border p-3 rounded bg-gray-100">
                <strong>{user.name}</strong> – {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddUser;
