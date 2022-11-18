export function transactionMaker( sub: string, sum: string, value: number) {
    const url = `http://localhost:6585/transactions`
    try {
    const request = fetch(url, {
        method: 'POST',
        body: JSON.stringify({ 
           sum, sub, value
          }),
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response: Response) => response.json())
    return result;
    }    catch(err) {
        return err
    }
}

export function transactionsHistory( username: string) {
    const url = `http://localhost:6585/transaction/history`
    try {
    const request = fetch(url, {
        method: 'POST',
        body: JSON.stringify({ 
           username
          }),
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response: Response) => response.json())
    return result;
    }    catch(err) {
        return err
    }
}