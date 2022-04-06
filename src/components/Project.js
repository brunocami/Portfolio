import React from "react";
import "./Project.css";
import {ProjectData} from '../constants/constants'
import Travel from '../assets/images/travel.jpg'

function Project(props) {
  return (
    <div className="project component__space" id="Portfolio" ref={props.goToProjects}>
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
       <div className="container project__container">
           <div className="row">
           {ProjectData.map(item => (
             <div className="col__3">
                 <a href={item.url} className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Travel} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <a href={item.url} className="project__btn">View Details</a>
                     </div>
                 </a>
             </div>
            ))}


           </div>
            <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                <button className="view__more pointer btn">View more</button>
            </div>
       </div>
    </div>
  );
}

export default Project;