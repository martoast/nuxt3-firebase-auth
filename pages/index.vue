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

const firebaseUser = useFirebaseUser();

const signOut = async () => {
await signOutUser();
};



</script>