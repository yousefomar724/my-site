import { useDispatch, useSelector } from 'react-redux';
import { injectIntl } from "react-intl";
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import setLang from '../../store/actions/lang';
import './nav.css';

function Nav( { intl: { messages } } ) {
    
    // Handle Language
    const lang = useSelector(state=>state.lang);
    const dispatch = useDispatch();

    const setLanguage = ()=>{
        dispatch(setLang(lang === 'ar' ? 'en' : 'ar'));
    }
    
    const url = '#';

    let count = 0; // TODO count favorite movies

  return (
      <>
    <div className="nav__contanier">
        <nav className='nav__wrapper'>
            <a href={url} className="logo">
                <img src={logo} alt="..." />
            </a>

            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label htmlFor="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label>

            <ul className="menu">
                <li><a href={url}>{messages.home}</a></li>
                <li><Link to="/">{messages.movies}</Link></li>
                <li><a href={url}>{messages.anime}</a></li>
                <li><a href={url}>{messages.tvShows}</a></li>
                <li><a href={url}>{messages.documentries}</a></li>
                <li><Link to="/favorite" >
                    <i style={{color: "red", fontSize: "1.3rem"}} className='bx bxs-heart' ></i> 
                    {count}
                    </Link>
                </li>
           </ul>

            <div className="auth">
                <li>{messages.login}</li>
                <li>{messages.register}</li>
                <button className="langBTn" onClick={setLanguage}>
                    {messages.lang}
                </button>
            </div>
        </nav>
    </div>
    </>
  );
}

export default injectIntl(Nav);