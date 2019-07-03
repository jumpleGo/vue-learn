<template>
    <section class="">
         <div class="top_block">
            <div class="top_block_main_title">Проведите оплату</div>
            <!--  <div class="top_block_main_menu"><img class="top_block_main_menu--img" src="images/menu.png" alt=""></div> -->
        </div>
        <div class="pay_block">
            <div class="pay_block_man_info">

                <div class="pay_block_man_info_pay">
                    <img class="pay_block_man_info_pay_imgbank" src="../assets/BTC.png" alt="">
                    <span class="pay_block_man_info_pay_namebank">Bitcoin</span>
                </div>
                <div class="pay_block_man_info_data">
                    <span class="pay_block_man_info_data_card">Адрес: </span>
                    <span class="pay_block_man_info_data_card">Сумма: {{ price1.giving}} BTC</span>
                </div>

            </div>
            <img src="../assets/qr.jpg" class="qr" alt="">

        </div>
<div id="timer">15:00</div>
<div class="btn">Я оплатил</div>


        

       
    </section>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
   data(){
       return{
           
       }
   },
   computed: {
      ...mapGetters([
          'price1'
      ])
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
.qr{
    width: 100px;
    height: 100px;
}
.main{
     padding: 20px 3%;
}
   #timer {
       width:150px;
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
    width: 526px;
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
        margin-bottom: 5%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        &_man_info {
margin-top: 40px;
            padding: 5px;
            width: 100%;
            text-align: left;
            display: flex;
            flex-direction: column;

            &_pay {
                margin-top: 0px;
                display: flex;
                flex-direction: row;
                align-items: center;
&_imgbank{
    width: 30px;
    height:30px;
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
</style>
