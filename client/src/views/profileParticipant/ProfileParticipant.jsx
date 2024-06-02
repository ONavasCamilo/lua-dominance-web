import { useSelector } from "react-redux";
import style from "./ProfileParticipant.module.css"

const ProfileParticipant = () => {

    const participant = useSelector((state) => state.participant)

    return (
        <div className={style.cont_participant}>
            <h1>{participant.nick}</h1>
        </div>
    )
};

export default ProfileParticipant;
