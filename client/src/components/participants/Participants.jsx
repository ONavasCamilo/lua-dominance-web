import style from "./Participants.module.css"

const Participants = ({ participant }) => {
  const { nick } = participant;
  return (
    <div className={style.cont_participant}>
      <p>{nick}</p>
    </div>
  );
};

export default Participants;
