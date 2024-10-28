exports.fetchSubwayRoutes = async () => {
  const TRANSIT_API_URL = 'https://external.transitapp.com/v3/public/routes_for_networks?network_ids=NYCSubway|NYC&include_itineraries=true';
  const apiKey = process.env.TRANSIT_API_KEY;
  const [data, error] = await fetchHandler(TRANSIT_API_URL, externalFetchOptions(apiKey));

  if (error) return [null, error];
  if (!data || !Array.isArray(data)) return [null, { msg: 'Invalid data format' }];

  const routes = data
    .filter(routeObj => routeObj.route_type === 1)
    .map(trainRoute => ({
      realTimeRouteId: trainRoute.real_time_route_id || null,
      color: trainRoute.route_color || null,
      longName: trainRoute.route_long_name || null,
      shortName: trainRoute.route_short_name || null,
      textColor: trainRoute.route_text_color || null,
      itineraries: trainRoute.itineraries ? trainRoute.itineraries.map(itinerary => ({
        shape: itinerary.shape || '', // polyline shape used to plot routes on map
        stops: itinerary.stops || [],
      })) : [],
    }));

  return [routes, null];
};
