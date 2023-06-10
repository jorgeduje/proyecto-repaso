import { useFetch } from "./hooks/useFetch";

const TraerComentarios = () => {
  const [ comentarios ] = useFetch("https://jsonplaceholder.typicode.com/comments", []);
console.log(comentarios)
  return <div>TraerComentarios</div>;
};

export default TraerComentarios;
