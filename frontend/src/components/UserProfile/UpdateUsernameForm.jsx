import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../adapters/user-adapter';
import { TextInput, PasswordInput, Button, Stack, Text } from '@mantine/core';

export default function UpdateUserForm({ currentUser, setCurrentUser }) {
	const navigate = useNavigate();
	const [errorText, setErrorText] = useState('');
	const [successText, setSuccessText] = useState('');

	// Input state
	const [currentPassword, setCurrentPassword] = useState('');
	const [newUsername, setNewUsername] = useState('');
	const [newEmail, setNewEmail] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');

	const [showPasswords, setShowPasswords] = useState(false); // Shared state for both password fields

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		//console.log(Object.fromEntries(formData)); //debugging

		// Email validation: Ensure new email matches confirmation email
		if (newEmail !== confirmNewEmail) {
			return setErrorText('New email and confirmation email do not match.');
		}

		// Password validation: Ensure new password matches confirmation password
		if (newPassword !== confirmNewPassword) {
			return setErrorText(
				'New password and confirmation password do not match.'
			);
		}

		// Simulate successful submission (Replace with your API call)
		formData.append('email', newEmail);
		formData.append('password', newPassword);

		const [user, error] = await updateUser(Object.fromEntries(formData));

		//console.log('api res', await updateUser(Object.fromEntries(formData))); //debugging
		//console.log('Update User Error:', error);

		// If our user isn't who they say they are (an auth error on update) log them out
		// We added the httpStatus as a custom cause in our error
		if (error?.cause > 400 && error?.cause < 500) {
			setCurrentUser(null);
			return navigate('/');
		}

		// If there's an error related to the email or username being taken
		if (error) {
			if (error.msg.includes('Email')) {
				return setErrorText('Email already in use');
			}
			if (error.msg.includes('Username')) {
				return setErrorText('Username already taken');
			}
			return setErrorText(error.msg || 'An unknown error occurred.');
		}

		// On successful update, update the user context and show success message
		setCurrentUser(user);
		setSuccessText('User details updated successfully!'); // Success message
		event.target.reset(); // Reset form after successful submission
		setErrorText(''); // Clear error message on successful update
	};

	return (
		<form onSubmit={handleSubmit} aria-labelledby="update-heading">
			<Stack spacing="md">
				<h2 id="update-heading">Update Your Information </h2>
				{/* {currentUser.username} if you wanted to replace your}

				{/* Error handling */}
				{errorText && <Text style={{ color: 'red' }}>{errorText}</Text>}
				{successText && <Text style={{ color: 'green' }}>{successText}</Text>}

				{/* Current Username */}
				<TextInput
					label="Current Username"
					id="username"
					name="username"
					defaultValue={currentUser.username}
					disabled
				/>

				{/* New Username */}
				<TextInput
					label="New Username"
					id="new-username"
					name="new-username"
					value={newUsername}
					onChange={(e) => setNewUsername(e.target.value)}
					// required
				/>

				{/* Current Email */}
				<TextInput
					label="Current Email"
					id="email"
					name="email"
					defaultValue={currentUser.email}
					disabled
				/>

				{/* New Email */}
				<TextInput
					label="New Email"
					id="new-email"
					name="new-email"
					value={newEmail}
					onChange={(e) => setNewEmail(e.target.value)}
					// required
				/>
				{/* Current Password */}
				<PasswordInput
					label="Current Password"
					id="current-password"
					name="current-password"
					value={currentPassword}
					onChange={(e) => setCurrentPassword(e.target.value)}
					required
				/>
				{/* New Password */}
				<PasswordInput
					label="New Password"
					id="new-password"
					name="new-password"
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
					// required
					visibilityToggle={true} // Show the visibility toggle icon
					onVisibilityChange={() => setShowPasswords((prev) => !prev)} // Toggle visibility for both fields
					visible={showPasswords} // Control visibility (should be `true` for visible passwords, `false` for hidden)
				/>

				{/* Confirm New Password */}
				<PasswordInput
					label="Confirm New Password"
					id="confirm-password"
					name="confirm-password"
					value={confirmNewPassword}
					onChange={(e) => setConfirmNewPassword(e.target.value)}
					// required
					visibilityToggle={true} // Show the visibility toggle icon
					onVisibilityChange={() => setShowPasswords((prev) => !prev)} // Toggle visibility for both fields
					visible={showPasswords} // Control visibility (should be `true` for visible passwords, `false` for hidden)
				/>
				{/* Hidden User ID */}
				<input type="hidden" name="id" value={currentUser.id} />
				{/* Submit Button */}
				<Button type="submit" color="blue" mt="md">
					Confirm Changes
				</Button>
			</Stack>
		</form>
	);
}
