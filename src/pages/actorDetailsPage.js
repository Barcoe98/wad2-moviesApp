import React from "react";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
import { withRouter } from "react-router-dom"
import useActor from "../hooks/useActor";


const ActorPage = props => {
  const { id } = props.match.params;
  const [actor] = useActor(id)  // NEW
 return (
    <>
    {actor ? (
      <>
        <PageTemplate actor={actor}>
          <ActorDetails actor={actor} />
        </PageTemplate>
        
      </>
    ) 
: (
      <p>Waiting for actor details</p>
    )}
  </>
  );
};

export default withRouter(ActorPage);