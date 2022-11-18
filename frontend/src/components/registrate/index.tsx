import { useState } from "react";
import { registrateUser } from "../../utils/requestUser";
import { Navigate } from 'react-router-dom';
import { Header } from "../header"
import { Container, Form, FormArea, Back } from "./styles"


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
            alert('Usuário criado com sucesso!')
            setRedirect(true);
           }
           if(request === 400) alert('Este nome de usuário já existe!')
        }
        if(!hasNumber(password) || !hasUpper(password) || username.length < 3)
        return alert('Username ou password inválidos!')
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
            <Header text="Faça seu Cadastro!"/>
            <a href="/" >Voltar</a>
            </Back>
            <FormArea>
            <div>
            <h3>Username deve possuir mais de 3 caracteres.</h3>
            <h3>Password deve possuir pelo menos 8 caracteres, um número e uma letra maiúscula.</h3>
            </div>
            <Form onSubmit={(e) => loginSubmit(e)}>
            <input required onChange={(e) => setLoginInfo({...loginInfo, username: e.target.value } )} type="text" placeholder="Username"></input>
            <input required onChange={(e) => setLoginInfo({...loginInfo, password: e.target.value } )} type="text" placeholder="Password"></input>
            <button type="submit">Cadastrar</button>
            </Form>
            </FormArea>
        </Container>
    )
}