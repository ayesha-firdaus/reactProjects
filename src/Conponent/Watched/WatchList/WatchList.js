import WatchTemplate from "../WatchedTemplate/WatchedTemplate";
import './Watchlist.css'
const WatchList=({watch,removeWatch})=>{
    console.log(watch)
return(
    <div className="watchlist">
     {
        watch?.map(el=>{
   
        return(<WatchTemplate item={el} removeWatch={removeWatch} />)
     }
        )}
        </div>
                
)
}
export default WatchList;