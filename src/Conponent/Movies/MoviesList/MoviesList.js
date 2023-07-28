import './MovieList.css'
import MovieTemplate from "../MovieTemplate/MovieTemplate";

  const MoviesList =function({Movies,setAid}){
  
    return(
        
     <div  className='Movielist'>
     {
        Movies?.map(el=>{
   
        return(<MovieTemplate item={el} setAid={setAid} />)
     }
        )}
       
     </div>
    )
}
export default MoviesList
;