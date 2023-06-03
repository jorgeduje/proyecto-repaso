import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div>
      <h1>Estoy en el login</h1>
      <Link to="/">Voler al home</Link>
      {/* <h2>{contador}</h2> */}
    </div>
  )
}

export default Login