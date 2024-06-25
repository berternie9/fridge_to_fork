import { Routes, Route, Link } from 'react-router-dom';
import Home from "../../pages/Home/Home.jsx";

export default function NavBar() {
  return (
    <section>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </section>
  );
}
