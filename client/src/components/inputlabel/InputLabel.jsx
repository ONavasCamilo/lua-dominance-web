import style from "./InputLabel.module.css";

const InputLabel = ({
  name,
  label,
  type,
  placeholder,
  participant,
  setParticipant,
}) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setParticipant({
      ...participant,
      [name]: value,
    });
  };

  return (
    <div className={style.cont_inputlabel}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        className={style.input}
      />
    </div>
  );
};

export default InputLabel;
