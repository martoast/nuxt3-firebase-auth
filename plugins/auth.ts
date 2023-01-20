export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        
        const nuxtApp  = useNuxtApp()

        console.log(nuxtApp.$auth)

        // if(!nuxtApp.$auth?.currentUser?.uid) {
        //     return navigateTo('/login')
        // }
    })
  })