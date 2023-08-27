import Image from "next/image";

import Accordion from "./add-ons/Accordion";

const Topics = () => {
    // topics at a glance
    return ( 
        <section id="topics">
            <div className="container-md">
                <div className="text-center">
                    <h2>Activities inside Association...</h2>
                    <p className="lead text-muted">A quick glance at why People love DISA</p>
                </div>
                <div className="row my-5 g-5 justify-content-around align-items-center">
                    <div className="col-sm-4 col-lg-6">
                        <Image src="/assets/association.jpg" width={500} height={500} className="img-fluid" alt="ebook"></Image>
                    </div>
                    <div className="col-lg-6">
                        <Accordion />
                    </div>
                </div>
            </div>
        </section>
     )
}
 
export default Topics;