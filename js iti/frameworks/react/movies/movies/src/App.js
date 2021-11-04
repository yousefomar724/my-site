import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { useState, useEffect } from 'react';
import langs from './assets/translate/langs';
import axiosInstance from './network/axiosInterceptor';
import Favorite from './pages/favorite/favorite';
import Movies from './pages/movies/movies';
import Footer from './components/footer/footer';
import Movie from './pages/movieDetails/movieDetails';
// import Pagination from './pagination/pagination';
import Nav from './components/nav/nav';
import './App.css';

function App() {
  
  const lang = useSelector(state=>state.lang);

  const [movies, setMovies] = useState([]);
  const apiKey = 'b6613b84db5c06f5b219a2f74c791d29';
  let curPage = 1;
  useEffect(()=>{
    axiosInstance.get(`/3/movie/popular?api_key=${apiKey}&page=${curPage}`)
    .then(res=>setMovies(res.data.results))
    .catch(err=>console.error(err));
    return movies;
  }, [])

  return (
      <IntlProvider locale={lang} messages={langs[lang]}>
          <Router>
            <div // Handle Language
              className={lang === 'ar' ? 'rtl' : 'ltr'}
              dir={lang === "ar" ? "rtl" : "ltr"}
              >
                <Nav />
            </div>

            <Switch>
              <Route path="/favorite" exact component={Favorite} />
              <Route path={['/', '/:id']} exact component={Movies} />
              <Route path="/movie/:id" exact component={Movie} />
            </Switch>

            <Footer />
          </Router>
      </IntlProvider>
  );
}

export default App;