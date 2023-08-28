import Link from "next/link";

const Navbar = () => {
    return (
        // navbar
        <nav className="navbar navbar-expand-md navbar-light pt-5 pb-4">
            <div className="container-xxl">
                {/* navbar brand / title */}
                <Link className="navbar-brand" href="#intro">
                <h1 className="fw-bold animate-character">
                    DISA
                </h1>
                </Link>
                {/* toggle button for mobile nav */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                {/* navbar links */}
                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" href="#topics">Activities</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#calendar">Calendar</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#contact">Get in Touch</Link>
                    </li>
                    <li className="nav-item d-md-none">
                    <Link className="nav-link" href="#pricing">Pricing</Link>
                    </li>
                    <li className="nav-item ms-2 d-none d-md-inline">
                    <Link className="btn btn-secondary" href="https://docs.google.com/forms/d/e/1FAIpQLSfH4MaKBC9a_xzcj_aEyo_SroLzJEi19RKmN-1_48fbgfUB7w/viewform">Join</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
     )
}
 
export default Navbar;