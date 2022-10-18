<template>
    <div class="top-content">
        <div class="search">
            <input type="text" name="search" placeholder="Search Items">
        </div>

        <div class="button b2" id="button-10">
            <input type="checkbox" class="checkbox">
            <div class="knobs">
                <span>Users</span>
            </div>
            <div class="layer"></div>
        </div>

        <div>
            <div class="notification">
                <span><img src="../assets/image/notification.svg" alt=""></span>
            </div>

            <div class="profile">
                <span><img src="../assets/image/profile.svg" alt=""></span>
            </div>
        </div>

    </div>


</template>


<style>
.top-content {
    display: flex;
    justify-content: space-between;
    padding-right: 40px;
}

.search input {
    width: 100%;
    height: 5vh;
    color: #FFFFFF !important;
    border: 2px solid #595D7C;
    border-radius: 100px;
    font-size: 16px;
    background-color: #595D7C;
    background-image: url('../assets/image/search.svg');
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
}

::placeholder {
    color: #FFFFFF;
}

.search input:focus {
    background-color: #595D7C;
    border: #595D7C;
}


.knobs,
.layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.button {
    position: relative;
    width: 17%;
    height: 5vh;
    overflow: hidden;
    margin-left: 300px;
}

.button.r,
.button.r .layer {
    border-radius: 100px;
}

.button.b2 {
    border-radius: 100px;
}

.checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
}

.knobs {
    z-index: 2;
}

.layer {
    width: 100%;
    background-color: #C4C4C4;
    transition: 0.3s ease all;
    z-index: 1;
}

/* Button 10 */
#button-10 .knobs:before,
#button-10 .knobs:after,
#button-10 .knobs span {
    position: absolute;
    top: 4px;
    width: 50%;
    height: 4vh;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 100px;
    transition: 0.3s ease all;
}

#button-10 .knobs:before {
    content: '';
    left: 4px;
    background-color: #22295A;
}

#button-10 .knobs:after {
    content: 'Customers';
    right: 4px;
    color: #FFFFFF;
}

#button-10 .knobs span {
    display: inline-block;
    left: 4px;
    color: #FFFFFF;
    z-index: 1;
}

#button-10 .checkbox:checked+.knobs span {
    color: #FFFFFF;
}

#button-10 .checkbox:checked+.knobs:before {
    left: 95px;
    background-color: #22295A;
}

#button-10 .checkbox:checked+.knobs:after {
    color: #FFFFFF;
}

#button-10 .checkbox:checked~.layer {
    background-color: #C4C4C4;
}

.notification {
    background-color: #777B95;
    color: white;
    padding: 7px 10px;
    margin-right: 10px;
    position: relative;
    display: inline-block;
    width: 2.5vw;
    height: 5vh;
    border-radius: 100px;
}

.notification:hover {
    background: #777B95;
}

.profile {
    padding: 5px 5px;
    position: relative;
    display: inline-block;
    border-radius: 100px;
    width: 2.5vw;
    height: 5vh;
}

@media (max-width: 999px) {
    .top-content {
        display: none;
    }

}
</style>