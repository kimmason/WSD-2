
export const tryLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(user => user.id === email && user.password === password);

        if (user) {
            localStorage.setItem('TMDb-Key', user.password);
            resolve(user);
        } else {
            reject('Login failed');
        }
    });
};
