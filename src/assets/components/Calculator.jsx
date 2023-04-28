import Increment from "./Increments";
import Decrement from "./Decrements";
import Reset from "./Reset";
const Calculator = (props) => {
  return (
    <section>
      <div>
        <Decrement counter={props.counter} setCounter={props.setCounter} />

        <p>{props.counter}</p>
        <Increment counter={props.counter} setCounter={props.setCounter} />
      </div>
      <div>
        <Reset counter={props.counter} setCounter={props.setCounter} />
      </div>
    </section>
  );
};
export default Calculator;
