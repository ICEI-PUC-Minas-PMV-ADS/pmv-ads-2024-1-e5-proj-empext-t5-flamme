import { api } from "../api";

interface IAuth {
  email: string;
  password: string;
}

const auth = async (data: IAuth) => {
  try {
    const response = await api.post("auth", {
      email: data.email,
      password: data.password,
    });

    if (response.status === 200) {
      console.log(response.data)
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("id", response.data.userId);
      return response.data.userId;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default auth;