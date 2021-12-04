import React ,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import fireDb from '../../firebase'
import './home.css'

const Home = (props) => {
    const [data,setData] = useState({}); 
    const[searchTerm,setSearchTerm]=useState("");

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
     },[]);
     
    const deleteUser=(id) =>{
        if(window.confirm("aru you sure that you wanted to delete that info")){
            fireDb.child(`personal-info/${id}`).remove((err)=>{
                if(err){
                    toast.error(err);
                }else{
                    toast.success('info delete successfully');
                }
            })
        }
    }



    return (
                <div className="container py-5">
                    <div className="row ">
                        <div className="col-lg-10 text-capitalize p-2 d-flex justify-content-between"> 
                            <h2 className="fs-4">{props.title}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <form >    
                                <input type="search" placeholder="search by name" 
                                className="form-control form-control-sm"
                                />
                            </form>
                        </div>
                        <div className="col-md-7 ">
                        <Link to="/add"  className="text-capitalize btn btn-dark btn-sm float-right">add info</Link>

                        </div>
                    </div>
                    <div className="row py-3">
                        <div className="col-lg-10 table-responsive"> 
                            <table className="table table-bordered ">
                                <thead>
                                    <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">name</th>
                                    <th scope="col">username</th>
                                    <th scope="col">website</th>
                                    <th scope="col">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {Object.keys(data).map((id,index) =>{
                                      return(
                                            <tr key={id}>
                                            <th scope="row">{index+1}</th>
                                            <td>{data[id].name} </td>
                                            <td>{data[id].username}</td>
                                            <td>{data[id].website}</td>
                                            <td>
                                                <div className="btn-group btn-group-sm " role="group">
                                                    <Link  to={`/edit/${id}`} type="button" className=" text-success fw-bold btn btn-outline-dark text-capitalize">edit</Link>
                                                    <Link to={`/display/${id}`} type="button" className="fw-bold  btn btn-outline-dark text-capitalize">show</Link>
                                                    {/* <Link to=""  onClick={() => deleteUser(user.id)} type="button" 
                                                    className=" text-danger fw-bold  btn btn-outline-dark text-capitalize">delete</Link> */}
                                                    <button   type="button"  onClick={() => deleteUser(id)}
                                                    className=" text-danger fw-bold  btn btn-outline-dark text-capitalize">delete</button>
                                                </div>
                                            </td>
                                            </tr>
                                      )
                                  })}
                                </tbody>
                            </table> 
                        </div>
                    </div>
                </div>
    );
};

export default Home;