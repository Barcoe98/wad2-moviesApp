import React, { useRef, useState } from 'react'
import{ Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth} from '../../contexts/authContext'
import { Link, useHistory } from "react-router-dom"


 const UpdateProfile = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [ error, setError ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const history = useHistory()


     function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setLoading(true)
        setError("")

        //if changed email, push the change
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        //if eneter password, push password
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
        //all successful return to homepage
        .then(() => {
            history.push('/')
        })
        //id failure set error message to fail
        .catch(() => {
            setError('Failed to update account')
        })
        //if success or failure , set loading to false
        .finally(() => {
            setLoading(false)
        })
    }


    return(<>
            <Card className = "mt-5">
                <Card.Body>
                    <h2 className="text-center mb-4"> Update Profile</h2>
                   {error && <Alert variant = "danger">{error} </Alert>}
                   <Form className="text-left " onSubmit = {handleSubmit}>
                        <Form.Group className="text-left" id = "email">
                            <Form.Label> Email</Form.Label>
                            <Form.Control type="email" ref = {emailRef} required defaultValue={currentUser.email} ></Form.Control>
                        </Form.Group>

                        <Form.Group className="text-left" id = "password">
                            <Form.Label> Password</Form.Label>
                            <Form.Control type="password" ref = {passwordRef} required placeholder = 
                            "Leave Blank to stay the same" ></Form.Control>
                        </Form.Group>

                        <Form.Group className="text-left" id = "password-confirm">
                            <Form.Label> Password Confirmation</Form.Label>
                            <Form.Control type="password-confirm" ref = {passwordConfirmRef} placeholder = 
                            "Leave Blank to stay the same" required ></Form.Control>
                        </Form.Group>

                        <Button disabled = {loading} className = "w-50" type = "submit" style={{ color: '#FFF' }}> Update Profile</Button>
                        
                    </Form>
                        <div className = "w-100 text-center mt-2">
                            <Link to = "/" style={{ color: '#FF0000' }} > Cancel</Link>
                        </div>
                </Card.Body>
            </Card>
                
               
        </>
    )
}

export default UpdateProfile;

