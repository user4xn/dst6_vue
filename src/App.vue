<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
:root {
    --bg-primary: #41444b;
    --bg-secondary: #52575d;
    --bg-active: #fddb3a;
    --cl-text: #f6f4e6;
}  

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", "robotoregular", sans-serif;
}

body {
    min-height: 100vh;
    background: var(--bg-primary) !important;
}
</style>
