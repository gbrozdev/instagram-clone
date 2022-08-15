<nav>
<div className="nav-wrapper white">

  <Link to={state?"/":"/signin"} className="brand-logo left">gbrozgram</Link>
  <ul id="nav-mobile" className="right">
     {renderList()}

  </ul>
    </div>
    
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
</div>
</nav>