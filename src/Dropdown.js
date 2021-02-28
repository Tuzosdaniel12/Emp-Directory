function Dropdown(){
    return(
     <div className="input-group-prepend">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter By:</button>
        <ul className="dropdown-menu">
            <li className="dropdown-item" href="#">Name A-Z</li>
            <li className="dropdown-item" href="#">Email A-Z</li>
            <li className="dropdown-item" href="#">Phone</li>
        </ul>
    </div>
    )
}

export default Dropdown