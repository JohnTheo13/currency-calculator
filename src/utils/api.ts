interface Options {
  method: 'get' | 'post' // etc
  headers: Record<string, string>
}

const api = {
  send: async (url: string, options: Options): Promise<any> => {
    const API_URL = process.env.VUE_APP_API_URL

    try {
      const response = await fetch(`${API_URL}/${url}`, {
        method: options.method,
        headers: {
          Accept: 'application/json',
          ...options.headers
        }
      })
      return response.json()
    } catch (error) {
      return Promise.reject(error)
    }
  },
  get: (url: string): Promise<any> =>
    api.send(url, { method: 'get', headers: {} })
}

export default api
