import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next'; //for use of <strong> html

export default function AccessTransit() {
	const { t } = useTranslation(); //get the translation function

	return (
		<div
			style={{
				backgroundColor: '',
				color: '#333', // Dark text color
				padding: '20px',
				borderRadius: '8px',
				boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
				maxWidth: '60%', // Optional max width for layout
				margin: '0 auto', // Center the div
			}}
		>
			<h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
				{t('access_transit_title', { defaultValue: 'AccessTransit' })}
			</h1>
			<h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
				😞 {t('the_problem', { defaultValue: 'The Problem' })}
			</h2>
			<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
				<Trans i18nKey="accessibility_intro">
					Accessibility in New York City's subway system is a critical issue
					that directly impacts the{' '}
					<strong>independence, dignity, and safety</strong> of countless
					riders, including people with disabilities, seniors, and parents with
					strollers. Current solutions to address the frequent breakdowns of MTA
					elevators and escalators <strong>fail</strong> to provide{' '}
					<strong>accurate, real-time information</strong>, creating
					<strong>significant obstacles</strong> that leave these riders
					vulnerable and frustrated. Not only this, riders with language
					barriers are often excluded from any critical announcements or alert
					posters, leading to further stress and confusion.
				</Trans>
			</p>
			<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
				{t('transit_feature_issue', {
					defaultValue:
						'The lack of timely, accurate, and accessible information on essential transit feature status forces riders to confront uncertainty, leading to dangerous situations and a loss of confidence in their ability to use public transportation.',
				})}
			</p>

			<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
				<Trans i18nKey="">
					<strong>TL;DR</strong>: NYC's subway system faces significant
					accessibility issues, with frequent elevator and escalator outages,
					limited ADA-compliant stations, and inadequate support for non-English
					speakers. These barriers, coupled with a lack of reliable status
					information, create a <strong>frustrating</strong>,{' '}
					<strong>unsafe</strong>, and often <strong>impossible</strong>{' '}
					environment for people with disabilities, older adults, parents with
					strollers, and non-English speakers.
				</Trans>
			</p>
			<h2>📝 {t('about_SummaryH2', { defaultValue: 'Summary' })}</h2>
			<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
				<Trans i18nKey="about_Summary1">
					Over 30 years since the passage of the Americans with Disabilities
					Act, accessibility in the NYC transit system continues to pose
					significant challenges. In a world designed primarily for the
					able-bodied, individuals with disabilities encounter numerous hurdles.
				</Trans>
			</p>
			<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
				<Trans i18nKey="about_Summary2">
					As of October 1st, 2024,{' '}
					<strong>only 28% of NYC subway stations are ADA-compliant</strong>,
					making it one of the{' '}
					<strong>least accessible transit systems in the nation</strong>, as
					exposed by the 2017 Disability Civil Rights class action lawsuit.
				</Trans>
			</p>
			<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
				<Trans i18nKey="about_Summary3">
					Statistics reveal the scale of the problem: 7.15% of the population,
					or <strong>547,593 people</strong>, identify as mobility disabled;
					2.3%, or <strong>185,378 people</strong>, as deaf or hearing disabled;
					and nearly 20% of the city's entire population—
					<strong>1.44 million people</strong>
					—is aging at 65 years and older.
				</Trans>
			</p>

			<h2>🤔 {t('about_HypothesisH2', { defaultValue: 'Our Hypothesis' })}</h2>
			<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
				<Trans i18nKey="about_Hypothesis1">
					If individuals with mobility difficulties and language barriers had
					access to reliable, real-time accessibility data and translation
					features, they would feel more empowered to commute via NYC's transit
					system, safely and effectively.
				</Trans>
			</p>
			<h2>
				📱 {t('about_ProductOverviewH2', { defaultValue: 'Product Overview' })}
			</h2>
			<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
				<Trans i18nKey="about_ProductOverview1">
					Our app, AccessTransit, is designed to address these critical gaps in
					current transit accessibility features by leveraging{' '}
					<strong>crowd-sourced data</strong> to provide{' '}
					<strong>reliable, real-time updates</strong> on station accessibility.
				</Trans>
			</p>
			<h2>
				🏙️{' '}
				{t('about_missionStatementH2', { defaultValue: 'Mission Statement' })}
			</h2>
			<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
				<Trans i18nKey="about_MissionStatement1">
					AccessTransit exists to enhance the safety, confidence, and
					independence of mobility-challenged individuals and non-English
					speakers in using public transportation.
				</Trans>
			</p>
			<h2>
				🫂 {t('about_WhoDoWeServeH2', { defaultValue: 'Who do we serve?' })}
			</h2>
			<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
				<Trans i18nKey="about_WhoDoWeServe1">
					We intend to serve individuals who are disabled, mobility-challenged,
					and non-English speakers.
				</Trans>
			</p>
			<h2>
				🧳 {t('about_UserJourneyMapH2', { defaultValue: 'User Journey Map' })}
			</h2>
			{/* 		<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>

				<strong>AccessTransit User Journey:</strong>
			</p> */}
			<ul>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<Trans i18nKey="user_trip_planning">
						User plans a trip to a doctor's appointment using the Official MTA
						site to check accessibility statuses.
					</Trans>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<Trans i18nKey="user_arrival">
						User arrives at station, dejected to find an out-of-service
						elevator, contrary to the website's information.
					</Trans>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<Trans i18nKey="user_discovery">
						User discovers AccessTransit as the top search result and feels
						hopeful.
					</Trans>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<Trans i18nKey="user_app_access">
						User accesses the app and is delighted to see accurate operational
						status for their station.
					</Trans>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<Trans i18nKey="user_trip_planning_success">
						User seamlessly plans their trip, reassured by the intuitive
						interface.
					</Trans>
				</li>
			</ul>

			<h2>👥 {t('about_UserStoriesH2', { defaultValue: 'User-stories' })}</h2>
			<ul>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<Trans i18nKey="user_accessible_station">
						User can open the app and see their nearest accessible station.
					</Trans>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<Trans i18nKey="user_real_time_status">
						User can check the real-time status of accessibility features
						(elevators/escalators).
					</Trans>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<Trans i18nKey="user_update_status">
						User can update the status of features upon arrival if they
						encounter issues.
					</Trans>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<Trans i18nKey="user_save_stations">
						User can save favorite stations by creating an account.
					</Trans>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<Trans i18nKey="user_plan_future_trips">
						User can plan future trips based on saved stations with reliable
						accessibility.
					</Trans>
				</li>
			</ul>

			<h2>
				🧗‍♂️{' '}
				{t('about_TechnicalChallengeH2', {
					defaultValue: 'Key Technical Challenge',
				})}
			</h2>

			<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
				<Trans i18nKey="about_KeyTechnicalChallenge1">
					During the project build, we anticipate several challenges, including
					effectively managing scope creep and ensuring that we adhere to our
					2-3 week build deadline while accurately defining and prioritizing
					features.
				</Trans>
			</p>

			<h2>
				🏋🏽{' '}
				{t('about_ExtensionOpportunitiesH2', {
					defaultValue: 'Extension Opportunities',
				})}
			</h2>

			<h3>
				{' '}
				{t('about_Prioritized_AccessibilityH3', {
					defaultValue: 'Prioritized Accessibility',
				})}
			</h3>

			<p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
				<Trans i18nKey="about_PrioritizedAccessibility1">
					We are committed to ensuring that all users have access to an
					aesthetic, easy-to-use, and intuitive UI, removing barriers related to
					age or technical competence.
				</Trans>
			</p>

			<h2>
				📒{' '}
				{t('about_Sources', {
					defaultValue: 'Sources',
				})}
			</h2>

			<ul>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<a href="https://www.nytimes.com/2023/08/31/nyregion/nyc-subway-accessible-disabled.html">
						[1] A. Elkeurti and A. Ley, "Elevators at Most Subway Stations?
						'I'll Believe It When I See It'," The New York Times, Aug. 31, 2023.
					</a>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<a href="https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html">
						[2] Centers for Disease Control and Prevention, "Disability Impacts
						All of Us," CDC.
					</a>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<a href="https://new.mta.info/accessibility/zoning-for-accessibility">
						[3] Zoning for Accessibility, Metropolitan Transportation Authority.
					</a>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<a href="https://dralegal.org/wp-content/uploads/2017/04/CIDNY-v.-MTA-NY-State-Complaint.pdf">
						[4] Disability Rights Advocates, "Center for Independence of the
						Disabled New York (CIDNY) v. MTA-NY State Complaint," Supreme Court,
						Apr. 2017.
					</a>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<a href="https://www.cidny.org/wp-content/uploads/2017/07/CIDNY-ADA25-Many-_Bridges_to-Cross.pdf">
						[5] S. M. Dooha, "ADA at 25: Many Bridges to Cross," Center for
						Independence of the Disabled.
					</a>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<a href="https://www.nyc.gov/assets/doh/downloads/pdf/episrv/2019-older-adult-health.pdf">
						[6] New York City Department of Health and Mental Hygiene, "Health
						of Older Adults in New York City," Epi Data Brief, no. 112.
					</a>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<a href="https://opportunity.census.gov/assets/files/2021-problem-statements/post-covid/NYC_%20Increasing%20Content%20Accessibility%20for%20Multilingual%20Communities.pdf">
						[7] "Increasing Content Accessibility for Multilingual Communities,"
						The Opportunity Project, 2021 Problem Statement.
					</a>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<a href="https://www.cidny.org/subway-accessibility-maps/">
						[8] CIDNY, "Subway Accessibility Maps."
					</a>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<a href="https://council.nyc.gov/keith-powers/wp-content/uploads/sites/64/2023/02/Policy-Spotlight-MTA-Equipment.pdf">
						[9] K. Powers and P. A. Sanchez, "Policy Spotlight - Out of Order:
						Focusing on MTA Elevators and Escalators," New York City Council,
						Feb. 2023.
					</a>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<a href="https://wagner.nyu.edu/files/faculty/publications/Bringing%20Innovation%20to%20Paratransit.pdf">
						[10] "Bringing Innovation to Paratransit," NYU Wagner Rudin Center
						for Transportation Policy & Management, Dec. 2017.
					</a>
				</li>
				<li style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
					<a href="https://www.nytimes.com/2023/10/01/nyregion/mta-accessibility-elevators-escalators.html">
						[11] M. Gonchar, "Accessibility Remains a Challenge for MTA," The
						New York Times, Oct. 1, 2023.
					</a>
				</li>
			</ul>
			<div className="footer">
				<p
					style={{
						fontSize: '1.55rem',
						marginBottom: '10px',
					}}
				>
					We look forward to any feedback and support as we strive to enhance
					accessibility in public transportation!
				</p>
			</div>
		</div>
	);
}
