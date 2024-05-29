import { useState } from "react";

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
      <div>
        <label htmlFor="nick">Nick:</label>
        <input type="text" name="nick"/>
      </div>
      <div>
        <label htmlFor="discord">Discord:</label>
        <input type="text" name="discord" placeholder="opcional"/>
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" name="password"/>
      </div>
      <div>
        <label htmlFor="confirmpassword">Confirma tu contraseña:</label>
        <input type="passsword" name="confirmpassword"/>
      </div>
      <div>
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default SignUp;
