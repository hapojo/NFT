<template>
    <div id="whole">
        <label for="btnHamb" class="showmenu">&#9776</label>
        <input type="checkbox" id="btnHamb">
        <aside id="showmenu">
            <p> <img src="../assets/image/logo.svg" alt="">
                <img src="../assets/image/xcrptme.svg" alt="">
            </p>

            <div class="first-link">
                <span>Market Place</span>
                <!-- <a href="/" class="active">
                    <img src="../assets/image/market.svg" alt="">
                    Market
                </a> -->
                <router-link to="/" class="router-link-active router-link-exact-active"> <img
                        src="../assets/image/market.svg" alt=""> Market</router-link>

                <!-- <a href="javascript:void(0)">
                    <img src="../assets/image/activebid.svg" alt="">
                    Active Bid
                </a> -->
                <router-link to="/active"><img src="../assets/image/activebid.svg" alt="">
                    Active
                    Bid</router-link>

                <a href="javascript:void(0)">
                    <img src="../assets/image/saved.svg" alt="">
                    Saved
                </a>

            </div>

            <div class="second-links">
                <span>Account</span>
                <a href="javascript:void(0)">
                    <img src="../assets/image/collection.svg" alt="">
                    Collection
                </a>
                <a href="javascript:void(0)">
                    <img src="../assets/image/wallets.svg" alt="">
                    Wallet
                </a>
                <a href="javascript:void(0)">
                    <img src="../assets/image/History.svg" alt="">
                    History
                </a>
            </div>

        </aside>
    </div>


</template>

<style>
@import './Sidebar.css';
</style>