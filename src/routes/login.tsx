import '../index.css';

export default function Login() {
  return (
    <>
      <main>
        <div className="bg-white flex justify-center items-center">
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Log In</h1>
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"></p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="UserName"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              />
            </div>
            <div className="text-center mt-6">
              <button className="py-3 w-64 text-xl text-white bg-black hover:text-black hover:bg-white duration-300 rounded-2xl">
                Log In
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
