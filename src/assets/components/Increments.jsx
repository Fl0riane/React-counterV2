const Increment = (props) => {
  return (
    <button
      className={props.counter > 10 ? "none" : ""}
      onClick={() => props.setCounter(props.counter + 1)}
    >
      <i className="fa-solid fa-plus"></i>
    </button>
  );
};

export default Increment;
