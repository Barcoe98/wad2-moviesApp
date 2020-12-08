import React from "react";
import ForgotPassword from "../components/authentication/forgotPassword";
import{Container} from "react-bootstrap"

const ForgotPasswordPage = () => {

  return (
    <Container  className = "d-flex align-item-center justify-content-center" style = {{minHeight: '81vh'}}>
        <div className = "w-100" style = {{maxWidth: '600px'}}>
            <ForgotPassword/>    
        </div>
    </Container>
      
  );
};

export default ForgotPasswordPage;