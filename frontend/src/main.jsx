import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; //language translator
import { MantineProvider } from '@mantine/core'; //ui
import App from './App.jsx';
import UserContextProvider from './contexts/CurrentUserContextProvider.jsx';
import i18n from './i18n';
import theme from './styles/theme.js'; // import './styles/index.css'; //global styles
import './styles/styles.js'; //mantine styles
// import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
		<UserContextProvider>
			<BrowserRouter>
				<I18nextProvider i18n={i18n}>
					<App />
				</I18nextProvider>
			</BrowserRouter>
		</UserContextProvider>
	</MantineProvider>
);
