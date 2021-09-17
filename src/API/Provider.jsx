import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
};

export const context=createContext()
export default function Provider(props) {

    const[products,setproducts]=useState([])

    const [token,settoken]=useState(()=>{

        const data=localStorage.getItem('token')
        return data ? data : ""
    })
    

    useEffect(() => {
      settoken(localStorage.getItem('token'))
    }, []);


    useEffect(() => {
       axios.get("http://127.0.0.1:8000/api/products",config)
       .then(response=>{
           console.log(response.data.products);

           setproducts(response.data.products)

       })
    }, []);



    function register(user)
    {
        axios.post("http://127.0.0.1:8000/api/register",user)
        .then(response=>{
            console.log(response.data);
            localStorage.setItem('token',response.data.token)
            window.location='/'
        })
    }

     function login(user) {
       axios
         .post("http://127.0.0.1:8000/api/login", user)
         .then((response) => {
           console.log(response.data);
           localStorage.setItem("token", response.data.token);
            window.location = "/";

         });
     }

     function logout()
     {
          axios
            .get("http://127.0.0.1:8000/api/logout",config)
            .then(() => {
              localStorage.clear()
              window.location = "/login";
            });
     }




    return (
        <div>

            <context.Provider value={{products,register,login,logout,token}}>
                {props.children}
            </context.Provider>
            
        </div>
    )
}
