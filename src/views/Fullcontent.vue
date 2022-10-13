<script setup>
import Sidebar from '../components/Sidebar.vue'
import Top from '../components/Top.vue'
</script>

<template>

    <body>
        <div class="side-bar">
            <Sidebar />
        </div>

        <div class="right-bar">
            <div class="top-bar">
                <Top />
                <router-view />
            </div>
        </div>
    </body>

</template>

<style scoped>
body {
    background: #2A3266;
    padding-top: 10px;
    height: 100vh;
    display: flex;
    flex-direction: row;
}

.side-bar {
    width: 18%;
}

.right-bar {
    width: 80%;
    padding-top: 20px;
}

@media (max-width: 1507px) {
    body {
        /* flex-direction: column; */
    }

}
</style>
