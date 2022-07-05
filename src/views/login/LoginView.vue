<template lang="">
    <div class="container">
        <div class="row justify-content-center mt-5">
        <div class="col-lg-4 col-md-6 col-sm-6 pt-5">
            <div class="card shadow text-black mt-5">
            <div class="card-title text-center border-bottom">
                <h2 class="p-3">Login</h2>
            </div>
            <div class="card-body">
                <form @submit="login">
                <div class="mb-4">
                    <label for="username" class="form-label">Username/Email</label>
                    <input type="text" class="form-control" id="username" v-model="username" />
                </div>
                <div class="mb-4">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" />
                </div>
                <div class="mb-4">
                    <input type="checkbox" class="form-check-input" id="remember" />
                    <label for="remember" class="form-label">Remember Me</label>
                </div>
                <div class="d-grid">
                    <button type="submit" class="btn text-light main-bg">Login</button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>  
</template>
<script>
    export default {
    data: () => ({
      username: '',
      password: '',
      error: null,
      success: false
    }),
    methods: {
      login: async function() {
        const auth = { username: this.username, password: this.password };
        // Correct username is 'foo' and password is 'bar'
        const url = 'http://localhost:8080/api/login';
        this.success = false;
        this.error = null;

        try {
          const res = await axios.get(url, { auth }).then(res => res.data);
          this.success = true;
        } catch (err) {
          this.error = err.message;
        }
      }
    },
    }
</script>
<style>
body{
   background: var(--bg-secondary) !important;
}

.main-bg {
  background: var(--bg-active) !important;
}

input:focus, button:focus {
  border: 1px solid var(--bg-active) !important;
  box-shadow: none !important;
}

.form-check-input:checked {
  background-color: var(--bg-active) !important;
  border-color: var(--bg-active) !important;
}

.card, .btn, input{
  border-radius:0 !important;
}

</style>
