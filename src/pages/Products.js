import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

function Products({ addToCart }) {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Interior Detailing',
      price: 200000,
      image: 'https://media.istockphoto.com/id/1800033825/photo/hand-cleaning-the-car-interior-with-microfiber-cloth-towel.jpg?s=612x612&w=0&k=20&c=bz4YG60xCvOifo0jz1BbThdW0lA1hWS9I85o-Wdxj0A=',
    },
    {
      id: 2,
      name: 'Coating',
      price: 700000,
      image: 'https://www.shutterstock.com/image-photo/car-detailing-studio-wash-worker-600nw-2421533503.jpg',
    },
    {
      id: 3,
      name: 'Polishing',
      price: 400000,
      image: 'https://www.shutterstock.com/image-photo/car-detailing-polishing-concept-hands-600nw-1703968147.jpg',
    },
    {
      id: 4,
      name: 'Basic Wash',
      price: 50000,
      image: 'https://thumbs.dreamstime.com/b/car-wash-soap-horizontal-photo-46741793.jpg',
    },
    {
      id: 5,
      name: 'Glass Treatment',
      price: 150000,
      image: 'https://www.shutterstock.com/image-photo/worker-applies-nano-protective-coating-600nw-2225157627.jpg',
    },
    {
      id: 6,
      name: 'Tire Dressing',
      price: 50000,
      image: 'https://st3.depositphotos.com/1006753/15918/i/450/depositphotos_159187022-stock-photo-man-washing-car-tyres.jpg',
    },
    {
      id: 7,
      name: 'Engine Bay Detailing',
      price: 150000,
      image: 'https://st3.depositphotos.com/1353074/32143/i/450/depositphotos_321436712-stock-photo-car-wash-worker-cleaning-car.jpg',
    },
  ];

  const handleDetails = (product) => {
    navigate(`/details/${product.id}`, { state: product });
  };

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div
            className="product-item"
            key={product.id}
            onClick={() => handleDetails(product)} // Klik area produk untuk navigasi ke halaman detail
            style={{ cursor: 'pointer' }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h4>{product.name}</h4>
            <p>Rp {product.price.toLocaleString()}</p>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Mencegah klik pada tombol men-trigger navigasi
                addToCart(product); // Menambahkan produk ke keranjang
              }}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
