import React, { useRef, useState } from 'react'
import{ Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authContext'
import { Link } from "react-router-dom"
import "./auth.css";



 const ForgotPassword = () => {
    const emailRef = useRef();
    const { resetPassword } = useAuth()
    const [ error, setError ] = useState("")
    const [ message, setMessage ] = useState("")
    const [ loading, setLoading ] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()

        try { 
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check you inbox for further instrcutions')
        } 
        catch { 
            setError ( 'Failed to Reset Password')
        }
        setLoading(false)
    }


    return(
        <>
          <Card className = "mt-5 card">
                <Card.Body >
                    <h1 className="text-center mb-4"> Password Reset</h1>
                   {error && <Alert variant = "danger">{error} </Alert>}
                   {message && <Alert variant = "success">{message} </Alert>}
                   <Form onSubmit = {handleSubmit}>
                        <Form.Group className="text-left" id = "email">
                            <Form.Label> Email</Form.Label>
                            <Form.Control type="email" ref = {emailRef} required ></Form.Control>
                        </Form.Group>

                        <Button disabled = {loading} className = "w-50 btnAuth" type = "submit"> Reset Password</Button>
                        
                    </Form>
                    <div className = "w-100 text-center mt-2 ">
                        <Link className = "link2" to = "/login" > Login</Link>
                    </div>
                   
                </Card.Body>
            </Card>

            <div className = "w-100 text-center mt-2 tt">
                    Need an account ? <Link className = "link" to = "/signup" > Sign up</Link>
                </div>
                
                
        </>
    )
}

export default ForgotPassword;





