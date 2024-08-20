import { Suspense } from "react"
import { API_URL } from "../../../(home)/page"
import MovieVideos from "../../../../componenets/movie-videos"
import MovieInfo from "../../../../componenets/movie-info"

async function getMovies(id:string) {
    const response = await fetch(`${API_URL}/${id}`)
    return response.json()
    
}

async function getVideos(id:string) {
    const response = await fetch(`${API_URL}/${id}/videos`)
    return response.json()
}

export default async function MovieDetail({params: {id}} : {params : {id : string}}) {

const [movie,videos] = await Promise.all ([getMovies(id),getVideos(id)])
    return 
    <div>
    <Suspense>
        <MovieVideos id={id}/>
    </Suspense>
    <Suspense>
        <MovieInfo id={id}/>
    </Suspense>
    </div>

    
}   