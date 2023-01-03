import React from "react";
import selected from "../assets/img/selected.svg";
import selectedMobile from "../assets/img/selected-mobile.svg";
import logoSSF from "../assets/img/logoSSF.png";


export class SideMenu extends React.Component {
    renderMenuSection(section, isActive) {
        const className = isActive ? "-active": "";
        return (
            <li className={className}>
                <img src={section.icon} className="icon-nav" alt={"icono " + section.name}/>
                <p>{section.name}</p>
                <img src={selected} className="selected-bgd" alt={'>'}/>
                <img src={selectedMobile} className="selected-bgd-mobile" alt={'>'}/>
            </li>
        );
    }

    render() {
        return (
            <nav className="nav-bar">
                <p className="nav-bar-title">Calculadora de huella de carbono</p>
                <ul className="nav-bar-sections">
                    {this.props.sections.map((section, sectionIndex) => {
                        return this.renderMenuSection(section,sectionIndex === this.props.currentSectionIndex);
                    })}
                </ul>
                <img src={logoSSF} className="logoSSF" alt="icono alimentación"/>

            </nav>
        )
    }
}
