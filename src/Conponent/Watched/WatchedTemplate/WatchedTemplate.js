import './WatchedTemplate.css';
const WatchTemplate=(
    {item,removeWatch}
)=>{

    return(
        <div className='d-container'>
               <img src={item.poster} />
               <h4>{item.title}</h4>
               <p>{item.runtime}</p>
                 <p><span>⭐</span>
    {item.imdbRating} IMDB rating
    </p>
    <p><span>⭐</span>
    {item.userRating} User rating
    </p>
    <button className='d-btn' onClick={()=>removeWatch(item.id)}>X</button>
        </div>
    )

}
export default WatchTemplate;