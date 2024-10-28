const agencyName = (id) => {
  switch (id) {
    case 'MTASBWY': return 'MTA Subway';
    case 'LI': return 'Long Island Rail Road';
    case 'MTA NYCT':
    case 'MTABC': return 'MTA Bus';
    case 'MNR': return 'MTA Metro-North Railroad';
    default: return null;
  }
};
const unixConverter = (prop) => {
  const readableTimestamp = new Date(prop * 1000).toLocaleString();
  return readableTimestamp !== 'Invalid Date' ? readableTimestamp : null;
};

module.exports = {
  agencyName,
  unixConverter,
};