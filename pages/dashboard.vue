<template>
    <div>
      <div v-if="firebaseUser">
        <button class="button" @click="signOut" v-if="firebaseUser">Sign out</button>
      <client-only>
        <pre
          >{{ firebaseUser }}
        </pre
        >
      </client-only>
      </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ['auth']
})

const router = useRouter()

const firebaseUser = useFirebaseUser();

const signOut = async () => {
  await signOutUser();
  router.push('/login')
};



</script>