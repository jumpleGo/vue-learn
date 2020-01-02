<template>
<section class="">
    <div class="check-users-data">
        <h2 class="check-users-data__title">Проверьте ваши данные</h2>
    </div>
   
        <div class="check-users-data__info">

            <div class="check-users-data__info-crypt">
                <img class="check-users-data__info-crypt--logo" :src=getImgUrl(orderdata.src1) alt="">
                <span class="check-users-data__info-crypt--name">{{orderdata.text1}}</span>
            </div>
            <div class="check-users-data__info-data">
                <span class="check-users-data__info-data--adress">Адрес: {{ price1.cardnumbercrypto}}</span>
                <span class="check-users-data__info-data--sum">Сумма: {{ price1.giving}} {{orderdata.utf}}</span>
            </div>
            <div class="pay_block_man_info_pay">
                <img class="pay_block_man_info_pay_imgbank" :src=getImgUrl(orderdata.src2) alt="">
                <span class="pay_block_man_info_pay_namebank">{{orderdata.text2}}</span>
            </div>
            <div class="pay_block_man_info_data">
                <span class="pay_block_man_info_data_card">Карта: {{ price1.cardnumberbank}}</span>
                <span class="pay_block_man_info_data_card">Сумма: {{ price1.getting}} RUB</span>
            </div>
            <button @click="editpath(); timer(); " class="btn">Все верно</button>
        </div>

  

</section>
</template>

<script>
import {
    mapGetters
} from 'vuex';


export default {
    data() {
        return {
          
        }
    },
    computed: {
        ...mapGetters([
            'price1',
            'orderdata'

        ]),
        
    },


    methods: {
        editpath() {
            this.$store.dispatch('editpath', 'step3');
        },
        getImgUrl(pic) {
            return require('../assets/' + pic);
        },

        timer() {

            var second = 10;
            var minute = 15;

            setInterval(function () {
                document.getElementById("timer").innerHTML = minute + ":" + second;

                second--;

                if (second < 10) {
                    second = '0' + second
                }
                if (second == 0) {
                    minute--;
                    second = 59;
                }
                if (minute == 0 && second == 1) {
                    document.getElementById("timer").innerHTML = "Timer Stopped";
                }
                if (minute <= -1) {
                    document.getElementById("timer").innerHTML = " ";
                }

            }, 1000);

        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    padding: 20px 3%;
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

    .check-users-data {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &__title {
            padding-left: 10px;
            font-size: 25px;
            color: black;
            font-weight: bold;
        }

        &__info {
        margin-bottom: 5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &-crypt {
            padding: 5px;
            width: 100%;
            text-align: left;
            display: flex;
            flex-direction: column;

            &_pay {
                margin-top: 40px;
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

   
}
</style>
