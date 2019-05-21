<template>

  <div class="hello">
   
   <div class="rightb">


    <div id="widgetobmentable">
	    
						<input type="hidden" name="naps_id" class="js_naps_id" value="106">
						<input type="hidden" name="place" value="2">						
						
						<div class="widgetobmen">
							<div class="widgetobmenvn">
								<div class="widgetobmentitle">
									<div class="widgetobmentitlevn">Ввод данных</div>
								</div>
                                <div class="stepchange">
                                            <div class="row">
                                                <div class="col-lg-4 col-sm-4 col-xs-4 stepch"><i class="far fa-lightbulb"></i></div>
                                                <div class="col-lg-4 col-sm-4 col-xs-4 inact stepch2"><i class="far fa-lightbulb"></i></div>
                                                <div class="col-lg-4 col-sm-4 col-xs-4 inact"><i class="far fa-lightbulb"></i></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-4 col-sm-4 col-xs-4 stepch-text1">Шаг 1</div>
                                                <div class="col-lg-4 col-sm-4 col-xs-4 stepch-text2">Шаг 2</div>
                                                <div class="col-lg-4 col-sm-4 col-xs-4 stepch-text2">Шаг 3</div>
                                            </div>
                                        </div>
                                         <p style="text-align: center;">Минимальная сумма <strong>1000 рублей</strong></p>
							
								<div class="woblock giving">
									<div class="woblock_ins">
										<div class="wotitle">
											<div class="wotitlevn">Отдаете →</div>
										</div>
											<div class="clear"></div>
									
		<div class="wosummblock">	
			<div class="wosummtitle">Сумма:</div>
			<div class="wosumline changewoerr">
				<div class="wosumminput"><input type="text" id="wsumm1" name="summ1" value="10000"></div>
				<div class="wosummnazv"><img src="/wp-content/uploads/Qiwi.png" alt="Обмен киви на биткойн от 1000 руб" title="Обмен киви на биткойн от 1000 руб">  Qiwi RUB</div>
					<div class="clear"></div>
					<div class="wowarnerr"></div>
			</div>
				<div class="clear"></div>
		</div>		
		
		<div class="wosummblock" style="display: none;">
			<div class="wosummtitle">Сумма:</div>
			<div class="wosumline changewoerr">
				<div class="wosumminput"><input type="text" class="disabled" disabled="disabled" id="wsummcom1" name="poluch1" value="10000"></div>
				<div class="wosummopis" id="wcomtext-1"></div>
					<div class="clear"></div>
					<div class="wowarnerr"></div>
			</div>
				<div class="clear"></div>	
		</div>
			<div class="woschettitle">Со счета:</div>
			<div class="woschetblock">		
				<div class="woschetadres parenttool changewoerr">
					<div class="wolineinput">
						<input type="text" name="wschet1" id="wschet1" class="toolinput" placeholder="" value="">
						<div class="wowarnerr"></div>
					</div>
					
				<div class="exchboxtool">
					<div class="exchboxtoolvnug"></div>
					<div class="exchboxtooltext">
					Номер кошелька должен совпадать с номером телефона в международном формате +71234567896
					</div>
				</div>	
			
				</div>
			</div>
									</div>
								</div>
								<div class="woblock getting">
									<div class="woblock_ins">										
										<div class="wotitle">
											<div class="wotitlevn">Получаете ←</div>
										</div>
											<div class="clear"></div>
											
		<div class="wosummblock">	
			<div class="wosummtitle">Сумма:</div>
			<div class="wosumline changewoerr">
				<div class="wosumminput"><input type="text" id="wsumm2" name="summ2" value="0.01704"></div>
				<div class="wosummnazv"><img src="/wp-content/uploads/Bitcoin.png" alt="Обмен биткойн на киви от 1000 руб" title="Обмен биткойн на киви от 1000 руб">  Bitcoin BTC</div>
					<div class="clear"></div>
					<div class="wowarnerr"></div>
			</div>
				<div class="clear"></div>
		</div>		
		
		<div class="wosummblock" style="display: none;">
			<div class="wosummtitle">Сумма:</div>
			<div class="wosumline changewoerr">
				<div class="wosumminput"><input type="text" class="" id="wsummcom2" name="poluch2" value="0.01704"></div>
				<div class="wosummopis" id="wcomtext-2"></div>
					<div class="clear"></div>
					<div class="wowarnerr"></div>
			</div>
				<div class="clear"></div>	
		</div>
			<div class="woschettitle">На счет:</div>
			<div class="woschetblock">		
				<div class="woschetadres parenttool changewoerr">
					<div class="wolineinput">
						<input type="text" name="wschet2" id="wschet2" class="toolinput" placeholder="" value="">
						<div class="wowarnerr"></div>
					</div>
					
				<div class="exchboxtool">
					<div class="exchboxtoolvnug"></div>
					<div class="exchboxtooltext">
					Например: 13tap3Uz3E36Jo51cit6V7CPvW8udsTs3F
					</div>
				</div>	
			
				</div>
			</div>
									</div>
								</div>
								<div class="woblock persdata">
									<div class="woblock_ins">
										<div class="wotitle">
											<div class="wotitlevn">Личные данные</div>
										</div>
											<div class="clear"></div>
								
										<div class="wocdblock">
											<div class="wocdblockvn">
			<div class="wolineadres parenttool changewoerr">
				<div class="wolineinput">
					<input type="text" name="first_name" id="exc_first_name" class="toolinput" placeholder="Введите ваше имя" value="">
						<div class="wowarnerr"></div>
				</div>
				
			</div>
			
			<div class="wolineadres parenttool changewoerr">
				<div class="wolineinput">
					<input type="text" name="user_email" id="exc_user_email" class="toolinput" placeholder="Введите ваш E-mail" value="">
						<div class="wowarnerr"></div>
				</div>
				
			</div>
			
											</div>
										</div>				
									</div>
								</div>										
								
								<div class="wosubmit">
									<input type="submit" formtarget="_top" name="" value="Продолжить">
										<div class="clear"></div>
								</div>			
							</div>
						</div>									
							</div>
   
   
    
    </div>
   </div>
  
</template>

<script>
export default {
  name: 'Leftbl',
  
  data(){
    return{
items:[
  {class: '1', src:"../assets/BTC.png",  text : 'Bitcoin'},
  {class: '2', src:"../assets/USDT.png", text : 'Tether'},
  {class: '3', src:"../assets/GAS.png",  text : 'Neo'},
  {class: '4', src:"../assets/ETH.png",  text : 'Ethereum'},
  {class: '5', src:"../assets/EOS.png",  text : 'EOS'}

  ]
    }
  
  
},






}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url( "https://www.ok24pay.com/wp-content/themes/exchangeboxtheme2/style.css");
@import url("https://www.ok24pay.com/wp-content/themes/exchangeboxtheme2/custom.css");
.hello{
 
}

.rightb{
  
  background: white;
  padding: 0px;
  border-radius: 5px;
  display: flex;
  

}







</style>
