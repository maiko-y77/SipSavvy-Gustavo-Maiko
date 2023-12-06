import axios from "axios"

export const sendArticleToDrafts = async (id: string) => {
    const status = "draft"
    const response = await axios.put(`http://localhost:3001/articles/${id}`, {status: status})
    console.log(response.data)
    return response.data
}