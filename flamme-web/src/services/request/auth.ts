import { api } from "../api";

interface IAuth {
  email: string;
  password: string;
}

export const auth = async (data: IAuth) => {
  try {
    const response = await api.post("auth", {
      email: data.email,
      password: data.password,
    });

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      return response.data.id;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
