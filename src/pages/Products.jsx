import NavBar from '../components/NavBar';
import '../assets/css/Products.css';
import Product from '../components/Product';
import products from '../data/products';

function Products() {
  return (
    <>
      <NavBar />
      <main className="products">
        <div className="wrapper">
          <h1 className="font-condensed">Products</h1>
          <div className="products__list">
            {products.map((product) => (
              <Product key={product.src} product={product} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Products;
