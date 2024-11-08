import { Box, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import TransitRouteCard from './TransitRouteCard';
import classes from '../../styles/carousel.module.css';

export default function RouteCarousel({ routes, handleTimerEnd }) {
	const renderSlide = (route, itinerary, direction) => (
		<Carousel.Slide key={direction} className={classes}>
			<TransitRouteCard
				route={route}
				itinerary={itinerary} //obj { closestStop{}, directionHeadsign, directionId, headsign, mergedHeadsign, closestStop, realTimeArrivals }
				onTimerEnd={() => handleTimerEnd(route.transitId)}
			/>
		</Carousel.Slide>
	);

	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
			{routes.map((route) => {
				const uptownItinerary =
					route.itineraries.find((it) => it.directionId === 0) ?? {};
				const downtownItinerary =
					route.itineraries.find((it) => it.directionId === 1) ?? {};

				return (
					<Box
						key={route.globalRtId}
						sx={{ minHeight: '200px', width: '100%', padding: '0 10px' }}
					>
						<Carousel
							key={route.globalRtId}
							loop
							draggable
							withIndicators
							controls={false}
							height={200}
							slideSize="100%"
							slideGap="sm"
						>
							{renderSlide(route, uptownItinerary, 'Uptown')}
							{renderSlide(route, downtownItinerary, 'Downtown')}
						</Carousel>
					</Box>
				);
			})}
		</Box>
	);
}
