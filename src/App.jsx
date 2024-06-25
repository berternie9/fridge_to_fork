import './App.css'
import Home from "./pages/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <>
    <NavBar />
    <Home />
    </>
  )
}

export default App




// import { useParams } from 'react-router-dom';

// export default function UserDetails() {
//     const { id } = useParams();
//     return (
//         <section>
//             <h1>User Details</h1>
//             <p>User ID: {id}</p>
//         </section>
//     )
// }
