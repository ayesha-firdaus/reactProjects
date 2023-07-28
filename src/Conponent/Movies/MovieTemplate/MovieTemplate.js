import './MovieTemplate.css';
const MovieTemplate =function({item,setAid}){
  
    return(
     <div className="container" onClick={()=>{
        setAid(item.imdbID)
     }}>
        <img className='img' src={item.Poster} />
        <h4 className='title'> {item.Title}</h4>
        <p className='year'>
            <span>📅</span>
            <span>{item.Year }</span>
        </p>
     </div>
    )
}
export default MovieTemplate
;