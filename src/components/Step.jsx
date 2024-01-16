function Step({ step, setStep }) {
  const handleChange = (e) => {
    setStep(e.target.value);
  };

  return (
    <div className="button-div">
      <input
        type="number"
        value={step}
        onChange={handleChange}
        placeholder="Set step"
      />
    </div>
  );
}

export default Step;
