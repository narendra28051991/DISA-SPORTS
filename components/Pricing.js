import Link from "next/link";

const Pricing = () => {
    // pricing plans
    return (
        <section id="pricing" className="bg-light mt-5">
            <div className="container-lg">
                <div className="text-center">
                <h2>Sports Membership</h2>
                <p className="lead text-muted">Choose a plan that suit you.</p>
                </div>

                <div className="row my-5 g-0 align-items-center justify-content-center">
                <div className="col-8 col-lg-4 col-xl-3">
                    <div className="card border-0 card-border">
                    <div className="card-body text-center py-4">
                        <h4 className="card-title">Single Edition</h4>
                        <p className="lead card-subtitle">Individual only</p>
                        <p className="display-5 my-4 text-primary fw-bold">250.00 kr</p>
                        <p className="card-text mx-5 text-muted d-none d-lg-block">Crafted for sports enthusiasts and adults aged 18 and above, offering sophisticated experiences.</p>
                        <Link href="#topics" className="btn btn-outline-primary btn-lg mt-3 card-border">
                        Pay Now
                        </Link>
                    </div>
                    </div>
                </div>

                <div className="col-9 col-lg-4">
                    <div className="card border-primary border-2">
                    <div className="card-header text-center text-primary">Most Popular</div>
                    <div className="card-body text-center py-5">
                        <h4 className="card-title">Family Edition</h4>
                        <p className="lead card-subtitle">Adults & Children</p>
                        <p className="display-4 my-4 text-primary fw-bold">500.00 kr</p>
                        <p className="card-text mx-5 text-muted d-none d-lg-block">Created with families in mind, for two adults and two children under 10 years, our offering blends recreation, leisure, and sports for enjoyable, sophisticated experiences.</p>
                        <Link href="#topics" className="btn btn-outline-primary btn-lg mt-3">
                        Pay Now
                        </Link>
                    </div>
                    </div>
                </div>

                <div className="col-8 col-lg-4 col-xl-3">
                    <div className="card border-0">
                    <div className="card-body text-center py-4">
                        <h4 className="card-title">Bonus Edition</h4>
                        <p className="lead card-subtitle">Event membership & extras</p>
                        <p className="display-5 my-4 text-primary fw-bold">100.00 kr</p>
                        <p className="card-text mx-5 text-muted d-none d-lg-block">Experience unparalleled perks and privileges with our limited-time Bonus Edition and Event Membership!</p>
                        <Link href="#topics" className="btn btn-outline-primary btn-lg mt-3">
                        Pay Now
                        </Link>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </section>
     )
}
 
export default Pricing;