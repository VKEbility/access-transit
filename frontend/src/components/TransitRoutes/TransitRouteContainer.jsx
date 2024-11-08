import {
	Container,
	Button,
	Text,
	Loader,
	Box,
	Stack,
	Grid,
} from '@mantine/core';
import RouteCarousel from './RouteCarousel';
import useNearbyRoutes from '../../hooks/useNearbyRoutesLoader';
import '../../styles/routes.css';
import theme, { colors } from '../../styles/theme';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function NearbyRoutesContainer({ coords, mapReady }) {
	const { routes, setRoutes, errorText, loading, loadNearbyRoutes } =
		useNearbyRoutes(coords, mapReady);

	const handleTimerEnd = (transitId) => {
		//when time reaches transit departure time, removing the route card from the container by its transitId
		setRoutes((prevRoutes) =>
			prevRoutes.filter((route) => route.transitId !== transitId)
		); //changing routes state by filtering the arr for only the routes that don't match the transitId
	};

	return (
		<Container
			sx={{
				padding: '20px',
			}}
		>
			{/* Button for refreshing routes */}
			<Stack spacing="sm">
				<Stack spacing="sm">
					<Button
						onClick={loadNearbyRoutes}
						id="refresh-routes"
						variant="outline"
						color="#3c7fd0"
						sx={{
							borderColor: 'blue',
							color: 'blue',
							'&:hover': {
								backgroundColor: 'rgba(0, 0, 0, 0.1)',
							},
						}}
					>
						Refresh For Nearby Routes
					</Button>
				</Stack>
				{/* Loading state, error text, or routes */}
				{errorText && <Text color="red">{errorText}</Text>}
				{loading ? (
					<Loader size="xl" /> //need to figure out how to center the loading animation.
				) : routes.length > 0 ? (
					<Grid
						className="routes-container"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: '20px',
						}}
					>
						{routes.map((route) => (
							<Grid.Col
								key={route.globalRtId}
								span={4}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<RouteCarousel
									routes={[route]}
									handleTimerEnd={handleTimerEnd}
								/>
							</Grid.Col>
						))}
					</Grid>
				) : (
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: '1.2rem',
							color: 'black', // Color can be customized
							textAlign: 'center',
						}}
					>
						No nearby routes found.
					</Text>
				)}
			</Stack>
		</Container>
	);
}
