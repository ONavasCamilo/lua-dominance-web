import { useSelector } from "react-redux";

const ProfileParticipant = () => {

    const participant = useSelector((state) => state.participant)

    return (
        <div>
            <h1>Bienvenido {participant.nick}</h1>
        </div>
    )
};

export default ProfileParticipant;
