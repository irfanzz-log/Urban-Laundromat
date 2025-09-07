import Navigation from '@/src/components/Navigation.jsx';
import Hero from '@/src/components/Hero.jsx';
import Card from '@/src/components/Card.jsx';
import CompanyProfile from '@/src/components/CompanyProfile.jsx';
import Footer from '@/src/components/Footer.jsx';


export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <section id='card-body'>
        <div className="container">
          <div className="cards">
            <div className="card-header">
              <p className='text-header fs-3 fw-bold'>This Is How We Work</p>
            </div>
            <div className="cards-content row">
              <Card
                img='24h.png'
                header='24 Hours Autopilot'
                text='Bisnis tetap berjalan tanpa henti. Dengan sistem self-service 24 jam, Anda bisa melayani pelanggan kapan saja tanpa perlu tambahan karyawan.'
              />
              <Card
                img='clean.png'
                header='Clean'
                text='Mesin modern memastikan hasil cucian higienis, wangi, dan konsisten. Hal ini meningkatkan kepercayaan pelanggan sekaligus menjaga standar bisnis Anda.'
              />
              <Card
                img='cashless.png'
                header='Cashless Payment'
                text='Sistem cashless mengurangi risiko uang tunai dan memudahkan pencatatan keuangan. Semua transaksi tercatat otomatis, lebih aman dan efisien.'
              />
            </div>
          </div>
        </div>
      </section>

      <CompanyProfile />

      <section id='partner' className='mt-5'>
        <div className="partnerBody">
          <div className="partnerHead">
            <p className='text-head fw-bold fs-3'>Partner Kami</p>
          </div>
          <div className="partnerImg">
            <img className='partnerIcon' src="/img/icon/uwash.png" alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
