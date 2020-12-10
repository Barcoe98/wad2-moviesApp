import React from "react";
import "./actorDetails.css";

export default ({ actor }) => {
  return (
    <>
      <h4 className="col-2">Biography</h4>
      <p>{actor.biography}</p>
      
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className=" itemTitle list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="bday" className="itemList list-group-item ">
          {actor.birthday}
        </li>
        </ul>
        <ul className="list-group list-group-horizontal">
        <li key="ruh" className=" itemTitle list-group-item list-group-item-dark">
          PLace Of Birth
        </li>
        <li key="pob" className="itemList list-group-item ">
          {actor.place_of_birth}
        </li>
        </ul>

        <ul className="list-group list-group-horizontal">
        <li key="pop" className="itemTitle list-group-item list-group-item-dark">
          Popularity
        </li>
        <li key="rdv" className=" itemList list-group-item">
          {actor.popularity}
        </li>
      </ul>


      <ul className="list-group list-group-horizontal">
        <li key="pch" className=" itemTitle list-group-item list-group-item-dark">
          Also Know as :
        </li>
        {actor.also_known_as.map(pc => (
          <li key={pc.name} className="itemList list-group-item">
            {pc.name + ","}
          </li>
        ))}
      </ul>
    </>
  );
};