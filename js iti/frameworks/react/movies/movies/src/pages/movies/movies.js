import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../network/axiosInterceptor';
import favMovie from "../../store/actions/favorite";
import './movies.css'
import Paginate from '../../components/paginate/paginate';
// import { getMovies } from '../../store/actions/movies'; //==-- when getting data with redux thunk
// import setLang from '../store/actions/lang';            //==-- if I want to change home language

function Movies(props) {
  
  ////////////// Get Movies with redux //////////////////
  const [movies, setMovies] = useState([]);
  const fetchMovies = ()=>{
    axiosInstance.get(`/3/movie/popular?api_key=b6613b84db5c06f5b219a2f74c791d29&page=${currentPage}`)
    .then(res=>setMovies(res.data.results))
    .catch(err=>console.error(err));
  }

  // useEffect(()=>{
  //     fetchMovies();
  // }, [])

  ////////////// Get Movies with redux thunk ////////////////////
  // let myMovies = useSelector(state => state.moviesList.movies);
  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(getMovies());
  // }, []);

  //////////////////// Handling Favorite ///////////////////
  const fav = useSelector(state=>state.fav.fav)
  // const dispatch2 = useDispatch();
  // const setFav = ()=>{
  //   dispatch2(addToFav(console.log(fav)));
  // }

  // const favorite = useSelector(state=>state.favoriteList.favorite);
  // const favDispatch = useDispatch();
  
  // const setFavorite = ()=>{
  //   favDispatch(favMovie(favorite === 'true' ? 'false' : 'true'));
  //   let myId = props.match.params.id;
  //   fav.push(myId);
  //   // console.log(fav);
  //   console.log(favorite);
  // }

  // const showFav = ()=> {
  //   if(favorite==='true'){
  //     return <i className='bx bxs-heart fillHeart' ></i>
  //   } else {
  //     return <i className='bx bx-heart emptyHeart'></i>
  //   }
  // }

  //////////////////// Handling Search ////////////////
  let searchQuery;

  function getSearchData(){
    axiosInstance.get(`/3/search/movie/?api_key=b6613b84db5c06f5b219a2f74c791d29&query=${searchQuery}`)
    .then(res=>{
      setMovies(res.data.results);
    })
    .catch(err=>console.error(err));
  }

  useEffect(()=>{
    HandleSubmit();
  }, []);
  
  function HandleSubmit(e){
    if(e){
      e.preventDefault();
      searchQuery = e.target[0].value;
    }

    if(searchQuery === '' || searchQuery === undefined ){ // if empty return normal page

      axiosInstance.get(`/3/movie/popular?api_key=b6613b84db5c06f5b219a2f74c791d29&page=${currentPage}`)
      .then(res=>setMovies(res.data.results))
      .catch(err=>console.error(err));

    } else{ // else get searched movies
      getSearchData();
    }
  }

  //////////////////// Handle Pagination ///////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const updateCurrentPage = (updatedCurrentPage)=>{
    setCurrentPage(updatedCurrentPage);
    fetchMovies();
  }
  console.log(currentPage);

  return (
    <section id="movie__list">

      <form className="movies__search" onSubmit={e => HandleSubmit(e)}>
          <input type="text" placeholder="Find Your Favourite Movie"/>
          <button type="submit" className="movies__Search-btn">
            <i style={{color: 'white'}} className="bx bx-search"></i>
          </button>
      </form>

      <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        {movies.map(movie=>{
          return  <div className="movies__box" key={movie.id}>
                    <div className="movies__img">
                        <div className="quality">HDRip</div>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="..." />
                        {/* <Link onClick={setFavorite} to={`/${movie.id}`}>
                          {favorite==='true'? <i className='bx bxs-heart fillHeart' ></i>: <i className='bx bx-heart emptyHeart'></i>}
                        </Link> */}
                    </div>

                    <Link to={`/movie/${movie.id}`} className="movies__text">
                        {movie.title}
                    </Link>
                </div>
        })}
      </div>

    {/* BTNS */}
      <Paginate callback={updateCurrentPage} currentPage={currentPage}/>
    </section>
  );
}

export default Movies;