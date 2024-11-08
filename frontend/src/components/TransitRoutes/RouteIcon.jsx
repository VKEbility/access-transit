import { useState, useEffect } from 'react';

export default function RouteIcon({ route }) {
	const { color, shortName, textColor } = route;

	return (
		<div
			className="route-card"
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: `#${color}`,
				borderRadius: '50%',
				width: '50px',
				height: '50px',
				position: 'relative',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
			}}
		>
			<span
				style={{
					color: `#${textColor}`,
					fontWeight: 'bold',
					textAlign: 'center',
				}}
			>
				<h2 style={{ margin: 0 }}>{shortName}</h2>
			</span>
		</div>
	);
}
