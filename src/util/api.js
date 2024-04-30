import axios from "axios"
import Config from "../Config.json"

let BaseURL = Config.env[0].API_BASE_URL_LOCAL;
if (Config.env[0].SERVER == "REMOTE") {
  BaseURL = Config.env[0].API_BASE_URL;
}


const fetchDataFromApi = async (params) => {
  try {
    const res = await axios.get(BaseURL + params, {

      headers: {
        Authorization: localStorage.getItem("currentUserToken")
      }

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


const getAuth = async () => {
  try {
    axios.get(BaseURL + "/api/v1/user/auth")
      .then((res) =>  res.data ).
      catch((err) => {
      });

  } catch (err) {
    console.log(err);
  };
}
export default {
  fetchDataFromApi,
  getJWTWithLogin,
  getAuth
}