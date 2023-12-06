import axios from "axios"

export const deleteArticle = async (id: string) => {
    const status = "deleted"
    const response = await axios.put(`http://localhost:3001/articles/${id}`, {status: status})
    console.log(response.data)
    return response.data
}