/**
 * Sistema de Autenticación - PAE Barroblanco
 * Maneja la sesión del usuario, roles y permisos
 */

const AUTH_SYSTEM = {
    // Clave para localStorage
    STORAGE_KEY: 'pae_user_session',

    // Inicializar sistema
    init: function () {
        console.log('Sistema de autenticación inicializado');
    },

    // Verificar si hay sesión activa
    checkSession: function () {
        const user = this.getCurrentUser();
        const currentPath = window.location.pathname;
        const isLoginPage = currentPath.includes('login.html');

        if (!user && !isLoginPage) {
            // Si no hay usuario y no estamos en login, redirigir
            window.location.href = 'login.html';
        } else if (user && isLoginPage) {
            // Si hay usuario y estamos en login, ir al dashboard
            window.location.href = 'index.html';
        }
    },

    // Obtener usuario actual
    getCurrentUser: function () {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error al leer sesión:', error);
            return null;
        }
    },

    // Iniciar sesión (simulado para este ejemplo, debería validar contra backend/base de datos)
    login: function (username, password) {
        // Simulación de usuarios
        // En producción esto debe validar contra una base de datos real
        const users = [
            {
                id: 1,
                username: 'admin@barroblanco.edu.co',
                password: 'admin123',
                name: 'Administrador PAE',
                role: 'admin',
                avatar: 'https://ui-avatars.com/api/?name=Admin+PAE&background=0D8ABC&color=fff'
            },
            {
                id: 2,
                username: 'coordinador@barroblanco.edu.co',
                password: 'coord123',
                name: 'Coordinador PAE',
                role: 'coordinador',
                avatar: 'https://ui-avatars.com/api/?name=Coordinador+PAE&background=10b981&color=fff'
            },
            {
                id: 3,
                username: 'docente1@barroblanco.edu.co',
                password: 'doc123',
                name: 'Docente Prueba',
                role: 'docente',
                avatar: 'https://ui-avatars.com/api/?name=Docente+Prueba&background=8b5cf6&color=fff'
            },
            {
                id: 4,
                username: 'estudiante@barroblanco.edu.co',
                password: 'est123',
                name: 'Estudiante Prueba',
                role: 'estudiante',
                avatar: 'https://ui-avatars.com/api/?name=Estudiante+Prueba&background=f59e0b&color=fff'
            }
        ];

        // Login.html envía el email como primer argumento
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Guardar sesión (sin password)
            const sessionUser = { ...user };
            delete sessionUser.password;
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(sessionUser));
            return { success: true, user: sessionUser };
        }

        return { success: false, message: 'Credenciales inválidas' };
    },

    // Cerrar sesión
    logout: function () {
        localStorage.removeItem(this.STORAGE_KEY);
        window.location.href = 'login.html';
    },

    // Obtener nombre legible del rol
    getRoleName: function (role) {
        const roles = {
            'admin': 'Administrador',
            'docente': 'Docente',
            'rector': 'Rectoría',
            'secretaria': 'Secretaría'
        };
        return roles[role] || role;
    },

    // Verificar permisos (ejemplo simple)
    hasPermission: function (permission) {
        const user = this.getCurrentUser();
        if (!user) return false;

        if (user.role === 'admin') return true;

        // Definir permisos por rol aquí si es necesario
        return false;
    }
};

// Exportar para uso global
window.AUTH_SYSTEM = AUTH_SYSTEM;
