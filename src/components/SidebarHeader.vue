<template lang="">
    <div class="col-md-12 sticky-md-top py-2 bg-nav-secondary d-none d-lg-block text-end p-body">
        <div class="row">
            <div class="col d-flex align-items-center">
                <div class="w-100 d-flex align-items-center justify-content-start">
                    <img class="top-icon me-5" src="@/assets/logo_sar.png" alt="logo sar">
                </div>
            </div>
            <div class="col d-flex align-items-center">
                <div class="w-100 d-flex align-items-center justify-content-end">
                    <span class="fw-bold">Hi, Admin</span>
                    <vue-feather class="ms-2 bg-light text-secondary p-2 fs-3 rounded-circle" type="user" size="20px"></vue-feather>
                    <vue-feather class="ms-2 bg-dark text-light text-secondary p-2 fs-3 rounded-circle" type="github" size="20px"></vue-feather>
                    <vue-feather class="ms-2 bg-info text-light text-secondary p-2 fs-3 rounded-circle" type="twitter" size="20px"></vue-feather>
                    <vue-feather class="ms-2 btn btn-warning p-2 text-white fs-3 rounded-circle" type="settings" size="20px"></vue-feather>
                </div>
            </div>
        </div>
    </div> 
    <header>
        <div class="toggle">
            <vue-feather type="menu" size="20px"></vue-feather>
        </div>
        <h3>Surya Abadi Raya</h3>
        <router-link to="/">
            <span class="icon pt-2"><vue-feather type="user" size="20px"></vue-feather></span>
        </router-link>
    </header>
    <nav id="sidebar">
        <ul class="p-0">
            <li>
                <a class="toggle">
                    <span class="icon pt-1"><vue-feather type="menu" size="20px"></vue-feather></span>
                    <span class="title fw-bold">Menu</span>
                </a>
            </li>
            <li>
                <router-link to="/dashboard">
                    <span class="icon pt-1"><vue-feather type="home" size="20px"></vue-feather></span>
                    <span class="title fw-bold">Dashboard</span>
                </router-link>
            </li>
            <li>
                <router-link to="" data-bs-toggle="collapse" data-bs-target="#collapseData" aria-expanded="false" aria-controls="collapseData">
                    <span class="icon pt-1"><vue-feather type="database" size="20px"></vue-feather></span>
                    <span class="title fw-bold">Master Data</span>
                </router-link>
            </li>
            <div class="collapse text-start" id="collapseData">
                <li>
                    <router-link to="/master_data/student">
                        <span class="icon pt-1"><vue-feather type="more-horizontal" size="20px"></vue-feather></span>
                        <span class="title fw-bold">Intership Student</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <span class="icon pt-1"><vue-feather type="more-horizontal" size="20px"></vue-feather></span>
                        <span class="title fw-bold">Online Registrar</span>
                    </router-link>
                </li>
            </div>
            <li>
                <router-link to="" data-bs-toggle="collapse" data-bs-target="#collapsePrivacy" aria-expanded="false" aria-controls="collapsePrivacy">
                    <span class="icon pt-1"><vue-feather type="lock" size="20px"></vue-feather></span>
                    <span class="title fw-bold">Privacy</span>
                </router-link>
            </li>
            <div class="collapse text-start" id="collapsePrivacy">
                <li>
                    <router-link to="/">
                        <span class="icon pt-1"><vue-feather type="more-horizontal" size="20px"></vue-feather></span>
                        <span class="title fw-bold">Client</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <span class="icon pt-1"><vue-feather type="more-horizontal" size="20px"></vue-feather></span>
                        <span class="title fw-bold">Company Legal</span>
                    </router-link>
                </li>
            </div>
            <li>
                <router-link to="/">
                    <span class="icon pt-1"><vue-feather type="log-out" size="20px"></vue-feather></span>
                    <span class="title fw-bold">Sign Out</span>
                </router-link>
            </li>
            <li>
                <router-link to="/about">
                    <span class="icon pt-1"><vue-feather type="alert-circle" size="20px"></vue-feather></span>
                    <span class="title fw-bold">About</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'SidebarHeader',
    mounted() {
    var getSidebar = document.querySelector('nav');
    var getToggle = document.getElementsByClassName('toggle');
    for (var i = 0; i < getToggle.length; i++) {
        getToggle[i].addEventListener('click', function () {
            getSidebar.classList.toggle('active');
        });
    }
  }
}
</script>
<style>
nav[id="sidebar"] {
    position: fixed;
    width: 60px;
    height: 100%;
    background: var(--bg-secondary);
    transition: .5s;
    overflow: hidden;
    z-index: 999;
}

.bg-nav-secondary {
    background: var(--bg-secondary) !important;
    border-bottom: 3px solid var(--bg-primary) !important;
}

.bg-nav-active {
    background: var(--bg-active); 
    border-bottom: 3px solid var(--bg-primary);
}

.text-nav-active {
    color: var(--bg-active); 
}

.text-nav-secondary {
    color: var(--bg-secondary); 
}

.bg-dark-chart{
    background: #424242;
}

.p-body{
    padding: 0 6.5rem 0 6.5rem;
}

.top-icon{
    width: 100px;
}

nav[id="sidebar"].active {
    width: 300px;
}

/* nav:hover {
    width: 300px;
} */

nav[id="sidebar"] ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

nav[id="sidebar"] ul li {
    list-style: none;
    width: 100%;
    position: relative;

}

nav[id="sidebar"] ul li a:hover {
    color: var(--bg-primary);
}

nav[id="sidebar"] ul li:hover a::before {
    background-color: var(--bg-active);
    width: 100%;
}

nav[id="sidebar"] ul li a {
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--cl-text);
    transition: .2s;
}

nav[id="sidebar"] ul li a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transition: .2s;
}

nav[id="sidebar"] ul li a .icon {
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
}

nav[id="sidebar"] ul li a .title {
    position: relative;
    font-size: .85em;
}

nav[id="sidebar"] ul li a .icon * {
    font-size: 1.1em;
}

nav[id="sidebar"] ul li a.toggle {
    border-bottom: 3px solid var(--bg-primary);
}

.toggle {
    cursor: pointer;
}

header {
    display: none;
}

@media (max-width: 768px) {
    header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        background: var(--bg-secondary);
        color: var(--cl-text);
    }

    header a {
        color: var(--cl-text)
    }

    nav[id="sidebar"] {
        left: -60px;
    }

    nav[id="sidebar"].active {
        left: 0;
        width: 100%;
    }

    nav[id="sidebar"] ul li a.toggle {
        display: none;
    }
} 
</style>