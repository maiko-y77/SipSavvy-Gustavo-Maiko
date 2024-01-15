export const getUser = async (email: string) => {
    const response = await fetch(`http://localhost:3001/auth/login/${email}`)
    return response.json()
}
    