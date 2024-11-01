import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import mtaPic1 from '../assets/images/MTA-Escalator.jpg';
import mtaPic2 from '../assets/images/Wheelchair-Subway.jpg';
import mtaPic3 from '../assets/images/MTA-Escalator.jpg';

import i18n from 'i18next';
import { useTranslation, Trans } from 'react-i18next';

const satisfiedUsers = [mtaPic1, mtaPic2, mtaPic3];

export default function OnboardingPage() {
	const { t } = useTranslation();

	const [selectedLanguage, setSelectedLanguage] = useState(
		localStorage.getItem('i18nextLng') || 'en'
	);

	useEffect(() => {
		i18n.changeLanguage(selectedLanguage);
	}, [selectedLanguage]);

	useEffect(() => {
		const script = document.createElement('script');
		script.src =
			'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
		script.async = true;
		document.body.appendChild(script);

		// init translate widget
		window.googleTranslateElementInit = () => {
			new window.google.translate.TranslateElement(
				{
					pageLanguage: 'en',
					includedLanguages: 'en,es,fr,de,it,ja,zh,pt,ru,ar,hi,ko',
					layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
				},
				'google_translate_element'
			);
		};

		return () => {
			document.body.removeChild(script);
			delete window.googleTranslateElementInit;
		};
	}, []);

	const handleLanguageChange = (event) => {
		const newLanguage = event.target.value;
		setSelectedLanguage(newLanguage);
		localStorage.setItem('i18nextLng', newLanguage);
		i18n.changeLanguage(newLanguage);
		console.log(`Selected language: ${newLanguage}`);
	};

	return (
		<main id="welcome-portion">
			<header id="welcome-header">
				<div id="welcome-button-container">
					<Link to="/about">
						<button id="welcome-button-link">{t('About')}</button>
					</Link>
					<Link to="/alerts">
						<button id="welcome-button-link">{t('serviceAlerts')}</button>
					</Link>
					<Link to="/accessibility-status">
						<button id="welcome-button-link">{t('seeStatus')}</button>
					</Link>
				</div>
				<h1 id="site-title-not-logged-in">Welcome To #AccessTransit</h1>
			</header>
			<div id="satisfied-users-image-container">
				{satisfiedUsers.map((src, index) => (
					<div key={index} className="satisfied-users">
						<img
							src={src}
							alt={`Satisfied user ${index + 1}`}
							style={{ width: '300px' }}
						/>
					</div>
				))}
			</div>
			<div id="site-description-container">
				<p id="site-description">
					<Trans i18nKey="description">
						The most trusted source for real-time status of your favorite MTA{' '}
						<strong>elevators, escalators, ADA stations</strong>, and{' '}
						<strong>subway alerts</strong> in YOUR language.
					</Trans>
				</p>
				<p id="site-description">{t('siteDescription')}</p>
			</div>
			<label htmlFor="language-select" id="select-language-label">
				{t('select_language_label')}
			</label>
			<div id="google_translate_element"></div>{' '}
		</main>
	);
}
