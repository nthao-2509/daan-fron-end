import axios from "axios";

function getQueryHelper(url: string) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Platform: "WEB",
      },
    })
      .then((response: any) => {
        resolve(response.data.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}

function postQueryHelper(url: string, parameters: any) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url,
      data: parameters,
    })
      .then((response: any) => {
        resolve(response.data.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}

function postWithAuthorization(
  url: string,
  accessToken: string,
  parameters?: any
) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Platform: "WEB",
        Authorization: `Basic ${accessToken}`,
      },
      data: parameters,
    })
      .then((response: any) => {
        resolve(response?.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}
function postWithAuthorizationAndAdmin(
  url: string,
  accessToken: string,
  parameters?: any
) {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Platform: "WEB",
        Authorization: `Basic ${accessToken}`,
      },
      data: {...parameters, role: 'admin'},
    })
      .then((response: any) => {
        resolve(response?.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}

function Authorization(url: string, accessToken: string) {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Platform: "WEB",
        Authorization: `Basic ${accessToken}`,
      },
    })
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error: any) => {
        reject(error);
      });
  });
}

export {
  getQueryHelper,
  postQueryHelper,
  postWithAuthorization,
  Authorization,
  postWithAuthorizationAndAdmin
};
