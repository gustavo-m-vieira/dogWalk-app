/**
 * Read the current active user.
 * @returns {LoginResponse}
 */
function getCurrentUser() {
  const user = localStorage.getItem("user");

  // se não encontrar user, redirecionar para a tela de login

  return JSON.parse(user);
}

function getToken() {
  return localStorage.getItem("token");
}

export { getCurrentUser, getToken };
