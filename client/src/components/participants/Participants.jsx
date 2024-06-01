import style from "./Participants.module.css"

const Participants = ({ nick }) => {

  return (
    <div className={style.cont_participant}>
      <p>{nick}</p>
    </div>
  );
};

export default Participants;
