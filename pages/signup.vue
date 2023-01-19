<template>
    <div class="container mt-3">
      <h1 class="mb-3">
          Sign up
      </h1>
      <form @submit.prevent="handleRegistration">
          <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Email</label>
              <input name="email" v-model="form.email" type="text" class="form-control" id="formGroupExampleInput" placeholder="Email">
              </div>
              <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">Password</label>
              <input name="password" v-model="form.password" type="text" class="form-control" id="formGroupExampleInput2" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary mb-3">Sign up</button>
      </form>
    </div>
  </template>
  
  <script setup>
  const router = useRouter()

  const form = reactive({
    email: "",
    password: ""
  })
  
  async function handleRegistration() {
    try {
        await createUser(form.email, form.password)
        router.push('/success')
    } catch (e) {
        console.error(e)
    }
  }
  </script>