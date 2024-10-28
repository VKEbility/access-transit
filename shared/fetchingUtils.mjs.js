export const basicFetchOptions = (headers = {}) => ({
  method: 'GET',
  credentials: 'include',
  headers,
});

export const externalFetchOptions = (apiKey) => ({
  method: 'GET',
  headers: { 'Authorization': `Bearer ${apiKey}` }, //allowing any API key to be inserted dynamically
});

export const externalFetchOptions = (apiKey) => ({
  method: 'GET',
  headers: { 'Authorization': `Bearer ${apiKey}` }, //allowing any API key to be inserted dynamically
});

export const deleteOptions = {
  method: 'DELETE',
  credentials: 'include',
};

export const getPostOptions = (body, apiKey) => ({
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
  body: JSON.stringify(body),
});

export const getPatchOptions = (body) => ({
  method: 'PATCH',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

export const fetchHandler = async (url, options = {}) => {
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
