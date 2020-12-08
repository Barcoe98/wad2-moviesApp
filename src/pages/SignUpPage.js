import React from "react";
import SignUp from "../components/authentication/signUp";
import{Container} from "react-bootstrap"

const SignUpPage = () => {

  return (
    <Container  className = "d-flex align-item-center justify-content-center" style = {{minHeight: '81vh'}}>
        <div className = "w-100" style = {{maxWidth: '600px'}}>

            <SignUp/>

        </div>
    </Container>
      
  );
};

export default SignUpPage;