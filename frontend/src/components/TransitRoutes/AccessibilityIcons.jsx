import { FiAlertTriangle } from 'react-icons/fi';
import { FaWheelchair } from 'react-icons/fa';
import { MdOutlineElevator } from 'react-icons/md';
import { GiEscalator } from 'react-icons/gi';

const accessibilityIcons = {
	wheelchair: FaWheelchair,
	el: MdOutlineElevator,
	es: GiEscalator,
	alert: FiAlertTriangle,
};

export default function AccessibilityIcons({ accessibility }) {
	return (
		<div id="accessibility-icons-container" aria-label="Accessibility Features">
			{accessibility &&
				accessibility.map(({ equip_no, equip_type, operational_status }) => {
					const Icon = accessibilityIcons[equip_type.toLowerCase()];
					return (
						Icon && (
							<Icon
								key={equip_no}
								aria-label={equip_type}
								style={{
									color:
										operational_status === '1'
											? 'green'
											: operational_status === '0'
											? 'red'
											: 'orange',
								}} //orange for info not reliable as too old
							/>
						)
					);
				})}
		</div>
	);
}
