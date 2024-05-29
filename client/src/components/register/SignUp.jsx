import { useState } from "react";
import signUpFormData from "../../const/signUpFormData.js";
import InputSignUp from "./InputSignUp";
import axios from 'axios'
import { VITE_POST_PARTICIPANTS_SIGN_UP } from "../../config/env.config.js";
import { useDispatch } from "react-redux";
import { setParticipant } from "../../redux/participantSlice.js";

const SignUp = () => {
  const initialState = {
    nick: "",
    discord: "",
    contraseña: "",
    confirmpassword: "",
  };

  const dispatch = useDispatch();

  const [participantSignUp, setParticipantSignUp] = useState(initialState);

  const handleOnSubmit = e => {
    e.preventDefault()
    const participant = { ...participantSignUp }
    axios.post(VITE_POST_PARTICIPANTS_SIGN_UP, participant)
    .then(({ data }) => data)
    .then((data) => {
      dispatch(setParticipant(data.participant))
      setParticipantSignUp(initialState)
    })
    .catch((err) => {
      console.log('Error:', err)
    })

  }

  return (
    <form onSubmit={handleOnSubmit}>
      {signUpFormData.map(({ label, type, name, placeholder }) => {
        return (
          <InputSignUp
            key={name}
            label={label}
            type={type}
            name={name}
            placeholder={placeholder}
            participantSignUp={participantSignUp}
            setParticipantSignUp={setParticipantSignUp}
          />
        );
      })}
      <div>
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default SignUp;
