import players from "../players";
import PlayerCard from "./PlayerCard";

const PlayerList = () => {
  return (
    <>
      {players.map((player, index) => (
        <div className="container mt">
          <PlayerCard key={index} {...player} />
        </div>
      ))}
    </>
  );
};

export default PlayerList;
