import React, { useState } from 'react'
import{ Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authContext'
import {Link, useHistory} from "react-router-dom"
import "./dashboard.css";


export const Dashboard = () => {
    const [ error, setError ] = useState("")
    const {currentUser, logOut } = useAuth()
    const history = useHistory()

    async function handleLogout() {
       setError("")
       try {
           await logOut()
           history.pushState('/login')
       }
       catch {
           setError("Failed to log out")
       }
    }

    return(
        <>
            <Card className = "mt-5 card">
                <Card.Body>
                    <h1 className="text-center mb-4"> Profile</h1>
                    {error && <Alert variant = "danger">{error} </Alert>}
                    <h4><strong>Email:</strong> {currentUser.email}</h4>
                    <Link to = "/update-profile" className = "btn w-50 mt-3 btnAuth">Update Profile</Link>
                </Card.Body>
                <div className = "w-100 text-center mt-3">
                    <Button variant = "link" onClick={handleLogout}
                    className = "w-80 btnAuth" type = "submit"> Log Out</Button>
                </div>
            </Card>
              
        </>
    )
}

export default Dashboard;