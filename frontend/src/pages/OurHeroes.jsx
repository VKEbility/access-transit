import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { getUser } from "../adapters/user-adapter";
// import UpdateHeroCount from "../components/UpdateHeroCount";
import { Link } from "react-router-dom";

export default function OurHeroes() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  // useEffect(() => {
  //   const loadUser = async () => {
  //     const [user, error] = await getUser(id);
  //     if (error) return setErrorText(error.msg);
  //     setUserProfile(user);
  //   };

  //   loadUser();
  // }, [id]);


  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return (
    <>
      <h1>User</h1>
      <h1>{profileUsername}</h1>
      <p>If the user had any data, here it would be</p>
      <p>Fake Bio or something</p>

      <li className="link"><Link to='/users' end="true">Users</Link></li>
    </>
  )
}