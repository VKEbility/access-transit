import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import './styles/index.css';

//language translator
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
	<UserContextProvider>
		<BrowserRouter>
			<I18nextProvider i18n={i18n}>
				<App />
			</I18nextProvider>
		</BrowserRouter>
	</UserContextProvider>
);
