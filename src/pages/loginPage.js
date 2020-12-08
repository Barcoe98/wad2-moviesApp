import React from "react";
import Login from "../components/authentication/login";
import{Container} from "react-bootstrap"

const LoginPage = () => {

  return (
    <Container  className = "d-flex align-item-center justify-content-center" style = {{minHeight: '81vh'}}>
        <div className = "w-50" style = {{maxWidth: '600px'}}>
            <Login/>    
        </div>
    </Container>
      
  );
};

export default LoginPage;