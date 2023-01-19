export default defineNuxtRouteMiddleware((to) => {
    const auth = useFirebaseAuth()

    if (!auth.user.value && to.path === '/dashboard') {
        navigateTo('/login')

    }
})