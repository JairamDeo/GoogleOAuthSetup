import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FiLogOut } from 'react-icons/fi';
import React from 'react';

function Home() {
  const navigate = useNavigate();
  const name = localStorage.getItem('userName');
  const email = localStorage.getItem('userEmail');

  const handleLogout = async () => {
    try {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Error logging out');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700"
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Welcome, {name}!</h2>
            <p className="text-gray-600">Email: {email}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;