import React ,{useState,useEffect} from 'react';
import { useNavigate,useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import fireDb from '../../firebase'

const initialState ={name:"",username:"",email:"",phone:"",website:""}

const AddEdit = (props) => {
    let  navigate = useNavigate();
    const[state,setState]=useState(initialState);
    const[data,setData]=useState({})
    const{name,username,email,phone,website}=state;
    const {id} = useParams();

    useEffect(() =>{ 
        fireDb.child("personal-info").on("value" , (snapshot)=>{
            if(snapshot.val() !== null){
                setData({...snapshot.val()})
            }else{
                setData({})
            }
        });
        return () =>{
            setData({});
        }
     },[id]);

    useEffect(() => {
        if(id){
             setState({...data[id]}) 
        }else{
            setState({...initialState}) 
        }

        return () => {
            setState({...initialState}) 
        }

    }, [id,data])

    const onInputChange = e =>{
        setState({...state,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) =>{ 
        e.preventDefault();
        if(!name || !username || !email || !phone || !website )
        {
           toast.error('Please provide value in each input field')
        }else{
            if(!id){
                
            fireDb.child("personal-info").push(state ,(err) =>{
                if(err){
                    toast.error(err);
                }else{
                    toast.success('Contact add successfully');
                }
            });
            } else{
                
            fireDb.child(`personal-info/${id}`).set(state ,(err) =>{
                if(err){
                    toast.error(err);
                }else{
                    toast.success('Contact update successfully');
                }
            });
            }
            setTimeout(() => { navigate("/") },500);   
        }
    }

    return (

	<div className="container py-5">
		<div className="row ">
			<div className="col-lg-10 text-capitalize"> 
			     <h2 className="fs-4">{props.title}</h2>
			</div>
		</div>
		<div className="row py-3">
			<div className="col-lg-7 "> 
			   <div className="contact-form shadow-lg p-5"> 
			     <form onSubmit={e => onSubmit(e)}> 
				    <div className="row">
				    	<div className="col-lg-12 mb-4"> 
                            <input type="text"
                             placeholder=" your name" 
                             className=" form-control form-control-lg
                              text-capitalize fs-6 border-0 shadow-sm"
                              name="name"
                              value={name || "" }
                              onChange={e =>onInputChange(e)}
                              /> 
						</div>
				    </div> 
                    
				    <div className="row">
				    	<div className="col-lg-12 mb-4"> 
                            <input type="text"
                             placeholder=" your username" 
                             className=" form-control form-control-lg
                              text-capitalize fs-6 border-0 shadow-sm"
                              name="username"
                              value={username || ""}
                              onChange={e =>onInputChange(e)}
                              /> 
						</div>
				    </div>
                    
				    <div className="row">
				    	<div className="col-lg-12 mb-4"> 
                            <input type="text"
                             placeholder=" your email" 
                             className=" form-control form-control-lg
                              text-capitalize fs-6 border-0 shadow-sm"
                              name="email"
                              value={email || ""}
                              onChange={e =>onInputChange(e)}
                              /> 
						</div>
				    </div>
                    
				    <div className="row">
				    	<div className="col-lg-12 mb-4"> 
                            <input type="text"
                             placeholder=" your phone" 
                             className=" form-control form-control-lg
                              text-capitalize fs-6 border-0 shadow-sm"
                              name="phone"
                              value={phone || ""}
                              onChange={e =>onInputChange(e)}
                              /> 
						</div>
				    </div>
                    
				    <div className="row">
				    	<div className="col-lg-12 mb-4"> 
                            <input type="text"
                             placeholder=" your website" 
                             className=" form-control form-control-lg
                              text-capitalize fs-6 border-0 shadow-sm"
                              name="website"
                              value={website || "" }
                              onChange={e =>onInputChange(e)}
                              /> 
						</div>
				    </div>
				    <div className="row">
				    	<div className="col-lg-12 mb-4"> 
					   	<button  className="px-3 text-capitalize btn btn-dark btn-sm">{id ? "update info" : "add info"}</button>
						</div>
				    </div>
				 </form>
			   </div>
			</div>
		</div>
	</div>
    );
};

export default AddEdit;