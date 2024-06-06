import { IUser } from "../../contexts/User/interface";
import { api } from "../api";

export const userController = () => {
    async function get() {
        try {
            const response = await api.get("users");

        if (response.status === 200) {
            return response.data;
          }
        }catch (error){
					console.log(error);
					return [];
				}
        
    }

		async function getForId(id: number) {
			try {
					const response = await api.get(`users/${id}`);

			if (response.status === 200) {
					return response.data;
				}
			}catch (error){
				console.log(error);
				return [];
			}
			
	}

	async function post(data: IUser) {
		try {
				const response = await api.post(`users`, data);

		if (response.status === 200) {
				alert("Usuário criado com sucesso!")
				return response.data;
			}
		}catch (error){
			alert("Falha ao criar usuário")
			console.log(error);
			return [];
		}
		
	}

	async function patch(data: IUser) {
		try {
				const response = await api.patch(`users/update`, data);

		if (response.status === 200) {
				alert("Usuário atualizado com sucesso!")
				return response.data;
			}
		}catch (error){
			console.log(error);
			alert("Falha ao atualizar usuário.")
			return [];
		}
		
	}

return {get, getForId, post, patch};

};
