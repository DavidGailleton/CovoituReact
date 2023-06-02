import '../index.css';

export default function NavBar() {
  return (
    <>
      <header className="bg-white flex justify-between items-center gap-6 px-6 py-4">
        <h1 className="text-3xl font-serif">CovoituReact</h1>
        <menu className="flex flex-row justify-center gap-6">
          <li className="">
            <a href="#">Poster annonce</a>
          </li>
          <li className="">
            <a href="#">Trouver un Covoiturage</a>
          </li>
        </menu>
        <button className="ml-6">
          <a
            className="lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-full transition duration-200"
            href="/login"
          >
            Log In
          </a>
        </button>
      </header>
    </>
  );
}
