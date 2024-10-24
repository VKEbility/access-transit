import { useState, useEffect } from 'react';
import { getRouteAccessibility } from '../adapters/transit-adapter';

const AccessibilityStatus = ({ rtStopId }) => {
  const [equipmentStatus, setEquipmentStatus] = useState([]);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    const loadEquipStatus = async () => {
      if (!rtStopId) return console.warn("No rt_stop_id given");
      const [status, error] = await getRouteAccessibility(rtStopId);
      if (error) return setErrorText(error.msg);

      setEquipmentStatus(status);
    }

    loadEquipStatus();
  }, [rtStopId]);

  const renderStatusIcon = (status) => {
    switch (status) {
      case '1':
        return <span style={{ color: 'green' }}>🟢</span>;
      case '0':
        return <span style={{ color: 'red' }}>🔴</span>;
      case '2':
        return <span style={{ color: 'orange' }}>🟠</span>;
      default:
        return <span>⚪</span>; //unknown
    }
  };

  return (
    <div className="accessibility-status">
      {errorText && <p className="error-text">{errorText}</p>}
      {equipmentStatus.map((equipment) => (
        <div key={equipment.equip_id} className="equipment-icon">
          {equipment.equip_type}: {renderStatusIcon(equipment.operational_status)}
        </div>
      ))}
    </div>
  );
};

export default AccessibilityStatus;