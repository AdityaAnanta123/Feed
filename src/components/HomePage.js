// HomePage.js
import React from 'react';
import './HomePage.css';
import Image1 from '../images/1.jpg';
import Image2 from '../images/2.jpg';
import Image3 from '../images/abi.jpg';
import Image4 from '../images/4.jpg';
import Image5 from '../images/5.jpg';
// Import the styles for the home page

// ... rest of the code ...
const HomePage = () => {
  // Your data containing image URLs and captions
  return (
    <div className="cards-container">
      <div className="card">
      <img src={Image1} alt="Deskripsi gambar" width="150" height="23"/>
      <div className="card-caption">Dari Dewi</div>
      <div className="card-caption-wish">"Selamat Hari Ibu yang penuh makna! Terima kasih atas segala pengorbanan, kasih sayang, dan bimbingan yang telah Mama berikan kepada kami bertiga. Prestasi Dewi dalam menyelesaikan studi S2 adalah bukti cinta dan dukungan Mama yang tak terhingga."</div>
      </div>
      <div className="card">
      <img src={Image2} alt="Deskripsi gambar" width="150" height="23"/>
        <div className="card-caption">Dari Adit</div>
        <div className="card-caption-wish">"Selamat Hari Ibu, Mama tercinta! Terima kasih tak terhingga atas segala pengorbanan, kasih sayang, dan perhatian yang telah Mama berikan sejak adit kecil hingga tumbuh menjadi seorang mahasiswa. Maafkan segala ketidaksempurnaan dan kekecewaan yang mungkin saya timbulkan. Mama adalah sumber inspirasi dan kekuatan bagi saya."</div>
      </div>
      <div className="card">
      <img src={Image3} alt="Deskripsi gambar" width="150" height="23"/>
      <div className="card-caption">Dari Abi</div>
        <div className="card-caption-wish">"Selamat Hari Ibu, Mama tercinta! Maafkan abi atas setiap beban dan kerepotan yang sering kali menyulitkan hari-harimu. Abi berjanji untuk terus belajar dan berusaha menjadi lebih baik ke depannya. Setiap langkah yang abi ambil, abi dedikasikan untuk membahagiakan dan membanggakan Mama. "</div>
      </div>
      <div className="card">
      <img src={Image4} alt="Deskripsi gambar" width="150" height="23"/>
      <div className="card-caption">Dari Semuanya</div>
        <div className="card-caption-wish">"Foto di atas adalah bukti nyata kesuksesan Mama dalam mendidik anak-anak hingga saat ini. Semoga setiap langkah dan pencapaian kami menjadi cerminan dari ketekunan dan cinta kasih yang Mama tanamkan. Kami berharap dapat terus menjadi anak-anak yang berbakti kepada orang tua, menjalani hidup dengan penuh dedikasi, dan menghormati nilai-nilai yang telah Mama ajarkan. Selamat Hari Ibu, Mama tercinta! "</div>
      </div>
      <div className="card">
      <img src={Image5} alt="Deskripsi gambar" width="150" height="23"/>
      <div className="card-caption">Dari Semuanya</div>
        <div className="card-caption">"Sebuah potret indah, di mana setiap anak telah tumbuh menjadi pribadi mandiri, penuh dengan kenangan akan masa lalu yang telah membentuk langkah-langkah kami. Saat kami mengingat kembali perjalanan hidup ini, tergambar jelas bagaimana kasih sayang dan bimbingan Mama telah membawa kami ke titik ini. Semoga kami dapat terus menjalani kehidupan dengan penuh kebijaksanaan dan keberanian yang telah Mama tanamkan. Terima kasih Mama, atas segala upaya dan cinta tanpa batas. Selamat Hari Ibu!"</div>
      </div>
      {/* Add more cards as needed */}
    </div>
  );
};

export default HomePage;