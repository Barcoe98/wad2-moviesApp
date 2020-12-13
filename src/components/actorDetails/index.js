import React from "react";
import "./actorDetails.css";

export default ({ actor }) => {
  //const actorGender = ""

  
  return (
    <>
      {/* if ({actor.gender === 2}) {
         actorGender === "male"
      } else if ({actor.gender === 1}) {
        actorGender === "female"
      }
      else {
        actorGender === "undefined"
      } */}

      <h3 className="col-2 bio">Biography</h3>
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
        <li key="pop" className="itemTitle list-group-item list-group-item-dark">
          Gender
        </li>
        <li key="rdv" className=" itemList list-group-item">
          {actor.gender}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="dep" className="itemTitle list-group-item list-group-item-dark">
        Known for Department
        </li>
        <li key="rdv" className=" itemList list-group-item">
          {actor.known_for_department}
        </li>
      </ul>

    </>
  );
};