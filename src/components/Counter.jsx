function Counter({ handleClick }) {
  return (
    <div className="button-div">
      <button type="button" className="btn" onClick={handleClick}>
        Apply Step
      </button>
    </div>
  );
}

export default Counter;
