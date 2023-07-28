import './MainHeader.css'
const  MainHeader=({Entered})=>{
    return(
        <div className="Header">
        <div className='Text'>
          <h1 className='title'>MoviesHub 📽️ </h1>
          <p>Search any movie,Rate them and add them in your WatchList</p>
          <button className='btn' onClick={Entered}>Explore Movies</button>
        </div>
</div>
    )
}
export default MainHeader;