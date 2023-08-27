import Image from "next/image";

const Accordion = () => {
        // accordion
    return ( 
        <div className="accordion" id="chapters">
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
                        Payments
                    </button>
                </h2>
                <div id="chapter-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p className="fw-bold">MobilePay:</p>
                        <div className="mx-auto col-sm-4 col-lg-6">
                            <p>box02714</p>
                        </div>
                        <div className="mx-auto col-lg-4">
                        <Image src="/assets/mobilepay.png" width={200} height={200} className="img-fluid" alt="get-paid"></Image>
                        </div>
                        <p className="fw-bold mt-3">Bank Transfer:</p>
                        <div className="mx-auto col-sm-4 col-lg-6">
                            <p>Reg. Nr.: <span className="fw-bold">2277</span> Kontonr.: <span className="fw-bold">9031961316</span></p>
                            <p>IBAN DK: <span className="fw-bold">85 2000 9031 9613 16</span></p>
                        </div>
                        <div className="mx-auto col-lg-4">
                        <Image src="/assets/bank-transfer.png" width={200} height={200} className="img-fluid" alt="get-paid"></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-2" aria-expanded="true" aria-controls="chapter-2">
                        Major Events
                    </button>
                </h2>
                <div id="chapter-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p className="fw-bold">Celebrations:</p>
                        <div className="mx-auto col-sm-4 col-lg-6">
                            <p>Diwali - Nov 11, 2023</p>
                            <p>Pongal - Jan 13, 2024</p>
                        </div>
                        <p className="fw-bold">Tournaments:</p>
                        <div className="mx-auto col-sm-4 col-lg-6">
                            <p>Carroms - Mar 16, 2024</p>
                            <p>Badminton - Apr 27, 2024</p>
                        </div>
                        <p className="fw-bold">DISA:</p>
                        <div className="mx-auto col-sm-4 col-lg-6">
                            <p>Family Sports Day - Jun 15, 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-3" aria-expanded="false" aria-controls="chapter-3">
                        Activity - 1: Carroms & Chess
                    </button>
                </h2>
                <div id="chapter-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>Monday, 17:30 - 19:30</p>
                        <p className="mx-4">Venue: Ole Rømer-Skolen, Gadehavegårdsvej 1, 2630 Taastrup</p>
                        <div className="mx-auto col-lg-4">
                        <Image src="/assets/carroms.jpg" width={200} height={300} className="img-fluid" alt="get-paid"></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-4" aria-expanded="false" aria-controls="chapter-1">
                    Activity - 2: Badminton
                    </button>
                </h2>
                <div id="chapter-4" className="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>Wednesday, 17:00 - 20:00</p>
                        <p className="mx-4">Venue: Hall, Ole Rømer-Skolen, Gadehavegårdsvej 1, 2630 Taastrup</p>
                        <p>Friday, 18:00 - 20:00</p>
                        <p className="mx-4">Venue: Læringshuset, Skolebakken 1, 2640 Hedehusene</p>
                        <div className="mx-auto col-lg-4">
                        <Image src="/assets/badminton.jpg" width={200} height={300} className="img-fluid" alt="withdraw"></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-5" aria-expanded="false" aria-controls="chapter-5">
                    Activity - 3: Running
                    </button>
                </h2>
                <div id="chapter-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>Thursday, @17:00</p>
                        <p className="mx-4">Venue: Ole Rømer-Skolen, Gadehavegårdsvej 1, 2630 Taastrup</p>
                        <div className="mx-auto col-lg-4">
                        <Image src="/assets/running.jpg" width={200} height={300} className="img-fluid" alt="withdraw"></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="heading-6">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-6" aria-expanded="false" aria-controls="chapter-6">
                    Activity - 4: Yoga
                    </button>
                </h2>
                <div id="chapter-6" className="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#chapters">
                    <div className="accordion-body">
                        <p>Saturday, 10:00 - 11:00</p>
                        <p className="mx-4">Venue: Ole Rømer-Skolen, Gadehavegårdsvej 1, 2630 Taastrup</p>
                        <div className="mx-auto col-lg-4">
                        <Image src="/assets/yoga.jpg" width={200} height={300} className="img-fluid" alt="withdraw"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Accordion;