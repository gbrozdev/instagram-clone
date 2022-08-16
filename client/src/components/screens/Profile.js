import React,{useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../../App'

const Profile  = ()=>{
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    const [image,setImage] = useState("")
    useEffect(()=>{
       fetch('/mypost',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           setPics(result.mypost)
       })
    },[])
    useEffect(()=>{
       if(image){
        const data = new FormData()
        data.append("file",image)
         data.append("upload_preset","instagram-clone")
        data.append("cloud_name","gbrozdev")
        fetch("https://api.cloudinary.com/v1_1/gbrozdev/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
    
       
           fetch('/updatepic',{
               method:"put",
               headers:{
                   "Content-Type":"application/json",
                   "Authorization":"Bearer "+localStorage.getItem("jwt")
               },
               body:JSON.stringify({
                   pic:data.url
               })
           }).then(res=>res.json())
           .then(result=>{
               console.log(result)
               localStorage.setItem("user",JSON.stringify({...state,pic:result.pic}))
               dispatch({type:"UPDATEPIC",payload:result.pic})
               //window.location.reload()
           })
       
        })
        .catch(err=>{
            console.log(err)
        })
       }
    },[image])
    const updatePhoto = (file)=>{
        setImage(file)
    }
   return (
       <div style={{maxWidth:"550px", margin:"30px auto"}}>
           <div style={{
              margin:"18px 0px",
               borderBottom:"1px solid grey"
           }}>

         
           <div style={{
               display:"flex",
               justifyContent:"space-around",
              
           }}>
               <div>
                   <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                   src={state?state.pic:"loading"}
                   />
                 
               </div>
               <div>
                   <h4>{state?state.name:"loading"}</h4>
                   <h5>{state?state.email:"loading"}</h5>
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                       <h6>{mypics.length} posts</h6>
                       <h6>{state?state.followers.length:"0"} followers</h6>
                       <h6>{state?state.following.length:"0"} following</h6>
                   </div>

               </div>
           </div>
        
            {/* <div className="file-field input-field" style={{margin:"10px"}}>
            <div className="btn #64b5f6 blue darken-1">
                <span>Update pic</span>
                <input type="file" onChange={(e)=>updatePhoto(e.target.files[0])} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div> */}
            </div>      
           <div className="gallery">
               {
                   mypics.map(item=>{
                       return(
                        <div className="rounded-md shadow-md sm:w-96 dark:dark:bg-gray-900 dark:dark:text-gray-100" key={item._id}>
                        <div className="flex items-center justify-between p-3">
                            <div className="flex items-center space-x-2">
                                <img src={item.photo} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:dark:bg-gray-500 dark:dark:border-gray-700" />
                                <div className="-space-y-1">
                                    <h2 className="text-sm font-semibold leading-none">

                                        <Link to={item.postedBy._id !== state._id ? "/profile/" + item.postedBy._id : "/profile"}>{item.postedBy.name}</Link> 




                                    </h2>
                                    <span className="inline-block text-xs leading-none dark:dark:text-gray-400">{item.title}</span>
                                </div>
                            </div>
                            <button title="Open options" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                                    <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                                    <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                                </svg>
                            </button>
                        </div>
                        <img src={item.photo} alt="" className="object-cover object-center w-full h-72 dark:dark:bg-gray-500" />
                        <div className="p-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    {item.likes.length}
                                   


                                    <button type="button" title="Add a comment" className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" text-blue-500 w-5 h-5 fill-current">
                                            <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Share post" className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-blue-500 w-5 h-5 fill-current">
                                            <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <button type="button" title="Bookmark post" className="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                        <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                                    </svg>
                                </button>
                            </div>
                            <span className="inline-block text-xs leading-none dark:dark:text-gray-400">{item.body}</span>


                            <div className="flex flex-wrap items-center pt-3 pb-1">
                                <div className="flex items-center space-x-2">
                                    <div className="flex -space-x-1">
                                        <img alt="" className="w-5 h-5 border rounded-full dark:dark:bg-gray-500 dark:dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                                        <img alt="" className="w-5 h-5 border rounded-full dark:dark:bg-gray-500 dark:dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?2" />
                                        <img alt="" className="w-5 h-5 border rounded-full dark:dark:bg-gray-500 dark:dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?3" />
                                    </div>
                                    <span className="text-sm">Liked by
                                        <span className="font-semibold">Mamba UI</span>and
                                        <span className="font-semibold">86 others</span>
                                    </span>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                       )
                   })
               }

           
           </div>
       </div>
   )
}


export default Profile