export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        const { $auth } = useNuxtApp()
        if(!$auth?.currentUser?.accessToken) {
            return navigateTo('/login')
        }
        else {
            console.log("Access Token:",$auth?.currentUser?.accessToken)
        }
    })
  })