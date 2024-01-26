import React from "react";
import "./Sidebar.css"
import Logo from '../assets/icons/logo-spotify.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook, faPlus, faPlusCircle} from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return(
        <div className="sidebar">
        <nav className="sidebar_navigation">
            <div className="logo">
                <a href="">
                    <img src={Logo} alt="Logo do Spotify"/>
                </a>
                    <ul>
                        <li>
                            <a href="">
                            <span className="icone"><FontAwesomeIcon icon={faHome} /></span>
                                <span>Início</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                            <span className="icone"><FontAwesomeIcon icon={faSearch} /></span>
                                <span>Buscar</span>
                        </a></li>
                    </ul>
                </div>
        </nav>
        <div className="library">
            <div className="library__content">
                <button className="library__button">
                <span><FontAwesomeIcon icon={faBook} /></span>
                    <span>Sua Biblioteca</span>
                </button>
                <span><FontAwesomeIcon icon={faPlus} /></span>
            </div>
            <section className="section-playlist">
                <div className="section-playlist__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar</span>
                    <button className="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>
            <div className="cookies">
                <a href="">Cookies</a>
            </div>
            <div className="languages">
                <button className="languages__button">
                <span><FontAwesomeIcon icon={faGlobe} /></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Sidebar;

