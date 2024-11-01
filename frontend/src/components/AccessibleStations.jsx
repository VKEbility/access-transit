import { useState, useEffect } from 'react';
import { getAllADAStations } from '../adapters/ada-adapter';
import { Card, Text, Grid, Title, Alert } from '@mantine/core';

export default function AccessibleStations() {
	const [accessibleTrainStations, setTrainStations] = useState([]);
	const [errorText, setErrorText] = useState('');

	useEffect(() => {
		const loadADA = async () => {
			const [ada, error] = await getAllADAStations();
			if (error) return setErrorText(error.msg);

			setTrainStations(ada);
		};

		loadADA();
	}, []);

	return (
		<div className="accessible-stations-container">
			<Title order={1} style={{ padding: '20px' }}>
				ADA Compliant Stations
			</Title>
			{errorText && (
				<Alert title="Error" color="red">
					{errorText}
				</Alert>
			)}
			<Grid gutter="lg" className="accessible-stations-grid">
				{accessibleTrainStations.length > 0 ? (
					accessibleTrainStations.map(({ stop_name, gtfs_stop_id }) => (
						<Grid.Col key={gtfs_stop_id} span={4}>
							<Card
								className="accessible-station-card"
								padding="lg"
								radius="md"
								withBorder
								style={{ transition: 'transform 0.2s' }}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'scale(1.05)';
									e.currentTarget.style.backgroundColor = '#e0f7fa';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'scale(1)';
									e.currentTarget.style.backgroundColor = '#f9f9f9';
								}}
							>
								<Text className="accessible-station-name">{stop_name}</Text>
							</Card>
						</Grid.Col>
					))
				) : (
					<Text>No ADA compliant stations found. Please try again later.</Text>
				)}
			</Grid>
		</div>
	);
}
