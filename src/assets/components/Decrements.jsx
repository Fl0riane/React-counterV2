const Decrement = (props) => {
  return (
    <button
      className={props.counter <= 0 ? "none" : ""}
      onClick={() => props.setCounter(props.counter - 1)}
    >
      <i className="fa-solid fa-minus"></i>
    </button>
  );
};

export default Decrement;
