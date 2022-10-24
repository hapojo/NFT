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
                        <li>All</li>
                        <li>Art</li>
                        <li>Music</li>
                        <li>Sport</li>
                        <li>Entertainment</li>
                        <li>Health</li>
                        <li>Fashion</li>
                    </ul>
                </div>
            </div>


            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="brents">
                            <div><img src="../assets/image/Brent.svg" alt=""></div>
                            <div style="justify-content: space-between; display: flex;">
                                <div>Brents</div>
                                <div>by <span style="color: #F4CF08;">@femistic</span></div>
                            </div>
                            <div style="justify-content: space-between; display: flex;">
                                <div><img src="../assets/image/icon.svg" alt="">
                                    <span style="color: #F61872; margin-left: 5px;">ETH</span>
                                </div>
                                <div>
                                    09h 35m 09s
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-3">
                        <div class="brents">
                            <div><img src="../assets/image/mamon.svg" alt=""></div>
                            <div style="justify-content: space-between; display: flex;">
                                <div>Mamon</div>
                                <div>by <span style="color: #F4CF08;">@manxo</span></div>
                            </div>
                            <div style="justify-content: space-between; display: flex;">
                                <div><img src="../assets/image/icon.svg" alt="">
                                    <span style="color: #F61872; margin-left: 5px;">ETH</span>
                                </div>
                                <div>
                                    09h 35m 09s
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-3">
                        <div class="brents">
                            <div><img src="../assets/image/Brittle.svg" alt=""></div>
                            <div style="justify-content: space-between; display: flex;">
                                <div>Brittle</div>
                                <div>by <span style="color: #F4CF08;">@ernex</span></div>
                            </div>
                            <div style="justify-content: space-between; display: flex;">
                                <div><img src="../assets/image/icon.svg" alt="">
                                    <span style="color: #F61872; margin-left: 5px;">ETH</span>
                                </div>
                                <div>
                                    09h 35m 09s
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-3">
                        <div class="brents">
                            <div><img src="../assets/image/Rex.svg" alt=""></div>
                            <div style="justify-content: space-between; display: flex;">
                                <div>Rex</div>
                                <div>by <span style="color: #F4CF08;">@Eriang</span></div>
                            </div>
                            <div style="justify-content: space-between; display: flex;">
                                <div><img src="../assets/image/icon.svg" alt="">
                                    <span style="color: #F61872; margin-left: 5px;">ETH</span>
                                </div>
                                <div>
                                    09h 35m 09s
                                </div>
                            </div>
                        </div>
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
                    <p style="font-size: 20px;">32.65 ETH</p>
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
                </div>
            </div>
        </div>

    </div>

    <router-view />
</template>

<style>
@import './Dashboard.css';
</style>

<script>

</script>