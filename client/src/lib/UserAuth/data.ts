export const getUser = async (email: any) => {
    const response = await fetch(`http://localhost:3001/auth/login/${email}`)
    return response.json()
}
