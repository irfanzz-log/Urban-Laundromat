import Navigation from '@/src/components/Navigation.jsx';
import Footer from '@/src/components/Footer.jsx';
import CompanyProfile from '@/src/components/CompanyProfile.jsx';
import Floating from '@/src/components/Floating.jsx';

export const metadata = {
  title: "About | Urban Laundromat - Auto Pilot Laundry",
  description: "Laundry self service autopilot",
};

export default function About() {
    return (
        <>
            <Navigation />
            <CompanyProfile />

            <section id='aboutInfo2'>
                <div className="aboutInfoBody">
                    <div className="aboutInfoHead">
                        <h4>Tugas & tanggung Jawab Management PT Urban Mandiri Group</h4>
                    </div>
                    <div className="aboutInfoContent mt-4">
                        <ul>
                            <li className='aboutInfoText'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>Infrastruktur Outlet & Pemilihan Lokasi</li>
                            <li className='aboutInfoText'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>Pemilihan Mesin dan Sistem Operasional</li>
                            <li className='aboutInfoText'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                            </svg>Pembukuan Dari Masing-Masing Outlet</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id='aboutInfo' className='my-5'>
                <div className="aboutInfoBody">
                    <div className="aboutInfoHead">
                        <h4>Laundry Self Service Auto Pilot</h4>
                    </div>
                    <div className="aboutInfoContent mt-4">
                        <ul>
                            <li className='aboutInfoText'>1. Tanpa Karyawan</li>
                            <li className='aboutInfoText'>2. Tanpa Kasir</li>
                            <li className='aboutInfoText'>3. Buka 24 Jam</li>
                            <li className='aboutInfoText'>4. Libur Tetap Buka</li>
                            <li className='aboutInfoText'>5. Kapasitas Besar</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Floating />
            <Footer />
        </>
    )
}