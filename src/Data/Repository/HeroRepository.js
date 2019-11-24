/**
 * Репозиторий героев
 */
class HeroRepository {

    addHero({
                surname = null,
                name = null,
                patronymic = null,
                phone,
                email,
                roles = [],
                roleIds = [],
            }) {

    }

    /**
     * Получить героя
     * @param id идентификатор героя
     * @returns {Promise<Response>}
     */
    getHero(id) {
        return fetch(`/users?id=${id}`)
            .then(response => response.json());
    }

    /**
     * Получить героев
     * @returns {Promise<Response>}
     */
    getHeroes() {
        return fetch('/users/all')
            .then(response => response.json())
    }

    /**
     * Обновить героя
     * @param hero данные героя
     * @returns {Promise<Response>}
     */
    updateHero(hero) {
        if (hero.roles) {
            hero.roleIds = hero.roles.map(role => role.id)
        }
        return fetch('/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(hero)
        })
            .then(response => response.json());
    }

    /**
     * Удалить героя
     * @param id идентификатор героя
     * @returns {Promise<Response>}
     */
    deleteHero(id) {
        return fetch(`/users?id=${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
    }

}

export default new HeroRepository();