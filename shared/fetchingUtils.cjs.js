const basicFetchOptions = (headers = {}) => ({
  method: 'GET',
  credentials: 'include',
  headers,
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
    const isHTML = (contentType?.includes('text/html'));

    if (!ok) {
      const errorData = await (isJson ? response.json() : response.text());
      throw new Error(errorData.msg || `Fetch failed with status - ${status}`, { cause: status });
    }

    let responseData;

    if (isJson) {
      responseData = await response.json(); //directly parse res as json
    } else {
      const textData = await response.text(); //get res as text
      try {
        responseData = JSON.parse(textData); //try to parse it as json if so
      } catch (err) {
        console.warn('Failed to parse response as JSON:', err);
        return [null, new Error('Failed to parse response as JSON')];
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
  deleteOptions,
  getPostOptions,
  getPatchOptions,
  fetchHandler,
};