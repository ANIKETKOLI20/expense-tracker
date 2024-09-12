import {Routes , Route} from 'react-router-dom'

import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TranscationPage from './pages/TranscationPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/ui/Header';

import './App.css';


function App() {
  const authUser = true
  return (
    <div className="bg-black">
      {authUser && <Header/>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/transcation" element={<TranscationPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
