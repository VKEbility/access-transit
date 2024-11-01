import { Card, Text } from '@mantine/core';

export default function AlertCard({ alert, postedTime }) {
	return (
		<Card
			key={alert.id}
			padding="md" // Maintain padding for content
			radius="md"
			withBorder
			style={{
				transition: 'transform 0.2s',
				backgroundColor: '#fff',
				padding: '20px',
				minHeight: '200px', // Set a minimum height for uniformity
				maxHeight: '200px',
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.transform = 'scale(1.05)';
				e.currentTarget.style.backgroundColor = '#e0f7fa';
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.transform = 'scale(1)';
				e.currentTarget.style.backgroundColor = '#fff';
			}}
		>
			<Text weight={500}>
				Route: {alert.informedEntities?.metaData?.rtLineId || 'N/A'}
			</Text>
			<Text>Alert Type: {alert.alertType || 'N/A'}</Text>
			<Text weight={500}>Header: {alert.headerText || 'N/A'}</Text>
			<Text>Description: {alert.descriptionText || 'N/A'}</Text>
			<Text>
				Active Period:{' '}
				{alert.activePeriod
					? alert.activePeriod
							.map((period) => `${period.starting} to ${period.ending}`)
							.join(', ')
					: 'N/A'}
			</Text>
			<Text>
				Alternatives:{' '}
				{alert.travelAlternatives
					?.map((alt) => `${alt.stopId} - ${alt.notes}`)
					.join(', ') || 'N/A'}
			</Text>
			<Text>Posted: {postedTime || 'N/A'}</Text>
			<Text>Agency: {alert.informedEntities?.metaData?.agencyId || 'N/A'}</Text>
		</Card>
	);
}
