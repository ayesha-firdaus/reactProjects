import { useEffect, useState } from "react";
import './Search.css'
const Search=function({query,SetQuery}){
   
    const AddQuery=function(e){
        e.preventDefault();
    
        SetQuery(e.target.value);
     
    }

    return(
      <form>
        <input type="text" placeholder="Search your Movies" onChange={AddQuery} className="Search" value={query}/>

      </form>
    )
}
export default Search;