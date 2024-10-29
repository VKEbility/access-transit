import { useEffect, useState } from 'react';
// import { listAllHeroes } from '../adapters/hero_count-adapter';
import { listAllHeroes } from '../adapters/hero_count-adapter';

function Heroes() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        console.log(listAllHeroes());
        const leaderboard = await listAllHeroes();
        setHeroes(leaderboard);
      } catch (error) {
        console.error("Error fetching hero leaderboard:", error);
      }
    };
    fetchHeroes();
  }, []);

  return (
    <div>
      <h2>Hero Leaderboard</h2>
      <ul>
        {heroes.map(hero => (
          <li key={hero.id}>
            {hero.id} - {hero.hero_count} heroes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Heroes;
