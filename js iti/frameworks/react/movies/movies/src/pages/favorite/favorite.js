import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import axiosInstance from '../../network/axiosInterceptor';
import favMovie from "../../store/actions/favorite";

function Favorite() {

  const favorite = useSelector(state=>state.favoriteList.favorite);
  const dispatch = useDispatch();
  const setFavorite = ()=>{
    dispatch(favMovie(favorite === 'true' ? 'false' : 'true'));
  }

  const fav = useSelector(state=>state.fav.fav)
  // const dispatch2 = useDispatch();
  // const setFav = ()=>{
  //   dispatch2(addToFav(fav));
  // }

  let myIds = [...new Set(fav)];
  console.log(myIds);

  let myArr = [];

  const apiKey = 'b6613b84db5c06f5b219a2f74c791d29';
  useEffect(()=>{
    axiosInstance.get(`/3/movie/${610253}?api_key=${apiKey}`)
    .then(res=>myArr.push(myArr))
    .catch(err=>console.error(err));
  })
  console.log(myArr);

  return (
    <>
    {myArr.map(movie=>{
      return  <div className="movies__box" key={movie.id}>
                <div className="movies__img">
                    <div className="quality">HDRip</div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="..." />
                    <Link onClick={setFavorite} to={`/${movie.id}`}>
                      {favorite==='true'? <i className='bx bxs-heart fillHeart' ></i>: <i className='bx bx-heart emptyHeart'></i>}
                    </Link>
                </div>

                <Link to={`/movie/${movie.id}`} className="movies__text">
                    {movie.title}
                </Link>
            </div>
    })}
    </>
  );
}

export default Favorite;
