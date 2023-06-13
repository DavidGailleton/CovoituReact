import '../index.css';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <>
      <main>
        <div className="bg-white flex justify-center items-center">
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Sign Up</h1>
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"></p>
            </div>
            <form>
              <div className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                />
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="py-3 w-64 text-xl text-white bg-black hover:text-black hover:bg-white duration-300 rounded-2xl"
                >
                  Log In
                </button>
              </div>
              <div className="text-end mt-6 flex flex-row justify-end">
                <Link to={'../login'}> LogIn</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
