import { Container } from "./styles";

export function Header(text: { text: string } ) {
    return (
        <Container>
            <img src="./ng.png" width="160" height="100" alt="ng-logo"/>
            <h1>{text.text}</h1>
        </Container>
    )
}