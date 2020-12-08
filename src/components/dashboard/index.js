import React, { useState } from 'react'
import{ Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authContext'
import {Link, useHistory} from "react-router-dom"

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
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Profile</h2>
                    {error && <Alert variant = "danger">{error} </Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link to = "/update-profile" className = "btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
                <div className = "w-100 text-center mt-2">
                    <Button variant = "link" onClick={handleLogout}
                    className = "w-80" type = "submit"> Log Out</Button>
                </div>
            </Card>
              
        </>
    )
}

export default Dashboard;