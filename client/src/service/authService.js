import api from '../utils/api'


export async function loginUser(user) {
    const response = await api.post(`/login`, user);

    return response;
}

export async function logoutUser() {
    const response = await api.post(`/logout`);

    return response;
}

export async function createUser(user) {
    const response = await api.post(`/user`, user);

    return response;
}

export async function updateUser(user) {
    const response = await api.patch(`/user`, user);

    return response;
}

export async function deleteUser() {
    const response = await api.delete(`/user`);

    return response;
}

export async function getUser() {
    const response = await api.get(`/user`);

    return response;
}
