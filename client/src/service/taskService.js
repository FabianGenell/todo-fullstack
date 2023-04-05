import api from '../utils/api'

export async function getTasks(params = {}) {
    const response = await api.get('/tasks', { params })

    return response;
}

export async function getTask(id) {
    const response = await api.get(`/task/${id}`);

    return response;
}

export async function deleteTask(id) {
    const response = await api.delete(`/task/${id}`);
    return response;
}

export async function createTask(task) {
    const response = await api.post(`/task`, task);

    return response;
}

export async function updateTask(id, task) {
    const response = await api.patch(`/task/${id}`, task);

    return response;
}

