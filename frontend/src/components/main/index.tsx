import { Container, Desconected, Logout, NotFound, Transaction, Content, TransactionHistory } from "./styles";
import { useEffect, useState } from "react";
import { Header } from "../header";
import { checkToken } from "../../utils/requestUser";
import { balanceAccount } from "../../utils/requestAccount";
import { transactionMaker } from "../../utils/requestTransaction";
import { Navigate } from "react-router-dom";
import { Transactions } from "../transactions";
import { useAddContext } from "../../contexts/UserContext";

export function Main() {
    const [ render, setRender ] = useState(0);
    const [ out, setOut ] = useState(false);
    const { openTransaction, setOpenTransaction } = useAddContext();
    const [ loginInfo, setLoginInfo ] = useState({
        destination: '',
        value: 0,
    });
    const [ myBalance, setMyBalance ] = useState(0);
    const [ userName, setUserName ] = useState('');

    const checkingToken = async (token: string) => {
        const response: any = await checkToken(token);
        return response;
    }

    const validateToken = async () => {
        const myToken = localStorage.getItem('token');
        if(myToken){
        const check = await checkingToken(`${myToken}`);
        if(check.checking.userId) {
            setRender(1);
            const balance: any = await balanceAccount(check.checking.userId);
            setMyBalance(balance.balance);
            setUserName(check.checking.userId)
        }
        if(!check.checking.userId) setRender(2)
            }
    }

    const logout = () => {
        localStorage.removeItem('token');
        setRender(4);
        setOut(true);
    }

/*     const validateTokenOperations = async () => {
        const myToken = localStorage.getItem('token');
        if(myToken){
        const check = await checkingToken(`${myToken}`);
        if(check === 200) return true;
        if(check === 500) return false;
            }
    } */

    const submitTransaction = async (e: any) => {
        e.preventDefault();
        const transaction: any = await transactionMaker(userName, loginInfo.destination, loginInfo.value );
        if(transaction.id) {
            alert('Transa????o conclu??da com sucesso!');
            validateToken();
        }
        if(transaction.message === 'N??o pode transferir para si mesmo.') return alert('N??o pode transferir para si mesmo.')
        if(transaction.message) return alert('Usu??rio n??o encontrado!')
    }

    useEffect(() => {
        validateToken();
    });

    if(openTransaction) {
        return (
            <div>
                <Transactions username={userName} />
            </div>
        )
    }

    if(render === 1) {
    return (
        <Container>
            <Logout>
            <Header text={`Saldo: R$${myBalance}`} />
            <button onClick={() => logout()}> Sair</button>
            </Logout>
            <Content>
            <Transaction onSubmit={(e) => submitTransaction(e)}>
                <h1>Transfer??ncias</h1>
                Quem vai receber:
                <input required onChange={(e) => setLoginInfo({...loginInfo, destination: e.target.value } )} name="user" type="text" placeholder="Username"></input>
                 Qual o valor?
                <input required onChange={(e) => setLoginInfo({...loginInfo, value: Number(e.target.value) } )} name="value" type="number" placeholder="Valor"></input>
                <button type="submit">Transferir</button>
            </Transaction>
            <TransactionHistory>
            <button onClick={() => setOpenTransaction(true)}>Transa????es</button>
            </TransactionHistory>
            </Content>
        </Container>
    )
    }
    if(render === 2)
    return (
        <div>
            <Header text="Vixe!" />
            <Desconected>
            <h1>Voc?? foi desconectado!</h1>
            <a href="/"> Voltar ?? tela de login</a>
            </Desconected>
        </div>
    )

    if(out) {
        return (
            <div>
                <Navigate to="/" />
            </div>
        )
    }


    return null

}