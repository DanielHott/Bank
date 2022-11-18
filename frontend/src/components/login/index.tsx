import { Container, Create, Form, Back } from "./styles";
import { useState } from "react";
import { Header } from "../header";
import { Navigate } from 'react-router-dom';
import { loginUser } from "../../utils/requestUser";

export function Login() {
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
           const request: any = await loginUser(username, password)
           if(request.message) {
            return alert(`${request.message}`)
           }
           localStorage.setItem('token', request.token)
           return setRedirect(true);
        }
        return alert('Username ou password inválidos!')
    }

    if(redirect) {
        return (
            <div>
                <Navigate to="/main" />
            </div>
        )
    }
    return (
        <Container>
            <Header text="Faça seu login!"/>
            <Create>
            <div>
            <h1>Não possui conta?</h1>
            <a href="/registrate" >Criar</a>
            </div>
            <Form onSubmit={(e) => loginSubmit(e)}>
            <input required onChange={(e) => setLoginInfo({...loginInfo, username: e.target.value } )} type="text" placeholder="Username"></input>
            <input required onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value } )} type="text" placeholder="Password"></input>
            <button type="submit">Entrar</button>
            </Form>
            </Create>
        </Container>
    )
}