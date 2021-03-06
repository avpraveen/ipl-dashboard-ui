import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';

export const MatchPage = () => {

  const [matches, setMatches] = useState([]);
  const {teamName,year} = useParams();
  useEffect(
    () => {
        const fetchMatches = async() => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
        }

        fetchMatches();
    }, [teamName, year]
  )

  return (
    <div className="MatchPage">
        <h1>{teamName}</h1>
        {matches.map(match => <MatchDetailCard match={match} teamName={teamName} key={match.id}/>)}
    </div>
  );
}
