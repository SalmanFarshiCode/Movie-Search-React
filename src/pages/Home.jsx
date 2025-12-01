import MovieCard from "../components/MovieCard"

function Home(){
    const movies=[
        {id:1,title:"John Wick",release_date:"2020"},
        {id:1,title:"Terminator",release_date:"1999"},
        {id:1,title:"The Matrix",release_date:"2998"}
    ]
    const handleSearch=()=>{};
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input"/>
            <button type="submit" className="search">click me</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie=>(<MovieCard movie={movie} key={movie.id}>

            </MovieCard>))}
        </div>
    </div>
}

export default Home