import { useEffect, useState } from "react";
import { listAllHeroes, getHeroUsername } from "../adapters/heroes-adapter";

function Heroes() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const leaderboard = await listAllHeroes();
        const heroUsername = await getHeroUsername();
        // console.log(leaderboard);
        console.log(heroUsername);
        setHeroes(leaderboard);
        // setUsername(getHeroUsername);
      } catch (error) {
        console.error("Error fetching hero leaderboard:", error);
      }
    };
    fetchHeroes();
  }, []);

  return (
    <div id="hero-page-container">
      <h1>Hero Leaderboard</h1>
      <table id="hero-table">
      <thead id="table-heading">
        <tr id="table-headers">
          <th>User ID</th>       
          <th>Hero ID</th>       
          <th>Hero Count</th>
        </tr>
      </thead>
      <tbody id="hero-categories">
        {heroes.map((hero) => (
          <tr id="hero-username" key={hero.id}>
            <td>{hero.user_id}</td> 
            <td>{hero.id}</td>  
            <td>{hero.hero_count}</td>  
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default Heroes;
