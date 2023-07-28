import MoviesList from './Conponent/Movies/MoviesList/MoviesList';
import './App.css';

import Search from './Conponent/Header/Search/Search';
import MoviesResult from './Conponent/Header/MoviesResult/MoviesResult';
import { useEffect,useState } from 'react';
import Main from './Conponent/Main/Main';
import MoviesDetail from './Conponent/Watched/ShowMoves/MoviesDetail';
import WatchList from './Conponent/Watched/WatchList/WatchList';
import MainHeader from './Conponent/WebHeader/MainHeader/MainHeader';
import Navbar from './Conponent/WebHeader/Navbar/Navbar';
import Give from './Conponent/Give';
function App() {
  const KEY = "d65725bf";
  const [query,SetQuery]=useState("");
  const [Movies,SetMovies]=useState([]);
  const [Loading,SetLoading]=useState(false);
  const [error,SetError]=useState("");
  const[Id,SetId]=useState("")
  const [watch,setwatch]=useState([])
  const [enter,SetEnter]=useState(false);

  function Entered()
  {
    SetEnter(p=>(!p))
  }
  function removeWatch(id){
    setwatch(w=>w.filter(s=>s.id!==id));
  }
  
  const setAid=function(id){

    SetId(id);
  }
  const remove=function()
  { 
    SetId("");
  }

  useEffect(
      function()
      { 
        const controller=new AbortController();
       
        SetError("");  
      
        SetLoading(true);
     
          async function getMovies(){
           
         
            try{
            const res= await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,{signal:controller.signal});
            if(!res.ok)
            {
              throw new Error("Something went Error")
            }
       
         const data=await res.json();
         if(data.Response==='False')
         {
          throw new Error("Movies Not found")
         }
         SetMovies(data.Search);
          }catch(err){
            
           SetError(err.message)
          }
          finally{
            SetLoading(false)
          }
          if(query.length<=2)
          {
            SetLoading(false)
            SetError("")
            return;
          }
       
        }

          getMovies();
          return function(){
            controller.abort();
          }
        
        }
     
      ,[query]
      
      
  )

console.log(watch)
  return (

    <>
        <Navbar  >
         {enter&& <> <Search query={query} SetQuery={SetQuery} />
         <MoviesResult Movies={Movies}/>        <button class="btn" onClick={Entered}>back</button></>}
        </Navbar>
    {!enter&&<MainHeader  Entered={Entered}/>}

  
    {enter&&  <Main><>
    {Loading&&<Give>Loading</Give>}
   {!Loading&&!error&&<MoviesList Movies={Movies}  setAid={setAid} />}

   {!Loading&&error&&<Give>{error}</Give>}
   {Id&&<MoviesDetail id={Id} remove={remove} setwatch={setwatch} watch={watch}/>}

   {!Id&&<WatchList watch={watch} removeWatch={removeWatch}/>}
   </>
   </Main>}
  
 
    </>
  );
  }
export default App;
