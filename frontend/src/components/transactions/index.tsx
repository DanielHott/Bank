import { Header } from "../header";
import { useAddContext } from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import { Container, Content, Back } from "./styles";
import { transactionsHistory } from "../../utils/requestTransaction";

export function Transactions(user: { username: string }) {
    const { openTransaction, setOpenTransaction } = useAddContext();
    const [ debited, setDebited ] = useState(true);
    const [ credited, setCredited ] = useState(true);
    const [ actualVisor, setActualVisor ] = useState('All');
    const [ listCredited, setListCredited ] = useState([])
    const [ nameList, setNameList ] = useState([])
    const [ listDebited, setListDebited ] = useState([])
    
    const getTransferations = async () => {
        const { username } = user;
        const history: any = await transactionsHistory(username);
        setNameList(history.users);
        setListCredited(history.credited);
        setListDebited(history.debited);
    }

    const formatDate = (text: string) => {
        const year = text.substring(0, 4);
        const month = text.substring(5, 7);
        const day = text.substring( 8, 10)
        return `${day}-${month}-${year}`
    } 

    useEffect(() => {
        getTransferations();
    }, []);

    return (
        <Container>
            <Back>
            <Header text="Your Transactions" />
            <button onClick={() => setOpenTransaction(false)} > Back</button>
            </Back>
            <Content>
            <div>
            <button onClick={() => {
                setDebited(true);
                setCredited(true);
                setActualVisor('All');
            }}>All</button>
            <button onClick={() => {
                setDebited(false);
                setCredited(true);
                setActualVisor('Cash In');
            }}>Cash In</button>
            <button onClick={() => {
                setDebited(true);
                setCredited(false);
                setActualVisor('Cash Out');
            }}>Cash Out</button>
            </div>
            <h3>{ actualVisor }</h3>
            <table>
            <tr>
                <th>Value</th>
                <th>To</th>
                <th>Date</th>
            </tr>
            { listCredited && credited && listCredited.map((item: any, index) => {
                return (
                    <tr key={index}>
                      <td>+${ item.value.toFixed(2) }</td>
                      <td>{ nameList.map((name: any) => {
                      if(item.debited_account_id === name.account_id) {
                          return name.username;
                      }
                      return '';
                  })}
                     </td>
                    <td>
                      {formatDate(item.created_at)}
                    </td>
                    </tr>
                )
            }) }
            { listDebited && debited && nameList && listDebited.map((item: any, index) => {
                return (
                    <tr key={index}>
                      <td>-R${ item.value.toFixed(2) }</td>
                      <td>{ nameList.map((name: any) => {
                          if(item.credited_account_id === name.account_id) {
                              return name.username;
                            }
                            return '';
                        })}
                     </td>
                    <td>
                      {formatDate(item.created_at)}
                    </td>
                    </tr>
                )
            })}
            </table>
            </Content>
        </Container>
    )
}