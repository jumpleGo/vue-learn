<template>
<section class="check-users-data">
    <h2 class="check-users-data__title">Проверьте ваши данные</h2>
    <div class="check-users-data__info">
        <div class="check-users-data__info-crypt">
            <img class="check-users-data__info-crypt--logo" :src=getImgUrl(orderdata.src1) alt="">
            <span class="check-users-data__info-crypt--name">{{orderdata.text1}}</span>
        </div>
        <div class="check-users-data__info-datacrypt">
            <span class="check-users-data__info-data--adress">Адрес: {{ orderdata.cardnumbercrypto}}</span>
            <span class="check-users-data__info-data--sum">Сумма: {{ orderdata.giving}} {{orderdata.utf}}</span>
        </div>
        <div class="check-users-data__info-bank">
            <img class="check-users-data__info-bank--logo" :src=getImgUrl(orderdata.src2) alt="">
            <span class="check-users-data__info-bank--name">{{orderdata.text2}}</span>
        </div>
        <div class="check-users-data__info-databank">
            <span class="check-users-data__info-databank--adress">Карта: {{ orderdata.cardnumberbank}}</span>
            <span class="check-users-data__info-databank--name">Сумма: {{ orderdata.getting}} RUB</span>
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

.check-users-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 3%;
    font-family: 'Hind Siliguri', sans-serif;
    width: 94%;
    background: white;
    box-shadow: 0 2px 4px #c4c2c2;
    border-radius: 4px;

    &__title {
        padding-left: 10px;
        font-size: 25px;
        color: black;
        font-weight: bold;
    }

    &__info {
        margin-bottom: 5%;
        display: flex;
        flex-direction: column;

        &-crypt {
            padding: 5px;
            width: 100%;
            text-align: left;
            display: flex;
            align-items: center;

            &--logo {
                width: 40px;
                height: 40px;
            }

            &--name {
                color: #484848;
                font-size: 19px;
            }
        }

            &_pay {
                margin-top: 40px;
                display: flex;
                flex-direction: row;
                align-items: center;

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

            &-data {
                display: flex;
                flex-direction: column;

                &_card {
                    color: #484848;
                    font-size: 19px;
                }

            }

        }
    }


</style>
