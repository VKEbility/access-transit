import { useContext, useState, useEffect } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { createUser } from '../adapters/user-adapter';
import { FaArrowLeft } from 'react-icons/fa';
import { Container, Title, TextInput, Button, Select, Text, Notification, Paper } from '@mantine/core';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

export default function SignUpPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState('');
  const [rawUsername, setRawUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('i18nextLng') || 'en'
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    localStorage.setItem('i18nextLng', value);
    i18n.changeLanguage(value);
  };

  if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorText('');
    if (!email) return setErrorText(t('Missing email'));
    if (!rawUsername) return setErrorText(t('Missing username'));
    if (!password) return setErrorText(t('Missing password'));
    if (!selectedLanguage) return setErrorText(t('Missing language preference'));

    setLoading(true);
    const upper = (val) => val.charAt(0).toUpperCase() + val.slice(1);
    const username = upper(rawUsername);
    const [user, error] = await createUser({
      username,
      password,
      email,
      language: selectedLanguage, // Use selectedLanguage here
    });
    setLoading(false);

    if (error) return setErrorText(error.message);

    setCurrentUser(user);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setRawUsername(value);
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
  };

  return (
    <Container size="xs" style={{ marginTop: '50px' }}>
      <Title order={1} align="center">{t('sign_up')}</Title>
      <Paper padding="lg" shadow="md" withBorder>
        <form id="user-signup-form" onSubmit={handleSubmit}>
          <TextInput
            label={t('email_label')}
            autoComplete="on"
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            placeholder={t('email_placeholder')}
            required
            style={{ marginBottom: '20px' }}
          />
          <TextInput
            label={t('username_label')}
            autoComplete="off"
            type="text"
            name="username"
            onChange={handleChange}
            value={rawUsername}
            minLength="3"
            placeholder={t('username_placeholder')}
            required
            style={{ marginBottom: '20px' }}
          />
          <TextInput
            label={t('password_label')}
            autoComplete="off"
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            minLength="4"
            placeholder={t('password_placeholder')}
            required
            style={{ marginBottom: '20px' }}
          />
          <Select
            label={t('choose_language')}
            value={selectedLanguage}
            onChange={handleLanguageChange}
            data={[
              { value: 'en', label: 'English' },
              { value: 'es', label: 'Spanish' },
              { value: 'fr', label: 'French' },
              { value: 'de', label: 'German' },
              { value: 'it', label: 'Italian' },
              { value: 'ja', label: 'Japanese' },
              { value: 'zh', label: 'Chinese (Simplified)' },
              { value: 'pt', label: 'Portuguese' },
              { value: 'ru', label: 'Russian' },
              { value: 'ar', label: 'Arabic' },
              { value: 'hi', label: 'Hindi' },
              { value: 'ko', label: 'Korean' },
            ]}
            style={{ marginBottom: '20px' }}
          />
          <Button type="submit" fullWidth loading={loading}>{t('sign_up_now')}</Button>
        </form>
        {errorText && <Notification color="red" title="Error" style={{ marginTop: '20px' }}>{errorText}</Notification>}
        <Text align="center" style={{ marginTop: '20px' }}>
          {t('already_have_account')}{' '}
          <Link to="/login" className="link-log-in">
            {t('log_in')} <FaArrowLeft className="icon" />
          </Link>
        </Text>
      </Paper>
    </Container>
  );
}
