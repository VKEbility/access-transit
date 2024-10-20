import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../adapters/user-adapter";

export default function UpdateUserForm({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData))
    const [user, error] = await updateUser(Object.fromEntries(formData));

    console.log('api res', await updateUser(Object.fromEntries(formData))); //debugging
    console.log("Update User Error:", error);
    // If our user isn't who they say they are
    // (an auth error on update) log them out
    // We added the httpStatus as a custom cause in our error
    if (error?.cause > 400 && error?.cause < 500) {
      setCurrentUser(null);
      return navigate('/');
    }

    if (error) {
      if (error.msg.includes('Email')) {
        return setErrorText('Email already in use');
      }
      if (error.msg.includes('Username')) {
        return setErrorText('Username already taken');
      }
      return setErrorText(error.msg || 'An unknown error occurred.');
    }

    setCurrentUser(user);
    event.target.reset();
    setErrorText(''); // clear error message on successful update
  };

  return <form onSubmit={handleSubmit} aria-labelledby="update-heading">
    <h2 id="update-heading">Update User {currentUser.username} </h2>
    <label htmlFor='email'>New Email</label>
    <input type='email' id='email' name='email' />

    <label htmlFor='username'>New Username</label>
    <input type='text' id='username' name='username' />

    <label htmlFor='password'>New Password</label>
    <input type='password' id='password' name='password' />

    <input type="hidden" name="id" value={currentUser.id} />
    <button>Update User</button>
    {!!errorText && <p>{errorText}</p>}
  </form>;
}
