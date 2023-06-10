import { useFetch } from "./hooks/useFetch";

const TraerUsuarios = () => {
  const [ users ] = useFetch("https://jsonplaceholder.typicode.com/users", []);
  console.log(users)
  return <div>TraerUsuarios</div>;
};

export default TraerUsuarios;
