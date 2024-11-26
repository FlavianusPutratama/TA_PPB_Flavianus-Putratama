import React from 'react';
import { useLocation } from 'react-router-dom';
import './Details.css';

function Details({ addToCart }) {
  const location = useLocation();
  const product = location.state;

  // Deskripsi berdasarkan ID produk
  const descriptions = {
    1: `Interior Detailing melibatkan pembersihan mendalam pada seluruh bagian interior kendaraan. Proses ini mencakup penghilangan debu, kotoran, dan noda dari dashboard, jok, karpet, plafon, hingga panel pintu. Dengan alat khusus dan bahan pembersih berkualitas, Interior Detailing tidak hanya memberikan tampilan yang bersih dan rapi, tetapi juga menjaga kebersihan yang mendukung kenyamanan berkendara, sekaligus mencegah kerusakan akibat kotoran yang menumpuk.`,
    
    2: `Coating adalah perlindungan inovatif untuk cat mobil yang melibatkan aplikasi lapisan khusus berbahan dasar keramik atau polimer. Proses ini menciptakan lapisan pelindung yang tahan terhadap cuaca ekstrem, sinar UV, serta noda air. Selain menjaga cat tetap bersinar, coating juga mempermudah perawatan kendaraan dengan mengurangi risiko goresan ringan, sehingga mobil Anda selalu tampak seperti baru.`,
  
    3: `Polishing adalah proses perawatan permukaan kendaraan yang bertujuan menghilangkan goresan ringan, oksidasi, dan noda membandel pada cat. Dengan penggunaan bahan polishing berkualitas, prosedur ini mengembalikan kilau alami kendaraan Anda dan meningkatkan estetika secara signifikan. Polishing juga memberikan dasar sempurna sebelum aplikasi perlindungan seperti waxing atau coating.`,
  
    4: `Basic Wash adalah layanan pembersihan kendaraan yang fokus pada penghilangan debu, lumpur, dan kotoran dari permukaan eksterior. Dengan metode pencucian yang hati-hati menggunakan sabun khusus dan alat bertekanan rendah, Basic Wash memastikan kendaraan Anda bersih tanpa merusak cat. Layanan ini cocok untuk perawatan rutin dan menjaga kendaraan tetap terlihat segar setiap hari.`,
  
    5: `Glass Treatment adalah perawatan khusus untuk kaca kendaraan yang menciptakan lapisan pelindung anti air dan noda. Proses ini membantu meningkatkan visibilitas pengemudi, terutama saat hujan deras, dengan efek water-repellent. Selain itu, Glass Treatment juga melindungi kaca dari goresan dan memperpanjang umur lapisan kaca, sehingga kendaraan Anda tetap aman dan tampil sempurna.`,
  
    6: `Tire Dressing adalah layanan perawatan ban yang memberikan tampilan kilap seperti baru dan melindungi ban dari keretakan akibat paparan sinar UV dan cuaca ekstrem. Dengan bahan berkualitas tinggi, Tire Dressing menjaga elastisitas dan kekuatan ban, sekaligus meningkatkan estetika keseluruhan kendaraan Anda. Ban yang terawat bukan hanya lebih aman, tetapi juga membuat kendaraan tampak lebih elegan.`,
  
    7: `Engine Bay Detailing adalah layanan pembersihan menyeluruh di ruang mesin kendaraan. Proses ini melibatkan penghilangan kotoran, oli, dan debu yang dapat memengaruhi kinerja mesin. Dengan peralatan khusus, setiap sudut ruang mesin dibersihkan tanpa merusak komponen sensitif. Engine Bay Detailing memastikan mesin kendaraan Anda bekerja optimal, meningkatkan keandalan, dan menjaga nilai jual kendaraan tetap tinggi.`,
  };
  

  // Alasan memilih berdasarkan ID produk
  const whyChoose = {
    1: ['Menjaga kebersihan interior kendaraan Anda.', 'Meningkatkan kenyamanan berkendara.', 'Mengurangi risiko alergi akibat debu.'],
    2: ['Perlindungan tahan lama terhadap cat mobil.', 'Meningkatkan kilau dan daya tarik visual.', 'Mengurangi kerusakan akibat cuaca ekstrem.'],
    3: ['Menghilangkan goresan ringan pada permukaan.', 'Meningkatkan daya jual kendaraan.', 'Memberikan tampilan yang profesional.'],
    4: ['Cocok untuk perawatan rutin.', 'Membersihkan secara efisien dalam waktu singkat.', 'Biaya terjangkau untuk hasil maksimal.'],
    5: ['Meningkatkan visibilitas saat berkendara.', 'Melindungi kaca dari noda dan goresan.', 'Memberikan tampilan kaca yang bersih sempurna.'],
    6: ['Memperpanjang umur ban kendaraan.', 'Meningkatkan estetika kendaraan.', 'Menjaga ban tetap elastis dan kuat.'],
    7: ['Meningkatkan kinerja mesin.', 'Memastikan ruang mesin bebas kotoran.', 'Meningkatkan nilai jual kendaraan.'],
  };

  return (
    <div className="details">
      <div className="details-left">
        <img className="product-image" src={product.image} alt={product.name} />
      </div>
      <div className="details-right">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">Price: Rp {product.price.toLocaleString()}</p>
        <div className="description">
          <h3>Description:</h3>
          <p>{descriptions[product.id]}</p>
        </div>
        <div className="why-choose">
          <h3>Why Choose This Treatment?</h3>
          <ul>
            {whyChoose[product.id].map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Details;
