import axios from "axios"

export const publishArticle = async (id: string) => {
    const status = "published"
    const response = await axios.put(`http://localhost:3001/articles/${id}`, {status: status})
    console.log(response.data)
    return response.data
}