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
                        <div className="row bg-success text-light p-3">
                            <div className="col-lg-8">
                                <div className="mb-4">
                                    <h4 className="fw-bold"><i className="bi-credit-card"></i> MobilePay:</h4>
                                    <p>box02714</p>
                                </div>
                                <div>
                                    <h4 className="fw-bold"><i className="bi-bank2"></i> Bank Transfer:</h4>
                                    <p><span className="fw-bold">Reg. Nr.:</span> 2277 <span className="fw-bold">Kontonr.:</span> 9031961316</p>
                                    <p><span className="fw-bold">IBAN DK:</span> 85 2000 9031 9613 16</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="mb-4">
                                    <Image src="/assets/mobilepay.jpg" width={200} height={200} className="img-fluid" alt="MobilePay" />
                                </div>
                                <div className="mb-4">
                                    <Image src="/assets/bank-transfer.png" width={200} height={200} className="img-fluid" alt="Bank Transfer" />
                                </div>
                            </div>
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
                        <div className="row bg-warning text-light p-3">
                            <div className="col-lg-8">
                                <h4>Celebrations</h4>
                                <p><strong><i className="bi-calendar-event mx-4"></i> Diwali</strong></p>
                                <p className="mb-4"><strong><i className="bi-calendar3 mx-4"></i> Nov 11, 2023</strong></p>
                                <p><strong><i className="bi-calendar-event mx-4"></i> Pongal</strong></p>
                                <p><strong><i className="bi-calendar3 mx-4"></i> Jan 13, 2024</strong></p>
                            </div>
                            <div className="col-lg-8">
                                <h4>Tournaments</h4>
                                <p><strong><i className="bi-calendar-event mx-4"></i> Carroms</strong></p>
                                <p className="mb-4"><strong><i className="bi-calendar3 mx-4"></i> Mar 16, 2024</strong></p>
                                <p><strong><i className="bi-calendar-event mx-4"></i> Badminton</strong></p>
                                <p><strong><i className="bi-calendar3 mx-4"></i> Apr 27, 2024</strong></p>
                            </div>
                            <div className="col-lg-8">
                                <h4>DISA</h4>
                                <p><strong><i className="bi-calendar-event mx-4"></i> Family Sports Day</strong></p>
                                <p><strong><i className="bi-calendar3 mx-4"></i> Jun 15, 2024</strong></p>
                            </div>
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
                        <div className="row bg-secondary text-light p-3">
                            <div className="col-lg-8">
                                <p><strong><i className="bi-calendar3"></i> Monday</strong></p>
                                <p><strong>Timings:</strong> 17:30 - 19:30</p>
                                <p><strong><i className="bi-geo-alt-fill"></i> Ole Rømer-Skolen, Gadehavegårdsvej 1, 2630 Taastrup</strong></p>
                                <h4 className="text-decoration-underline">Attentive Person</h4>
                                <p><strong><i className="bi-person-fill"></i> Yuvaraj Eswaramoorthy</strong></p>
                                <p><strong><i className="bi-telephone-fill"></i> +45 71568296</strong></p>
                            </div>
                            <div className="col-lg-4">
                                <Image src="/assets/carroms.jpg" width={200} height={300} className="img-fluid" alt="get-paid" />
                            </div>
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
                        <div className="row bg-secondary text-light p-3">
                            <div className="col-lg-8">
                                <p><strong><i className="bi-calendar3"></i> Wednesday</strong></p>
                                <p><strong>Timings:</strong> 17:00 - 20:00</p>
                                <p className="mb-4"><strong><i className="bi-geo-alt-fill"></i> Hall, Ole Rømer-Skolen, Gadehavegårdsvej 1, 2630 Taastrup</strong></p>
                                <h4 className="text-decoration-underline">Attentive Person</h4>
                                <p><strong><i className="bi-person-fill"></i> Vinod Kumar MS</strong></p>
                                <p><strong><i className="bi-telephone-fill"></i> +45 20634927</strong></p>
                                <p><strong><i className="bi-calendar3"></i> Friday</strong></p>
                                <p><strong>Timings:</strong> 18:00 - 20:00</p>
                                <p><strong><i className="bi-geo-alt-fill"></i> Læringshuset, Skolebakken 1, 2640 Hedehusene</strong></p>
                                <h4 className="text-decoration-underline">Attentive Person</h4>
                                <p><strong><i className="bi-person-fill"></i> Sujan Kumar Saha</strong></p>
                                <p><strong><i className="bi-telephone-fill"></i> +45 71316770</strong></p>
                            </div>
                            <div className="col-lg-4">
                                <Image src="/assets/badminton.jpg" width={200} height={300} className="img-fluid" alt="get-paid" />
                            </div>
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
                        <div className="row bg-secondary text-light p-3">
                            <div className="col-lg-8">
                                <p><strong><i className="bi-calendar3"></i> Thursday</strong></p>
                                <p><strong>Timings:</strong> @17:00</p>
                                <p><strong><i className="bi-geo-alt-fill"></i> Ole Rømer-Skolen, Gadehavegårdsvej 1, 2630 Taastrup</strong></p>
                                <h4 className="text-decoration-underline">Attentive Person</h4>
                                <p><strong><i className="bi-person-fill"></i> Srinivas Pindi</strong></p>
                                <p><strong><i className="bi-telephone-fill"></i> +45 41760613</strong></p>
                            </div>
                            <div className="col-lg-4">
                                <Image src="/assets/running.jpg" width={200} height={300} className="img-fluid" alt="get-paid" />
                            </div>
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
                        <div className="row bg-secondary text-light p-3">
                            <div className="col-lg-8">
                                <p><strong><i className="bi-calendar3"></i> Saturday</strong></p>
                                <p><strong>Timings:</strong> 10:00 - 11:00</p>
                                <p><strong><i className="bi-geo-alt-fill"></i> Ole Rømer-Skolen, Gadehavegårdsvej 1, 2630 Taastrup</strong></p>
                                <h4 className="text-decoration-underline">Attentive Person</h4>
                                <p><strong><i className="bi-person-fill"></i> Sudhipthi Chandrasekaran</strong></p>
                                <p><strong><i className="bi-telephone-fill"></i> +45 71490365</strong></p>
                            </div>
                            <div className="col-lg-4">
                                <Image src="/assets/yoga.jpg" width={200} height={300} className="img-fluid" alt="get-paid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Accordion;