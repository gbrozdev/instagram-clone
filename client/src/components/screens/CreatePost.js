import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'
const CretePost = ()=>{
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    useEffect(()=>{
       if(url){
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    },[url])
  
   const postDetails = ()=>{
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
          setUrl(data.url)
       })
       .catch(err=>{
           console.log(err)
       })

    
   }
 

   return(
    <div className='flex items-center justify-center h-full p-16'>
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800 ">
        <h1 className="text-2xl font-bold text-center">Create A Post</h1>
    
        <div className="space-y-6 ng-untouched ng-pristine ng-valid">
          
            <div className="space-y-1 text-sm">
                <label for="username" className="block text-gray-600">Title</label>
                <input type="text"  placeholder="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)} className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600" />
            </div>
            <div className="space-y-1 text-sm">
                <label for="password" className="block text-gray-600">Body</label>
                       <textarea type="text" rows={6}
                    placeholder="body"
                    value={body}
                   onChange={(e)=>setBody(e.target.value)} className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-indigo-600" ></textarea>
                <div >
                </div>
                    
                    <div className="flex items-center space-x-2 mt-10">
                        <img src=" https://res.cloudinary.com/gbrozdev/image/upload/v1660656028/instagram-clone/alowhnmmxneqs2ecqiqp.png" alt="" className="w-10 h-10 rounded-full bg-gray-500 bg-gray-300" />
                        <label htmlFor="pic" type="button" className="px-4 py-2 border rounded-md border-gray-800">Upload Pic</label>
                    <input hidden type="file" id="pic" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
            </div>
    
            <button onClick={() => postDetails()} className="block w-full p-3 text-center rounded-sm text-gray-50 bg-indigo-600"> Create Post</button>
        </div>
        
       
    </div>
    
    </div>
    
   )
}


export default CretePost