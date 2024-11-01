import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import mtaPic1 from '../assets/images/MTA-Escalator.jpg';
import mtaPic2 from '../assets/images/Wheelchair-Subway.jpg';
import mtaPic3 from '../assets/images/Yay-MTA.jpeg';

import i18n from 'i18next';
import { useTranslation, Trans } from 'react-i18next';
import { Container, Title, Button, Group } from '@mantine/core';

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
			<Container style={{ textAlign: 'center' }}>
				<header id="welcome-header">
					<Title order={1} style={{ fontSize: '2.5rem' }}>
						Welcome To #AccessTransit
					</Title>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							padding: '20px',
						}}
					>
						{' '}
						<Group position="center" spacing="lg">
							<Link to="/about">
								<Button variant="outline" style={{ fontWeight: 'bold' }}>
									{t('About')}
								</Button>
							</Link>
							<Link to="/alerts">
								<Button variant="outline" style={{ fontWeight: 'bold' }}>
									{t('serviceAlerts')}
								</Button>
							</Link>
							<Link to="/transit-routes">
								<Button variant="outline" style={{ fontWeight: 'bold' }}>
									{t('seeStatus')}
								</Button>
							</Link>
						</Group>
					</div>
				</header>
				{/* Updated image container to use flexbox for horizontal layout */}
				<div
					id="satisfied-users-image-container"
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexWrap: 'nowrap',
						marginTop: '20px',
					}}
				>
					{satisfiedUsers.map((src, index) => (
						<div
							key={index}
							className="satisfied-users"
							style={{ margin: '10px' }}
						>
							<img
								src={src}
								alt={`Satisfied user ${index + 1}`}
								style={{
									width: '400px', // Set a fixed width
									height: '400px', // Set a fixed height
									objectFit: 'cover', // Maintain aspect ratio while covering the box
								}}
							/>
						</div>
					))}
				</div>
				<label
					htmlFor="language-select"
					id="select-language-label"
					style={{ marginTop: '20px' }}
				>
					{t('select_language_label')}
				</label>
				<div id="google_translate_element" style={{ marginTop: '10px' }}></div>
			</Container>
		</main>
	);
}
