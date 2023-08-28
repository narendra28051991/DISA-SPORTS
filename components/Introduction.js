import Link from "next/link";
import Image from "next/image";

import Sidebar from "./add-ons/Sidebar";

const Introduction = () => {
    return (
        <>
        <section id="intro">
            <div className="container-lg">
                <div className="row g-4 justify-content-center align-items-center">
                    <div className="col-md-5 text-center text-md-start">
                    <h1>
                        <div className="display-2 fullform">Denmark Indian</div>
                        <div className="display-5 text-muted fullform">Sports Association</div>
                    </h1>                    <p className="lead my-4 text-muted">Established in 2022 within the Høje-Taastrup Kommune, DISA is dedicated to the pursuit of &ldquo;SPORTS-FOR-ALL&rdquo;. Our primary objective centers around fostering inclusive family-oriented sports engagements that transcend age barriers. By pioneering a novel category of family sports activities, we aim to introduce a distinctive facet to Danish society&rsquo;s recreational landscape.</p>
                    <Link href="#pricing" className="btn btn-secondary btn-lg">Registrations Open</Link>
                    {/* open sidebar / offcanvas */}
                    <Link href="#sidebar" className="d-block mt-3" data-bs-toggle="offcanvas" role="button" aria-controls="sidebar">
                        Learn about our sports programs
                    </Link>
                    </div>
                    <div className="col-md-5 col-sm-3 text-center d-md-block d-sm-block">
                    {/* tooltip */}
                    <span className="tt" data-bs-placement="bottom" title="DISA logo">
                        <Image
                            src="/assets/disa-logo.png"
                            className="img-fluid"
                            width={500}
                            height={500}
                            priority alt="ebook"
                        />
                    </span>
                    </div>
                </div>
            </div>
        </section>

        <Sidebar />
        </>
    )
}
 
export default Introduction;
