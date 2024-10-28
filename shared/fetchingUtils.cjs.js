const basicFetchOptions = (headers = {}) => ({
  method: 'GET',
  credentials: 'include',
  headers,
});

const externalFetchOptions = (apiKey) => ({
  method: 'GET',
  headers: { 'apiKey': apiKey },
});

const externalFetchOptions = (apiKey) => ({
  method: 'GET',
  headers: { 'apiKey': apiKey },
});

const deleteOptions = {
  method: 'DELETE',
  credentials: 'include',
};

const getPostOptions = (body, apiKey) => ({
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify(body),
});

const getPatchOptions = (body) => ({
  method: 'PATCH',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

const fetchHandler = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const { ok, status, headers } = response;
    const contentType = headers.get('content-type');

    const isJson = (contentType?.includes('application/json'));

    if (!ok) {
      const errorData = await (isJson ? response.json() : response.text());
      throw new Error(errorData.msg || `Fetch failed with status - ${status}`, { cause: status });
    }

    const responseData = await (isJson ? response.json() : response.text());

    if (contentType?.includes('application/octet-stream')) { //accounting for MTA API content-type
      try {
        return [JSON.parse(responseData), null];
      } catch (err) {
        console.warn('Failed to parse octet-stream as JSON:', err);
        return [null, new Error('Failed to parse octet-stream response as JSON')];
      }
    }

    return [responseData, null];
  } catch (error) {
    console.warn(error);
    return [null, error];
  }
};

module.exports = {
  basicFetchOptions,
  externalFetchOptions,
  deleteOptions,
  getPostOptions,
  getPatchOptions,
  fetchHandler,
};