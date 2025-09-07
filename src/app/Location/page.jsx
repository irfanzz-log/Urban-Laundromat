import Navigation from '@/src/components/Navigation.jsx';
import Footer from '@/src/components/Footer.jsx';
import items from '@/public/data/data.json'

export default function Location() {
    return (
        <>
            <Navigation />
            <section id='outletLocation'>
                <div className="outletContent mx-5">
                    <div className="outletContentHead my-3">
                        <h4 className='outletContentHeadText'>All Outlet</h4>
                    </div>
                    <div className="outletContentBody row col-lg-12">

                        {items.map(item => {
                            return (
                                <div key={item.id} className='outletCard mx-2 col-lg-3'>
                                    <div className="outletCardImg">
                                        <img className='cardImg' src="/img/images/heropic.jpg" alt="" />
                                    </div>
                                    <div className="outletCardInfo">
                                        <p className='cardTextHead'>{item.data.outletName}</p>
                                        <p className='cardText'>{item.data.locationName}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}