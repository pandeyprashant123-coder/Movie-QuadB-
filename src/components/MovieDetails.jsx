import React,{useState} from 'react'
import Form from './Form'
import Parser from 'html-react-parser'

const MovieDetails = ({movieDetails,id}) => {
    // console.log(movieDetails)
    const movieDetail = movieDetails.find(({show})=> show.id==id)
    const {show} =movieDetail
    const [showForm, setShowForm] = useState(false)
    const handleClick = ()=>{
        setShowForm(true)
        window.scrollTo(0,0)
    }
  return (
    <div>
       { showForm&&<Form show={show} setShowForm={setShowForm}/>}
<section className="text-white body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="movie" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={show.image.original}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-white text-3xl title-font font-medium mb-1">{show.name}</h1>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Type: {show.type}</p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Language: {show.language}</p>
        <h6 className="mb-2  text-gray-700 dark:text-gray-400">Genres: {show.genres.map(genres=>`${genres}, `)}</h6>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Runtime: {show.runtime} mins</p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">Rating: {show.rating.average} IMDB</p>
       {Parser(show.summary)}
        <div className="flex">
          <button className="flex my-3 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={handleClick}>Book Now</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default MovieDetails