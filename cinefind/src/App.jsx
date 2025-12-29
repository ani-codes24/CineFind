import { useEffect } from 'react'
import './App.css'
import SearchIcon from './assets/search.svg'

//3ac549ae
const API_URL='http://www.omdbapi.com/?apikey=3ac549ae'
function App() {

  const searchMovie = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search)
  }

  useEffect(()=>{
    searchMovie("batman")
  },[])

  return (
    <>
    <div className="app">
      <h1>CineFind</h1>
    </div>
    <div className='search'>
      <input placeholder='Search for Movies' value='Batman' onChange={()=>{ }}/>
      <img src={SearchIcon} alt="search" onClick={()=> { }}/>
    </div>
    </>
  )
}

export default App
