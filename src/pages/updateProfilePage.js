import React from "react";
import UpdateProfile from "../components/authentication/updateProfile";
import{Container} from "react-bootstrap"

const UpdateProfilePage = () => {

  return (
    <Container  className = "d-flex align-item-center justify-content-center" 
                style = {{minHeight: '100vh'}}>
        <div className = "w-100" style = {{maxWidth: '400px'}}>

            <UpdateProfile/>

        </div>
    </Container>
      
  );
};

export default UpdateProfilePage;