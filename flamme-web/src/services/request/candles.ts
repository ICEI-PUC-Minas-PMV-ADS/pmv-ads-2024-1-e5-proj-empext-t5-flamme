import { IProduct } from "../../contexts/interface";
import { api } from "../api";

export const candlesController = () => {
  async function get() {
    try {
      // fazendo uma requisição REST - GET
      const response = await api.get("users/candles");

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async function getForId(id: number) {
    try {
      const response = await api.get(`users/candles/${id}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async function post(data: IProduct) {
    try {
      const response = await api.post(`users/candles/1`, data);
      if (response.status === 200) {
        response.data;
        return "Usuário criado com sucesso!";
      }
    } catch (error) {
      console.error(error);
      alert("Não foi possível alterar produto!");
      return false;
    }
  }

  async function patch(data: IProduct) {
    try {
      const response = await api.patch("users/candles/update", data);
      if (response.status === 200) {
        alert("Produto atualizado com sucesso!");
        return response.data;
      }
    } catch (error) {
      console.error(error);
      alert("Não foi possível alterar produto!");
      return false;
    }
  }

  async function del(id: number) {
    try {
      const response = await api.delete(`users/candles/${id}`);
      if (response.status === 200) {
        return "Produto removido com sucesso.";
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao tentar excluir produto. Tente novamente!");
      return false;
    }
  }

  return { get, getForId, post, patch, del };
};
