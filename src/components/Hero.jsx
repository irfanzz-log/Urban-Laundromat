import Link from "next/link"

export default function Hero () {
    return (
        <>
        <section id='body-information'>
        <div className="hero-body">
          <div className="hero-body-content col-lg-6 col-10">
            <p className='hero-body-text col-lg-6 col-10'>Self-Service Laundry In Your City</p>
            <p>We take care cleannes your cloth</p>
            <Link className='hero-action p-3' href='#card-body'>Explore</Link>
          </div>
        </div>
      </section>
    </>
    )
}