import React, { useContext } from "react";
import PageTemplate from '../components/templateActorListPage'
import {ActorsContext} from '../contexts/actorsContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const ActorListPage = () => {
  const context = useContext(ActorsContext);
  const actors = context.actors.filter((m) => {
    return !("favorite" in m);
  });

  return (
      <PageTemplate 
        title='Popular Actors'
        actors={actors}
        action={(actor) => {return <AddToFavoritesButton actor={actor}/> }}
        />
  );
};

export default ActorListPage;