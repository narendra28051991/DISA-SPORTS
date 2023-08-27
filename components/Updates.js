import Modal from "./add-ons/Modal";

const Updates = () => {
    return (
        <>
        <section className="bg-dark">
            <div className="container">
                <div className="text-center text-light">
                    <h2>Stay in The Loop</h2>
                    <p className="lead">Get the latest updates as they happen&hellip;</p>
                </div>
            
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <p className="text-light fw-lighter my-4">Inaugurated in 2022 in the Høje-Taastrup Kommune area, DISA is deeply committed to the principle of &ldquo;SPORTS-FOR-ALL.&rdquo; Our central aim revolves around cultivating all-encompassing sports involvement for families, transcending age limitations. Through trailblazing a unique genre of family sports pursuits, we are striving to bring a distinctive aspect to Denmark&rsquo;s leisure environment.</p>
                        <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#reg-modal">
                            Register for Updates
                        </button>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <p className="text-light">All Rights Reserved DISA &copy; {new Date().getFullYear()}</p>
                </div>

            </div>
        </section>

        <Modal />
        </>
     )
}
 
export default Updates;
