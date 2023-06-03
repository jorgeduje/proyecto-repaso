

const Counter = ({ contador, sumar, restar }) => {

  const sumarTanto = ( numero )=>{
    console.log(numero)
  }
  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={()=>sumarTanto(12)}>Sumar tanta cantidad</button>
    </div>
  );
};

export default Counter;
