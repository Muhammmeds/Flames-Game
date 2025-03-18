const Button = ({text , Handle}) =>{
    return(
        <button onClick={Handle} className="button">{text}</button>
    )
}

export default Button