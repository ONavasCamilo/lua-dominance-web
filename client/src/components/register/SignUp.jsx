import { useState } from "react";
import signUpFormData from '../../const/signUpFormData.js'
import InputSignUp from "./InputSignUp";

const SignUp = () => {

    const initialState = {
        nick: '',
        discord: '',
        contraseña: '',
        confirmpassword: '',
    }

    const [participantSignUp, setParticipantSignUp] = useState(initialState)


  return (
    <form>
      {signUpFormData.map(({ label, type, name }) => {
        return (
          <InputSignUp
          key={name}
          label={label}
          type={type}
          name={name}
          />
        )
      })}
      <div>
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default SignUp;
