import React ,{useState,useEffect}from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import fireDb from '../../firebase'


const DisplayInfo = (props) => {
    const[user,setUser]=useState({})
    const { id } = useParams();

    useEffect(() => {
        fireDb.child(`personal-info/${id}`).get().then((snapshot) =>{
            if(snapshot.exists()){
                setUser({...snapshot.val()})
            }else{
                setUser({})
            }
        })
    }, [id])

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-5"> 
                  <div className="display-area shadow-sm bg-white p-5"> 
                      <p className="name">Name : <b>{user.name}</b> </p>
                      <p className="username"> Usernamr : <b>{user.username}</b></p>
                      <p className="email">Email : <b>{user.email}</b></p>
                      <p className="phone">Phone : <b>{user.phone}</b></p>
                      <p className="website"> Website : <b>{user.website}</b></p>
                      <Link to="/" className="btn btn-outline-secondary btn-sm text-capitalize float-end"> back to home</Link>

                  </div>
                </div> 
            </div> 
        </div>
        
    );
};

export default DisplayInfo;