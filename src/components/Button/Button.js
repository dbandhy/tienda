const Button = () => {
    return <button onclick={props.handleClick} style={{ color: "red"}}>{props.label}</button>


}

export default Button
