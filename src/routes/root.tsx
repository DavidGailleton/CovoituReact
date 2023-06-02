import '../index.css';
import NavBar from '../Components/NavBar.tsx';
import Footer from '../Components/Footer.tsx';
import blablacarBG from '../assets/blablacarBG.svg';

function App() {
  return (
    <>
      <NavBar />
      <main className="flex justify-center top-0 bottom-0">
        <picture>
          <img src={blablacarBG} alt="CarBG" className="absolute top-0 -z-10 h-screen left-0" />
        </picture>
        <section className="w-1/2">
          <form
            action=""
            className="grid grid-rows-1 grid-cols-5 bg-white justify-center gap-x-4 p-2 rounded-md"
          >
            <label className="col-start-1 col-span-2">
              <input name="Trouver" className="w-full border-black border-2" />
            </label>
            <label className="col-start-3 col-span-2">
              <input type="text" />
            </label>
            <button className="col-start-5">test</button>
            <div></div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default App;
