import { api } from "../api";

interface IAuth {
  email: string;
  password: string;
}

const auth = async (data: IAuth) => {
  try {
    const response = await api.get("auth");

    if (
      data.email === response.data[0].email &&
      data.password === response.data[0].password
    ) {
      localStorage.setItem("id", response.data[0].id);
      return response.data[0].id;
    }

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default auth;
