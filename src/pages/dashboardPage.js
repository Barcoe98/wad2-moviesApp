import React from "react";
import Dashboard from "../components/dashboard/index";
import{Container} from "react-bootstrap"

const DashboardPage = () => {

  return (
    <Container  className = "d-flex align-item-center justify-content-center" style = {{minHeight: '81vh'}}>
        <div className = "w-100" style = {{maxWidth: '600px'}}>
            <Dashboard/>    
        </div>
    </Container>
      
  );
};

export default DashboardPage;