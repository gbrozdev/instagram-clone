import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../App'
import { Link } from 'react-router-dom'
const Home = () => {
    const [data, setData] = useState([])
    const { state, dispatch } = useContext(UserContext)
    useEffect(() => {
        fetch('/allpost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setData(result.posts)
            })
    }, [])

    const likePost = (id) => {
        fetch('/like', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(result => {
                //   console.log(result)
                const newData = data.map(item => {
                    if (item._id == result._id) {
                        return result
                    } else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log(err)
            })
    }
    const unlikePost = (id) => {
        fetch('/unlike', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then(result => {
                //   console.log(result)
                const newData = data.map(item => {
                    if (item._id == result._id) {
                        return result
                    } else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log(err)
            })
    }

    const makeComment = (text, postId) => {
        fetch('/comment', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId,
                text
            })
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                const newData = data.map(item => {
                    if (item._id == result._id) {
                        return result
                    } else {
                        return item
                    }
                })
                setData(newData)
            }).catch(err => {
                console.log(err)
            })
    }

    const deletePost = (postid) => {
        fetch(`/deletepost/${postid}`, {
            method: "delete",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                const newData = data.filter(item => {
                    return item._id !== result._id
                })
                setData(newData)
            })
    }
    return (
        <section className="bg-white text-gray-800 my-12">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

 <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {

                data.map(item => {
                    return (

                        <div className="rounded-md shadow-md sm:w-96 dark:dark:bg-gray-900 dark:dark:text-gray-100" key={item._id}>
                            <div className="flex items-center justify-between p-3">
                                <div className="flex items-center space-x-2">
                                    <img src={item.photo} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:dark:bg-gray-500 dark:dark:border-gray-700" />
                                    <div className="-space-y-1">
                                        <h2 className="text-sm font-semibold leading-none">

                                            <Link to={item.postedBy._id !== state._id ? "/profile/" + item.postedBy._id : "/profile"}>{item.postedBy.name}</Link> {item.postedBy._id == state._id
                                                && <div className="material-icons" style={{
                                                    float: "right"
                                                }}
                                                    onClick={() => deletePost(item._id)}
                                                ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </div>}




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
                                        {item.likes.includes(state._id)
                                            ?
                                            <button onClick={() => { unlikePost(item._id) }} type="button" title="Like post" className="flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-500 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                                </svg>
                                            </button>


                                            :
                                            <button onClick={() => { likePost(item._id) }} type="button" title="Like post" className="flex items-center justify-center">

                                                <svg xmlns="http://www.w3.org/2000/svg" class=" text-blue-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button>

                                        }


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
                                <div className="space-y-3">
                                    {
                                        item.comments.map(record => {
                                            return (
                                                <p key={record._id} className="text-sm">
                                                    <span className="text-base font-semibold">{record.postedBy.name}   </span>{record.text}
                                                </p>
                                            )
                                        })
                                    }
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                        makeComment(e.target[0].value, item._id)
                                        e.target[0].value = ''
                                    }}>
                                        <input type="text" placeholder="Add a comment..." className="w-full py-0.5 dark:dark:bg-transparent border-none rounded text-sm pl-0 dark:dark:text-gray-100" />
                                    </form>



                                </div>
                            </div>
                        </div>



                    )
                })
            }


                </div>
                </div>
                </section>
    )
}


export default Home