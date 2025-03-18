const InputText = ({placeholder, value, onChange , name , type}) =>{

    return(

        <input
        className="input-text"
        placeholder={placeholder}
        type='text'
        value={value}   
        onChange={onChange}   
        name = {name}
      />
    )
}

export default InputText;