import { useState } from 'react';
import { Card, Group, Text } from '@mantine/core';
import RouteIcon from './RouteIcon';
import AccessibilityStatusContainer from './AccessibilityStatusContainer';
import CountdownTimer from '../../hooks/CountdownTimer';
// import '../../styles/routes.css';

export default function TransitRouteCard({ route, itinerary, onTimerEnd }) {
	const closestStop = itinerary.closestStop ?? {}; //rendering the closest stop of whichever itinerary view currDirection state is on
	const realtimeArrival = itinerary.realTimeArrivals[0] ?? {};
	const departure = realtimeArrival?.departureTime;
	const longName = route.longName ?? '';
	const isOutOfCommission =
		!realtimeArrival || Object.keys(realtimeArrival).length === 0;

	return (
		<>
			<Card
				shadow="sm"
				padding="lg"
				radius="md"
				withBorder
				style={{
					backgroundColor: isOutOfCommission ? '#d3d3d3' : `#${route.color}`,
					minHeight: '180px',
					maxWidth: '350px',
					margin: '0 auto',
				}}
			>
				<Group position="apart">
					<RouteIcon route={route} />
					<Text size="md" id="estimated-arrival-time">
						{departure ? (
							<CountdownTimer departure={departure} onComplete={onTimerEnd} /> //passing prop state down
						) : (
							'N/A'
						)}
					</Text>
				</Group>
				<Group position="apart">
					{closestStop.stopName && (
						<Text size="md">{closestStop.stopName}</Text>
					)}
					<Text>{longName}</Text>
					<AccessibilityStatusContainer rtStopId={closestStop.rtStopId} />
				</Group>
			</Card>
		</>
	);
}
