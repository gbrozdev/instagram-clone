import './App.css';
import { Routes,Route,} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

import Login from './pages/Login/Login';
import Error from './pages/Error/Error';
import Register from './pages/Register/Register';
import Write from './pages/Write/Write';
import Edit from './pages/Edit/Edit';

import Blog from './pages/Blog/Blog';
import Editprofile from './pages/Editprofile/Editprofile';
import Article from './pages/Article/Article';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <>
    <div className="mb-20">
      <Navbar />
    </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/article" element={<Article />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/error" element={<Error />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/editprofile" element={<Editprofile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
