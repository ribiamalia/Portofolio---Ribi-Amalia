import React, { useEffect, useState } from 'react';
import bg from './assets/bg-1.jpg';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './style.css';
import profil from './assets/profil.jpg';
import Button from 'react-bootstrap/Button';
import dicoding from './assets/dicoding.jpg';
import smkcoding from './assets/smkcoding.jpg';
import gamejam from './assets/game-jam.jpg';
import logo from './assets/logo.png';
import smk from './assets/smk.jpg';
import smp from './assets/smp.jpg';
import sd from './assets/sd.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import smartlearn from './assets/smartlearn.png';
import smartlearn2 from './assets/smartlearn-hp.png';
import ProgressBar from "@ramonak/react-progress-bar";
import { useInView } from 'react-intersection-observer';
import html from './assets/html.png'
import css from './assets/css.png'
import php from './assets/php.png'
import react from './assets/react.png'
import laravel from './assets/laravel.png'
import biru from './assets/biru.png'
import design from './assets/design.png'

const View = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [htmlInView, setHtmlInView] = useState(false);
  const [cssInView, setCssInView] = useState(false);

  const { ref: htmlRef, inView: htmlVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => setHtmlInView(inView),
  });

  const { ref: cssRef, inView: cssVisible } = useInView({
    triggerOnce: true,
    onChange: (inView) => setCssInView(inView),
  });

  return (
    <>
    <div className='body'>
  <div id='header' className='header'>
    <div className='text-header w-md-50'>
      <h3 className='text mt-2'>RIBI</h3>
      <h3 className='text mt-2'>AMALIA</h3>
      <h5 className='text1 mt-2 fw-bold'>(Pelajar SMKN 1 Ciomas)</h5>
      <h5 className='text2 mt-2 fw-bold'>Web Programming</h5>
      <div className='button d-flex mt-5'>
        <Button href='#tentang' className=' d-flex'>Selengkapnya</Button>
      </div>
    </div>
    <div className='img d-flex justify-content-center align-items-center w-md-50'>
      <img src={profil} alt="Profile Picture" className='profile-img rounded-circle'/>
    </div>
  </div>


      
        <div id='tentang' className='tentang pt-5'>
          <Card className='saya pt-5 shadow p-3 mb-5 bg-body-tertiary rounded' style={{}}>
            <Card.Body className='tentang d-md-flex justify-content-evenly' style={{ gap: '2%' }}>
              <div className='satu' style={{  }} data-aos='fade-right'>
                <h4 className='text-primary' style={{ fontWeight: '1000' }}> Tentang Saya</h4>
                <hr style={{ width: '50px', border: '2px solid #0d6efd', fontWeight: '500', }} />
                <p style={{ textAlign: 'justify', fontWeight: '500', opacity: '0.8' }} className='animation pt-2'>Siswa SMK dengan jurusan Pengembangan Perangkat Lunak dan Gim yang memiliki antusiasme dalam pengembangan perangkat lunak. Paham akan konsep-konsep pemprograman dan pengembangan perangkat lunak. Saya adalah individu yang semangat untuk terus belajar dan berkembang. Saya juga memiliki kemampuan komunikasi yang baik, mudah beradaptasi dan mampu bekerja sama dalam tim dengan baik serta aktif dalam organisasi di sekolah.</p>
              </div>
              <div data-aos='fade-left'>
                <h4 style={{ fontWeight: '1000' }} className='pb-2 text-primary'>Informasi Lainnya</h4>
                <hr style={{ width: '50px', border: '2px solid #0d6efd' }} />
                <table className='w-100 pt-2' style={{ width: '100%' }}>
                  <tbody className='mt-2' style={{ fontWeight: '500' }}>
                    <tr>
                      <td className='mr-2 w-100' style={{ paddingRight: '15px' }}>Tempat, Tanggal Lahir</td>
                      <td style={{ paddingRight: '15px' }}>:</td>
                      <td style={{ opacity: '0.8' }}>Bogor, 26 April 2006</td>
                    </tr>
                    <tr>
                      <td className=''>Alamat</td>
                      <td>:</td>
                      <td style={{ opacity: '0.8' }}> Bogor, Jawa Barat</td>
                    </tr>
                    <tr>
                      <td className=''>No. Telepon</td>
                      <td>:</td>
                      <td style={{ opacity: '0.8' }}>+62 857 1916 9975</td>
                    </tr>
                    <tr>
                      <td className=''>Email</td>
                      <td>:</td>
                      <td style={{ opacity: '0.8' }}>ribiamalia28@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>

          <div id='skills'>
          <div id='soft' className='soft'>
            <div>
              <h4 className='head text-center text-primary' style={{  }}>Soft Skill</h4>
              <hr style={{ width: '50px', border: '2px solid #0d6efd', fontWeight: '500', textAlign:'center', marginLeft:'auto', marginRight:'auto' }} />
            </div>

            <div  className='skil d-md-flex text-center mt-5 justify-content-evenly mb-5' data-aos='zoom-in'>
              <div >
                <div >
                  <i style={{ }} className="bi bi-people-fill"></i>
                </div>
                <div>Bekerjasama dalam tim</div>
              </div>
              <div>
                <div>
                  <i style={{  }} className="bi bi-lightbulb-fill"></i>
                </div>
                <div>Berpikir kritis</div>
              </div>
              <div>
                <div>
                  <i style={{ }} className="bi bi-mic-fill"></i>
                </div>
                <div>Komunikasi dengan baik</div>
              </div>
            </div>
          </div>
          <div id='hard' className='hard'>
            <div>
              <h4 className='head text-center' style={{ fontWeight: '1000', margin: '0 7%', color:'#0d6efd' }}>Hard Skill</h4>
              <hr style={{ width: '50px', border: '2px solid #0d6efd', fontWeight: '500', marginLeft:'auto', marginRight:'auto' }} />
            </div> 

            <div className='isi d-md-flex justify-content-between' style={{}} >
              <div className=' bar z-50 items-center  mt-52 gap-10'>
                <div className='w-100 mt-5' >
                  <div data-aos='fade-down' className='bg-white shadow pt-2' style={{ borderRadius:'5px'}}>
                    <div className='d-flex' style={{marginLeft:'15px'}}>
                  <img style={{width:'25px',height:'25px'}} src={html} alt="" />
                  <p className='bar1 pl-2' style={{marginLeft:'5px', alignItems:'center'}}>
                    Html
                  </p>
                  </div>
                  <div ref={htmlRef} style={{marginTop:'-2%'}} >
                    <ProgressBar completed={htmlInView ? 95 : 0} bgColor='blue' barContainerClassName="container" animateOnRender={true} />
                  </div>
                  </div>
                  <div data-aos='fade-down' className='bg-white shadow pt-2 mt-4' style={{ borderRadius:'5px'}}>
                  <div className='d-flex' style={{marginLeft:'15px'}}>
                  <img style={{width:'30px',height:'25px'}} src={css} alt="" />
                  <p className='bar1' style={{marginLeft:'5px'}}>Css</p>
                   </div>
                  <div ref={cssRef} style={{marginTop:'-2%'}}>
                    <ProgressBar completed={cssInView ? 85 : 0} bgColor='blue' barContainerClassName="container" animateOnRender={true} />
                  </div>
                  </div>
                  
                  <div data-aos='fade-down' className='bg-white shadow pt-2 mt-4' style={{ borderRadius:'5px'}}>
                  <div className='d-flex' style={{marginLeft:'15px'}}>
                  <img style={{height:'25px'}} src={php} alt="" />
                  <p className='bar1' style={{marginLeft:'5px'}}>Php</p>
                   </div>
                  <div ref={cssRef} style={{marginTop:'-2%'}}>
                    <ProgressBar completed={cssInView ? 60 : 0} bgColor='blue' barContainerClassName="container" animateOnRender={true} />
                  </div>
                  </div>
                  <div data-aos='fade-down' className='bg-white shadow pt-2 mt-4' style={{ borderRadius:'5px'}}>
                  <div className='d-flex' style={{marginLeft:'15px'}}>
                  <img style={{width:'25px',height:'25px'}} src={laravel} alt="" />
                  <p className='bar1' style={{marginLeft:'5px'}}>Laravel 10</p>
                   </div>
                  <div ref={cssRef} style={{marginTop:'-2%'}}>
                    <ProgressBar completed={cssInView ? 60 : 0} bgColor='blue' barContainerClassName="container" animateOnRender={true} />
                  </div>
                  </div>
                  <div data-aos='fade-down' className='bg-white shadow pt-2 mt-4' style={{ borderRadius:'5px'}}>
                  <div className='d-flex' style={{marginLeft:'15px'}}>
                  <img style={{width:'25px',height:'25px'}} src={react} alt="" />
                  <p className='bar1' style={{marginLeft:'5px'}}>React</p>
                   </div>
                  <div ref={cssRef} style={{marginTop:'-2%'}}>
                    <ProgressBar completed={cssInView ? 50 : 0}  bgColor='blue' barContainerClassName="container" animateOnRender={true} />
                  </div>
                  </div>
                </div>
              </div>
              <div className='w-md-50 align-items-center d-flex align-content-center justify-content-center'>
                <img className='pc' src={design}  alt="" />
              </div>
            </div>
          </div>
          </div>
          <div id='Sertif' className='Sertif' style={{ paddingBottom: '5%' }}>
            <div>
              <h2 style={{ fontWeight: '1000',  }} className='text-center pt-5 text-primary'>  Sertifikat</h2>
              <hr style={{ width: '50px', border: '2px solid #0d6efd', fontWeight: '500', marginLeft:'auto', marginRight:'auto' }} />
            </div>
            <div className='box d-md-flex justify-content-evenly ' style={{ marginTop: '5%' }}>
              <Card className='sertif shadow' style={{  }} data-aos='fade-down'>
                <Card.Img className='p-2' style={{ borderRadius: '15px' }} variant="top" src={dicoding} />

                <Card.Body>
                  <Card.Title>
                  <p className='tanggal' style={{}}>Oktober 2023 - Desember 2023</p ><p className='text4'>Pelatihan Dasar Pemprograman (Dicoding)</p></Card.Title>


                </Card.Body>
              </Card>

              <Card className='sertif shadow' data-aos='fade-down' style={{  }}>
                <Card.Img className='p-2' style={{ borderRadius: '15px' }} variant="top" src={smkcoding} />
                <Card.Body>

                  <Card.Title> <p  className='tanggal' style={{  }}>Oktober 2023 - Desember 2023</p><p className='text4'>Pelatihan Progressive Web App Nuxt Js SMK Codiing (SMK Coding)</p>
                  </Card.Title>

                </Card.Body>
              </Card>

              <Card className='sertif shadow' data-aos='fade-down' style={{}}>
                <Card.Img className='p-2' style={{ borderRadius: '15px' }} variant="top" src={gamejam} />
                <Card.Body >

                  <Card.Title>
                    <p  className='tanggal' style={{ }}>Juli 2023</p>
                    <p className='text4'>
                    Bogor Game Jame 2023</p>
                  </Card.Title>


                </Card.Body>
              </Card>

            </div>

          </div>

          <div id='projek' style={{ margin: '0% 7%', gap: '5%' }} className='py-5 d-md-flex justify-content-between'>
            <div data-aos='fade-right'>
              <h2 style={{ fontWeight: '1000' }} className='text-primary'>Projek</h2>
              <hr style={{ width: '50px', border: '2px solid #0d6efd', fontWeight: '500',  }} />
              <p style={{ fontWeight: '800', opacity: '0.8' }} className='mb-3'>Uji Level 2024 - SMKN 1 Ciomas</p>
              <p style={{ textAlign: 'justify', fontWeight: '500', opacity: '0.8' }}>Dalam proyek uji level ini, kami mengembangkan aplikasi inovatif bernama SMART-LEARN, sebuah platform pembelajaran siswa berbasis web. Sebagai backend developer, saya bertanggung jawab atas pengembangan dan pemeliharaan server, database, serta API yang diperlukan untuk mendukung fungsionalitas aplikasi. Tugas saya mencakup perancangan arsitektur backend yang efisien, implementasi fitur-fitur penting, serta memastikan keamanan dan kinerja sistem. Selama 5 bulan, kami bekerja dalam tim yang terdiri dari frontend developer, UX/UI designer, dan project manager. Kolaborasi yang efektif dan komunikasi yang baik antar anggota tim memungkinkan kami untuk mengatasi berbagai tantangan teknis dan non-teknis. Melalui kerja keras dan dedikasi, kami berhasil menyelesaikan proyek ini tepat waktu dengan hasil akhir yang cukup memuaskan.</p>
              <div>
                <Button href='https://smartlearn.pplg-one-xv.my.id' className='mt-3'>Lihat Demo</Button>
              </div>
            </div>
            <div className='smartlearn d-flex align-items-center' style={{}} data-aos='zoom-in' >

            <img src={smartlearn2} className='laptop' style={{ }} alt="" />
            <img src={smartlearn} className='' style={{  }} alt="" />
            </div>
          </div>

        </div>

       

      </div>
      <div id='footer' className='footer py-3 bg-primary d-md-flex ' style={{}} >
        <div className='nama d-flex align-items-center align-self-center text-center text-white' style={{}}>
          <h3>RIBI AMALIA</h3>
        </div>
        <div className='lokasi' style={{}}>
          <p className='text-white' style={{fontWeight:'700'}}>Lokasi</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.337613273235!2d106.78464657022518!3d-6.6049016499291096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5be91fbec3b%3A0x6cebd765b6f1d6ba!2sJl.%20Pancasan%20Baru%2C%20Pasir%20Jaya%2C%20Kec.%20Bogor%20Bar.%2C%20Kota%20Bogor%2C%20Jawa%20Barat%2016119!5e0!3m2!1sid!2sid!4v1721564537177!5m2!1sid!2sid"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='kontak align-items-start' style={{}} >
          <p className='text-white' style={{fontWeight:'700'}} >
            Kontak
          </p>
          <div className='mr-2' style={{color:'white', marginRight:'2%'}}>
          <a className='text-white' href="https://wa.me/qr/ZDVKW355HLC3M1"><i class="bi bi-whatsapp " style={{marginRight:'2%'}}></i></a>
          <a  className='text-white' href="https://www.instagram.com/ribi_lya26?igsh=MTF2amdjNGMycnFrcg=="><i class="bi bi-instagram" style={{marginRight:'2%'}}></i></a>
          <a className='text-white' href="https://mail.google.com/mail/u/0/#inbox"><i class="bi bi-envelope"></i></a>
          </div>
        </div>
        </div>


      <div style={{backgroundColor:'#0864ef',}} >
      <p  className='text-center text-white' style={{fontSize:'12px'}}>2023 copyright @ Ribi Amalia</p>
      </div>
       
     
      

    </>
  )
}

export default View;
