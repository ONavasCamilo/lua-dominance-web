import { useState } from "react";
import signUpFormData from "../../const/signUpFormData.js";
import InputLabel from "../InputLabel.jsx";
import axios from "axios";
import { VITE_POST_PARTICIPANTS_SIGN_UP } from "../../config/env.config.js";
import { useDispatch } from "react-redux";
import { setParticipant } from "../../redux/participantSlice.js";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialState = {
    nick: "",
    discord: "",
    contraseña: "",
    confirmpassword: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [participantSignUp, setParticipantSignUp] = useState(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post(VITE_POST_PARTICIPANTS_SIGN_UP, participantSignUp)
      .then(({ data }) => data)
      .then((data) => {
        dispatch(setParticipant(data.participant));
        setParticipantSignUp(initialState);
        navigate("/profile");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      {signUpFormData.map(({ label, type, name, placeholder }) => {
        return (
          <InputLabel
            key={name}
            label={label}
            type={type}
            name={name}
            placeholder={placeholder}
            participant={participantSignUp}
            setParticipant={setParticipantSignUp}
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
