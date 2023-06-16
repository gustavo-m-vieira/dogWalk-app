/**
 * Read the current active user.
 * @returns {LoginResponse}
 */
function getCurrentUser() {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
}

export {
    getCurrentUser
}
