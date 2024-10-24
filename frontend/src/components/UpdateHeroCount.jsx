import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateHeroCount } from "../adapters/hero_count-adapter";

export default function updateHeroCountForm({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData))
    const [user, error] = await updateHeroCount(Object.fromEntries(formData));

    console.log('api res', await updateHeroCount(Object.fromEntries(formData))); //debugging
    console.log("Update User Hero Count Error:", error);
    // If our user isn't who they say they are
    // (an auth error on update) log them out
    // We added the httpStatus as a custom cause in our error
    if (error?.cause > 400 && error?.cause < 500) {
      setCurrentUser(null);
      return navigate('/');
    }

    if (error) {
      return setErrorText(error.msg || 'An unknown error occurred.');
    }

    setCurrentUser(user);
    event.target.reset();
    setErrorText(''); // clear error message on successful update
  };

  return <form onSubmit={handleSubmit} aria-labelledby="update-heading">
    <h2 id="update-heading">Update Hero Count {currentUser.username} </h2>
    <label htmlFor='heroCount'>Add Hero Count</label>
    <input type="number" id='heroCount' name='heroCount' />

    <input type="hidden" name="id" value={currentUser.id} />
    <button>Update User Hero Count</button>
    {!!errorText && <p>{errorText}</p>}
  </form>;
}
