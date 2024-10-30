import AccessibleStations from '../components/AccessibleStations';
// import EquipmentStatus from '../components/EquipmentStatus';

export default function ADAStationsPage() {
  return <>
    <h1>Accessibility at NYC's MTA</h1>
    <p>This page provides a comprehensive list of train stations equipped with features that ensure safe and convenient travel for individuals with disabilities. Whether you're a daily commuter or a visitor, accessible stations are designed to make your journey smoother and more inclusive. Explore the stations below to find the best routes for your travels.</p>
    <AccessibleStations></AccessibleStations>
    {/* <EquipmentStatus></EquipmentStatus> */}
  </>
};
