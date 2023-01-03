import React, {Component} from 'react';
import {app} from "app/app";
import {Link} from "react-router-dom";
import Simple from 'assets/img/simplificado.svg';
import Advanced from 'assets/img/avanzado.svg';
import Medi from 'assets/img/Medi-intro-icon.svg';
import Reduci from 'assets/img/Reducí-intro2-icon.svg';
import Compensa from 'assets/img/Compensá-intro-icon.svg';
import LogoColor from 'assets/img/logo-color.png';
import Mundo from 'assets/img/Mundo';
import LogoEryx from 'assets/img/logo-eryx.svg';
import LogoBeta from 'assets/img/logo-beta.svg';
import ODS7 from 'assets/img/ODS/landing/ODS7.svg';
import ODS8 from 'assets/img/ODS/landing/ODS8.svg';
import ODS12 from 'assets/img/ODS/landing/ODS12.svg';
import ODS13 from 'assets/img/ODS/landing/ODS13.svg';
import ODS14 from 'assets/img/ODS/landing/ODS14.svg';
import ODS15 from 'assets/img/ODS/landing/ODS15.svg';
import ODS17 from 'assets/img/ODS/landing/ODS17.svg';
import Instagram from 'assets/img/social-media-icons/instagram-brands.svg';
import Linkedin from 'assets/img/social-media-icons/linkedin-in-brands.svg';
import Facebook from 'assets/img/social-media-icons/facebook-f-brands.svg';
import Youtube from 'assets/img/social-media-icons/youtube-brands.svg';
import Twitter from 'assets/img/social-media-icons/twitter-brands.svg';
import Menu from 'assets/img/menu-hamburguesa.svg';
import Back from 'assets/img/arrow-back.svg';
import "assets/scss/styles.scss";
import {Button} from "react-materialize";


export class Home extends Component {
    constructor(props) {
        super(props);
        this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
        this.state = {
            openMobileMenu: false,
        }
    }

