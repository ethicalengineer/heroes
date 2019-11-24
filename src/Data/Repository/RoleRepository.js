/**
 * Репозиторий ролей
 */
class RoleRepository {

    addRole(role) {

    }

    /**
     * Получить роль
     * @param id идентификатор роли
     * @returns {Promise<Response>}
     */
    getRole(id) {
        return fetch(`/roles?id=${id}`)
            .then(response => response.json());
    }

    /**
     * Получить роли
     * @returns {Promise<Response>}
     */
    getRoles() {
        return fetch('/roles/all')
            .then(response => response.json())
    }

    /**
     * Обновить роль
     * @param role данные роли
     * @returns {Promise<Response>}
     */
    updateRole(role) {
        return fetch('/roles', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(role)
        })
            .then(response => response.json());
    }

    deleteRole() {

    }

}

export default new RoleRepository();