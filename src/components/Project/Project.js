import React from "react";
import "./Project.css";
import Portfolio1 from '../../assets/images/portfolio-1.jpg'
import Portfolio2 from '../../assets/images/portfolio-2.jpg'
import Portfolio3 from '../../assets/images/portfolio-3.jpg'
import Portfolio4 from '../../assets/images/portfolio-4.jpg'
import { ProjectData } from '../../constants/constants';
import { FaExternalLinkAlt} from 'react-icons/fa';

function Project(props) {



  return (
    <div className="project component__space" id="Portfolio" ref={props.goToProjects}>
      <div className="heading">
        <h1 className="heading">Mis Proyectos</h1>
        <p className="heading p__color">
          Algunos proyectos que estuver realizando con ReactJs
        </p>
        <p className="heading p__color">
          para demostrar mis aptitudes
        </p>
      </div>
      <div className="container project__container">
        <div className="row">
          {ProjectData.map(({ id, image, name, description, url, githubUrl }) => (
            <div className="col__3 project__box" key={id}>
              <a href={url} className="pointer relative">
                <div className="project__box__img pointer relative">
                  <div className="project__img__box">
                    {name==='Travel Tours' ?  <img src={Portfolio1} alt="" className="project__img" /> : name==='Reviews Gallery' ?  <img src={Portfolio2} alt="" className="project__img" /> : name==='Birthay Reminder' ?  <img src={Portfolio3} alt="" className="project__img" /> : <img src={Portfolio4} alt="" className="project__img" />}
                  </div>
                  <div className="mask__effect"></div>
                </div>
                <div className="project__meta absolute">
                  <h5 className="project__text">{name}</h5>
                  <a href={url} target="_blank" className="project__url__btn" >Visitar Proyecto <FaExternalLinkAlt/></a>
                  <a href={githubUrl} target="_blank" className="project__code__btn">Ver Codigo</a>
                </div>
              </a>
            </div>
          ))}


        </div>
        <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
          <button className="view__more pointer btn">
            <a href="https://github.com/brunocami" target="_blank">Ver M??s</a> 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;