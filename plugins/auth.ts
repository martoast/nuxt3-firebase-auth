export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        
        const nuxtApp  = useNuxtApp()

        console.log(nuxtApp.$auth)
    })
  })