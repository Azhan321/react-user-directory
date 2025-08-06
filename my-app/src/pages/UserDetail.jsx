import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams(); // get user ID from URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Error fetching user:', err));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>City:</strong> {user.address.city}</p>
      <p><strong>Street:</strong> {user.address.street}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
};

export default UserDetail;
