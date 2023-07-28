import './MovieDetail.css'
import { useEffect, useState } from "react"
import StarRating from "../../StarRating/StarRating";
import Give from '../../Give';
const MoviesDetail=({id,remove,setwatch,watch})=>{
    const KEY = "d65725bf";
    const [ShowMovies,setShowMovies]=useState([]);
    const [Loading,setLoading]=useState(false);
    console.log(watch)
    const checkexist=watch.map(el=>el.id).includes(id);
    console.log("gffu",checkexist)
const [rating,onsetRating]=useState(0);
    useEffect(
        function(){
            setLoading(true);
            async function getAMovie()
            {
            
             
                const res=await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${id}`)
                const data=await res.json()
                setShowMovies(data);
                setLoading(false);
                
            }
            getAMovie();
        },[id]

    )
    const {

        Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
      } = ShowMovies;

      function AddWatch()
      {
        const newobj={
            userRating:rating,
             title,
             runtime,
             imdbRating,
             poster,
             id,
        }
     
        setwatch(w=>{
         return   [...w,newobj]
        });
        remove();
      }
      
    return(
     <div className="details">
     {!Loading?<>
     <button onClick={remove} className='d-btn'> &larr; </button>
        <header className='head'>
    <div>
    <img className='detail-img' src={poster} />
    </div>
    <div>
    <h4 className='d-title'>{title}</h4>
    <p className='d-p'>{released}&bull;{runtime}</p>
    <p className='d-g'>{genre}</p>
   
    <p className='d-p' >
    <span>⭐</span>
    {imdbRating} IMDB rating
    </p>
    </div>
    
   </header>
   <section>
{  !checkexist? <StarRating onsetRating={onsetRating} color={'##e1831f'} />:<p>You Rated this movie</p>}

{
rating>0&&<button className='add' onClick={()=>AddWatch()} >Add to list</button>
}
   </section>
   <section>
    <p><span className='d-k'>plot  :</span><span className='d-v'><em>{plot}</em></span></p>
    <p><span className='d-k'>Starring :</span> <span className='d-v'>{actors}</span></p>
    <p><span className='d-k'>Directod by :</span><span className='d-v'> {director}</span></p>
   </section>

</>:<Give>Loading...</Give>}
        </div>
    
)
}
export default MoviesDetail;