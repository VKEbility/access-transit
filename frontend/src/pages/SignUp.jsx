import { useContext, useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { createUser } from "../adapters/user-adapter";

// Controlling the sign up form is a good idea because we want to add (eventually)
// more validation and provide real time feedback to the user about usernames and passwords
export default function SignUpPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [rawUsername, setRawUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('');

  // users shouldn't be able to see the sign up page if they are already logged in.
  // if the currentUser exists in the context, navigate the user to 
  // the /users/:id page for that user, using the currentUser.id value
  if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!email) return setErrorText('Missing email');
    if (!rawUsername) return setErrorText('Missing username');
    if (!password) return setErrorText('Missing password');
    if (!language) return setErrorText('Missing language preference');

    const upper = (val) => val.slice(0, 1).toUpperCase() + val.slice(1);
    const username = upper(rawUsername);
    console.log(username)
    const [user, error] = await createUser({ username, password, email, language });
    if (error) return setErrorText(error.message);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setRawUsername(value);
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
    if (name === 'language') setLanguage(value);
  };

  return <>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit} onChange={handleChange} aria-labelledby="create-heading">
      <h2 id="create-heading">Create New User</h2>
      <label htmlFor="email">Email</label>
      <input
        // className={inputStates.email.shake ? 'shake' : ''}
        autoComplete="on"
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={email}
        placeholder="Enter email"
      />
      {/* {inputStates.email.error && <p className="error-message">{inputStates.email.error}</p>} */}

      <label htmlFor="username">Username</label>
      <input
        autoComplete="off"
        type="text"
        id="username"
        name="username"
        onChange={handleChange}
        value={rawUsername}
        minLength="3"
        placeholder="Enter username"
      />
      {/* {inputStates.username.error && <p className="error-message">{inputStates.username.error}</p>} */}

      <label htmlFor="password">Password</label>
      <input
        autoComplete="off"
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={password}
        minLength="4"
        placeholder="Enter password"
      />
      {/* {inputStates.password.error && <p className="error-message">{inputStates.password.error}</p>} */}

      <label htmlFor="language">Choose Language</label>
      <select
        id="language"
        name="language"
        onChange={handleChange}
        value={language}
      >
        <option value="">Select Language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      {/* {inputStates.language.error && <p className="error-message">{inputStates.language.error}</p>} */}

      {/* In reality, we'd want a LOT more validation on signup, so add more things if you have time
        <label htmlFor="password-confirm">Password Confirm</label>
        <input autoComplete="off" type="password" id="password-confirm" name="passwordConfirm" />
      */}

      <button>Sign Up Now!</button>
    </form >
    {!!errorText && <p>{errorText}</p>} {/*//converting err text to a boolean, will only be rendered if there's an err */}
    <p>Already have an account with us? <Link to="/login">Log in!</Link></p>
  </>;
}
