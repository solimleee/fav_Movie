import React, { useEffect,useState } from 'react'
import {API_URL, API_KEY, IMAGE_BASE_URL} from '../../Config'
import MainImage from '../LandingPage/Section/MainImage'
import MovieInfo from './Section/MovieInfo'

function MovieDetail(props) {
    let movieId = props.match.params.movieId
    const [Movie, setMovie] = useState([])


    useEffect(()=> {
        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`

        fetch(endpointInfo) 
        .then(response=>response.json())
        .then(response => {
            console.log(response)
            setMovie(response)
        })

 
    })
    return (
        <div>
            {/* header */}
            
            <MainImage
                    image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                    title={Movie.original_title}
                    text={Movie.overview}
                />
            
            {/* body */}
            <div style={{width:'85%', margin:'1rem auto'}}>

            {/** movie info */}

            <MovieInfo 
            movie={Movie}
            />

           <br />

            {/* actor */}
            <div style={{display:'flex', justifyContent:'center', margin:'2rem'}}>
                <buttom>Toggle Actor View </buttom>
            </div>
            </div> 
        </div>
    )
}

export default MovieDetail
