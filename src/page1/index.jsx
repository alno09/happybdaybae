import './HbdStyle.css';
import bell from './bell.png';
import dekorultah from './dekorultah.png';
import cake from './cakey.gif';


const HbdToYou = () => {
  const handleButtonClick = () => {
    window.scrollBy({
      top: window.innerHeight, // Jarak yang akan digulung (tinggi layar saat ini)
      behavior: 'smooth', // Animasi scroll
    });
  };


  return (
    <div><br /><br /><br />
        <div className='page1'>
            <img src={bell} alt="lonceng" className='bell' onClick={handleButtonClick} />
            <br /><br />
            <h1>ADA PESAN BUAT KAMU !!!</h1>
            <p>Tekan lonceng untuk membuka pesan</p>
            </div>
            
            <div className='bday-cake'>
              <img src={dekorultah} alt="" className='dekor-kiri' />
              <div className='teks-ucapan'>
                <h3>Selamat Ulang Tahun</h3>
                <h1>Lenta Kristina Sianturi</h1>
              </div>
              <img src={cake} alt="" className='cake' />
              <button onClick={handleButtonClick} className='btn'>Ini pesannya</button>
            </div>

            <div className='wishcard'>
              <div class="body">
                <div class="birthdayCard">
                <div class="cardFront"><h3 class="happy">Harapanku Untukmu</h3>
                <div class="balloons">
                  <div class="balloonOne"></div>
                  <div class="balloonTwo"></div>
                  <div class="balloonThree"></div>
                  <div class="balloonFour"></div>
                </div>
                </div>
                <div class="cardInside">
                    <p contenteditable="true">Untuk Lenta cantik manis dan imut,</p> 
                    <p contenteditable="true">Jaga diri baik-baik yaa setelah pulang nnti, jan lupa smkuu. maaf suka bikin kesal satu tahun ini, maaf juga kmarin icekny gabalas. nnti klo aku ada rejeki aku main rumah ditunggu yaa, semoga cepet dapet kerja yg cocok semoga selalu diberkati Tuhan dan semoga kita bisa sama-sama terus yaa.</p>
                  </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default HbdToYou;