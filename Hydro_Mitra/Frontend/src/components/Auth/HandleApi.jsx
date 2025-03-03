import axios from "axios";
// import { url } from "../../env_var.env";

const apiUrl = import.meta.env.VITE_API_URL;

const signUpUser = async (
  org_name,
  name,
  lastName,
  phoneNumber,
  email,
  password,
  state,
  city,
  pincode,
  landmark,
  selectedRole
) => {
  try {
    const response =
      selectedRole === "Admin"
        ? await axios.post(
            `${apiUrl}/admin/signup`,
            {
              org_name,
              name,
              lastName,
              phoneNumber,
              email,
              password,
              state,
              city,
              pincode,
              landmark,
            },
            { withCredentials: true }
          )
        : await axios.post(
            `${apiUrl}/staff/signup`,
            {
              org_name,
              name,
              lastName,
              phoneNumber,
              email,
              password,
            },
            { withCredentials: true }
          );

    const data = await response.data;
    if (response.status == 200) {
      alert("User Added");
    }
    return data;
  } catch (error) {
    console.log("Error signingup in api: " + error);
  }
};

const loginUser = async (email, password, selectedRole) => {
  try {
    const response =
      selectedRole === "Admin"
        ? await axios.post(
            `${apiUrl}/admin/login`,
            { email, password },
            { withCredentials: true }
          )
        : await axios.post(
            `${apiUrl}/staff/login`,
            { email, password },
            { withCredentials: true }
          );

    const data = await response.data;

    return data;
  } catch (error) {
    console.log("Error logging in api: " + error.response.status);
    if (error.response.status == 401) {
      alert(" Wrong Credentials");
    }
  }
};

const checkAuthStatus = async (role) => {
  try {
    const response =
      role == "admin"
        ? await axios.get(`${apiUrl}/admin/getUser`, {
            withCredentials: true,
          })
        : await axios.get(`${apiUrl}/staff/getUser`, {
            withCredentials: true,
          });
    console.log(response);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("Error auth api: " + error);
  }
};

const logoutUser = async () => {
  try {
    const res = await axios.get(`${apiUrl}/logout`, { withCredentials: true });
    const data = await res.data;
    return data;
  } catch (error) {
    console.log("Error logout api: " + error);
  }
};

export { signUpUser, loginUser, checkAuthStatus, logoutUser };
