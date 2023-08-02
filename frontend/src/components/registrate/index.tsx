import { useState } from "react";
import { registrateUser } from "../../utils/requestUser";
import { Navigate } from 'react-router-dom';
import { Header } from "../header"
import { Container, Form, FormArea, Back } from "./styles"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "../footer";


export function Registrate() {
    const [ loginInfo, setLoginInfo ] = useState({
        username: '',
        password: '',
    });
    const [redirect, setRedirect ] = useState(false);
    const loginSubmit = async (e: any) => {
        e.preventDefault();
        const { username, password } = loginInfo;
        const hasUpper = (str: string) => /[A-Z]/.test(str);
        const hasNumber = (str: string) => /[0-9]/.test(str);
        if(hasNumber(password) && hasUpper(password) && username.length >= 3){
           const request = await registrateUser(username, password)
           if(request === 200) {
            toast.success('User created successfully')
           }
           if(request === 400) toast.error('This account name already exists!')
        }
        if(!hasNumber(password) || !hasUpper(password) || username.length < 3)
        return toast.error('Invalid username or password!')
    }

    if(redirect) {
        return (
            <div>
                <Navigate to="/" />
            </div>
        )
    }

    return (
        <Container>
            <Back>
            <Header text="Create your account"/>
            <a href="/" >Back</a>
            </Back>
            <FormArea>
            <div>
            <h3>Username require more than 3 caracters.</h3>
            <h3>Password require more than 8 characters, has to have a number and a upper character.</h3>
            </div>
            <Form onSubmit={(e) => loginSubmit(e)}>
            <input required onChange={(e) => setLoginInfo({...loginInfo, username: e.target.value } )} type="text" placeholder="Username"></input>
            <input required onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value } )} type="password" placeholder="Password"></input>
            <button type="submit">Cadastrate</button>
            </Form>
            </FormArea>
            <ToastContainer />
        </Container>
    )
}