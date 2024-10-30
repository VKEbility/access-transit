const { fetchHandler, basicFetchOptions } = require('../../shared/fetchingUtils.cjs');

exports.fetchNearbyRoutes = async (lat, lon) => {
  // console.log('--ROUTES FETCH INVOKED @fetchNearbyRoutes', lat, lon); //to help debug;
  const TRANSIT_API_URL = `https://external.transitapp.com/v3/public/nearby_routes?lat=${lat}&lon=${lon}&max_distance=1500&should_update_realtime=true`; //getting nearby routes within 1500m of coord location + their real time arrivals
  const header = { 'apiKey': process.env.TRANSIT_API_KEY };
  const [data, error] = await fetchHandler(TRANSIT_API_URL, basicFetchOptions(header));
  if (error) return [null, error];

  const routes = data.routes.map(rt => {
    const modeName = rt.mode_name ?? null; //mode of transportation- subway or bus
    const realTimeRouteId = rt.real_time_route_id ?? null; //transit line- unique identifier for real-time tracking
    const color = rt.route_color ?? null; //transit route logo color (hex)
    const longName = rt.route_long_name ?? null; //route's full name (ex. 'Broadway - 7 Avenue Local')
    const shortName = rt.route_short_name ?? null; //route identifier (ex. 1, A, B, D, R)
    const textColor = rt.route_text_color ?? null; //transit route text color (hex)
    const type = rt.route_type ?? null; //0 = uptown, 1 = downtown
    const sortingKey = rt.sorting_key ?? null; //order to sort by
    const ttsLongName = rt.tts_long_name ?? null; //name for text-to-speech, same as long name
    const ttsShortName = rt.tts_short_name ?? null; //ex. F train
    const globalRtId = rt.global_route_id ?? null; //unique, global identifier for entire route

    const itineraries = rt.itineraries?.map(it => { //arr of objs, first obj is the route's uptown itinerary, 2nd is the downtown itinerary
      const directionHeadsign = it.direction_headsign ?? null;
      const directionId = it.direction_id ?? null;
      const headsign = it.headsign ?? null;
      const mergedHeadsign = it.merged_headsign ?? null;

      const clSt = it.closest_stop;
      const closestStop = { //list of stops, each containing:
        glStopId: clSt.global_stop_id ?? null, //unique, global identifier that refers to the same stop/station across different datasets
        rtStopId: clSt.rt_stop_id ?? null,
        stopLat: clSt.stop_lat ?? null,
        stopLon: clSt.stop_lon ?? null,
        stopName: clSt.stop_name ?? null, //station name
        wheelchairBoarding: clSt.wheelchair_boarding ?? null //if specific transit vehicle is accessible; 1 = yes, 2 = no
      } ?? null;

      const realTimeArrivals = it.schedule_items?.map(schItem => { //upcoming departures from current stop
        return {
          departureTime: schItem.departure_time ?? null, //time transit will leave a station- use it to create a minute-based countdown
          isCancelled: schItem.is_cancelled ?? null, //if cancelled, gray out
          isRealTime: schItem.is_real_time ?? null,
          tripId: schItem.rt_trip_id ?? null, //id specific to schedule
          scheduledDepartureTime: schItem.scheduled_departure_time ?? null, //fallback departure time in case no real time data
          tripSearchKey: schItem.trip_search_key ?? null,
          wheelchairAccessible: schItem.wheelchair_accessible ?? null //if actual station is accessible; 1 = yes, 2 = no
        };
      }) ?? [];

      return {
        directionHeadsign,
        directionId,
        headsign,
        mergedHeadsign,
        closestStop,
        realTimeArrivals
      };
    }) ?? [];

    return {
      transitId: realTimeRouteId,
      modeName,
      color,
      textColor,
      shortName,
      longName,
      type,
      sortingKey,
      ttsLongName,
      ttsShortName,
      globalRtId,
      itineraries
    };
  });

  return [routes, null];
};
