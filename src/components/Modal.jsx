const Modal = ({text,Handle}) =>{
    return(
        <div className="modal">
            <div>
                <div>{text}</div>
                <div>
                    <span onClick={Handle}>Try again</span>
                </div>
            </div>

        </div>
    )
}

export default Modal