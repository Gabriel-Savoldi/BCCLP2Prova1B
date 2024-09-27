import { Container } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    return (
        <Container>
            <h1>Detalhes Candidato</h1><br></br>


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height="300" width="300" src={props.candidatoSelecionado.avatar} />
                <Card.Body>
                    <Card.Title>{"candidato: " + props.candidatoSelecionado.nome}</Card.Title>
                    <Card.Text>
                    <p>{"Curtidas: "+ props.candidatoSelecionado.curtidas}</p>
                    <p>{"Descurtidas: "+ props.candidatoSelecionado.descurtidas}</p>
                    <p>{"Questionamentos: 0"}</p>
                </Card.Text>
                </Card.Body>
            </Card>
            <h1>Propostas do Candidato:</h1>
            <h3>{props.candidatoSelecionado.propostas?.map((proposta)=>{
                return(
                    <table>
                        <tr>
                           {proposta}
                        </tr>
                    </table>
                )
            })}</h3> <br></br>
            <h1>Questionamentos:</h1>
            <h3>{props.candidatoSelecionado.questionamentos?.map((questionamento)=>{
                return(
                    <table>
                        <tr>
                           {questionamento}?
                        </tr>
                    </table>
                )
            })}</h3> <br></br>



            <Button onClick={()=>{ props.setDetalharCandidato(false) }} className="mt-1" variant="success">Voltar</Button>
        </Container>
    );
}