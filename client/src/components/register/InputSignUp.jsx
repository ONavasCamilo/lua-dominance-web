const InputSignUp = ({ name, label, type, placeholder, participantSignUp, setParticipantSignUp }) => {

  const handleOnChange = e => {
    const { name, value } = e.target
    setParticipantSignUp({
        ...participantSignUp,
        [name]: value
    })
  };
    
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} onChange={handleOnChange}/>
    </div>
  );
};

export default InputSignUp;
