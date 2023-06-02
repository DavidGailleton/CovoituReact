import '../index.css';
import NavBar from '../Components/NavBar.tsx';
import Footer from '../Components/Footer.tsx';
import { Product, products, calculatePrice } from '../Components/Product.tsx';

function Search() {
  return (
    <>
      <NavBar />
      <main className="flex justify-center">
        <div className="w-3/4 border-black border-2">
          <section>
            <ul className="flex flex-col gap-3 p-2">
              {products.map((product: Product | calculatePrice) => (
                <li className="grid grid-cols-2 grid-rows-2 border-black border-2 p-2">
                  <div className="col-start-1 row-start-1">
                    <p>
                      {product.heure} : {product.minute} h
                    </p>
                    <p>
                      From : {product.depart} To : {product.destination}
                    </p>
                  </div>
                  <div className="col-start-2 row-start-1 text-end">
                    <p>{calculatePrice(product)} €</p>
                  </div>
                  <div className="col-start-1 row-start-2">
                    <h3 className="text-start">{product.name}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Search;
