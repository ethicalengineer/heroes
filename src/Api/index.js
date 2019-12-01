import axios from 'axios';

export const api = {

    // Получить список всех героев [GET]
    getHeroesRequest: () => axios.get('/users/all'),

    // Обновляем информацию о герое [PUT]
    updateHeroRequest: hero => axios.put('/users', hero),

    // Получаем информацию о герое [GET]
    getHeroRequest: id => axios.get(`/users?id=${id}`),

    // Удаляем героя с выбранным ID [DELETE]
    deleteHeroRequest: id => axios.delete(`/users?id=${id}`)

}
