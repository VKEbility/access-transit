import AccessibleStations from '../components/AccessibleStations';
// import EquipmentStatus from '../components/EquipmentStatus';
import { Container, Title, Text } from '@mantine/core';

export default function ADAStationsPage() {
	return (
		<Container padding="xxl" style={{ textAlign: 'center' }}>
			<Title order={1} style={{ padding: '20px' }}>
				Accessibility at NYC's MTA
			</Title>
			<Text size="xl" style={{ marginBottom: '10px' }}>
				This page provides a comprehensive list of train stations equipped with
				features that ensure safe and convenient travel for individuals with
				disabilities. Whether you're a daily commuter or a visitor, accessible
				stations are designed to make your journey smoother and more inclusive.
				Explore the stations below to find the best routes for your travels.
			</Text>
			<AccessibleStations />
			{/* <EquipmentStatus /> */}
		</Container>
	);
}
