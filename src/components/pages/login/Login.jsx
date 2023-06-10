import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })

  const enviarForm = (evento) => {
    evento.preventDefault()
    console.log("el formulario se envio");
    // llamado a la API y le mandamos los datos
    console.log("los datos enviados son: " , userInfo)
  };

  const handleChange = (evento) => {
    console.log(evento.target.value)
    console.log(evento.target.name)

    setUserInfo( {...userInfo, [evento.target.name]: evento.target.value } )

  };


  return (
    <div>
      <h1>Estoy en el login</h1>
      <Link to="/">Voler al home</Link>

      <div>
        <form onSubmit={enviarForm}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
