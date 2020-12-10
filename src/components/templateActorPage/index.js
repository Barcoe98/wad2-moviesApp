import React from "react";
import ActorHeader from '../headerActor'
import "./actorPage.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Template for actor Details Page

const TemplateActorPage = ({ actor, children }) => {
  return (
    <>
    <div className="page">
      <ActorHeader actor={actor} />
          <div className="row">
            <div className="col-3">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
                      : "./film-poster-placeholder.png"
                  }
                  className="actor"
                  alt={actor.name}
                />
              </div>
              <div className=" mTitle col-8">
                <h2>
                {actor.name}
                {/* 
                {"   "}
                <a href={movie.homepage}>
                  <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
                </a>
                */}
              </h2>
              {children}
            </div>
        </div>
   </div>
    </>
  );
};

export default TemplateActorPage