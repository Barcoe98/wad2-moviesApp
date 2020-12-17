import React, { useContext } from "react";
import PageTemplate from '../components/templateActorListPage'
import {ActorsContext} from '../contexts/actorsContext'

const LatestActorListPage = () => {
  const context = useContext(ActorsContext);
  const actors = context.actors

  return (
      <PageTemplate 
        title='Latest Actors'
        actors={actors}
        />
  );
};

export default LatestActorListPage;