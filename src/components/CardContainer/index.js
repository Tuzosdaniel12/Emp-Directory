import CardEmployee from "../CardEmployee.js";

function CardContainer({children}){
    return(
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 m-0">
        <CardEmployee/>
        <CardEmployee/>
        <CardEmployee/>
        <CardEmployee/>
    </div>
    )
}

export default CardContainer