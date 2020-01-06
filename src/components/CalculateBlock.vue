<template>
<div class="calculate-block">
    <div class="calculate-block__cryptochange">
        <h2 clas="calculate-block__cryptochange--heading">Откуда</h2>
        <div :style="{backgroundColor:backgroundcolor, color: color}" class="calculate-block__cryptochange-wallet">
            <div class="calculate-block__cryptochange-wallet-top">
                <img src="../assets/sim-card-chip.png" alt="">
                <img :src=getImgUrl(src1) alt="">

            </div>
            <div class="calculate-block__cryptochange-wallet-center">

                <p>Адрес кошелька</p>
                <input type="text" :style="{color:color}" v-model="cardnumbercrypto" placeholder="1NeJEFzY8PbVS9RvYPfDP93iqXxHjav791">

            </div>
            <div class="calculate-block__cryptochange-wallet-bottom">
                Cумма: <input @blur="checkSellprice()" type="text" :style="{color:color}" v-model="sellprice"> {{utf}}

            </div>
            <span class="error" v-if="error">min: {{min}}, max: {{max}}</span>
        </div>
    </div>
    <div class="calculate-block__bankchange">
        <h2 class="calculate-block__bankchange--heading">Куда</h2>

        <div :style="{background:backgroundcolor2}" class="calculate-block__bankchange-wallet">
            <div class="calculate-block__bankchange-wallet-top">
                <img src="../assets/sim-card-chip.png" alt="">
                <img :src=getImgUrl(src2) alt="">
            </div>
            <div class="calculate-block__bankchange-wallet-center">
                <p>Номер карты</p>
                <input class="mask" v-mask="'#### #### #### ####'" type="text" v-model="cardnumberbank">

            </div>
            <div class="calculate-block__bankchange-wallet-bottom">
                Cумма: <input type="text" v-model="buyprice"> RUB

            </div>
        </div>
    </div>
    <button class="btn" @click="nextStep()">Сохранить</button>
</div>
</template>

<script>
import {
    bus
} from '../main';
import {
    required,
    between
} from 'vuelidate/lib/validators'
export default {
    name: 'CalculateBlock',

    data() {
        return {
            src1: this.src1 ? this.src1 : 'BTC.png',
            text1: '',
            backgroundcolor: this.backgroundcolor ? this.backgroundcolor : '#f4b41f',
            src2: this.src2 ? this.src2 : 'Advcash.png',
            text2: '',
            backgroundcolor2: this.backgroundcolor2 ? this.backgroundcolor2 : 'linear-gradient(135deg, rgb(26, 159, 41), rgb(13, 117, 24))',
            sellprice: '',
            buyprice: '',
            cardnumberbank: " ",
            cardnumbercrypto: '',
            utf: this.src1 ? this.src1 : 'BTC',
            color: '',
            cost: this.cost ? this.cost : 0,
            min: 1,
            max: 1,
            error: false
        }

    },
    validations() {
        return {
            cardnumberbank: {
                required,
            },
            sellprice: {
                required,
                between: between(this.min, this.max)
            }
        }
    },

    methods: {
        checkSellprice() {
            if (!this.$v.sellprice.between) {
                this.error = true
            }
        },

        getImgUrl(pic) {
            return require('../assets/' + pic);
        },
        addPrice() {
            var obj = {
                cardnumbercrypto: this.cardnumbercrypto,
                cardnumberbank: this.cardnumberbank,
                buyprice: this.buyprice,
                sellprice: this.sellprice,

            }
            this.$store.dispatch('addPrice', obj);

        },
        editisblocked() {
            this.$store.commit('EDIT_ISBLOCKED')
        },

        editpath() {
            this.$store.dispatch('editpath', 'step2');
        },
        nextStep() {
            this.editisblocked();
            this.addPrice();
            this.editpath()
        }

    },

    created() {
        bus.$on('cryptoData', data => {
            this.src1 = data[0];
            this.backgroundcolor = data[2];
            this.utf = data[3],
                this.color = data[4],
                this.cost = data[6],
                this.min = data[7],
                this.max = data[8]
        })

        bus.$on('bankData', data => {
            this.src2 = data[0];
            this.backgroundcolor2 = data[2]
        });

    },

    watch: {
        sellprice: function (val) {
            this.sellprice = val;
            this.buyprice = val * (this.cost * 0.97);
        },
        buyprice: function (val) {
            this.buyprice = val;
            this.sellprice = val / (this.cost * 0.97);
        }
    }
}
</script>

<style lang="scss" scoped>
input {
    background: rgba(0, 0, 0, 0.103);
    padding: 5px;
    border: none;
    outline: none;
}

input::placeholder {
    color: rgba(0, 0, 0, 0.493);
}

.calculate-block {
    font-family: 'Hind Siliguri', sans-serif;
    padding: 10px 30px;
    width: 90%;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px #c4c2c2;
    border-radius: 4px;

    &__cryptochange, &__bankchange {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &--heading {
            font-size: 25px;
            font-weight: 500;
            color: black;
        }

        &-wallet {
            padding: 20px 20px;
            box-shadow: 0 2px 4px #c4c2c2;
            border-radius: 4px;
            width: 70%;
            display: flex;
            flex-direction: column;

            input {
                font-size: 17px;
            }

            &-top {
                img {
                    width: 50px;
                    height: 50px;
                }
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            &-bottom {
                font-size: 19px;
                text-align: left;

                input {
                    min-width: 20px;
                }
            }

            &-center {
                font-size: 19px;
                display: flex;
                flex-direction: column;
                text-align: left;

                p {
                    margin-top: 15px;
                    margin-bottom: 10px;
                }

                input {
                    text-align: center;
                }
            }
        }
    }

    &__bankchange{
        margin-top: 40px;
        color: white;
        input{
            color: white
        }
    }
}
</style>
