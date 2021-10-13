const USER_BASE_URL = "http://localhost:3000/api/users/";
const axios = require("axios");

import store from '../store/store'
class UserServices {
  static getUsers() {
    return axios.get(USER_BASE_URL);
  }
  
  static getUserFromToken(token) {
    return axios.post(
      USER_BASE_URL + "token",
      {},
      {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      }
    );
  }

  static async signupUser(body) {
    return axios.post(USER_BASE_URL + "signup", body);
  }

  static async sendOtp(body) {
    return axios.post(USER_BASE_URL + "otp", body);
  }

  static loginUser(body) {
    return axios.post(USER_BASE_URL + "login", body);
  }

  static filter(obj) {
    const temp = { ...obj };
    let filter = [...store.state.property];

    if (temp.range) {
      let str = temp.range;
      str = str.replaceAll("$", "").split(" - ");
      filter = filter.filter(
        (item) =>
          parseInt(item.price) >= parseInt(str[0]) &&
          parseInt(item.price) <= parseInt(str[1])
      );
    }
    if (temp.location) {
      console.log("location");
    }
    if (temp.beds) {
      filter = filter.filter((item) => item.description.beds == temp.beds);
    }
    if (temp.baths) {
      filter = filter.filter((item) => item.description.baths == temp.baths);
    }
    if (temp.status) {
      filter = filter.filter((item) => item.description.status == temp.status);
    }
    if (temp.type) {
      filter = filter.filter((item) => item.description.type == temp.type);
    }

    return filter;
  }
}

export default UserServices;
