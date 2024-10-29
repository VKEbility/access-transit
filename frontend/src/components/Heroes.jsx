import { useEffect, useState } from "react";
import { listAllHeroes, getHeroCount } from "../adapters/hero_count-adapter";

function Heroes() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const leaderboard = await listAllHeroes();
        const heroCount = await getHeroCount();
        console.log(heroCount)
        console.log(leaderboard);
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
        <div id="hero-leaderboard-container">
        <ul>
          {heroes.map(hero => (
            <li key={hero.id}>
              {hero.id} - {hero.hero_count} heroes
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Heroes;
