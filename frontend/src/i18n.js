//This is where we can "hardcode" all translations - but also utilizing built in functions from i18n.

//identifying how to write the language by - following the  ISO 639-1 standard
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const language = localStorage.getItem('i18nextLng') || 'en'; // Default to English if no language is set

i18n
	.use(initReactI18next) // Passes i18n down to react-i18next
	.init({
		resources: {
			en: {
				//Default - English
				translation: {
					navHome: 'Home',
					navAbout: 'About',
					navAdaStations: 'ADA Stations',
					navLogin: 'Log In',
					navSignUp: 'Sign Up',
					pageAbout: 'About Us',

					About: 'About',
					serviceAlerts: 'Service Alerts',
					seeStatus: 'See Status',
					description:
						'The most reliable source for real-time status of your MTA <strong>elevators, escalators, ADA stations</strong>, and <strong>subway alerts</strong> in YOUR language.',

					siteDescription: 'Status updated by users like you.',

					// About.jsx Page Translation

					access_transit_title: 'Transit Access',
					the_problem: 'The Problem',
					accessibility_intro:
						'Accessibility in New York City’s subway system is a critical issue that directly affects the independence, dignity, and safety of countless passengers, including people with disabilities, the elderly, and parents with strollers. Current solutions to address the frequent breakdowns of MTA elevators and escalators do not provide accurate real-time information, creating significant barriers that leave these passengers vulnerable and frustrated. Additionally, passengers with language barriers are often excluded from critical announcements or alerts, leading to further stress and confusion.',

					transit_feature_issue:
						'The lack of timely, accurate, and accessible information about the status of essential transit features forces passengers to face uncertainty, leading to dangerous situations and a loss of confidence in their ability to use public transportation.',

					transit_tldr:
						'<strong>Summary</strong>: NYC’s subway system faces significant accessibility issues, with frequent elevator and escalator failures, few ADA-compliant stations, and insufficient support for non-English speakers. These barriers, combined with the lack of reliable information about the status, create an <strong>frustrating</strong>, <strong>unsafe</strong>, and often <strong>impossible</strong> environment for people with disabilities, the elderly, parents with strollers, and non-English speakers.',

					about_SummaryH2: 'Summary',

					about_Summary1:
						'More than 30 years after the passage of the Americans with Disabilities Act, accessibility in NYC’s transportation system continues to pose significant challenges. In a world designed primarily for able-bodied individuals, people with disabilities face numerous obstacles.',

					about_Summary2:
						'As of October 1, 2024, <strong>only 28% of NYC subway stations are ADA compliant</strong>, making it one of the <strong>least accessible transportation systems in the nation</strong>, as highlighted in the 2017 civil rights class action lawsuit for disability rights.',

					about_Summary3:
						'Statistics reveal the magnitude of the problem: 7.15% of the population, or <strong>547,593 people</strong>, identify as mobility impaired; 2.3%, or <strong>185,378 people</strong>, as deaf or hard of hearing; and nearly 20% of the city’s total population—<strong>1.44 million people</strong>—are aging to 65 years or older.',

					about_HypothesisH2: 'Our Hypothesis',
					about_Hypothesis1:
						'If individuals with mobility challenges and language barriers had access to reliable, real-time accessibility data, as well as translation features, they would feel more empowered to navigate NYC’s transit system safely and effectively.',

					about_ProductOverviewH2: 'Product Overview',
					about_missionStatementH2: 'Mission Statement',
					about_MissionStatement1:
						'AccessTransit exists to improve the safety, confidence, and independence of individuals with mobility challenges and those who do not speak English when using public transportation.',
					about_WhoDoWeServeH2: 'Who Do We Serve?',

					about_ProductOverview1:
						'Our app, AccessTransit, is designed to address these critical gaps in current transit accessibility features by leveraging <strong>crowd-sourced data</strong> to provide <strong>reliable, real-time updates</strong> on station accessibility.',

					about_WhoDoWeServe1:
						'We intend to serve individuals who are disabled, mobility-challenged and non-English speakers.',

					about_UserJourneyMapH2: 'User Journey Map',
					user_trip_planning:
						'The user plans a trip to a medical appointment using the official MTA website to check accessibility status.',
					user_arrival:
						'The user arrives at the station, disheartened to find an elevator out of service, contrary to the information on the website.',
					user_discovery:
						'The user discovers AccessTransit as the first search result and feels hopeful.',
					user_app_access:
						'The user accesses the app and is pleased to see the accurate operational status of their station.',
					user_trip_planning_success:
						'The user plans their trip smoothly, reassured by the intuitive interface.',
					about_UserStoriesH2: 'User Stories',
					user_accessible_station:
						'The user can open the app and see their nearest accessible station.',
					user_real_time_status:
						'The user can check the real-time status of accessibility features (elevators/escalators).',
					user_update_status:
						'The user can update the status of features upon arrival if they encounter issues.',
					user_save_stations:
						'The user can save favorite stations by creating an account.',
					user_plan_future_trips:
						'The user can plan future trips based on saved stations with reliable accessibility.',
					about_TechnicalChallengeH2: 'Technical Challenge',
					about_KeyTechnicalChallenge1:
						'During the project’s construction, we anticipated several challenges, including effectively managing the scope expansion and ensuring we meet our 2-3 week build deadline while accurately defining and prioritizing features.',
					about_ExtensionOpportunitiesH2: 'Extension Opportunities',
					about_Prioritized_AccessibilityH3: 'Prioritized Accessibility',
					about_PrioritizedAccessibility1:
						'We are committed to ensuring that all users have access to an aesthetic, user-friendly, and intuitive interface, removing barriers related to age or technical competence.',
					about_Sources: 'Sources',
				},
			},

			es: {
				//Spanish
				translation: {
					navHome: 'Inicio',
					navAbout: 'Acerca de',
					navAdaStations: 'Estaciones ADA',
					navLogin: 'Iniciar sesión',
					navSignUp: 'Registrarse',
					pageAbout: 'Sobre Nosotros',

					About: 'Acerca de',
					serviceAlerts: 'Alertas de Servicio',
					seeStatus: 'Ver Estado',
					description:
						'La fuente más confiable para el estado en tiempo real de tus MTA <strong>elevadores, escaleras mecánicas, estaciones ADA</strong>, y <strong>alertas del metro</strong> en TU idioma.',

					siteDescription: 'Estado actualizado por usuarios como tú.',

					// About.jsx Page Translation

					access_transit_title: 'Acceso al Tránsito',
					the_problem: 'El Problema',
					accessibility_intro:
						'La accesibilidad en el sistema de metro de la ciudad de Nueva York es un problema crítico que afecta directamente la independencia, dignidad y seguridad de innumerables pasajeros, incluidas personas con discapacidades, personas mayores y padres con cochecitos. Las soluciones actuales para abordar las frecuentes averías de los ascensores y escaleras mecánicas de la MTA no proporcionan información precisa en tiempo real, creando obstáculos significativos que dejan a estos pasajeros vulnerables y frustrados. Además, los pasajeros con barreras de idioma a menudo son excluidos de anuncios o alertas críticos, lo que genera más estrés y confusión.',

					transit_feature_issue:
						'La falta de información oportuna, precisa y accesible sobre el estado de las características esenciales del transporte obliga a los pasajeros a enfrentar la incertidumbre, lo que lleva a situaciones peligrosas y a una pérdida de confianza en su capacidad para utilizar el transporte público.',

					transit_tldr:
						'<strong>Resumen</strong>: El sistema de metro de NYC enfrenta importantes problemas de accesibilidad, con frecuentes fallos de ascensores y escaleras mecánicas, pocas estaciones que cumplen con la ADA y un apoyo insuficiente para personas que no hablan inglés. Estos obstáculos, junto con la falta de información confiable sobre el estado, crean un entorno <strong>frustrante</strong>, <strong>inseguro</strong> y, a menudo, <strong>imposible</strong> para personas con discapacidades, personas mayores, padres con cochecitos y personas que no hablan inglés.',

					about_SummaryH2: 'Resumen',

					about_Summary1:
						'Más de 30 años después de la aprobación de la Ley de Estadounidenses con Discapacidades, la accesibilidad en el sistema de transporte de NYC sigue planteando desafíos importantes. En un mundo diseñado principalmente para personas sin discapacidades, las personas con discapacidades enfrentan numerosos obstáculos.',

					about_Summary2:
						'A partir del 1 de octubre de 2024, <strong>solo el 28% de las estaciones de metro de NYC son compatibles con la ADA</strong>, lo que la convierte en uno de los <strong>sistemas de transporte menos accesibles de la nación</strong>, como se expone en la demanda colectiva de derechos civiles de discapacidad de 2017.',

					about_Summary3:
						'Las estadísticas revelan la magnitud del problema: el 7.15% de la población, o <strong>547,593 personas</strong>, se identifican como discapacitadas en movilidad; el 2.3%, o <strong>185,378 personas</strong>, como sordas o con discapacidad auditiva; y casi el 20% de la población total de la ciudad—<strong>1.44 millones de personas</strong>—está envejeciendo a 65 años o más.',

					about_HypothesisH2: 'Nuestra Hipótesis',
					about_Hypothesis1:
						'Si las personas con dificultades de movilidad y barreras lingüísticas tuvieran acceso a datos de accesibilidad fiables y en tiempo real, así como a funciones de traducción, se sentirían más empoderadas para desplazarse por el sistema de transporte de NYC de manera segura y efectiva.',

					about_ProductOverviewH2: 'Descripción del Producto',
					about_ProductOverview1:
						'Nuestra aplicación, AccessTransit, está diseñada para abordar estas brechas críticas en las características de accesibilidad del transporte actuales aprovechando <strong>datos recopilados por la comunidad</strong> para proporcionar <strong>actualizaciones confiables en tiempo real</strong> sobre la accesibilidad de las estaciones.',

					about_WhoDoWeServe1:
						'Nuestro objetivo es servir a personas con discapacidades, dificultades de movilidad y que no hablan inglés.',

					about_missionStatementH2: 'Declaración de Misión',
					about_MissionStatement1:
						'AccessTransit existe para mejorar la seguridad, confianza e independencia de las personas con dificultades de movilidad y de los que no hablan inglés al usar el transporte público.',
					about_missionStatementH2: 'Declaración de Misión',
					about_MissionStatement1:
						'AccessTransit existe para mejorar la seguridad, confianza e independencia de las personas con dificultades de movilidad y de los que no hablan inglés al usar el transporte público.',
					about_WhoDoWeServeH2: '¿A quién servimos?',
					about_UserJourneyMapH2: 'Mapa del Viaje del Usuario',
					user_trip_planning:
						'El usuario planea un viaje a una cita médica utilizando el sitio oficial de MTA para verificar el estado de accesibilidad.',
					user_arrival:
						'El usuario llega a la estación, desanimado al encontrar un ascensor fuera de servicio, en contra de la información del sitio web.',
					user_discovery:
						'El usuario descubre AccessTransit como el primer resultado de búsqueda y se siente esperanzado.',
					user_app_access:
						'El usuario accede a la aplicación y se alegra de ver el estado operativo preciso de su estación.',
					user_trip_planning_success:
						'El usuario planifica su viaje sin problemas, asegurado por la interfaz intuitiva.',
					about_UserStoriesH2: 'Historias de Usuario',
					user_accessible_station:
						'El usuario puede abrir la aplicación y ver su estación accesible más cercana.',
					user_real_time_status:
						'El usuario puede verificar el estado en tiempo real de las características de accesibilidad (ascensores/escaleras mecánicas).',
					user_update_status:
						'El usuario puede actualizar el estado de las características al llegar si encuentra problemas.',
					user_save_stations:
						'El usuario puede guardar estaciones favoritas creando una cuenta.',
					user_plan_future_trips:
						'El usuario puede planificar futuros viajes basados en estaciones guardadas con accesibilidad fiable.',
					about_TechnicalChallengeH2: 'Desafío Técnico',
					about_KeyTechnicalChallenge1:
						'Durante la construcción del proyecto, anticipamos varios desafíos, incluyendo la gestión efectiva de la expansión del alcance y asegurarnos de cumplir con nuestro plazo de construcción de 2 a 3 semanas mientras definimos y priorizamos características de manera precisa.',
					about_ExtensionOpportunitiesH2: 'Oportunidades de Extensión',
					about_Prioritized_AccessibilityH3: 'Accesibilidad Priorizada',
					about_PrioritizedAccessibility1:
						'Estamos comprometidos a garantizar que todos los usuarios tengan acceso a una interfaz estética, fácil de usar e intuitiva, eliminando barreras relacionadas con la edad o la competencia técnica.',
					about_Sources: 'Fuentes',
				},
			},

			fr: {
				//French
				translation: {
					navHome: 'Accueil',
					navAbout: 'À propos',
					navAdaStations: 'Stations ADA',
					navLogin: 'Connexion',
					navSignUp: "S'inscrire",
					pageAbout: 'À propos de nous',

					About: 'À propos',
					serviceAlerts: 'Alertes de Service',
					seeStatus: 'Voir le Statut',
					description:
						'La source la plus fiable pour le statut en temps réel de vos MTA préférées <strong>ascenseurs, escaliers, stations ADA</strong>, et <strong>alertes de métro</strong> dans VOTRE langue.',

					siteDescription: 'Statut mis à jour par des utilisateurs comme vous.',
					// Other keys...
					// About.jsx Page Translation

					access_transit_title: 'Accès au Transit',
					the_problem: 'Le Problème',
					accessibility_intro:
						'L’accessibilité dans le système de métro de New York est un problème critique qui affecte directement l’indépendance, la dignité et la sécurité de nombreux passagers, y compris les personnes handicapées, les personnes âgées et les parents avec des poussettes. Les solutions actuelles pour traiter les pannes fréquentes des ascenseurs et des escaliers mécaniques de la MTA ne fournissent pas d’informations précises en temps réel, créant des obstacles significatifs qui laissent ces passagers vulnérables et frustrés. De plus, les passagers ayant des barrières linguistiques sont souvent exclus des annonces ou alertes critiques, ce qui engendre plus de stress et de confusion.',

					transit_feature_issue:
						'Le manque d’informations en temps opportun, précises et accessibles concernant l’état des caractéristiques essentielles du transport oblige les passagers à faire face à l’incertitude, menant à des situations dangereuses et à une perte de confiance dans leur capacité à utiliser les transports en commun.',

					transit_tldr:
						'<strong>Résumé</strong>: Le système de métro de NYC fait face à d’importants problèmes d’accessibilité, avec des pannes fréquentes d’ascenseurs et d’escaliers mécaniques, peu de stations conformes à la loi ADA et un soutien insuffisant pour les personnes ne parlant pas anglais. Ces obstacles, associés à un manque d’informations fiables sur l’état, créent un environnement <strong>frustrant</strong>, <strong>insecure</strong> et souvent <strong>impossible</strong> pour les personnes handicapées, les personnes âgées, les parents avec des poussettes et les personnes ne parlant pas anglais.',

					about_SummaryH2: 'Résumé',

					about_Summary1:
						'Plus de 30 ans après l’adoption de la Loi sur les Américains avec Disabilities, l’accessibilité dans le système de transport de NYC continue de poser d’importants défis. Dans un monde principalement conçu pour les personnes sans handicap, les personnes handicapées rencontrent de nombreux obstacles.',

					about_Summary2:
						'À partir du 1er octobre 2024, <strong>seulement 28 % des stations de métro de NYC sont conformes à la loi ADA</strong>, ce qui en fait l’un des <strong>systèmes de transport les moins accessibles de la nation</strong>, comme le souligne la plainte collective pour droits civils en matière de handicap de 2017.',

					about_Summary3:
						'Les statistiques révèlent l’ampleur du problème : 7,15 % de la population, soit <strong>547 593 personnes</strong>, s’identifient comme handicapées motrices ; 2,3 %, soit <strong>185 378 personnes</strong>, comme sourdes ou malentendantes ; et près de 20 % de la population totale de la ville—<strong>1,44 million de personnes</strong>—vieillit à 65 ans ou plus.',

					about_HypothesisH2: 'Notre Hypothèse',
					about_Hypothesis1:
						'Si les personnes ayant des difficultés de mobilité et des barrières linguistiques avaient accès à des données d’accessibilité fiables et en temps réel, ainsi qu’à des fonctionnalités de traduction, elles se sentiraient plus habilitées à naviguer en toute sécurité et efficacement dans le système de transport de NYC.',

					about_ProductOverviewH2: 'Présentation du Produit',
					about_ProductOverview1:
						"Notre application, AccessTransit, est conçue pour combler ces lacunes critiques dans les fonctionnalités d'accessibilité des transports actuels en utilisant des <strong>données collectées par la communauté</strong> pour fournir des <strong>mises à jour fiables en temps réel</strong> sur l'accessibilité des stations.",

					about_WhoDoWeServe1:
						"Nous avons l'intention de servir les personnes handicapées, ayant des difficultés de mobilité et les non-anglophones.",

					about_missionStatementH2: 'Déclaration de Mission',
					about_MissionStatement1:
						'AccessTransit existe pour améliorer la sécurité, la confiance et l’indépendance des personnes ayant des difficultés de mobilité et de celles qui ne parlent pas anglais lors de l’utilisation des transports en commun.',
					about_WhoDoWeServeH2: 'Qui Servons-Nous ?',
					about_UserJourneyMapH2: "Carte du Voyage de l'Utilisateur",
					user_trip_planning:
						'L’utilisateur planifie un voyage à un rendez-vous médical en utilisant le site officiel de la MTA pour vérifier le statut d’accessibilité.',
					user_arrival:
						'L’utilisateur arrive à la station, découragé de trouver un ascenseur hors service, contrairement aux informations du site Web.',
					user_discovery:
						'L’utilisateur découvre AccessTransit comme le premier résultat de recherche et se sent plein d’espoir.',
					user_app_access:
						'L’utilisateur accède à l’application et est heureux de voir l’état opérationnel précis de sa station.',
					user_trip_planning_success:
						'L’utilisateur planifie son voyage sans problème, assuré par l’interface intuitive.',
					about_UserStoriesH2: 'Histoires d’Utilisateur',
					user_accessible_station:
						'L’utilisateur peut ouvrir l’application et voir sa station accessible la plus proche.',
					user_real_time_status:
						'L’utilisateur peut vérifier le statut en temps réel des caractéristiques d’accessibilité (ascenseurs/escalators).',
					user_update_status:
						'L’utilisateur peut mettre à jour l’état des caractéristiques à son arrivée s’il rencontre des problèmes.',
					user_save_stations:
						'L’utilisateur peut sauvegarder des stations favorites en créant un compte.',
					user_plan_future_trips:
						'L’utilisateur peut planifier de futurs voyages basés sur des stations sauvegardées avec une accessibilité fiable.',
					about_TechnicalChallengeH2: 'Défi Technique',
					about_KeyTechnicalChallenge1:
						'Lors de la construction du projet, nous avons anticipé plusieurs défis, y compris la gestion efficace de l’expansion de l’échelle et l’assurance de respecter notre délai de construction de 2 à 3 semaines tout en définissant et priorisant les caractéristiques avec précision.',
					about_ExtensionOpportunitiesH2: 'Opportunités d’Extension',
					about_Prioritized_AccessibilityH3: 'Accessibilité Priorisée',
					about_PrioritizedAccessibility1:
						'Nous nous engageons à garantir que tous les utilisateurs aient accès à une interface esthétique, facile à utiliser et intuitive, éliminant les barrières liées à l’âge ou à la compétence technique.',
					about_Sources: 'Sources',
				},
			},
			de: {
				// German
				translation: {
					navHome: 'Startseite',
					navAbout: 'Über uns',
					navAdaStations: 'ADA-Stationen',
					navLogin: 'Anmelden',
					navSignUp: 'Registrieren',
					pageAbout: 'Über Uns',

					About: 'Über',
					serviceAlerts: 'Servicewarnungen',
					seeStatus: 'Status anzeigen',
					description:
						'Die zuverlässigste Quelle für den Echtzeitstatus Ihrer MTA <strong>Aufzüge, Rolltreppen, ADA-Stationen</strong> und <strong>U-Bahn-Warnungen</strong> in IHRER Sprache.',

					siteDescription: 'Status, aktualisiert von Nutzern wie Ihnen.',

					access_transit_title: 'Zugang zu öffentlichen Verkehrsmitteln',
					the_problem: 'Das Problem',
					accessibility_intro:
						'Die Barrierefreiheit im U-Bahn-System von New York City ist ein kritisches Problem, das direkt die Unabhängigkeit, Würde und Sicherheit zahlreicher Fahrgäste beeinträchtigt, darunter Menschen mit Behinderungen, ältere Menschen und Eltern mit Kinderwagen. Die aktuellen Lösungen zur Behebung der häufigen Ausfälle der Aufzüge und Rolltreppen der MTA bieten keine genauen Echtzeitinformationen und schaffen erhebliche Barrieren, die diese Fahrgäste verletzlich und frustriert zurücklassen. Darüber hinaus werden Fahrgäste mit Sprachbarrieren oft von wichtigen Ankündigungen oder Warnungen ausgeschlossen, was zu weiterem Stress und Verwirrung führt.',

					transit_feature_issue:
						'Der Mangel an zeitnahen, genauen und zugänglichen Informationen über den Status der wesentlichen Verkehrsanlagen zwingt die Fahrgäste dazu, Unsicherheit zu erleben, was zu gefährlichen Situationen und einem Vertrauensverlust in ihre Fähigkeit führt, öffentliche Verkehrsmittel zu nutzen.',

					transit_tldr:
						'<strong>Zusammenfassung</strong>: Das U-Bahn-System von NYC steht vor erheblichen Barrieren in Bezug auf die Barrierefreiheit, mit häufigen Ausfällen von Aufzügen und Rolltreppen, wenigen ADA-konformen Stationen und unzureichender Unterstützung für Personen, die kein Englisch sprechen. Diese Hindernisse, zusammen mit dem Mangel an zuverlässigen Informationen über den Status, schaffen eine <strong>frustrierende</strong>, <strong>unsichere</strong> und oft <strong>unmögliche</strong> Umgebung für Menschen mit Behinderungen, ältere Menschen, Eltern mit Kinderwagen und Personen, die kein Englisch sprechen.',

					about_SummaryH2: 'Zusammenfassung',

					about_Summary1:
						'Über 30 Jahre nach Verabschiedung des Americans with Disabilities Act stehen die Barrieren für die Barrierefreiheit im NYC-Transportsystem weiterhin vor erheblichen Herausforderungen. In einer Welt, die hauptsächlich für Menschen ohne Behinderungen konzipiert ist, stehen Menschen mit Behinderungen vielen Hindernissen gegenüber.',

					about_Summary2:
						'Ab dem 1. Oktober 2024 <strong>werden nur 28 % der U-Bahn-Stationen von NYC ADA-konform sein</strong>, was es zu einem der <strong>am wenigsten zugänglichen Verkehrssysteme des Landes</strong> macht, wie die Sammelklage von 2017 über Diskriminierung von Menschen mit Behinderungen aufzeigt.',

					about_Summary3:
						'Die Statistiken zeigen das Ausmaß des Problems: 7,15 % der Bevölkerung, d.h. <strong>547.593 Personen</strong>, identifizieren sich als motorisch behindert; 2,3 %, d.h. <strong>185.378 Personen</strong>, als gehörlos oder schwerhörig; und fast 20 % der Gesamtbevölkerung der Stadt—<strong>1,44 Millionen Personen</strong>—erreichen das Alter von 65 Jahren oder mehr.',

					about_HypothesisH2: 'Unsere Hypothese',
					about_Hypothesis1:
						'Wenn Personen mit Mobilitätseinschränkungen und Sprachbarrieren Zugang zu zuverlässigen und aktuellen Daten zur Barrierefreiheit sowie zu Übersetzungsfunktionen hätten, würden sie sich befähigter fühlen, sicher und effizient im NYC-Transportsystem zu navigieren.',

					about_ProductOverviewH2: 'Produktübersicht',
					about_ProductOverview1:
						'Unsere App, AccessTransit, ist darauf ausgelegt, diese kritischen Lücken in den aktuellen Funktionen zur Barrierefreiheit im Verkehr zu schließen, indem sie <strong>crowd-sourced Daten</strong> nutzt, um <strong>zuverlässige, Echtzeit-Updates</strong> zur Barrierefreiheit der Stationen bereitzustellen.',

					about_WhoDoWeServe1:
						'Wir beabsichtigen, Menschen zu bedienen, die behindert, mobilitätseingeschränkt und nicht Englisch sprechend sind.',

					about_missionStatementH2: 'Missionserklärung',
					about_MissionStatement1:
						'AccessTransit existiert, um die Sicherheit, das Vertrauen und die Unabhängigkeit von Personen mit Mobilitätseinschränkungen und von Personen, die kein Englisch sprechen, bei der Nutzung öffentlicher Verkehrsmittel zu verbessern.',
					about_WhoDoWeServeH2: 'Wen bedienen wir?',
					about_UserJourneyMapH2: 'Nutzerreise-Karte',
					user_trip_planning:
						'Der Nutzer plant eine Reise zu einem Arzttermin unter Verwendung der offiziellen MTA-Website, um den Status der Barrierefreiheit zu überprüfen.',
					user_arrival:
						'Der Nutzer kommt an der Station an und ist frustriert, einen defekten Aufzug zu finden, im Gegensatz zu den Informationen auf der Website.',
					user_discovery:
						'Der Nutzer entdeckt AccessTransit als das erste Suchergebnis und fühlt sich hoffnungsvoll.',
					user_app_access:
						'Der Nutzer öffnet die App und freut sich über den genauen Betriebsstatus seiner Station.',
					user_trip_planning_success:
						'Der Nutzer plant seine Reise problemlos und fühlt sich durch die intuitive Benutzeroberfläche sicher.',
					about_UserStoriesH2: 'Nutzergeschichten',
					user_accessible_station:
						'Der Nutzer kann die App öffnen und die nächstgelegene zugängliche Station sehen.',
					user_real_time_status:
						'Der Nutzer kann den Echtzeitstatus der Barrierefreiheitseinrichtungen (Aufzüge/Rolltreppen) überprüfen.',
					user_update_status:
						'Der Nutzer kann den Status der Einrichtungen bei seiner Ankunft aktualisieren, wenn er auf Probleme stößt.',
					user_save_stations:
						'Der Nutzer kann durch Erstellen eines Kontos Lieblingsstationen speichern.',
					user_plan_future_trips:
						'Der Nutzer kann zukünftige Reisen basierend auf gespeicherten Stationen mit zuverlässiger Barrierefreiheit planen.',
					about_TechnicalChallengeH2: 'Technische Herausforderung',
					about_KeyTechnicalChallenge1:
						'Bei der Erstellung des Projekts haben wir mehrere Herausforderungen antizipiert, einschließlich der effizienten Verwaltung des Skalierungswachstums und der Gewährleistung, dass wir unseren Bauzeitrahmen von 2 bis 3 Wochen einhalten, während wir Funktionen präzise definieren und priorisieren.',
					about_ExtensionOpportunitiesH2: 'Erweiterungsmöglichkeiten',
					about_Prioritized_AccessibilityH3: 'Priorisierte Barrierefreiheit',
					about_PrioritizedAccessibility1:
						'Wir verpflichten uns, sicherzustellen, dass alle Benutzer Zugang zu einer ästhetisch ansprechenden, benutzerfreundlichen und intuitiven Benutzeroberfläche haben, um Barrieren, die mit dem Alter oder technischen Fähigkeiten verbunden sind, abzubauen.',
					about_Sources: 'Quellen',
				},
			},

			it: {
				// - Italian
				translation: {
					navHome: 'Home',
					navAbout: 'Chi Siamo',
					navAdaStations: 'Stazioni ADA',
					navLogin: 'Accedi',
					navSignUp: 'Registrati',
					pageAbout: 'Chi Siamo',

					About: 'Chi Siamo',
					serviceAlerts: 'Avvisi di Servizio',
					seeStatus: 'Vedi Stato',
					description:
						'La fonte più affidabile per lo stato in tempo reale dei tuoi <strong>ascensori, scale mobili, stazioni ADA</strong> e <strong>avvisi della metropolitana</strong> nella TUA lingua.',

					siteDescription: 'Stato aggiornato da utenti come te.',

					access_transit_title: 'Accessibilità ai Trasporti',
					the_problem: 'Il Problema',
					accessibility_intro:
						'L’accessibilità nel sistema della metropolitana di New York è una questione critica che influisce direttamente sull’indipendenza, dignità e sicurezza di innumerevoli passeggeri, comprese le persone con disabilità, gli anziani e i genitori con passeggini. Le soluzioni attuali per affrontare i frequenti guasti degli ascensori e delle scale mobili della MTA non forniscono informazioni accurate in tempo reale, creando barriere significative che rendono questi passeggeri vulnerabili e frustrati. Inoltre, i passeggeri con barriere linguistiche sono spesso esclusi da annunci o avvisi critici, portando a ulteriore stress e confusione.',

					transit_feature_issue:
						'La mancanza di informazioni tempestive, accurate e accessibili sullo stato delle caratteristiche essenziali dei trasporti costringe i passeggeri ad affrontare incertezze, portando a situazioni pericolose e a una perdita di fiducia nella loro capacità di utilizzare i mezzi pubblici.',

					transit_tldr:
						'<strong>Riassunto</strong>: Il sistema della metropolitana di NYC affronta significativi problemi di accessibilità, con frequenti guasti di ascensori e scale mobili, poche stazioni conformi ADA e supporto insufficiente per chi non parla inglese. Queste barriere, unite alla mancanza di informazioni affidabili sullo stato, creano un ambiente <strong>frustrante</strong>, <strong>pericoloso</strong> e spesso <strong>impossibile</strong> per le persone con disabilità, gli anziani, i genitori con passeggini e i non anglofoni.',

					about_SummaryH2: 'Riassunto',

					about_Summary1:
						'Sono passati più di 30 anni dalla promulgazione della Legge sui Diritti dei Disabili, e l’accessibilità nel sistema di trasporto di NYC continua a presentare sfide significative. In un mondo progettato principalmente per individui senza disabilità, le persone con disabilità affrontano numerosi ostacoli.',

					about_Summary2:
						'A partire dal 1 ottobre 2024, <strong>solo il 28% delle stazioni della metropolitana di NYC sono conformi ADA</strong>, rendendola uno dei <strong> sistemi di trasporto meno accessibili del paese</strong>, come evidenziato nella causa collettiva per diritti civili del 2017 per i diritti delle persone con disabilità.',

					about_Summary3:
						'Le statistiche rivelano l’entità del problema: il 7,15% della popolazione, ovvero <strong>547.593 persone</strong>, si identifica come con mobilità ridotta; il 2,3%, ovvero <strong>185.378 persone</strong>, come sorde o con problemi di udito; e quasi il 20% della popolazione totale della città—<strong>1,44 milioni di persone</strong>—sta invecchiando fino a 65 anni o più.',

					about_HypothesisH2: 'La Nostra Ipotesi',
					about_Hypothesis1:
						'Se le persone con sfide di mobilità e barriere linguistiche avessero accesso a dati affidabili e in tempo reale sull’accessibilità, oltre a funzionalità di traduzione, si sentirebbero più empowerati a navigare nel sistema di trasporto di NYC in modo sicuro ed efficace.',

					about_ProductOverviewH2: 'Panoramica del Prodotto',

					about_ProductOverview1:
						'La nostra app, AccessTransit, è progettata per affrontare queste lacune critiche nelle attuali funzionalità di accessibilità del trasporto sfruttando <strong>dati crowdsourced</strong> per fornire <strong>aggiornamenti affidabili in tempo reale</strong> sull’accessibilità delle stazioni.',

					about_WhoDoWeServe1:
						'Intendiamo servire persone con disabilità, difficoltà di mobilità e chi non parla inglese.',

					about_missionStatementH2: 'Dichiarazione di Missione',
					about_MissionStatement1:
						'AccessTransit esiste per migliorare la sicurezza, la fiducia e l’indipendenza delle persone con sfide di mobilità e di coloro che non parlano inglese quando utilizzano i mezzi pubblici.',
					about_WhoDoWeServeH2: 'Chi Serviamo?',
					about_UserJourneyMapH2: 'Mappa del Viaggio dell’Utente',
					user_trip_planning:
						'L’utente pianifica un viaggio per un appuntamento medico utilizzando il sito ufficiale della MTA per controllare lo stato di accessibilità.',
					user_arrival:
						'L’utente arriva alla stazione, demoralizzato nel trovare un ascensore fuori servizio, contrariamente alle informazioni presenti sul sito web.',
					user_discovery:
						'L’utente scopre AccessTransit come il primo risultato di ricerca e si sente speranzoso.',
					user_app_access:
						'L’utente accede all’app e si compiace nel vedere lo stato operativo accurato della propria stazione.',
					user_trip_planning_success:
						'L’utente pianifica il proprio viaggio senza problemi, rassicurato dall’interfaccia intuitiva.',
					about_UserStoriesH2: 'Storie degli Utenti',
					user_accessible_station:
						'L’utente può aprire l’app e vedere la stazione accessibile più vicina.',
					user_real_time_status:
						'L’utente può controllare lo stato in tempo reale delle caratteristiche di accessibilità (ascensori/scale mobili).',
					user_update_status:
						'L’utente può aggiornare lo stato delle caratteristiche all’arrivo se incontra problemi.',
					user_save_stations:
						'L’utente può salvare le stazioni preferite creando un account.',
					user_plan_future_trips:
						'L’utente può pianificare viaggi futuri basati su stazioni salvate con accessibilità affidabile.',
					about_TechnicalChallengeH2: 'Sfida Tecnica',
					about_KeyTechnicalChallenge1:
						'Durante la costruzione del progetto, ci aspettavamo diverse sfide, tra cui la gestione efficace dell’espansione del campo e la garanzia di rispettare la nostra scadenza di costruzione di 2-3 settimane, mentre definiamo e priorizziamo con precisione le caratteristiche.',
					about_ExtensionOpportunitiesH2: 'Opportunità di Estensione',
					about_Prioritized_AccessibilityH3: 'Accessibilità Prioritaria',
					about_PrioritizedAccessibility1:
						'Siamo impegnati a garantire che tutti gli utenti abbiano accesso a un’interfaccia estetica, user-friendly e intuitiva, rimuovendo le barriere relative all’età o alla competenza tecnica.',
					about_Sources: 'Fonti',
				},
			},
			ja: {
				//Japanese
				translation: {
					navHome: 'ホーム',
					navAbout: '私たちについて',
					navAdaStations: 'ADAステーション',
					navLogin: 'ログイン',
					navSignUp: 'サインアップ',
					pageAbout: '私たちについて',

					About: '私たちについて',
					serviceAlerts: 'サービスアラート',
					seeStatus: 'ステータスを見る',
					description:
						'あなたの言語で、MTAの<strong>エレベーター、エスカレーター、ADAステーション</strong>、および<strong>地下鉄アラート</strong>のリアルタイムステータスの最も信頼できるソースです。',

					siteDescription:
						'ステータスは、あなたのようなユーザーによって更新されます。',

					access_transit_title: '交通アクセス',
					the_problem: '問題',
					accessibility_intro:
						'ニューヨーク市の地下鉄システムにおけるアクセシビリティは、障害を持つ人々、高齢者、ベビーカーを持つ親など、数え切れないほどの乗客の独立性、尊厳、安全に直接影響を与える重要な問題です。MTAのエレベーターやエスカレーターの頻繁な故障に対処する現在の解決策は、正確なリアルタイム情報を提供せず、これらの乗客を脆弱でイライラさせる重大な障壁を生み出しています。また、言語の障壁を持つ乗客は、重要な発表やアラートからしばしば除外され、さらなるストレスと混乱を引き起こします。',

					transit_feature_issue:
						'重要な交通機能の状態に関する迅速で正確でアクセス可能な情報が欠如しているため、乗客は不確実性に直面し、危険な状況を招き、公共交通機関を利用する自信を失います。',

					transit_tldr:
						'<strong>要約</strong>：NYCの地下鉄システムは、頻繁なエレベーターとエスカレーターの故障、ADA準拠の駅の少なさ、非英語話者への十分なサポートの欠如など、重大なアクセシビリティ問題に直面しています。これらの障壁と、ステータスに関する信頼できる情報の欠如が組み合わさることで、障害者、高齢者、ベビーカーを持つ親、非英語話者にとって<strong>苛立たしい</strong>、<strong>危険な</strong>、しばしば<strong>不可能な</strong>環境を生み出しています。',

					about_SummaryH2: '要約',

					about_Summary1:
						'障害者法（ADA）が制定されてから30年以上が経過した今も、NYCの交通システムにおけるアクセシビリティは重大な課題を引き起こしています。主に健常者のために設計された世界では、障害者は数多くの障害に直面しています。',

					about_Summary2:
						'2024年10月1日現在、<strong>ニューヨーク市の地下鉄駅のうち28%のみがADA準拠</strong>であり、これは全国で<strong>最もアクセスしにくい交通システムの一つ</strong>です。これは、障害者の権利に関する2017年の市民権集団訴訟で強調されました。',

					about_Summary3:
						'統計は問題の大きさを明らかにしています：人口の7.15%、つまり<strong>547,593人</strong>が移動制約を抱えていると特定されており、2.3%、つまり<strong>185,378人</strong>が聴覚障害を持っており、そして市の総人口のほぼ20%—<strong>1.44百万人</strong>が65歳以上です。',

					about_HypothesisH2: '私たちの仮説',
					about_Hypothesis1:
						'移動に課題を抱え、言語の障壁がある人々が、信頼性のあるリアルタイムのアクセシビリティデータと翻訳機能にアクセスできれば、彼らはNYCの交通システムを安全かつ効果的に移動できるようになると考えています。',

					about_ProductOverviewH2: '製品概要',
					about_ProductOverview1:
						'私たちのアプリ、AccessTransitは、現在の交通アクセシビリティ機能の重要なギャップに対処するために設計されており、<strong>クラウドソーシングデータ</strong>を活用して、駅のアクセシビリティに関する<strong>信頼性の高いリアルタイム更新</strong>を提供します。',

					about_WhoDoWeServe1:
						'私たちは、障害を持つ人々、移動に困難を抱える人々、そして英語を話さない人々にサービスを提供することを目的としています。',

					about_missionStatementH2: 'ミッションステートメント',
					about_MissionStatement1:
						'AccessTransitは、移動に課題を抱える人々と英語を話さない人々が公共交通機関を利用する際の安全性、自信、独立性を向上させることを目的としています。',
					about_WhoDoWeServeH2: '私たちは誰にサービスを提供しますか？',
					about_UserJourneyMapH2: 'ユーザージャーニーマップ',
					user_trip_planning:
						'ユーザーは、公式MTAウェブサイトでアクセス可能なステータスを確認して医療の予約に向けた旅行を計画します。',
					user_arrival:
						'ユーザーは、ウェブサイトの情報とは異なり、エレベーターが故障していることを知り、がっかりします。',
					user_discovery:
						'ユーザーは、最初の検索結果としてAccessTransitを見つけ、希望を感じます。',
					user_app_access:
						'ユーザーはアプリにアクセスし、自分の駅の正確な運用状況を確認して満足します。',
					user_trip_planning_success:
						'ユーザーは直感的なインターフェースに安心し、スムーズに旅行を計画します。',
					about_UserStoriesH2: 'ユーザーストーリー',
					user_accessible_station:
						'ユーザーはアプリを開き、最寄りのアクセス可能な駅を見ることができます。',
					user_real_time_status:
						'ユーザーはアクセシビリティ機能（エレベーター/エスカレーター）のリアルタイムステータスを確認できます。',
					user_update_status:
						'ユーザーは、到着時に問題に遭遇した場合、機能のステータスを更新できます。',
					user_save_stations:
						'ユーザーはアカウントを作成してお気に入りの駅を保存できます。',
					user_plan_future_trips:
						'ユーザーは信頼できるアクセシビリティを持つ保存された駅を基に将来の旅行を計画できます。',
					about_TechnicalChallengeH2: '技術的課題',
					about_KeyTechnicalChallenge1:
						'プロジェクトの構築中に、スコープの拡張を効果的に管理し、2-3週間の構築期限を守ること、また機能を正確に定義し優先順位を付けることなど、いくつかの課題を予想していました。',
					about_ExtensionOpportunitiesH2: '拡張機会',
					about_Prioritized_AccessibilityH3: '優先されたアクセシビリティ',
					about_PrioritizedAccessibility1:
						'私たちは、すべてのユーザーが年齢や技術的な能力に関係なく、審美的でユーザーフレンドリーで直感的なインターフェースにアクセスできることを確保することにコミットしています。',
					about_Sources: '情報源',
				},
			},
			zh: {
				//Chinese (Simplified)
				translation: {
					navHome: '主页',
					navAbout: '关于我们',
					navAdaStations: 'ADA车站',
					navLogin: '登录',
					navSignUp: '注册',
					pageAbout: '关于我们',

					About: '关于我们',
					serviceAlerts: '服务提醒',
					seeStatus: '查看状态',
					description:
						'您语言中的MTA <strong>电梯、自动扶梯、ADA车站</strong> 和 <strong>地铁提醒</strong> 的实时状态的最可靠来源。',

					siteDescription: '状态由像您这样的用户更新。',

					access_transit_title: '交通接入',
					the_problem: '问题',
					accessibility_intro:
						'纽约市地铁系统的可达性是一个重要问题，直接影响到无数乘客的独立性、尊严和安全，包括残疾人、老年人以及推婴儿车的父母。MTA 电梯和自动扶梯的频繁故障所造成的现有解决方案未能提供准确的实时信息，给这些乘客带来了脆弱且令人沮丧的重大障碍。此外，语言障碍的乘客常常被排除在重要公告和提醒之外，造成更多的压力和混乱。',

					transit_feature_issue:
						'缺乏关于重要交通功能状态的快速、准确和可获取的信息，导致乘客面临不确定性，可能引发危险情况，并失去使用公共交通的信心。',

					transit_tldr:
						'<strong>总结</strong>：NYC的地铁系统面临着频繁的电梯和自动扶梯故障、ADA车站稀少和对非英语使用者支持不足等重大可达性问题。这些障碍与缺乏可靠状态信息相结合，导致对残疾人、老年人、推婴儿车的父母和非英语使用者来说，环境既<strong>令人沮丧</strong>，又<strong>危险</strong>，并且常常<strong>不可能</strong>。',

					about_SummaryH2: '总结',

					about_Summary1:
						'自《残疾人法案》(ADA)实施以来已经过去了30多年，但纽约市的交通系统中的可达性仍然是一个严重问题。在一个主要为健全人设计的世界中，残疾人面临许多障碍。',

					about_Summary2:
						'截至2024年10月1日，<strong>只有28%的纽约市地铁车站符合ADA标准</strong>，这使其成为全国<strong>可达性最差的交通系统之一</strong>。这一点在2017年的市民权集体诉讼中得到了强调。',

					about_Summary3:
						'统计数据揭示了问题的严重性：被确定为移动受限的7.15%的人口，约<strong>547,593人</strong>，2.3%即<strong>185,378人</strong>有听力障碍，几乎20%即<strong>1.44百万</strong>是65岁及以上的市民。',

					about_HypothesisH2: '我们的假设',
					about_Hypothesis1:
						'我们相信，如果移动有困难的人和语言有障碍的人可以访问可靠的实时可达性数据和翻译功能，他们将能够安全有效地使用纽约市的交通系统。',

					about_ProductOverviewH2: '产品概述',
					about_ProductOverview1:
						'我们的应用程序AccessTransit旨在通过利用<strong>众包数据</strong>来解决当前交通无障碍功能中的关键缺口，提供有关车站无障碍性的<strong>可靠的实时更新</strong>。',

					about_WhoDoWeServe1:
						'我们的目标是服务于有残疾、行动不便和不讲英语的人士。',

					about_missionStatementH2: '使命声明',
					about_MissionStatement1:
						'AccessTransit旨在提高移动有困难的人和不讲英语的人在使用公共交通时的安全性、自信心和独立性。',
					about_WhoDoWeServeH2: '我们服务谁？',
					about_UserJourneyMapH2: '用户旅程图',
					user_trip_planning:
						'用户通过查看官方MTA网站上的可用状态来规划前往医疗预约的旅行。',
					user_arrival: '用户到达时发现与网站信息不符的电梯故障，感到失望。',
					user_discovery: '用户在首次搜索结果中找到AccessTransit，感到振奋。',
					user_app_access:
						'用户访问应用程序，查看他们车站的准确运行状态，感到满意。',
					user_trip_planning_success:
						'用户对直观的界面感到安心，顺利规划旅行。',
					about_UserStoriesH2: '用户故事',
					user_accessible_station: '用户打开应用程序，查看最近的无障碍车站。',
					user_real_time_status:
						'用户可以查看可达性功能（电梯/自动扶梯）的实时状态。',
					user_update_status:
						'如果用户在到达时遇到问题，他们可以更新功能状态。',
					user_save_stations: '用户可以创建账户以保存他们喜欢的车站。',
					user_plan_future_trips:
						'用户可以根据保存的车站的可靠可达性计划未来的旅行。',
					about_TechnicalChallengeH2: '技术挑战',
					about_KeyTechnicalChallenge1:
						'在项目构建过程中，我们预见到几个挑战，包括有效管理范围扩展和确保我们在2-3周的构建截止日期内完成，同时准确定义和优先考虑功能。',
					about_ExtensionOpportunitiesH2: '扩展机会',
					about_Prioritized_AccessibilityH3: '优先考虑可达性',
					about_PrioritizedAccessibility1:
						'我们致力于确保所有用户都能访问美观、用户友好且直观的界面，消除与年龄或技术能力相关的障碍。',
					about_Sources: '来源',
				},
			},

			pt: {
				//Portuguese
				translation: {
					navHome: 'Início',
					navAbout: 'Sobre Nós',
					navAdaStations: 'Estações ADA',
					navLogin: 'Entrar',
					navSignUp: 'Registrar',
					pageAbout: 'Sobre Nós',

					About: 'Sobre Nós',
					serviceAlerts: 'Alertas de Serviço',
					seeStatus: 'Ver Status',
					description:
						'A fonte mais confiável para o status em tempo real dos <strong>elevadores, escadas rolantes, estações ADA</strong> e <strong>alertas de metrô</strong> da MTA na SUA língua.',

					siteDescription: 'Status atualizado por usuários como você.',

					access_transit_title: 'Acesso ao Transporte',
					the_problem: 'O Problema',
					accessibility_intro:
						'A acessibilidade no sistema de metrô de Nova York é um problema crítico que afeta diretamente a independência, dignidade e segurança de inúmeros passageiros, incluindo pessoas com deficiência, idosos e pais com carrinhos de bebê. As soluções atuais para lidar com as frequentes quebras de elevadores e escadas rolantes da MTA não fornecem informações precisas em tempo real, criando barreiras significativas que deixam esses passageiros vulneráveis e frustrados. Além disso, os passageiros com barreiras linguísticas muitas vezes são excluídos de anúncios ou alertas críticos, levando a mais estresse e confusão.',

					transit_feature_issue:
						'A falta de informações rápidas, precisas e acessíveis sobre o status de recursos de transporte essenciais força os passageiros a enfrentarem incertezas, levando a situações perigosas e a uma perda de confiança em sua capacidade de usar o transporte público.',

					transit_tldr:
						'<strong>Resumo</strong>: O sistema de metrô de NYC enfrenta sérios problemas de acessibilidade, com frequentes falhas de elevadores e escadas rolantes, poucas estações compatíveis com a ADA e suporte insuficiente para falantes não nativos de inglês. Essas barreiras, combinadas com a falta de informações confiáveis sobre o status, criam um ambiente <strong>frustrante</strong>, <strong>perigoso</strong> e muitas vezes <strong>impossível</strong> para pessoas com deficiência, idosos, pais com carrinhos de bebê e falantes não nativos de inglês.',

					about_SummaryH2: 'Resumo',

					about_Summary1:
						'Mais de 30 anos após a aprovação da Lei dos Americanos com Deficiências, a acessibilidade no sistema de transporte de NYC continua a apresentar desafios significativos. Em um mundo projetado principalmente para pessoas sem deficiência, pessoas com deficiência enfrentam inúmeros obstáculos.',

					about_Summary2:
						'Em 1º de outubro de 2024, <strong>apenas 28% das estações de metrô de NYC estão em conformidade com a ADA</strong>, tornando-se um dos <strong>sistemas de transporte menos acessíveis do país</strong>, conforme destacado na ação civil coletiva de direitos civis de 2017 em favor dos direitos das pessoas com deficiência.',

					about_Summary3:
						'Estatísticas revelam a magnitude do problema: 7,15% da população, ou <strong>547.593 pessoas</strong>, se identificam como mobilidade reduzida; 2,3%, ou <strong>185.378 pessoas</strong>, como surdas ou com deficiência auditiva; e quase 20% da população total da cidade—<strong>1,44 milhão de pessoas</strong>—está envelhecendo para 65 anos ou mais.',

					about_HypothesisH2: 'Nossa Hipótese',
					about_Hypothesis1:
						'Se indivíduos com desafios de mobilidade e barreiras linguísticas tivessem acesso a dados de acessibilidade confiáveis em tempo real, bem como recursos de tradução, eles se sentiriam mais empoderados para navegar com segurança e eficácia no sistema de transporte de NYC.',

					about_ProductOverviewH2: 'Visão Geral do Produto',
					about_ProductOverview1:
						'Nosso aplicativo, AccessTransit, foi projetado para abordar essas lacunas críticas nas atuais características de acessibilidade do transporte, aproveitando <strong>dados coletados pela comunidade</strong> para fornecer <strong>atualizações confiáveis em tempo real</strong> sobre a acessibilidade das estações.',

					about_WhoDoWeServe1:
						'Pretendemos servir indivíduos que são deficientes, com dificuldades de mobilidade e que não falam inglês.',

					about_missionStatementH2: 'Declaração de Missão',
					about_MissionStatement1:
						'A AccessTransit existe para melhorar a segurança, a confiança e a independência de indivíduos com desafios de mobilidade e aqueles que não falam inglês ao usar o transporte público.',
					about_WhoDoWeServeH2: 'Quem Servimos?',
					about_UserJourneyMapH2: 'Mapa da Jornada do Usuário',
					user_trip_planning:
						'O usuário planeja uma viagem para uma consulta médica usando o site oficial da MTA para verificar o status de acessibilidade.',
					user_arrival:
						'O usuário chega à estação, desanimado ao descobrir que um elevador está fora de serviço, em desacordo com as informações do site.',
					user_discovery:
						'O usuário descobre a AccessTransit como o primeiro resultado da pesquisa e se sente esperançoso.',
					user_app_access:
						'O usuário acessa o aplicativo e fica satisfeito ao ver o status operacional preciso de sua estação.',
					user_trip_planning_success:
						'O usuário planeja sua viagem sem problemas, reassurado pela interface intuitiva.',
					about_UserStoriesH2: 'Histórias de Usuários',
					user_accessible_station:
						'O usuário pode abrir o aplicativo e ver a estação acessível mais próxima.',
					user_real_time_status:
						'O usuário pode verificar o status em tempo real dos recursos de acessibilidade (elevadores/escadas rolantes).',
					user_update_status:
						'O usuário pode atualizar o status dos recursos ao chegar, caso encontre problemas.',
					user_save_stations:
						'O usuário pode salvar estações favoritas criando uma conta.',
					user_plan_future_trips:
						'O usuário pode planejar futuras viagens com base em estações salvas com acessibilidade confiável.',
					about_TechnicalChallengeH2: 'Desafio Técnico',
					about_KeyTechnicalChallenge1:
						'Durante a construção do projeto, previmos vários desafios, incluindo a gestão eficaz da expansão do escopo e a garantia de que cumpríssemos nosso prazo de construção de 2 a 3 semanas, enquanto definíamos e priorizávamos recursos com precisão.',
					about_ExtensionOpportunitiesH2: 'Oportunidades de Extensão',
					about_Prioritized_AccessibilityH3: 'Acessibilidade Prioritária',
					about_PrioritizedAccessibility1:
						'Estamos comprometidos em garantir que todos os usuários tenham acesso a uma interface estética, amigável e intuitiva, removendo barreiras relacionadas à idade ou competência técnica.',
					about_Sources: 'Fontes',
				},
			},

			ru: {
				//Russian
				translation: {
					navHome: 'Главная',
					navAbout: 'О нас',
					navAdaStations: 'Станции ADA',
					navLogin: 'Войти',
					navSignUp: 'Зарегистрироваться',
					pageAbout: 'О нас',

					About: 'О нас',
					serviceAlerts: 'Уведомления о сервисе',
					seeStatus: 'Посмотреть статус',
					description:
						'Самый надежный источник актуальной информации о состоянии ваших <strong>лифтов, эскалаторов, станций ADA</strong> и <strong>уведомлениях метро</strong> на ВАШЕМ языке.',

					siteDescription: 'Статус обновляется пользователями, такими как вы.',

					// About.jsx Page Translation

					access_transit_title: 'Доступ к транспорту',
					the_problem: 'Проблема',
					accessibility_intro:
						'Доступность в системе метро Нью-Йорка является критической проблемой, которая напрямую влияет на независимость, достоинство и безопасность бесчисленных пассажиров, включая людей с ограниченными возможностями, пожилых людей и родителей с колясками. Текущие решения для решения проблемы частых поломок лифтов и эскалаторов MTA не предоставляют точную информацию в реальном времени, создавая значительные барьеры, оставляющие этих пассажиров уязвимыми и разочарованными. Кроме того, пассажиры с языковыми барьерами часто исключаются из важных объявлений или уведомлений, что приводит к дополнительному стрессу и путанице.',

					transit_feature_issue:
						'Отсутствие своевременной, точной и доступной информации о статусе основных функций транспорта заставляет пассажиров сталкиваться с неопределенностью, что приводит к опасным ситуациям и потере уверенности в своей способности использовать общественный транспорт.',

					transit_tldr:
						'<strong>Резюме</strong>: Система метро Нью-Йорка сталкивается с серьезными проблемами доступности, с частыми поломками лифтов и эскалаторов, небольшим количеством станций, соответствующих стандартам ADA, и недостаточной поддержкой для людей, не говорящих на английском. Эти барьеры, в сочетании с отсутствием надежной информации о состоянии, создают <strong>разочаровывающую</strong>, <strong>опасную</strong> и часто <strong>невозможную</strong> среду для людей с ограниченными возможностями, пожилых людей, родителей с колясками и людей, не говорящих на английском.',

					about_SummaryH2: 'Резюме',

					about_Summary1:
						'Более чем через 30 лет после принятия Закона об американцах с ограниченными возможностями доступность в системе транспорта Нью-Йорка продолжает представлять собой серьезные проблемы. В мире, который в первую очередь предназначен для людей без ограничений, люди с ограниченными возможностями сталкиваются с множеством препятствий.',

					about_Summary2:
						'По состоянию на 1 октября 2024 года <strong>только 28% станций метро Нью-Йорка соответствуют стандартам ADA</strong>, что делает ее одной из <strong>наименее доступных транспортных систем в стране</strong>, как было указано в коллективном иске 2017 года о правах людей с ограниченными возможностями.',

					about_Summary3:
						'Статистика показывает масштаб проблемы: 7,15% населения, или <strong>547,593 человека</strong>, идентифицируют себя как имеющие проблемы с передвижением; 2,3%, или <strong>185,378 человека</strong>, как глухие или с нарушениями слуха; и почти 20% от общего населения города—<strong>1,44 миллиона человек</strong>—достигли возраста 65 лет и старше.',

					about_HypothesisH2: 'Наша Гипотеза',
					about_Hypothesis1:
						'Если люди с ограниченной мобильностью и языковыми барьерами получат доступ к надежным данным о доступности в реальном времени, а также к функциям перевода, они будут чувствовать себя более уверенными в том, чтобы безопасно и эффективно ориентироваться в системе транспорта Нью-Йорка.',

					about_ProductOverviewH2: 'Обзор продукта',
					about_ProductOverview1:
						'Наше приложение, AccessTransit, разработано для устранения этих критических пробелов в текущих функциях доступности транспорта, используя <strong>данные, собранные сообществом</strong>, чтобы предоставить <strong>надежные обновления в реальном времени</strong> о доступности станций.',

					about_WhoDoWeServe1:
						'Мы намерены обслуживать людей с ограниченными возможностями, имеющих проблемы с передвижением и не говорящих на английском языке.',

					about_missionStatementH2: 'Заявление о миссии',
					about_MissionStatement1:
						'AccessTransit существует для повышения безопасности, уверенности и независимости людей с ограниченной мобильностью и тех, кто не говорит по-английски, при использовании общественного транспорта.',
					about_WhoDoWeServeH2: 'Кому мы служим?',
					about_UserJourneyMapH2: 'Карта пути пользователя',
					user_trip_planning:
						'Пользователь планирует поездку к врачу, используя официальный сайт MTA для проверки статуса доступности.',
					user_arrival:
						'Пользователь прибывает на станцию, разочарованный, обнаружив, что лифт не работает, вопреки информации на сайте.',
					user_discovery:
						'Пользователь находит AccessTransit как первый результат поиска и чувствует надежду.',
					user_app_access:
						'Пользователь открывает приложение и с удовлетворением видит точный рабочий статус своей станции.',
					user_trip_planning_success:
						'Пользователь успешно планирует свою поездку, успокаиваясь благодаря интуитивно понятному интерфейсу.',
					about_UserStoriesH2: 'Истории пользователей',
					user_accessible_station:
						'Пользователь может открыть приложение и увидеть ближайшую доступную станцию.',
					user_real_time_status:
						'Пользователь может проверить статус доступности (лифтов/эскалаторов) в реальном времени.',
					user_update_status:
						'Пользователь может обновить статус объектов по прибытии, если возникнут проблемы.',
					user_save_stations:
						'Пользователь может сохранять любимые станции, создав аккаунт.',
					user_plan_future_trips:
						'Пользователь может планировать будущие поездки на основе сохраненных станций с надежной доступностью.',
					about_TechnicalChallengeH2: 'Технические сложности',
					about_KeyTechnicalChallenge1:
						'В ходе строительства проекта мы предвидели несколько проблем, включая эффективное управление расширением объема работ и обеспечение выполнения нашего срока строительства 2-3 недели, точно определяя и расставляя приоритеты по функциям.',
					about_ExtensionOpportunitiesH2: 'Возможности расширения',
					about_Prioritized_AccessibilityH3: 'Приоритетная доступность',
					about_PrioritizedAccessibility1:
						'Мы стремимся обеспечить, чтобы все пользователи имели доступ к эстетичному, удобному и интуитивно понятному интерфейсу, устраняя барьеры, связанные с возрастом или техническими навыками.',
					about_Sources: 'Источники',
				},
			},
			ar: {
				//Arabic
				translation: {
					navHome: 'الرئيسية',
					navAbout: 'معلومات عنا',
					navAdaStations: 'محطات ADA',
					navLogin: 'تسجيل الدخول',
					navSignUp: 'إنشاء حساب',
					pageAbout: 'معلومات عنا',

					About: 'معلومات عنا',
					serviceAlerts: 'تنبيهات الخدمة',
					seeStatus: 'عرض الحالة',
					description:
						'أكثر مصدر موثوق للمعلومات الدقيقة حول حالة <strong>المصاعد، السلالم المتحركة، محطات ADA</strong> و <strong>تنبيهات المترو</strong> بلغتك.',

					siteDescription: 'يتم تحديث الحالة بواسطة مستخدمين مثلك.',

					// About.jsx Page Translation

					access_transit_title: 'الوصول إلى النقل',
					the_problem: 'المشكلة',
					accessibility_intro:
						'تعتبر إمكانية الوصول في نظام مترو نيويورك قضية حاسمة تؤثر بشكل مباشر على الاستقلال والكرامة والسلامة للعديد من الركاب، بما في ذلك ذوي الاحتياجات الخاصة وكبار السن والآباء مع عربات الأطفال. لا تقدم الحلول الحالية لمعالجة مشكلة الأعطال المتكررة في المصاعد والسلالم المتحركة في MTA معلومات دقيقة في الوقت الحقيقي، مما يخلق حواجز كبيرة تترك هؤلاء الركاب عرضة للخطر ومحبطين. بالإضافة إلى ذلك، يتم استبعاد الركاب الذين يواجهون حواجز لغوية غالباً من الإعلانات أو التنبيهات المهمة، مما يؤدي إلى مزيد من الضغط والارتباك.',

					transit_feature_issue:
						'يؤدي نقص المعلومات الدقيقة وفي الوقت المناسب حول حالة الميزات الأساسية للنقل إلى مواجهة الركاب حالة من عدم اليقين، مما يؤدي إلى مواقف خطرة وفقدان الثقة في قدرتهم على استخدام وسائل النقل العامة.',

					transit_tldr:
						'<strong>ملخص</strong>: يواجه نظام مترو نيويورك تحديات خطيرة في إمكانية الوصول، مع الأعطال المتكررة في المصاعد والسلالم المتحركة، وعدد قليل من المحطات التي تتوافق مع معايير ADA، ودعم غير كافٍ لذوي الاحتياجات الخاصة. تخلق هذه الحواجز، إلى جانب عدم وجود معلومات موثوقة عن الحالة، بيئة <strong>محبطة</strong> و <strong>خطيرة</strong> وغالباً <strong>غير ممكنة</strong> للأشخاص ذوي الاحتياجات الخاصة وكبار السن والآباء مع عربات الأطفال وللأشخاص غير الناطقين باللغة الإنجليزية.',

					about_SummaryH2: 'الملخص',

					about_Summary1:
						'بعد أكثر من 30 عاماً من اعتماد قانون الأمريكيين ذوي الإعاقة، لا تزال إمكانية الوصول في نظام النقل في نيويورك تمثل مشكلة خطيرة. في عالم مصمم في المقام الأول للأشخاص غير المعوقين، يواجه الأشخاص ذوو الاحتياجات الخاصة العديد من الحواجز.',

					about_Summary2:
						'اعتباراً من 1 أكتوبر 2024، <strong>فقط 28% من محطات مترو نيويورك تتوافق مع معايير ADA</strong>، مما يجعلها واحدة من <strong>أقل أنظمة النقل إمكانية للوصول في البلاد</strong>، كما تم الإشارة إليه في الدعوى الجماعية عام 2017 بشأن حقوق الأشخاص ذوي الاحتياجات الخاصة.',

					about_Summary3:
						'تظهر الإحصائيات مدى حجم المشكلة: 7.15% من السكان، أو <strong>547,593 شخصاً</strong>، يعرّفون أنفسهم بأنهم يعانون من مشاكل في الحركة؛ 2.3%، أو <strong>185,378 شخصاً</strong>، يعرّفون أنفسهم بأنهم صم أو يعانون من ضعف السمع؛ وتقريباً 20% من إجمالي سكان المدينة—<strong>1.44 مليون شخص</strong>—بلغوا من العمر 65 عاماً أو أكثر.',

					about_HypothesisH2: 'افتراضنا',
					about_Hypothesis1:
						'إذا حصل الأشخاص ذوو القدرة المحدودة على الحركة والذين يواجهون حواجز لغوية على بيانات موثوقة عن إمكانية الوصول في الوقت الحقيقي، بالإضافة إلى ميزات الترجمة، فسوف يشعرون بمزيد من الثقة في قدرتهم على التنقل بأمان وفعالية في نظام النقل في نيويورك.',

					about_ProductOverviewH2: 'نظرة عامة على المنتج',
					about_ProductOverview1:
						'تطبيقنا، AccessTransit، مصمم لسد هذه الفجوات الحرجة في ميزات الوصول الحالية في وسائل النقل من خلال الاستفادة من <strong>بيانات جمعها الجمهور</strong> لتوفير <strong>تحديثات موثوقة في الوقت الفعلي</strong> حول إمكانية الوصول إلى المحطات.',

					about_WhoDoWeServe1:
						'نعتزم خدمة الأفراد ذوي الإعاقة، وذوي التحديات الحركية، وغير الناطقين باللغة الإنجليزية.',

					about_missionStatementH2: 'بيان المهمة',
					about_MissionStatement1:
						'توجد AccessTransit لزيادة السلامة والثقة والاستقلال للأشخاص ذوي الحركة المحدودة وأولئك الذين لا يتحدثون الإنجليزية عند استخدام وسائل النقل العامة.',
					about_WhoDoWeServeH2: 'لمن نقدم الخدمة؟',
					about_UserJourneyMapH2: 'خريطة رحلة المستخدم',
					user_trip_planning:
						'يخطط المستخدم لرحلة إلى الطبيب، مستخدماً الموقع الرسمي لـ MTA للتحقق من حالة إمكانية الوصول.',
					user_arrival:
						'يصل المستخدم إلى المحطة، محبطاً، ليكتشف أن المصعد معطل، على الرغم من المعلومات المتاحة على الموقع.',
					user_discovery:
						'يجد المستخدم AccessTransit كنتيجة أولى في البحث ويشعر بالأمل.',
					user_app_access:
						'يفتح المستخدم التطبيق ويفرح لرؤية حالة عمل المحطة بدقة.',
					user_trip_planning_success:
						'يخطط المستخدم لرحلته بنجاح، وهو مطمئن بفضل واجهة المستخدم السهلة الاستخدام.',
					about_UserStoriesH2: 'قصص المستخدمين',
					user_accessible_station:
						'يمكن للمستخدم فتح التطبيق ورؤية أقرب محطة متاحة.',
					user_real_time_status:
						'يمكن للمستخدم التحقق من حالة إمكانية الوصول (المصاعد/السلالم المتحركة) في الوقت الحقيقي.',
					user_update_status:
						'يمكن للمستخدم تحديث حالة المرافق عند الوصول، إذا كانت هناك مشاكل.',
					user_save_stations:
						'يمكن للمستخدم حفظ المحطات المفضلة من خلال إنشاء حساب.',
					user_plan_future_trips:
						'يمكن للمستخدم التخطيط للرحلات المستقبلية بناءً على المحطات المحفوظة ذات إمكانية الوصول الموثوقة.',
					about_TechnicalChallengeH2: 'التحديات التقنية',
					about_KeyTechnicalChallenge1:
						'خلال بناء المشروع، توقعنا العديد من التحديات، بما في ذلك إدارة فعالة لتوسيع نطاق العمل وضمان الالتزام بموعد بناء يتراوح بين 2-3 أسابيع، من خلال تحديد الأولويات بدقة والوظائف.',
					about_ExtensionOpportunitiesH2: 'فرص التوسع',
					about_Prioritized_AccessibilityH3: 'إمكانية الوصول ذات الأولوية',
					about_PrioritizedAccessibility1:
						'نحن نسعى لضمان أن جميع المستخدمين يمكنهم الوصول إلى واجهة أنيقة وسهلة الاستخدام وبديهية، مما يلغي الحواجز المرتبطة بالعمر أو المهارات التقنية.',
					about_Sources: 'المصادر',
				},
			},

			hi: {
				//Hindi
				translation: {
					navHome: 'मुख्य पृष्ठ',
					navAbout: 'हमारे बारे में',
					navAdaStations: 'एडीए स्टेशन',
					navLogin: 'लॉग इन करें',
					navSignUp: 'साइन अप करें',
					pageAbout: 'हमारे बारे में',

					About: 'हमारे बारे में',
					serviceAlerts: 'सेवा चेतावनियाँ',
					seeStatus: 'स्थिति देखें',
					description:
						'सटीक स्थिति की जानकारी का सबसे विश्वसनीय स्रोत <strong>लिफ्ट, एस्केलेटर, एडीए स्टेशनों</strong> और <strong>मेट्रो अलर्ट</strong> आपकी भाषा में।',

					siteDescription:
						'स्थिति को आपके जैसे उपयोगकर्ताओं द्वारा अपडेट किया गया।',

					// About.jsx Page Translation

					access_transit_title: 'परिवहन का उपयोग',
					the_problem: 'समस्या',
					accessibility_intro:
						'न्यूयॉर्क के मेट्रो प्रणाली में पहुँच एक महत्वपूर्ण मुद्दा है जो कई यात्रियों की स्वतंत्रता, गरिमा और सुरक्षा को सीधे प्रभावित करता है, जिसमें विकलांग लोग, बुजुर्ग और बच्चे वाले माता-पिता शामिल हैं। MTA में लिफ्टों और एस्केलेटरों की बार-बार खराबी के कारण समस्या का सामना कर रहे उपयोगकर्ताओं को सटीक वास्तविक समय की जानकारी प्रदान करने वाले वर्तमान समाधानों का अभाव है, जिससे ये यात्री खतरे में और निराश महसूस करते हैं। इसके अलावा, भाषा संबंधी बाधाओं का सामना करने वाले यात्री अक्सर महत्वपूर्ण घोषणाओं या चेतावनियों से बाहर हो जाते हैं, जिससे और अधिक तनाव और भ्रम होता है।',

					transit_feature_issue:
						'परिवहन की प्रमुख सुविधाओं की स्थिति के बारे में सटीक और समय पर जानकारी की कमी यात्रियों को अनिश्चितता में डाल देती है, जिससे खतरनाक स्थिति और सार्वजनिक परिवहन का उपयोग करने की क्षमता में विश्वास की कमी होती है।',

					transit_tldr:
						'<strong>संक्षेप में</strong>: न्यूयॉर्क के मेट्रो प्रणाली में पहुँच संबंधी गंभीर चुनौतियाँ हैं, जिसमें लिफ्टों और एस्केलेटरों की बार-बार खराबी, एडीए मानकों का पालन करने वाले कम स्टेशन, और विकलांग लोगों के लिए पर्याप्त समर्थन की कमी है। ये बाधाएँ, साथ ही सटीक स्थिति की जानकारी का अभाव, विकलांग लोगों, बुजुर्गों, बच्चों के माता-पिता और गैर-अंग्रेजी बोलने वालों के लिए एक <strong>निराशाजनक</strong>, <strong>खतरनाक</strong>, और अक्सर <strong>असंभव</strong> वातावरण का निर्माण करती हैं।',

					about_SummaryH2: 'संक्षेप',

					about_Summary1:
						'अमेरिकियों के विकलांग अधिनियम को लागू हुए 30 से अधिक वर्षों के बाद, न्यूयॉर्क के परिवहन प्रणाली में पहुँच एक गंभीर समस्या बनी हुई है। एक ऐसे विश्व में जो मुख्य रूप से गैर-विकलांग व्यक्तियों के लिए डिज़ाइन किया गया है, विकलांग व्यक्तियों को कई बाधाओं का सामना करना पड़ता है।',

					about_Summary2:
						'1 अक्टूबर 2024 तक, <strong>न्यूयॉर्क के मेट्रो के केवल 28% स्टेशन एडीए मानकों का पालन करते हैं</strong>, जो इसे देश के <strong>सबसे कम पहुँच योग्य परिवहन प्रणालियों में से एक</strong> बनाता है, जैसा कि 2017 में विकलांग अधिकारों के अधिवक्ताओं द्वारा की गई एक सामूहिक कार्रवाई में उल्लेख किया गया था।',

					about_Summary3:
						'आंकड़े समस्या के पैमाने को दर्शाते हैं: 7.15% जनसंख्या, या <strong>547,593 लोग</strong>, अपने को चलने में कठिनाई का अनुभव करते हैं; 2.3%, या <strong>185,378 लोग</strong>, खुद को बहरा या सुनने में कठिनाई का सामना करते हैं; और लगभग 20% जनसंख्या—<strong>1.44 मिलियन लोग</strong>—65 वर्ष या उससे अधिक आयु के हैं।',

					about_HypothesisH2: 'हमारा अनुमान',
					about_Hypothesis1:
						'यदि विकलांगों का सामना करने वाले लोग और भाषा की बाधाओं का सामना करने वाले लोग वास्तविक समय में विश्वसनीय पहुँच संबंधी डेटा और अनुवाद की सुविधाएँ प्राप्त करते हैं, तो उन्हें न्यूयॉर्क के परिवहन प्रणाली में सुरक्षित और प्रभावी तरीके से यात्रा करने की अपनी क्षमता में अधिक विश्वास महसूस होगा।',

					about_ProductOverviewH2: 'उत्पाद का अवलोकन',
					about_ProductOverview1:
						'हमारा ऐप, AccessTransit, वर्तमान परिवहन की पहुँच सुविधाओं में इन महत्वपूर्ण अंतरालों को भरने के लिए डिज़ाइन किया गया है, <strong>भीड़-सोर्स किए गए डेटा</strong> का लाभ उठाकर <strong>विश्वसनीय, वास्तविक-समय अपडेट</strong> प्रदान करने के लिए स्टेशन की पहुँच पर।',

					about_WhoDoWeServe1:
						'हम उन व्यक्तियों को सेवा देने का इरादा रखते हैं जो विकलांग, गतिशीलता में चुनौती और गैर-अंग्रेजी भाषी हैं।',

					about_missionStatementH2: 'मिशन विवरण',
					about_MissionStatement1:
						'AccessTransit उन लोगों की सुरक्षा, विश्वास और स्वतंत्रता बढ़ाने के लिए मौजूद है जिनकी चलने में सीमितता है और जो सार्वजनिक परिवहन का उपयोग करते समय अंग्रेजी नहीं बोलते हैं।',
					about_WhoDoWeServeH2: 'हम किसकी सेवा करते हैं?',
					about_UserJourneyMapH2: 'उपयोगकर्ता यात्रा मानचित्र',
					user_trip_planning:
						'उपयोगकर्ता डॉक्टर के लिए यात्रा की योजना बना रहा है, MTA की आधिकारिक वेबसाइट पर पहुँच की स्थिति की जांच करते हुए।',
					user_arrival:
						'उपयोगकर्ता स्टेशन पर पहुँचता है, निराश होकर, यह पता लगाते हुए कि लिफ्ट खराब है, हालांकि वेबसाइट पर उपलब्ध जानकारी यह नहीं बताती।',
					user_discovery:
						'उपयोगकर्ता AccessTransit को खोज परिणाम के रूप में पाता है और आशा महसूस करता है।',
					user_app_access:
						'उपयोगकर्ता ऐप खोलता है और स्थिति को सटीकता से कार्यशील देखकर खुश होता है।',
					user_trip_planning_success:
						'उपयोगकर्ता सफलतापूर्वक अपनी यात्रा की योजना बनाता है, उपयोगकर्ता-अनुकूल इंटरफ़ेस के कारण आश्वस्त।',
					about_UserStoriesH2: 'उपयोगकर्ताओं की कहानियाँ',
					user_accessible_station:
						'उपयोगकर्ता ऐप खोल सकता है और निकटतम उपलब्ध स्टेशन देख सकता है।',
					user_real_time_status:
						'उपयोगकर्ता वास्तविक समय में पहुँच की स्थिति (लिफ्ट/एस्केलेटर) की जाँच कर सकता है।',
					user_update_status:
						'उपयोगकर्ता पहुँच पर पहुँचने के बाद स्थिति को अपडेट कर सकता है, यदि कोई समस्या है।',
					user_save_stations:
						'उपयोगकर्ता खाता बनाकर अपने पसंदीदा स्टेशन सहेज सकता है।',
					user_plan_future_trips:
						'उपयोगकर्ता विश्वसनीय पहुँच के साथ सहेजे गए स्टेशनों के आधार पर भविष्य की यात्राओं की योजना बना सकता है।',
					about_TechnicalChallengeH2: 'तकनीकी चुनौतियाँ',
					about_KeyTechnicalChallenge1:
						'प्रोजेक्ट के निर्माण के दौरान, हमने कई चुनौतियों की अपेक्षा की, जिसमें कार्य को स्केल करने और 2-3 सप्ताह की निर्माण समयसीमा का पालन करने के लिए प्रभावी ढंग से प्राथमिकता निर्धारित करना शामिल है।',
					about_ExtensionOpportunitiesH2: 'विस्तार के अवसर',
					about_Prioritized_AccessibilityH3: 'प्राथमिकता प्राप्त पहुँच',
					about_PrioritizedAccessibility1:
						'हम यह सुनिश्चित करने के लिए प्रयासरत हैं कि सभी उपयोगकर्ता एक सुगम, उपयोगकर्ता-अनुकूल और सहज ज्ञान युक्त इंटरफ़ेस तक पहुँच सकें, जो उम्र या तकनीकी कौशल से संबंधित बाधाओं को समाप्त करता है।',
					about_Sources: 'स्रोत',
				},
			},
			ko: {
				//Korean
				translation: {
					navHome: '홈',
					navAbout: '우리에 대해',
					navAdaStations: 'ADA 역',
					navLogin: '로그인',
					navSignUp: '회원가입',
					pageAbout: '우리에 대해',

					About: '우리에 대해',
					serviceAlerts: '서비스 알림',
					seeStatus: '상태 보기',
					description:
						'정확한 상태 정보의 가장 신뢰할 수 있는 출처 <strong>엘리베이터, 에스컬레이터, ADA 역</strong> 및 <strong>지하철 알림</strong>을 귀하의 언어로 제공합니다.',

					siteDescription: '상태는 귀하와 같은 사용자에 의해 업데이트됩니다.',

					// About.jsx Page Translation

					access_transit_title: '교통 접근성',
					the_problem: '문제',
					accessibility_intro:
						'뉴욕의 지하철 시스템에서의 접근성은 많은 승객의 독립성, 존엄성 및 안전에 직접적인 영향을 미치는 중요한 문제입니다. 여기에는 장애인, 노인 및 자녀를 둔 부모가 포함됩니다. MTA의 엘리베이터와 에스컬레이터의 자주 고장나는 문제로 인해 사용자들은 정확한 실시간 정보를 제공하는 현재의 솔루션이 부족하여 위험과 좌절감을 느끼고 있습니다. 또한, 언어 장벽에 직면한 승객들은 종종 중요한 공지나 경고를 놓치게 되어 추가적인 스트레스와 혼란을 겪습니다.',

					transit_feature_issue:
						'교통의 주요 시설 상태에 대한 정확하고 시기적절한 정보의 부족은 승객들을 불확실한 상황에 빠뜨려 위험한 상황을 초래하고 대중 교통 이용에 대한 신뢰를 저하시킵니다.',

					transit_tldr:
						'<strong>요약</strong>: 뉴욕의 지하철 시스템은 엘리베이터와 에스컬레이터의 자주 고장, ADA 기준을 준수하는 역의 부족 및 장애인을 위한 충분한 지원 부족 등 심각한 접근성 문제를 겪고 있습니다. 이러한 장애물은 정확한 상태 정보의 부족과 함께 장애인, 노인, 자녀를 둔 부모 및 비영어 사용자가 <strong>좌절감</strong>, <strong>위험</strong>, 그리고 종종 <strong>불가능함</strong>을 느끼는 환경을 만듭니다.',

					about_SummaryH2: '요약',

					about_Summary1:
						'미국 장애인법이 시행된 지 30년 이상이 지난 지금, 뉴욕의 교통 시스템에서의 접근성은 여전히 심각한 문제입니다. 주로 비장애인을 위해 설계된 세계에서는 장애인들이 여러 장벽에 직면하고 있습니다.',

					about_Summary2:
						'2024년 10월 1일 현재, <strong>뉴욕 지하철의 단 28% 역만이 ADA 기준을 충족합니다</strong>, 이는 이를 미국에서 <strong>가장 접근성이 낮은 교통 시스템 중 하나</strong>로 만들고 있으며, 2017년 장애인 권리 옹호자들에 의해 진행된 집단 소송에서도 언급되었습니다.',

					about_Summary3:
						'통계는 문제의 규모를 보여줍니다: 7.15%의 인구, 즉 <strong>547,593명</strong>이 보행에 어려움을 겪고 있습니다; 2.3%, 즉 <strong>185,378명</strong>이 청각장애를 겪고 있으며; 약 20%의 인구—<strong>144만 명</strong>—이 65세 이상입니다.',

					about_HypothesisH2: '우리의 가설',
					about_Hypothesis1:
						'장애인과 언어 장벽에 직면한 사람들이 실시간으로 신뢰할 수 있는 접근성 데이터를 제공받고 번역 서비스를 이용할 수 있다면, 뉴욕의 교통 시스템에서 안전하고 효과적으로 여행할 수 있는 능력에 더 많은 신뢰를 느낄 것입니다.',

					about_ProductOverviewH2: '제품 개요',
					about_ProductOverview1:
						'우리 앱, AccessTransit는 현재 대중교통 접근성 기능의 이러한 중요한 격차를 해결하기 위해 설계되었으며, <strong>크라우드 소싱 데이터</strong>를 활용하여 <strong>신뢰할 수 있는 실시간 업데이트</strong>를 제공하여 역 접근성에 대한 정보를 제공합니다.',

					about_WhoDoWeServe1:
						'우리는 장애인, 이동에 어려움이 있는 사람들, 그리고 영어를 하지 않는 사람들을 대상으로 서비스를 제공할 계획입니다.',

					about_missionStatementH2: '사명 선언문',
					about_MissionStatement1:
						'AccessTransit은 보행에 제한이 있는 사람들과 대중교통을 이용할 때 영어를 하지 않는 사람들의 안전, 신뢰 및 자유를 높이기 위해 존재합니다.',
					about_WhoDoWeServeH2: '우리는 누구를 서비스하나요?',
					about_UserJourneyMapH2: '사용자 여정 지도',
					user_trip_planning:
						'사용자는 MTA의 공식 웹사이트에서 접근성 상태를 확인하며 의사 진료를 위한 여행을 계획하고 있습니다.',
					user_arrival:
						'사용자는 역에 도착하고, 엘리베이터가 고장났다는 것을 발견하며 실망합니다. 그러나 웹사이트에 있는 정보는 이를 알려주지 않습니다.',
					user_discovery:
						'사용자는 검색 결과로 AccessTransit을 발견하고 희망을 느낍니다.',
					user_app_access:
						'사용자는 앱을 열고 상태가 정확하게 작동하는 것을 보며 기뻐합니다.',
					user_trip_planning_success:
						'사용자는 사용자 친화적인 인터페이스 덕분에 여행을 성공적으로 계획합니다.',
					about_UserStoriesH2: '사용자 이야기',
					user_accessible_station:
						'사용자는 앱을 열고 가까운 이용 가능한 역을 확인할 수 있습니다.',
					user_real_time_status:
						'사용자는 실시간으로 접근성 상태(엘리베이터/에스컬레이터)를 확인할 수 있습니다.',
					user_update_status:
						'사용자는 접근 후 상태를 업데이트할 수 있으며, 문제가 발생할 경우 알립니다.',
					user_save_stations:
						'사용자는 계정을 만들어 즐겨찾는 역을 저장할 수 있습니다.',
					user_plan_future_trips:
						'사용자는 신뢰할 수 있는 접근성을 바탕으로 저장된 역으로 미래의 여행을 계획할 수 있습니다.',
					about_TechnicalChallengeH2: '기술적 도전 과제',
					about_KeyTechnicalChallenge1:
						'프로젝트 구축 중 우리는 작업을 확장하고 2-3주 건설 기한을 준수하기 위해 효과적으로 우선 순위를 정하는 것과 같은 여러 도전에 직면했습니다.',
					about_ExtensionOpportunitiesH2: '확장 기회',
					about_Prioritized_AccessibilityH3: '우선순위 접근성',
					about_PrioritizedAccessibility1:
						'우리는 모든 사용자가 나이 또는 기술적 능력과 관계없이 접근 가능하고 사용자 친화적이며 직관적인 인터페이스에 접근할 수 있도록 노력하고 있습니다.',
					about_Sources: '출처',
				},
			},
		},
		lng: localStorage.getItem('i18nextLng') || 'en', // Default language
		fallbackLng: 'en', // Use this language if the key is not found in the selected language
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
