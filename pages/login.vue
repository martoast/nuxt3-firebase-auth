<template>
    <div class="container mt-3">
      <h1>
          Nuxt3 Firebase Authentication
      </h1>
      <form @submit.prevent="handleAuth">
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Email</label>
              <input name="email" v-model="creds.email" type="text" class="form-control" id="formGroupExampleInput" placeholder="Email">
              </div>
              <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">Password</label>
              <input name="password" v-model="creds.password" type="text" class="form-control" id="formGroupExampleInput2" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary mb-3">Log in</button>
      </form>
    </div>
  </template>
  
  <script setup>
  const { authUser } = useFirebaseAuth()
  const router = useRouter()

  const creds = reactive({
    email: "",
    password: ""
  })
  
  async function handleAuth() {
    try {
        await authUser(creds.email, creds.password)
        router.push('/dashboard')
    } catch (e) {
        console.error(e)
    }
    
  }
  </script>