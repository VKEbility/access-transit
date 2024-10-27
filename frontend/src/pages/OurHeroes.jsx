import { Link } from "react-router-dom";

export default function OurHeroes() {
  return (
    <>
      <h1>Our Heroes</h1>
      <p>Put something interesting here!</p>

      <li className="link"><Link to='/users' end="true">Users</Link></li>
    </>
  );
};
