function Dropdown(){

    const showDropdown = (action) => {
        document.querySelector(".dropdown-menu").style.display = action
    };

    const items = [
        {
            text:"Name A-Z"
        },
        {
            text:"Email A-Z"
        },
        {
            text:"Phone"
        }
    ]

    return(
     <div className= "input-group-prepend" >
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => showDropdown("block")}>Filter By:</button>
        <ul className="dropdown-menu">
            {
                items.map(({text}) => {
                    return <li className="dropdown-item" data-action={text} onClick={() => showDropdown("none")}>{text}</li>
                })
            }
        </ul>
    </div>
    )
}

export default Dropdown