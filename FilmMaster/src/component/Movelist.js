import React from 'react'
import CardItem from './CardItem';
import { Row } from 'react-bootstrap';
import PaginationList from './paginitionList';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import {getAllMovie} from '../redux/action/getAllMovies';




const Movelist=()=> {

  const [movies, setmovies] = useState([])
const dispatch=useDispatch();

useEffect(()=>{

dispatch(getAllMovie());

},[])
const data = useSelector((state) => state.Movie)
useEffect(()=>{
 setmovies(data);
},[data])


  return (
    <Row className='mt-2 row row-cols-4 g-3 p-3'>
      {movies.length >=1 ?(movies.map((mov)=>{
     

  return(<CardItem key={mov.id} mov={mov}/>)
      })):<h2 className='not-found'>لا يوجد افلام </h2>}


<PaginationList />
    </Row>
  )
}

export default Movelist
