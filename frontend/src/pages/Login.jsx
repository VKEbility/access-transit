import { useContext, useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { logUserIn } from '../adapters/auth-adapter';
import CurrentUserContext from '../contexts/CurrentUserContext';
import '../styles/user-account.css';
import { useTranslation } from 'react-i18next'; // Import useTranslation

export default function LoginPage() {
  const { t } = useTranslation(); // Initialize the translation function

  const navigate = useNavigate();
  const [errorText, setErrorText] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  // users shouldn't be able to see the login page if they are already logged in.
  // if the currentUser exists in the context, navigate the user to
  // the /users/:id page for that user, using the currentUser.id value
  if (currentUser) return <Navigate to={`/`} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    const formData = new FormData(event.target);
    const [user, error] = await logUserIn(Object.fromEntries(formData));
    if (error) return setErrorText(error.msg);
    setCurrentUser(user);
    navigate(`/`);
  };

  return (
    <>
      <h1>{t('login')}</h1>
      <form
        id="user-login-form"
        onSubmit={handleSubmit}
        aria-labelledby="login-heading"
      >
        <h2 id="login-heading">{t('log_back_in')}</h2>
        <label htmlFor="email-or-username">{t('login_label')}</label>
        <input
          type="text"
          autoComplete="email"
          id="email-or-username"
          name="emailOrUsername"
          placeholder={t('email_or_username_placeholder')}
        />

        <label htmlFor="password">{t('password_label')}</label>
        <input
          type="password"
          autoComplete="current-password"
          id="password"
          name="password"
          placeholder={t('password_placeholder')}
        />

        <button>{t('login_button')}</button>
      </form>
      {!!errorText && <p>{errorText}</p>}
    </>
  );
}
