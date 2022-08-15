import React,{useContext,useRef,useEffect,useState} from 'react'
import {Link ,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'
const NavBar = ()=>{
    const  searchModal = useRef(null)
    const [search,setSearch] = useState('')
    const [userDetails,setUserDetails] = useState([])
     const {state,dispatch} = useContext(UserContext)
     const history = useHistory()
     useEffect(()=>{
         M.Modal.init(searchModal.current)
     },[])
     const renderList = ()=>{
       if(state){
         return [
           <>
          <Link to="/"  className="text-base font-medium text-gray-500 hover:text-gray-900"> Home </Link>
          <Link to="/profile"  className="text-base font-medium text-gray-500 hover:text-gray-900"> Profile </Link>
          {/* <Link to="/article"  className="text-base font-medium text-gray-500 hover:text-gray-900"> Article </Link> */}
          <Link to="/myfollowingpost"  className="text-base font-medium text-gray-500 hover:text-gray-900"> Blog </Link>
          {/* <Link to="/edit"  className="text-base font-medium text-gray-500 hover:text-gray-900"> Edit  </Link> */}
          {/* <Link to="/error"  className="text-base font-medium text-gray-500 hover:text-gray-900"> Error </Link> */}
          <Link to="/create"  className="text-base font-medium text-gray-500 hover:text-gray-900"> Write </Link>
             <Link to="/create" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
               <button
            onClick={()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})
              history.push('/signin')
            }}
            >
                Logout
             </button>
             </Link>
         
           
        
            
            
            </>
            
           ]
       }else{
         return [
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <Link to="/signin"  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </Link>
          <Link to="/signup"  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </Link>
        </div>
         ]
       }
     }


     const fetchUsers = (query)=>{
        setSearch(query)
        fetch('/search-users',{
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            query
          })
        }).then(res=>res.json())
        .then(results=>{
          setUserDetails(results.user)
        })
     }
  return (
    <>
      <nav>

     
 <div>
      {/* <Banner /> */}
      <div className="fixed top-0 left-0 w-screen bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
               
                <Link to={state ? "/" : "/signin"} className="brand-logo left">gbrozgram
                </Link>
     {/* <span className="sr-only">Workflow</span>
                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" />
     */}
                        
             
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              </div>
              
{/* 
//search tag
<div id="modal1" className="modal" ref={searchModal} style={{color:"black"}}>
  <div className="modal-content">
  <input
    type="text"
    placeholder="search users"
    value={search}
    onChange={(e)=>fetchUsers(e.target.value)}
    />
     <ul className="collection">
       {userDetails.map(item=>{
         return <Link to={item._id !== state._id ? "/profile/"+item._id:'/profile'} onClick={()=>{
           M.Modal.getInstance(searchModal.current).close()
           setSearch('')
         }}><li className="collection-item">{item.email}</li></Link> 
       })}
       
      </ul>
  </div>
  <div className="modal-footer">
    <button className="modal-close waves-effect waves-green btn-flat" onClick={()=>setSearch('')}>close</button>
  </div>
</div> */}
            <nav className="hidden md:flex space-x-10">
            {renderList()}     
             
            </nav>
    
          </div>
        </div>

      </div>
      </div>
      
      </nav>

      </>
    )
}


export default NavBar