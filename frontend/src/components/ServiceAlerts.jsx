import { useState, useEffect } from 'react';
import { fetchAllAlerts, fetchRouteAlerts } from '../adapters/alerts-adapter';
import { Grid, Title, Alert } from '@mantine/core';
import AlertCard from './AlertCard';

export default function ServiceAlerts({ rt_stop_id }) {
	const [allAlerts, setAllAlerts] = useState([]);
	const [postedTime, setPostedTime] = useState('');
	const [errorText, setErrorText] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadAlerts = async () => {
			setLoading(true);
			setErrorText('');
			const fetchAdapter = rt_stop_id
				? () => fetchRouteAlerts(rt_stop_id)
				: fetchAllAlerts;

			// Fetch alerts
			const [alertsObj, error] = await fetchAdapter();
			if (error) {
				setErrorText(error.msg);
				setLoading(false);
				return;
			}

			setPostedTime(alertsObj.postedTimestamp);
			setAllAlerts(alertsObj.alerts);
			setLoading(false);
		};

		loadAlerts();
	}, [rt_stop_id]);

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			<Title
				order={2} // You can use order={1} for even larger text
				style={{
					textAlign: 'center', // Center the text
					fontSize: '3rem', // Increase the font size
				}}
			>
				Service Alerts
			</Title>
			<p style={{ textAlign: 'center', fontSize: '1.5rem' }}>
				All alerts in effect
			</p>
			{errorText && (
				<Alert title="Error" color="red">
					{errorText}
				</Alert>
			)}
			<Grid gutter="lg" style={{ padding: '30px' }}>
				{allAlerts.length > 0 ? (
					allAlerts.map((alert) => (
						<Grid.Col key={alert.id} span={6}>
							<AlertCard alert={alert} postedTime={postedTime} />
						</Grid.Col>
					))
				) : (
					<p>No subway alerts found. Please try again later.</p>
				)}
			</Grid>
		</div>
	);
}
