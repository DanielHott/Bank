export const balanceAccount = (username: string) => {
    const url = `http://localhost:6585/balance`
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