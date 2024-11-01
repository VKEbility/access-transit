import AccessibilityStatusCard from './AccessibilityStatusCard';
// import '../../styles/accessibility.css';

export default function AccessibilityStatusContainer({ rtStopId }) {
  return (
    <div className="accessibility-status-container">
      <AccessibilityStatusCard key={rtStopId} rtStopId={rtStopId} />
    </div>
  );
}
