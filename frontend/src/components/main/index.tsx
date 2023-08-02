import { Container, Desconected, Logout, NotFound, Transaction, Content, TransactionHistory } from "./styles";
import { useEffect, useState } from "react";
import { Header } from "../header";
import { checkToken } from "../../utils/requestUser";
import { balanceAccount } from "../../utils/requestAccount";
import { transactionMaker } from "../../utils/requestTransaction";
import { Navigate } from "react-router-dom";
import { Transactions } from "../transactions";
import { useAddContext } from "../../contexts/UserContext";
import { Footer } from "../footer";
import { ToastContainer, toast } from 'react-toastify';


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
            toast.success('transaction completed successfully!');
            validateToken();
        }
        if(transaction.message === 'Não pode transferir para si mesmo.') return toast.error(`You can't transfer for yourself!`)
        if(transaction.message) return toast.error('Username not find')
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
            <Header text={`Balance: $${myBalance}`} />
            <button onClick={() => logout()}>Logout</button>
            </Logout>
            <Content>
            <Transaction onSubmit={(e) => submitTransaction(e)}>
                <h1>💰 Do a Transaction</h1>
                Destine:
                <input required onChange={(e) => setLoginInfo({...loginInfo, destination: e.target.value } )} name="user" type="text" placeholder="Username"></input>
                 Value:
                <input required onChange={(e) => setLoginInfo({...loginInfo, value: Number(e.target.value) } )} name="value" type="number" placeholder="Value"></input>
                <button type="submit">Send</button>
            </Transaction>
            <TransactionHistory>
            <img src="Financialogo.png"/>
            <button onClick={() => setOpenTransaction(true)}>Transactions</button>
            </TransactionHistory>
            </Content>
            <Footer />
            <ToastContainer />
        </Container>
    )
    }
    if(render === 2)
    return (
        <div>
            <Header text="Vixe!" />
            <Desconected>
            <h1>Disconnected!</h1>
            <a href="/"> Voltar à tela de login</a>
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