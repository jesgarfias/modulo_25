import axios from "axios";
import React, { useState, useEffect } from "react";
import "../MovContainer/styles.css"
const MovContainer=()=>{
    //setear los hooks de estado para el manejo de los datos y para el manejo del input
    const [user,setUser]=useState([]);
    const[search,setSearch]=useState("")
    //traer datos de API
    const userApi='https://jsonplaceholder.typicode.com/users';

    const userData=async()=>{
        try {
            const res= await axios.get(userApi);
            const showUsers= res.data;
            setUser(showUsers);
            console.log(showUsers);
        } catch (error) {
            console.error(error);   
        }
    }
    useEffect (()=>{
        userData()
    },[]);


    //metodo de filtrado
    let result=[];
    if(!search){
        result=user;
    }else{
        result= user.filter((userd)=>
            userd.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }
    //funcion de busqueda
    const handleSearch=(e)=>{
        setSearch(e.target.value);
    }

    return(
        <section>
            <section className="form_container">
                <input value={search} type="text" name="title" placeholder="Search" onChange={handleSearch}></input>
            </section>
            <section className="title_container">
                <h2>usuarios registrados</h2>
            </section>
            <section className="tableContainer">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>username</th>
                            <th>email</th>    
                        </tr>  
                    </thead>
                    <tbody>
                        {
                            result.map(user=>(
                                <tr key={user.id}>
                                    <td data-title="nombre:">{user.name}</td>
                                    <td data-title="usuario:">{user.username}</td>
                                    <td data-title="email:">{user.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </section>

    )
}
export default MovContainer;