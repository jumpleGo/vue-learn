<template>
<section class="">
    <div class="top_block">
        <div class="top_block_main_title">Проведите оплату</div>
        <!--  <div class="top_block_main_menu"><img class="top_block_main_menu--img" src="images/menu.png" alt=""></div> -->
    </div>
    <div class="pay_block">
        <div class="pay_block_man_info">

            <div class="pay_block_man_info_pay">
                <img class="pay_block_man_info_pay_imgbank" :src=getImgUrl(orderdata.src1) alt="">
                <span class="pay_block_man_info_pay_namebank">{{orderdata.text1}}</span>
            </div>
            <div class="pay_block_man_info_data">
                <span class="pay_block_man_info_data_card">Адрес: {{orderdata.address}}</span>
                <span class="pay_block_man_info_data_card">Сумма: {{ orderdata.giving}} {{orderdata.utf}}</span>
            </div>

        </div>
        <img :src=getImgUrl(orderdata.qr) class="qr" alt="">

    </div>
    <div id="timer">15:00</div>
    <div class="btn" @click="editpath()">Я оплатил</div>

</section>
</template>

<script>
import {
    mapGetters
} from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'orderdata'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },
        editpath() {
            this.$store.dispatch('editpath', 'step4');
        },
    }
}
</script>

<style lang="scss" scoped>
.qr {
    width: 100px;
    height: 100%;
}

.main {
    padding: 20px 3%;
}

#timer {
    width: 150px;
    text-align: left !important;
    padding-left: calc(50% - 75px);
    padding-top: 40px;
    padding-bottom: 40px;
    color: black;
    font-weight: bold;
    font-size: 80px;

}

section {
    padding: 20px 3%;
    font-family: 'Hind Siliguri', sans-serif;
    width: 94%;
    background: white;
    box-shadow: 0 2px 4px #c4c2c2;
    border-radius: 4px;
    display: flex;

    flex-direction: column;

    .top_block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &_main_title {
            padding-left: 10px;
            font-size: 25px;
            color: black;
            font-weight: bold;
        }

    }

    .pay_block {
        margin-top: 40px;
        margin-bottom: 5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        &_man_info {
            font-family: 'Hind Siliguri', sans-serif;
            padding: 5px;
            width: 100%;
            text-align: left;
            display: flex;
            flex-direction: column;

            &_pay {
                font-family: 'Hind Siliguri', sans-serif;
                margin-top: 0px;
                display: flex;
                flex-direction: row;
                align-items: center;

                &_imgbank {
                    width: 30px;
                    height: 30px;
                }

                &_success {
                    text-align: center;
                    margin-left: 20%;
                    width: 40%;
                    color: #218d21;
                    border: 2px solid #218d21;
                    padding: 10px 20px;
                    border-radius: 25px;
                    font-size: 22px;
                }

                &_totaltext {

                    color: #484848;
                    font-size: 19px;
                }

            }

            &_data {
                font-family: 'Hind Siliguri', sans-serif;
                display: flex;
                flex-direction: column;

                &_card {
                    color: #484848;
                    font-size: 19px;
                }

            }

        }
    }
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    section {
    padding: 20px 3%;
    font-family: 'Hind Siliguri', sans-serif;
    width: 94%;
    background: white;
    box-shadow: 0 2px 4px #c4c2c2;
    border-radius: 4px;
    display: flex;

    flex-direction: column;

    .top_block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &_main_title {
            padding-left: 10px;
            font-size: 25px;
            color: black;
            font-weight: bold;
        }

    }

    .pay_block {
        margin-top: 40px;
        margin-bottom: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        &_man_info {
            font-family: 'Hind Siliguri', sans-serif;
            padding: 5px;
            width: 100%;
            text-align: left;
            display: flex;
            flex-direction: column;

            &_pay {
                font-family: 'Hind Siliguri', sans-serif;
                margin-top: 0px;
                display: flex;
                flex-direction: row;
                align-items: center;

                &_imgbank {
                    width: 30px;
                    height: 30px;
                }

                &_success {
                    text-align: center;
                    margin-left: 20%;
                    width: 40%;
                    color: #218d21;
                    border: 2px solid #218d21;
                    padding: 10px 20px;
                    border-radius: 25px;
                    font-size: 22px;
                }

                &_totaltext {

                    color: #484848;
                    font-size: 19px;
                }

            }

            &_data {
                font-family: 'Hind Siliguri', sans-serif;
                display: flex;
                flex-direction: column;

                &_card {
                    color: #484848;
                    font-size: 16px;
                }

            }

        }
    }
}
}
</style>
