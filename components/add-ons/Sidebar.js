import Link from "next/link";

const Sidebar = () => {
    // side panel / offcanvas
    return ( 
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebar" aria-labelledby="sidebar-label">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebar-label">My Other Options</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <p>Thank you for exploring DISA! Feel free to connect with us on Facebook, where you can stay updated with our latest news and events. We also have an active WhatsApp group where you can engage with fellow sports enthusiasts and get instant updates. Join us in the journey of promoting sports for all! For more information and inquiries, you can reach out to us through our Facebook page and WhatsApp group.</p>
                {/* dropdown */}
                <div className="dropdown mt-3">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="book-dropdown" data-bs-toggle="dropdown">
                    Contact us to find the perfect sport
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="book-dropdown">
                        <li><Link className="dropdown-item" href="https://www.facebook.com/DISAsportsdk">Facebook</Link></li>
                        <li><Link className="dropdown-item" href="https://chat.whatsapp.com/LbAaxIaB2mQKw5l1SrhV7X">WhatsApp</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
 
export default Sidebar;