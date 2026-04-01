import { useParams } from "react-router-dom";

function MotoDetalhes() {
  const { id } = useParams();

  return <h1>Detalhes da Moto {id}</h1>;
}

export default MotoDetalhes;