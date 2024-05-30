const InputLabel = ({ name, label, type, placeholder, participant, setParticipant }) => {

  const handleOnChange = e => {
    const { name, value } = e.target
    setParticipant({
        ...participant,
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

export default InputLabel;
