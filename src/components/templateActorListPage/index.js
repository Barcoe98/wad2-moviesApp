import React, { useState } from "react";
import Header from "../headeActorList";
import ActorList from "../actorList";
import FilterControls from "../filterControlsActor";

// Template for list movie on a page

const ActorListPageTemplate = ({ actors, title, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  
  let displayedActors = actors
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  //returns each element to the template when called
  //header, filter controls, list of actors
  return (
    <>
      <Header title={title} numActors={displayedActors.length} />
      <FilterControls onUserInput={handleChange} numActors={displayedActors.length}/>
      <ActorList
       action={action}
       actors={displayedActors}
      ></ActorList>
    </>
  );
};

export default ActorListPageTemplate ;