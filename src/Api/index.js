// Получить список всех героев [GET]
export const getHeroesRequest = () => fetch('/users/all').then(response => response.json())

// Обновляем информацию о герое [PUT]
export const updateHeroRequest = hero => fetch('/users', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(hero)})
    .then(response => response.json())

// Получаем информацию о герое [GET]
export const getHeroRequest = id => fetch(`/users?id=${id}`).then(response => response.json())

// Удаляем героя с выбранным ID [DELETE]
export const deleteHeroRequest = id => fetch(`/users?id=${id}`, {method: 'DELETE'}).then(response => {
    if (response.status === 400) {
        throw new Error();
    } else {
        return response.json
    }
})