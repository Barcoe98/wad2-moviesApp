import React, { useRef, useState } from 'react'
import{ Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/authContext'
import { Link, useHistory } from "react-router-dom"
import "./auth.css";


 const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp } = useAuth()
    const [ error, setError ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }

        try {
          setError("")
          setLoading(true)
          await signUp(emailRef.current.value, passwordRef.current.value)
          history.push("/")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }


    return (
        <>
          <Card className = "mt-5 card">
            <Card.Body>
              <h1 className="text-center mb-4">Sign Up</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form  onSubmit={handleSubmit}>
                <Form.Group className="text-left" id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group className="text-left" id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group className="text-left" id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button disabled={loading}  className = "w-50 btnAuth" type="submit"  >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2 tt" >
            Already have an account? <Link className = "link" to="/login">Log In</Link>
          </div>
        </>
      )
}

export default SignUp;

