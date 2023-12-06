import axios from "axios"

export const permDeleteArticle = async (id: string) => {
    const response = await axios.delete(`http://localhost:3001/articles/${id}`)
    return response.data
}