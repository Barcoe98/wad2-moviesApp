import React, { useRef, useState } from 'react'
import{ Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authContext'
import { Link, useHistory } from "react-router-dom"
import "./auth.css";



export const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth()
    const [ error, setError ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const history = useHistory();
    const { setLoggedIn} = useAuth();


    async function handleSubmit(e) {
        e.preventDefault()

        try { 
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value )
            setLoggedIn(true)
            history.push("/")
        } 
        catch { 
            setError ( 'Failed to Sign in ')
            setLoggedIn(false)
        }
        setLoading(false)
    }


    return(
        <>
          <Card className = "mt-5 card">
                <Card.Body>
                    <h1 className="text-center mb-4"> Login</h1>
                   {error && <Alert variant = "danger">{error} </Alert>}
                   <Form onSubmit = {handleSubmit}>
                        <Form.Group className="text-left" id = "email">
                            <Form.Label> Email</Form.Label>
                            <Form.Control type="email" ref = {emailRef} required ></Form.Control>
                        </Form.Group>

                        <Form.Group className="text-left" id = "password">
                            <Form.Label> Password</Form.Label>
                            <Form.Control type="password" ref = {passwordRef} required ></Form.Control>
                        </Form.Group>

                        <Button disabled = {loading} className = "w-50 btnAuth" type = "submit" > Login</Button>
                        
                    </Form>
                    <div className = "w-100 text-center mt-3">
                        <Link className = "link2" to = "/forgot-password"> Forgot Password ?</Link>
                    </div>
                </Card.Body>
            </Card>
                <div  className = "w-100 text-center mt-2 tt" >
                    Need an account ? <Link className = "link" to = "/signup" > Sign up</Link>
                </div>
        </>
    )
}

export default Login;





