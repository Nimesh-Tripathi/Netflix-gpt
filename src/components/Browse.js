import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryConatiner from "./SecondaryConatiner"
import GptSearch from "./GptSearch"
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt)
  console.log(showGptSearch);


  useNowPlayingMovies();

  return (
    <div>
      <Header></Header>
      {
        showGptSearch ?
          <GptSearch></GptSearch> :
          <>
            <MainContainer></MainContainer>
            <SecondaryConatiner></SecondaryConatiner>
          </>
      }
      {/* 
        MainContainer
          - background movie
          - movie title
        Secondary container
          - movie cards
      */}
    </div>
  )
}

export default Browse