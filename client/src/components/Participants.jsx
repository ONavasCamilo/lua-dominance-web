const Participants = ({ id, nick, discord }) => {

  return (
    <div>
      <p>{id}</p>
      <p>{nick}</p>
      <p>{discord}</p>
    </div>
  );
};

export default Participants;
