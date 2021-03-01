import CardContainer from "../CardContainer"
import React, { useState, useEffect } from "react";
import Container from "../Container"
import Nav from "../Nav"
import API from "../../utils/API.js"

const MainSection = () =>{
    
    const [employeeList, setEmployeeListState] = useState([]);
    const [search, setSearch] = useState("");
    const [employeeEmail, setEmailState] = useState([]);
    const [employeePhone, setPhoneState] = useState([]);
    const [employeeAge, setAgeState] = useState([]);
    const [displayState, setDisplayState] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
        const list = await API.getEmployees(80);
                //console.log(list.data.results)

                const empList = list.data.results.map(emp =>{
                    return{
                        firstName:emp.name.first,
                        lastName:emp.name.last,
                        phone:emp.cell,
                        age:emp.dob.age,
                        picture:emp.picture.large,
                        email:emp.email,
                    }
                })
                setEmployeeListState(empList);
                setDisplayState(empList);
        }
        fetchMyAPI()
    }, [])
    
    useEffect(() => {
        if(!search){
            return setDisplayState(employeeList)
        }
        if(search === "Name A-Z"|| search === "Email A-Z" || search === "Phone"){

        }
        const newList = employeeList.filter(
            ({age,email,firstName,lastName,phone,picture}) =>{
                console.log(typeof age)
            if(
                age.toString().includes(search) 
                || email.includes(search) 
                || firstName.includes(search) 
                || lastName.includes(search) 
                || phone.toString().includes(search) ){
                return true
            }return false
        })
        
        setDisplayState(newList)

    }, [search]);

    const handleInputChange = event => {
        setSearch(event.target.value);
    }

    const handleSortBy = (sortBy) => {
        console.log("here ", sortBy);
    }

    return(
        <section>
            <Container>
                <Nav 
                 handleInputChange={handleInputChange}
                 handleSortBy={handleSortBy}
                 results={search}
                />
                <CardContainer empList={displayState}/>
            </Container>
        </section>
    )
}

export default MainSection