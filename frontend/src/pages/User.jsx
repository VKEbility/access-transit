import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
	Button,
	Container,
	Title,
	Text,
	Paper,
	Stack,
	Divider,
} from '@mantine/core';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { getUser } from '../adapters/user-adapter';
import { logUserOut } from '../adapters/auth-adapter';
import UpdateUserForm from '../components/UserProfile/UpdateUsernameForm';

export default function UserPage() {
	const navigate = useNavigate();
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
	const [userProfile, setUserProfile] = useState(null);
	const [errorText, setErrorText] = useState(null);
	const { id } = useParams();
	const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

	useEffect(() => {
		const loadUser = async () => {
			const [user, error] = await getUser(id);
			if (error) return setErrorText(error.msg);
			setUserProfile(user);
		};

		loadUser();
	}, [id]);

	const handleLogout = async () => {
		logUserOut();
		setCurrentUser(null);
		navigate('/');
	};

	if (!userProfile && !errorText) return null;
	if (errorText) return <Text color="red">{errorText}</Text>;

	// What parts of state would change if we altered our currentUser context?
	// Ideally, this would update if we mutated it
	// But we also have to consider that we may NOT be on the current users page
	const profileUsername = isCurrentUserProfile
		? currentUser.username
		: userProfile.username;

	return (
		<Container
			size="lg"
			style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
		>
			{/* Profile Box */}

			<Stack spacing="md" style={{ width: '100%' }}>
				{/* Profile Username */}
				<Title
					order={1}
					align="center"
					style={{
						fontWeight: 'bold', // Make the username bold
						fontSize: '2.5rem', // Slightly larger font size for prominence
						color: '#007bff', // Change color to blue (You can use any shade of blue)
						textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Adds a soft shadow to give depth
						marginBottom: '12px', // Space below to separate from other elements
						letterSpacing: '1px', // Slightly spread out the letters for elegance
						textTransform: 'capitalize', // Capitalize the username text
						padding: '8px 0', // Less padding, no background color
					}}
				>
					{profileUsername}
				</Title>

				{/* Bio */}
				<Text
					align="center"
					size="xl"
					style={{
						maxWidth: '90%',
						margin: '0 auto',
						wordWrap: 'break-word',
					}}
				>
					If the user had any data, we would communicate with the backend to
					display it here.
				</Text>

				<Text
					align="center"
					size="lg"
					style={{
						maxWidth: '90%',
						margin: '0 auto',
						wordWrap: 'break-word',
					}}
				>
					As a person with a disability, the MTA app has been a vital tool in
					helping me navigate public transportation with more independence. With
					real-time updates, accessibility information, and route planning
					features, it makes commuting easier and less stressful. I can track
					elevator statuses, avoid disruptions, and plan accessible routes—all
					of which give me greater control over my journey. The app has truly
					empowered me to travel confidently and access the places I need to go
					without worry.
				</Text>

				<Divider />

				{/* Profile top box */}
				<Paper
					padding="xl"
					radius="md"
					style={{
						width: '100%',
						maxWidth: '900px',
						margin: '0 auto',
						boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
						paddingLeft: '24px',
						paddingRight: '24px',
						paddingBottom: '24px',
					}}
				>
					{!!isCurrentUserProfile && (
						<>
							<UpdateUserForm
								currentUser={currentUser}
								setCurrentUser={setCurrentUser}
							/>
						</>
					)}
				</Paper>
			</Stack>
		</Container>
	);
}
