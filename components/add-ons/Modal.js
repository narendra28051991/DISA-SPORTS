const Modal = () => {

    const handleModalButtonClick = () => {
        window.location.href = "https://chat.whatsapp.com/LbAaxIaB2mQKw5l1SrhV7X";
    }

    return ( 
        <div className="modal fade" id="reg-modal" tabIndex="-1" aria-labelledby="modal-title" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-title">Get the Latest Updates</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>DISA&apos;s primary goal revolves around nurturing family-oriented sports engagements that cross generational boundaries. Through innovative family sports activities, we&apos;re introducing a distinct element to Denmark&apos;s recreational landscape, promoting inclusive and active community participation.</p>
                        <label htmlFor="modal-email" className="form-label">Email address:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="modal-email"
                            defaultValue="disa.denmark@gmail.com"
                            readOnly
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleModalButtonClick}>Find us</button>
                    </div>
                </div>
            </div>
        </div>
     )
}
 
export default Modal;
