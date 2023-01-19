<template>
    <div>
      <pre>
        {{auth.user}}
      </pre>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    middleware: ['auth']
})

const auth = useFirebaseAuth()


</script>