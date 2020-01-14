<template>
    <div @click="login">
      登录
    </div>
</template>

<script>
    export default {
        name: "login",
      methods: {
        login () {
          this.$router.push({ name: 'workbenches', params: { userId: 1 }})
        }
      }
    }
</script>

<style scoped>

</style>
