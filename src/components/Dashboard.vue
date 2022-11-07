<template>
    <div class="market">
        <div class="discovery-section">
            <div class="border-dis">
                <div class="dis-text">
                    Discover, <br>
                    Buy and Sell <br>
                    Your own NFT Now
                </div>

                <div>
                    <button class="button-1" role="button">Discover Now</button>
                    <button class="button-2" role="button">Create Yours</button>
                </div>
                <div class="dis-img1">
                    <img src="../assets/image/discoverT.svg" alt="">
                </div>

                <div class="dis-img2">
                    <img src="../assets/image/discover.svg" alt="">
                </div>
            </div>


            <div class="container HotArt">
                <div class="Hot-bid">Hot bid</div>
                <div class="Art-All">

                    <ul>
                        <li :class="selectedCategory == 'all' ? 'activecat' : 'inactivecat'"
                            @click="categoryChange('all')">
                            All
                        </li>
                        <li :class="selectedCategory == 'art' ? 'activecat' : 'inactivecat'"
                            @click="categoryChange('art')">
                            Art
                        </li>
                        <li :class="selectedCategory == 'music' ? 'activecat' : 'inactivecat'"
                            @click="categoryChange('music')">
                            Music
                        </li>
                        <li :class="selectedCategory == 'sport' ? 'activecat' : 'inactivecat'"
                            @click="categoryChange('sport')">
                            Sport
                        </li>
                        <li :class="selectedCategory == 'entertainment' ? 'activecat' : 'inactivecat'"
                            @click="categoryChange('entertainment')">
                            Entertainment
                        </li>
                        <li :class="selectedCategory == 'health' ? 'activecat' : 'inactivecat'"
                            @click="categoryChange('health')">
                            Health
                        </li>
                        <li :class="selectedCategory == 'fashion' ? 'activecat' : 'inactivecat'"
                            @click="categoryChange('fashion')">
                            Fashion
                        </li>
                    </ul>
                </div>
            </div>


            <div class="container card-scroll">
                <div class="row">

                    <div class="col-3" v-for="data in selectedData">
                        <div class="brents">
                            <div><img :src=data.image alt=""></div>
                            <div style="justify-content: space-between; display: flex;">
                                <div>{{ data.title }}</div>
                                <div>by <span style="color: #F4CF08;">@{{ data.creator }}</span></div>
                            </div>
                            <div style="justify-content: space-between; display: flex;">
                                <div><img src="../assets/image/icon.svg" alt="">
                                    <span style="color: #F61872; margin-left: 5px;">ETH</span>
                                </div>
                                <div>
                                    {{ data.time }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        efnkingibbfuo;idnhb ikv bbheuifhbvvkkkbbkfikfclcndkefwdkdklqjkmljkwkjjkwkqjsjk
                    </div>

                </div>
            </div>




        </div>



        <div class="paint-section">
            <div class="border-pa">
            </div>
            <div style="display: flex; justify-content:space-between; margin-top: 5px; margin-bottom: 5px;">
                <div>Pain Artwork</div>
                <div>sat, 27 jun</div>
            </div>
            <div>
                <img src="../assets/image/min.svg" style="margin-right: 5px;" alt="">
                by <span style="color: #F9E10A;"> Mugagbe</span>
                <p>Once you get pain, you can not connect with everyone and get major privileges from them. Cure your
                    pain and make a gain</p>
            </div>
            <div class="accor-list">
                <ul>
                    <li>
                        <input type="checkbox" checked>
                        <i></i>
                        <span>Property</span>
                        <p>This page was written in HTML and CSS.</p>
                    </li>
                    <li>
                        <input type="checkbox" checked>
                        <i></i>
                        <span>Contract Address</span>
                        <p>Using the sibling and checked </p>
                    </li>
                </ul>
            </div>
            <div class="current">
                <h5>Current Bid</h5>
                <div style="display: flex; justify-content:space-between">
                    <p style="font-size: 22px;">32.65 ETH</p>
                    <p>$96,653.09</p>
                </div>
            </div>

            <div class="HMS">
                <div class="row">
                    <div class="col-4">
                        <div class="hour">
                            <h3>35</h3>
                            <span>Hours</span>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="minute">
                            <h3>05</h3>
                            <span>Minutes</span>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="second">
                            <h3>02</h3>
                            <span>Seconds</span>
                        </div>
                    </div>

                </div>
            </div>


            <div style="padding-top: 20px; text-align: center;">
                <button class="button-2" role="button" style="margin-right: 60px;">Full Now</button>
                <button class="button-1" role="button">Bid Now</button>
            </div>

        </div>

    </div>

    <router-view />
</template>

<script>
import Brent from '../assets/image/Brent.svg'
import Mamon from '../assets/image/mamon.svg'
import Brittle from '../assets/image/Brittle.svg'

export default {

    mounted() {
        this.selectedData = this.allData
        this.selectedCategory = "all"
    },
    data() {
        return {
            // art music sport entertainment health fashion
            allData: [
                { title: "Brents", creator: "femistic", time: "09h 35m 09s", image: Brent, category: "entertainment" },
                { title: "Mamon", creator: "manxo", time: "20h 45m 09s", image: Mamon, category: "fashion" },
                { title: "Brittle", creator: "ernex", time: "10h 15m 17s", image: Brittle, category: "art" },

                { title: "Brittle", creator: "ernex", time: "10h 15m 17s", image: Brittle, category: "music" },
                { title: "Brittle", creator: "ernex", time: "10h 15m 17s", image: Brittle, category: "sport" },
                { title: "Brittle", creator: "ernex", time: "10h 15m 17s", image: Brittle, category: "music" },
                { title: "Brittle", creator: "ernex", time: "10h 15m 17s", image: Brittle, category: "health" },
                { title: "Brittle", creator: "ernex", time: "10h 15m 17s", image: Brittle, category: "entertainment" },
                { title: "Brittle", creator: "ernex", time: "10h 15m 17s", image: Brittle, category: "health" },
                { title: "Brittle", creator: "ernex", time: "10h 15m 17s", image: Brittle, category: "fashion" },

            ],
            selectedData: [],
            selectedCategory: "",
        }
    },
    methods: {
        categoryChange(category) {
            this.selectedCategory = category
            if (category == "all") {
                this.selectedData = this.allData
            }
            else {
                this.selectedData = this.allData.filter(x => x.category == category)
            }

        }

    }
}
</script>

<style>
@import './Dashboard.css';
</style>
