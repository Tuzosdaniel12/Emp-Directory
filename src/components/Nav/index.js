import Dropdown  from "../Dropdown";
import Search from "../Search";

function Nav(){
    return(
        <nav className="input-group mb-3">
            <Dropdown/>
            <Search/>
        </nav>
    )
}
export default Nav