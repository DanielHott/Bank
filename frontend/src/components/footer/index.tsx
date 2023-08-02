import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
      <p>&copy; {new Date().getFullYear()} Daniel Hott. All rights reserved.</p>
        </Container>
    )
}