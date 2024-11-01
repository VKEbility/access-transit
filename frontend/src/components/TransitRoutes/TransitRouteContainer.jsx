import { Container, Button, Text, Loader, Box, Grid } from '@mantine/core';
import RouteCarousel from './RouteCarousel';
import useNearbyRoutes from '../../hooks/useNearbyRoutesLoader';
import '../../styles/routes.css';
import theme, { colors } from '../../styles/theme';

export default function NearbyRoutesContainer({ coords, mapReady }) {
  const { routes, setRoutes, errorText, loading, loadNearbyRoutes } = useNearbyRoutes(coords, mapReady);

  const handleTimerEnd = (transitId) => { //when time reaches transit departure time, removing the route card from the container by its transitId
    setRoutes((prevRoutes) => prevRoutes.filter(route => route.transitId !== transitId)); //changing routes state by filtering the arr for only the routes that don't match the transitId
  };

  return (
    <Container
      sx={{
        backgroundColor: '#8B0000',
        // padding: '20px',
        borderRadius: '8px',
      }}
    >
      <Button onClick={loadNearbyRoutes} id="refresh-routes">Refresh</Button>

      <Grid className="routes-container"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: colors.lightest,
          gap: '20px',
        }}
      >
        {errorText && <Text color="red">{errorText}</Text>}
        {loading ? <Loader /> : (
          routes.length > 0 ? (
            routes.map(route => (
              <Grid.Col key={route.globalRtId} span={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <RouteCarousel routes={[route]} handleTimerEnd={handleTimerEnd} />
              </Grid.Col>
            ))
          ) : (
            <Text>No nearby routes found.</Text>
          )
        )}
      </Grid>
    </Container >
  );
}
