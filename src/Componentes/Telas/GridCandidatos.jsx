import { useState } from "react";
import Candidato from "./elementos/Candidato";
export default function GridCandidatos(props) {
    const [listaCandidatos,setListaCandidatos] = useState(props.listaCandidatos)
    
    
    function detalhesDoCandidato(candidato)
    {
        props.setDetalharCandidato(true);
        props.setCandidatoSelecionado(candidato);
    }

    if (props?.listaCandidatos) {
        return (
            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                margin: '10px',
                padding: '10px',
                gap: '20px'
            }}>
                {props.listaCandidatos.map((candidato) => (
                    <Candidato  listaCandidatos={listaCandidatos}  detalhesDoCandidato={detalhesDoCandidato} key={candidato.id} candidato={candidato} />
                ))}
            </div>
        )
    }
    else {
        return (<h1>Carregando...</h1>)
    }
}