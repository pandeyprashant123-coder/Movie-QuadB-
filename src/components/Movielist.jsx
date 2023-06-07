import React, { useEffect, useState } from 'react'
import MovieDetails from './MovieDetails';
const Movielist = () => {
    const [movieDetails, setMovieDetails] = useState()
    const [page, setPage]=useState(true)
    const [id, setid] = useState()
    let isLoading = true;
    let API = 'https://api.tvmaze.com/search/shows?q=all'
    const fetchAPIData = async(url)=>{
        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovieDetails(data)
            isLoading=false
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchAPIData(API)
    },[])
    // console.log(movieDetails.show)
    if(isLoading){
        <p>Loading....</p>
    }
    
    
    const MovieCard = (movieDetail) => {
        const {show} =movieDetail.movieDetail
        // console.log(show)
        
        const handleClick =()=> {
            setPage(false)
            setid(show.id)
        }
        return (
            <div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src={show.image.medium} alt="" />
                  </a>
                  <div className="p-3">
                      <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{show.name}</h5>
                      </a>
                      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Runtime: {show.runtime} mins</p>
                      <h6 className="mb-2 text-xs text-gray-700 dark:text-gray-400">Genres: {show.genres.map(genres=>`${genres}, `)}</h6>
                      <button  onClick={handleClick} className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Watch Movie
                    </button>
                  </div>
              </div>
          </div>
        )
      }
  return (
    page===true?(
        <div className='m-6 flex flex-wrap'>
            
            {
                movieDetails?.map((movieDetail,index)=>{
                    return(
                        <div key={movieDetail.show.id} className='m-3'>
                        <MovieCard movieDetail={movieDetail}/>
                        </div>
                    )})
            }
        </div>
    ):
    <MovieDetails movieDetails={movieDetails} id={id}/>
  )
}

export default Movielist