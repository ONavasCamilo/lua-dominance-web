import { useState } from "react";
import signInFormData from "../const/signInFormData";
import InputLabel from "../components/InputLabel";
import axios from "axios";
import { VITE_POST_PARTICIPANTS_SIGN_IN } from "../config/env.config";
import { useDispatch } from "react-redux";
import { setParticipant } from "../redux/participantSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const initialState = {
    nick: "",
    password: "",
  };

  const [participantSignIn, setParticipantSignIn] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post(VITE_POST_PARTICIPANTS_SIGN_IN, participantSignIn)
      .then(({ data }) => data)
      .then((data) => {
        dispatch(setParticipant(data.participant))
        navigate('/profile')
      });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {signInFormData.map(({ label, type, name }) => {
        return (
          <InputLabel
            key={name}
            label={label}
            type={type}
            name={name}
            participant={participantSignIn}
            setParticipant={setParticipantSignIn}
          />
        );
      })}
      <div>
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default SignIn;
