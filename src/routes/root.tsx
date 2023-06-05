import '../index.css';
import NavBar from '../Components/NavBar.tsx';
import Footer from '../Components/Footer.tsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
