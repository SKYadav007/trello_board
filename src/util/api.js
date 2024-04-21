import axios from "axios"

const fetchDataFromApi = async (url, params) => {
    try {
        const res = await axios.get(url, {
            params,

        });
        return res.data;
    } catch (error) {
        return error.stack
    }

}

const getJWTWithLogin = async (url, body) => {
    try {
      const res = await axios.post(url, body)
      return res.data;
    } catch (error) {
      console.log(error);
      return error.response?.data || error.message;
    }
  };

export {
    fetchDataFromApi,
    getJWTWithLogin
}