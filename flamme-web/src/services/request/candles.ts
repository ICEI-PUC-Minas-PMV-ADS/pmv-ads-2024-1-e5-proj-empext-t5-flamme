import { IProduct } from "../../contexts/interface";
import { IOrder } from "../../screens/homeBudgetAdm";
import { api } from "../api";

export const candlesController = () => {
  async function get() {
    try {
      // fazendo uma requisição REST - GET
      const response = await api.get("candles");

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
      const response = await api.get(`candles/${id}`);
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
      const response = await api.post(`candles`, data);
      if (response.status === 200) {
        response.data;
        return "Produto criado com sucesso!";
      }
    } catch (error: any) {
      if (error.request.status === 500 || error.code == "ERR_BAD_RESPONSE") {
        return "Produto criado com sucesso!";
      }
      console.error(error);
      alert("Não foi possível criar produto!");
      return false;
    }
  }

  async function patch(data: IProduct) {
    try {
      const response = await api.patch(`candles/${data.id}`, data);
      if (response.status === 200) {
        alert("Produto atualizado com sucesso!");
        return response.data;
      }
    } catch (error: any) {
      if (error.request.status === 500 || error.code == "ERR_BAD_RESPONSE") {
        return "Produto atualizado com sucesso!";
      }
      console.error(error);
      alert("Não foi possível alterar produto!");
      return false;
    }
  }

  async function del(id: number) {
    try {
      const response = await api.delete(`candles/${id}`);
      if (response.status === 200) {
        return "Produto removido com sucesso.";
      }
    } catch (error: any) {
      if (error.request.status === 500 || error.code == "ERR_BAD_RESPONSE") {
        return "Produto removido com sucesso.";
      }
      console.error(error);
      alert("Erro ao tentar excluir produto. Tente novamente!");
      return false;
    }
  }

  async function orders(data: any) {
    try {
      const response = await api.post(`/orders`, data);
      if (response.status === 200) {
        return "Ordem cadastrada com sucesso.";
      }
    } catch (error: any) {
      if (error.request.status === 500 || error.code == "ERR_BAD_RESPONSE") {
        return "Ordem cadastrada com sucesso!";
      }
      console.error(error);
      alert("Erro ao tentar cadastrar ordem. Tente novamente!");
      return false;
    }
  }

  async function getOrders() {
    try {
      const response = await api.get(`orders`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
      console.log("Erro ao tentar buscar ordens. Tente novamente!");
      return [] as Array<IOrder>;
    }
  }

  return { get, getForId, post, patch, del, orders, getOrders };
};
