export const basicFetchOptions = {
  method: 'GET',
  credentials: 'include',
};

export const deleteOptions = {
  method: 'DELETE',
  credentials: 'include',
};

export const getPostOptions = (body) => ({
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
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
    const isJson = (headers.get('content-type')?.includes('application/json'));

    if (!ok) {
      const errorData = await (isJson ? response.json() : response.text()); //errorData is the msg obj our backend controller sends
      throw new Error(errorData.msg || `Fetch failed with status - ${status}`, { cause: status }); //passing error.msg to catch block
    }

    const responseData = await (isJson ? response.json() : response.text());
    return [responseData, null];
  } catch (error) {
    console.warn(error);
    return [null, error];
  }
};
