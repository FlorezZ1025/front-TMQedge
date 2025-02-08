export const csrfToken = (function() {
    const value = `${document.cookie}`;
    const parts = value.split(`; csrf_access_token=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null; // Si no se encuentra la cookie, devuelve null
  })();