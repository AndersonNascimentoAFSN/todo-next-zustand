export type ErrorAPI = {
  error: {
    code: number
    message: string
  }
}

export async function api<TResponse>(
  url: string,
  config: RequestInit = {
    cache: "no-cache",
  }
): Promise<TResponse> {
  try {
    const response = await fetch(url, config)

    const isSuccessful = response.ok;

    if (isSuccessful) {
      return await response.json() as TResponse;
    } else {
      return Promise.reject({ error: { message: response.statusText, code: response.status } });
    }

  } catch (error) {
    return Promise.reject({error: { message: 'internal server error', code: 500 }});
  }
}

// .then((response) => response.json())
// .then((data) => data as TResponse);

// .then(res => {
//   if (res.ok) {
//     return res.json()
//   } else {
//     return Promise.reject(res.status)
//   }})