    handleMobileMenuClick() {
        this.setState({
            openMobileMenu: !this.state.openMobileMenu
        })
    }
    render() {
        return (
            <div className="base-container">
                <div className="home-container">
                    <nav className="home-navigation">
                        <div className="home-navigation-content">
                            <a href="#inicio" className="logo-color"><img src={LogoColor} alt="Logo SSF"/></a>
                            <div className="links-container">
                                <ul>
                                    <li>
                                        <a href="#que-es-la-huella">¿Qué es?</a>
                                    </li>
                                    <li>
                                        <a class="nav-link" href="#calculadora">Calculadora</a>
                                    </li>
                                    <li>
                                        <a href="#consejos">Consejos</a>
                                    </li>
                                    <li>
                                        <a href="#contacto">Contacto</a>
                                    </li>
                                </ul>
                                <Button className="menu-mobile-icon" onClick={this.handleMobileMenuClick}>
                                    <img src={Menu} alt="menú"/>
                                </Button>
                            </div>
                        </div>
                    </nav>
                    <div className={this.mobileMenuClass()}>
                        <div className="menu-mobile show-menu">
                            <ul>
                                <li className="back-container">
                                    <Button onClick={this.handleMobileMenuClick}>
                                        <img src={Back} className="back" alt="atrás"/>
                                    </Button>
                                </li>
                                <li className="active">
                                    <a href="#que-es-la-huella" onClick={this.handleMobileMenuClick}>¿Qué es?</a>
                                </li>
                                <li>
                                    <a href="#calculadora" onClick={this.handleMobileMenuClick}>Calculadora</a>
                                </li>
                                <li>
                                    <a href="#consejos" onClick={this.handleMobileMenuClick}>Consejos</a>
                                </li>
                                <li>
                                    <a href="#contacto" onClick={this.handleMobileMenuClick}>Contacto</a>
                                </li>
                            </ul>
                        </div>
                        <div className="overlay"/>
                    </div>
                    <div className="Description" id="que-es-la-huella">
                        <div className="text-container">
                            <p className="title">¿Qué es la huella de carbono?</p>
                                <p className="base-text">
                                    Es la cantidad de <span> gases de efecto invernadero </span> (GEI) <span> emitidos de
                                forma
                                directa o indirecta </span> por una persona, actividad u organización y se mide en toneladas de
                                    CO<sub>2</sub> equivalente (tn CO<sub>2</sub>). Las emisiones de GEI son la principal causa del Cambio
                                    Climático. <a href="https://www.sustentabilidadsf.org.ar/huella-de-carbono-web-respuestas-preguntas/">Conocé más.</a>
                                </p>
                            <a className="main-button" href="#calculadora">Comenzar</a>
                        </div>
                        <Mundo/>
                    </div>
                    <div id="inicio" className="Intro">
                        <p className="title">Conocé tu Huella</p>
                        <p className="base-text">Medí, reducí y compensá tu Huella de Carbono<br/>
                            <span>en 3 simples pasos</span>
                        </p>
                        <div className="intro-image-container">
                            <div className="intro-items">
                                <img src={Medi} className="intro-icon" alt="Medí tu huella"/>
                                <p className="base-text">Medí</p>
                            </div>
                            <div className="intro-items">
                                <img src={Reduci} className="intro-icon" alt="Redicí tu huella"/>
                                <p className="base-text">Reducí</p>
                            </div>
                            <div className="intro-items">
                                <img src={Compensa} className="intro-icon" alt="Compensá tu huella"/>
                                <p className="base-text">Compensá</p>
                            </div>
                        </div>
                        <a className="main-button" href="#calculadora">Calcular</a>
                    </div>

                    <div className="form-selection-container" id="calculadora">
                        <p className="base-text">Elije el tipo de formulario que te gustaría completar</p>
                        <div className="form-selection">
                            <Link className="selection-option-container" to={app.routes().simpleForm}>
                                <img src={Simple} alt="simple"/>
                                <p className="primary-text">Tengo 5 minutos</p>
                            </Link>
                            <Link className="selection-option-container" to={app.routes().advancedForm}>
                                <img src={Advanced} alt="avanzado"/>
                                <p className="primary-text">Avanzado</p>
                            </Link>
                        </div>
                        <div className="developed-container">
                            <p className="base-text">Desarrollado por</p>
                            <a href="https://eryx.co/">
                                <img src={LogoEryx} className="logo-eryx" alt="logo Eryx"/>
                            </a>
                        </div>
                    </div>
                    <div className="cards-tip-container" id="consejos">
                        <a className="card-tip" href="https://www.sustentabilidadsf.org.ar/huella-de-carbono-consejos-para-reducir/">
                            <p className="secondary-text">Reducí tu huella</p>
                            <img src={Reduci} className="intro-icon" alt="Redicí tu huella"/>
                            <p className="tertiary-text">Conocé todas las recomendaciones para reducir tu huella
                                de
                                carbono<br/><span>haciendo click acá</span></p>
                        </a>
                        {/*<a className="card-tip" href="#">*/}
                        {/*    <p className="secondary-text">Compensá tu huella</p>*/}
                        {/*    <img src={Compensa} className="intro-icon" alt="Redicí tu huella"/>*/}
                        {/*    <p className="tertiary-text">Conocé las diferentes opciones para compensar tu huella*/}
                        {/*        de*/}
                        {/*        carbono<br/><span>haciendo click acá</span></p>*/}
                        {/*</a>*/}
                    </div>
                    <div className="ODS-presentation">
                        <p className="secondary-text">Este proyecto contribuye con los siguientes ODS:</p>
                        <div className="ODS-container">
                            <a  style={{background:"#fcc312"}} href="https://www.un.org/sustainabledevelopment/es/energy/">
                                <span className="ODS-description">
                                <span className="ODS-number"> 7
                                </span>
                                     <span className="ODS-type"> Energía Asequible y no contaminante
                                </span>
                                     </span>
                                <img src={ODS7}/>
                            </a>
                            <a  style={{background:"#8f1838"}} href="https://www.un.org/sustainabledevelopment/es/economic-growth/">
                                <span className="ODS-description">
                                <span className="ODS-number"> 8
                                </span>
                                     <span className="ODS-type"> TRABAJO DECENTE Y CRECIMIENTO ECONÓMICO
                                </span>
                                     </span>
                                <img src={ODS8}/>
                            </a>
                            <a style={{background:"#bf8b2e"}} href="https://www.un.org/sustainabledevelopment/es/sustainable-consumption-production/">
                                <span className="ODS-description">
                                <span className="ODS-number"> 12
                                </span>
                                     <span className="ODS-type"> PRODUCCIÓN Y CONSUMO RESPONSABLES
                                </span>
                                     </span>
                                <img src={ODS12}/>
                            </a>
                            <a style={{background:"#48773c"}} href="https://www.un.org/sustainabledevelopment/es/climate-change-2/">
                                <span className="ODS-description">
                                <span className="ODS-number"> 13
                                </span>
                                     <span className="ODS-type"> ACCIÓN POR EL CLIMA
                                </span>
                                     </span>
                                <img src={ODS13}/>
                            </a>
                            <a style={{background:"#007dbb"}} href="https://www.un.org/sustainabledevelopment/es/oceans/">
                                <span className="ODS-description">
                                <span className="ODS-number"> 14
                                </span>
                                     <span className="ODS-type"> VIDA SUBMARINA
                                </span>
                                     </span>
                                <img src={ODS14}/>

                            </a>
                            <a style={{background:"#40ae49"}} href="https://www.un.org/sustainabledevelopment/es/biodiversity/">
                                <span className="ODS-description">
                                <span className="ODS-number"> 15
                                </span>
                                     <span className="ODS-type"> VIDA DE ECOSISTEMAS TERRESTRES
                                </span>
                                     </span>
                                <img src={ODS15}/>

                            </a>
                            <a style={{background:"#1a3668"}} href="https://www.un.org/sustainabledevelopment/es/globalpartnerships/">
                                <span className="ODS-description">
                                <span className="ODS-number"> 17
                                </span>
                                     <span className="ODS-type"> ALIANZAS PARA LOGRAR LOS OBJETIVOS
                                </span>
                                     </span>
                                <img src={ODS17}/>

                            </a>
                        </div>
                    </div>
                    <div className="Contact-us" id="contacto">
                        <p className="secondary-text">Conocenos</p>
                        <div className="logos-container">
                            <a href="https://www.sustentabilidadsf.org.ar/">
                                <img src={LogoColor} className="logo-color" alt="Logo SSF"/>
                            </a>
                            <a href="https://eryx.co/">
                                <img src={LogoEryx} className="logo-eryx" alt="logo Eryx"/>
                            </a>
                            <a href="https://www.uvic.cat/es/investigacion/centro-tecnologico-beta">
                                <img src={LogoBeta} className="logo-beta" alt="logo Beta"/>
                            </a>
                        </div>
                        <p className="tertiary-text">Esta es una iniciativa de Sustentabilidad Sin Fronteras
                            co-desarrollada con ERYX y validada por Centro Tecnológico BETA de la Universidad Central de
                            Cataluña Universidad de VIC.</p>
                        <div className="contact-text">
                            <p className="tertiary-text">Para consultas escribinos a </p>
                            <a href="mailto:huelladecarbono@sustentabilidadsf.org.ar">huelladecarbono@sustentabilidadsf.org.ar</a>
                        </div>
                        <div className="social-media-container">
                            <a href="https://www.instagram.com/sustentabilidad_sin_fronteras/">
                                <img src={Instagram} className="social-media-icon" alt="logo Instagram"/>
                            </a>
                            <a href="https://www.linkedin.com/company/sustentabilidad-sin-fronteras/">
                                <img src={Linkedin} className="social-media-icon" alt="logo Linkedin"/>
                            </a>
                            <a href="https://www.facebook.com/SustentabilidadSinFronteras/">
                                <img src={Facebook} className="social-media-icon" alt="logo Facebook"/>
                            </a>
                            <a href="https://www.youtube.com/sustentabilidad-sin-fronteras">
                                <img src={Youtube} className="social-media-icon" alt="logo Youtube"/>
                            </a>
                            <a href="https://twitter.com/sustensf">
                                <img src={Twitter} className="social-media-icon" alt="logo Twitter"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    mobileMenuClass() {
        const active = this.state.openMobileMenu ? "active" : "";
        return `menu-mobile-container ${active}`;
    }
}
