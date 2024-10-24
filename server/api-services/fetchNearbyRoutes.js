const { fetchHandler, externalFetchOptions } = require('../../shared/fetchingUtils.cjs');

exports.fetchNearbyRoutes = async (lat, lon) => {
  console.log('STARTING @fetchNearbyRoutes:', lat, lon);
  const TRANSIT_API_URL = `https://external.transitapp.com/v3/public/nearby_routes?lat=${lat}&lon=${lon}&max_distance=1500&should_update_realtime=true`; //getting nearby routes within 1500m of coord location + their real time arrivals
  const apiKey = process.env.TRANSIT_API_KEY;

  const [data, error] = await fetchHandler(TRANSIT_API_URL, externalFetchOptions(apiKey));
  if (error) return [null, error];

  const routes = data.routes.map(trainRoute => ({
    realTimeRouteId: trainRoute.real_time_route_id || null,
    color: trainRoute.route_color || null,
    longName: trainRoute.route_long_name || null,
    shortName: trainRoute.route_short_name || null,
    textColor: trainRoute.route_text_color || null,
    type: trainRoute.route_type || null,
    ttsLongName: trainRoute.tts_long_name || null,
    ttsShortName: trainRoute.tts_short_name || null,
    globalId: trainRoute.global_route_id || null,
    itineraries: trainRoute.itineraries ? trainRoute.itineraries.map(itinerary => ({
      directionHeadsign: itinerary.direction_headsign || null,
      directionId: itinerary.direction_id || null,
      headsign: itinerary.headsign || null,
      mergedHeadsign: itinerary.merged_headsign || null,
      closestStop: itinerary.closest_stop ? {
        rtStopId: itinerary.closest_stop.rt_stop_id || null,
        stopLat: itinerary.closest_stop.stop_lat || null,
        stopLon: itinerary.closest_stop.stop_lon || null,
        stopName: itinerary.closest_stop.stop_name || null,
        wheelchairBoarding: itinerary.closest_stop.wheelchair_boarding || null
      } : null,
      realTimeArrivals: itinerary.schedule_items ? itinerary.schedule_items.map(scheduleItem => ({
        departureTime: scheduleItem.departure_time || null,
        isCancelled: scheduleItem.is_cancelled || null,
        isRealTime: scheduleItem.is_real_time || null,
        tripId: scheduleItem.rt_trip_id || null,
        scheduledDepartureTime: scheduleItem.scheduled_departure_time || null,
        tripSearchKey: scheduleItem.trip_search_key || null,
        wheelchairAccessible: scheduleItem.wheelchair_accessible || null
      })) : []
    })) : [],
  }));

  return [routes, null];
};