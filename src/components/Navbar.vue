<template>
    <div class="pure-menu pure-menu-horizontal">
        <div class="container">
            <router-link :to="{ path: '/'}" class="pure-menu-heading pure-menu-link">
              Top Stories
            </router-link>
            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <router-link :to="{ path: '/newest'}" class="pure-menu-link">
                      Newest Stories
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
  name: 'Navbar',
};
</script>

<style type="text/css" scoped>
    .pure-menu {
        background-color: #E17842;
    }

    .pure-menu a {
        color: white;
    }
</style>
