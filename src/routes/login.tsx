import '../index.css';
import NavBar from '../Components/NavBar.tsx';
import Footer from '../Components/Footer.tsx';
import Reactlogo from '../assets/react.svg';

export default function Login() {
  return (
    <>
      <NavBar />
      <main>
        <div className="mx-auto flex flex-col justify-center">
          <picture className="mx-auto">
            <img className="w-40" src={Reactlogo} alt="Logo" />
          </picture>
          <form action="" className="mx-auto my-6">
            <div className="my-4">
              <label htmlFor="email">Enter your email: </label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="my-4">
              <label htmlFor="password">Enter your password: </label>
              <input type="password" name="password" id="password" required />
            </div>
            <div className="form-example">
              <input type="submit" value="Confirm" />
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
