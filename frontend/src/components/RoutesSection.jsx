import NearbyRoutesContainer from '../components/NearbyRoutesContainer';

export default function NearbyRoutesSection({ coords, loadedTrainIcons, cardColors }) {
  return (
    <>
      <div id="transit-card-title">
        <h2 id="section-title">Nearby Routes</h2>
        <div id="transit-cards-structure">
          <div id="transit-cards-container">
            <NearbyRoutesContainer coords={coords} />
            {loadedTrainIcons.map((path, i) => (
              <TransitCard key={i} iconPath={path} idx={i} cardColor={cardColors[i]} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};