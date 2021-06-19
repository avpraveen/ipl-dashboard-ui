import { React} from 'react';
import { Link } from 'react-router-dom';

export const MatchDetailCard = ({match, teamName}) => {
  
  if(!match || !teamName) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;

  return (
    <div className="MatchDetailCard">
      <h3>(vs) <Link to={otherTeamRoute}>{otherTeam}</Link> </h3>
      <h5>on {match.date}</h5>
      <h5>at {match.venue}</h5>
      <h5>{match.matchWinner} won by {match.resultMargin} {match.result}</h5>
    </div>
  );
}
