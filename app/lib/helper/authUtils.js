export const isAuthenticated = () => {
    const auth = process.env.NEXT_PUBLIC_AUTH_TOKEN;
    const storedUser = JSON.parse(localStorage.getItem(auth));
    const user = storedUser.user.role === "authenticated" ? storedUser.user : null;
    return user ? true : false;
    };