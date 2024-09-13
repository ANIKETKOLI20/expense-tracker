import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TranscationPage from './pages/TranscationPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/ui/Header';
import LoadingSpinner from './components/LoadingSpinner';

import { useQuery } from '@apollo/client';
import { GET_AUTHENTICATED_USER } from './graphql/queries/user.query';


import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';


function App() {
  const { data, loading, error } = useQuery(GET_AUTHENTICATED_USER);

  if (loading) return <LoadingSpinner/>; 
  if (error) return <p>Error: {error.message}</p>; 

  const authUser = data?.authUser;

  return (
    <div className="bg-black">
      {authUser && <Header />}
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/transcation" element={authUser ? <TranscationPage /> : <Navigate to="/login" />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
