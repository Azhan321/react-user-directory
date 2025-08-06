import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <>
    <Link to={`/users/${user.id}`}>
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 cursor-pointer bg-white">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-500 text-sm">City: {user.address.city}</p>
      </div>
    </Link>
    </>
  );
};

export default UserCard;
