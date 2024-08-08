let index = 1;
function plus() {
    let number = parseInt(document.querySelector('.number').innerHTML);
    number++ ;
    document.getElementById('number').innerHTML = number;
    if(number >=1){
        document.getElementById('display_over12').style.display = "flex";
    }
}
function minus() {
    let number = parseInt(document.querySelector('.number').innerHTML);
    if(number > 0){
        number-- ;
        document.getElementById('number').innerHTML = number;
    }
    if(number == 0){
        document.getElementById('display_over12').style.display = "none";
    }
   
}

function under12_plus() {
    let number = parseInt(document.querySelector('.under12_number').innerHTML);
    number++ ;
    document.getElementById('under12_number').innerHTML = number;
    document.getElementById('selected_accommodation_radio1').style.display = "flex";
    if(number >  0){
        
        document.getElementById('select_age_container').style.display = "block";
        let i = 0;
        document.getElementById('select_age_container').innerHTML = "<div></div>"
        while(i< number){
            let result = '<div class="age_modal" id="age_modal"><div><p>'+(i+1)+'人目</p></div><select class="select_age" name="age" id="age"><option value="1歳">1歳</option><option value="2歳">2歳</option><option value="3歳">3歳</option><option value="4歳">4歳</option><option value="5歳">5歳</option><option value="6歳">6歳</option><option value="7歳">7歳</option><option value="8歳">8歳</option><option value="9歳">9歳</option><option value="10歳">10歳</option><option value="11歳">11歳</option></select><input type="radio" name="sleeping" ><label>添寝しな</label></input><input type="radio" name="sleeping"><label>添寝する</label></input></div>';
            document.getElementById('select_age_container').innerHTML  += result;
            i++;
            }
            
    }
}
function under12_minus() {
    let number = parseInt(document.querySelector('.under12_number').innerHTML);
    if(number > 0){
        number-- ;
        document.getElementById('under12_number').innerHTML = number;
        
    }
    if(number == 0){
        document.getElementById('selected_accommodation_radio1').style.display = "none";
    }
    let i = 0;
    document.getElementById('select_age_container').innerHTML = "<div></div>"
    while(i< number){
        let result = '<div class="age_modal" id="age_modal"><div><p>'+(i+1)+'人目</p></div><select class="select_age" name="age" id="age"><option value="1歳">1歳</option><option value="2歳">2歳</option><option value="3歳">3歳</option><option value="4歳">4歳</option><option value="5歳">5歳</option><option value="6歳">6歳</option><option value="7歳">7歳</option><option value="8歳">8歳</option><option value="9歳">9歳</option><option value="10歳">10歳</option><option value="11歳">11歳</option></select><input name="sleeping" type="radio" ><label>添寝しな</label></input><input name="sleeping" type="radio" ><label>添寝する</label></input></div>';
        document.getElementById('select_age_container').innerHTML  += result;
        i++;
        }
   
}

function plus2() {
    let number = parseInt(document.querySelector('.number2').innerHTML);
    number++ ;
    document.getElementById('number2').innerHTML = number;
    if(number >=1){
        document.getElementById('display_over12_2').style.display = "flex";
    }
}
function minus2() {
    let number = parseInt(document.querySelector('.number2').innerHTML);
    if(number > 0){
        number-- ;
        document.getElementById('number2').innerHTML = number;
    }
    if(number == 0){
        document.getElementById('display_over12_2').style.display = "none";
    }
   
}

function under12_plus2() {
    let number = parseInt(document.querySelector('.under12_number2').innerHTML);
    number++ ;
    document.getElementById('under12_number2').innerHTML = number;
    document.getElementById('selected_accommodation_radio1').style.display = "flex";
    if(number >  0){
        
        document.getElementById('select_age_container2').style.display = "block";
        let i = 0;
        document.getElementById('select_age_container2').innerHTML = "<div></div>"
        while(i< number){
            let result = '<div class="age_modal" id="age_modal"><div><p>'+(i+1)+'人目</p></div><select class="select_age" name="age" id="age"><option value="1歳">1歳</option><option value="2歳">2歳</option><option value="3歳">3歳</option><option value="4歳">4歳</option><option value="5歳">5歳</option><option value="6歳">6歳</option><option value="7歳">7歳</option><option value="8歳">8歳</option><option value="9歳">9歳</option><option value="10歳">10歳</option><option value="11歳">11歳</option></select><input name="sleeping" type="radio" ><label>添寝しな</label></input><input type="radio" name="sleeping" ><label>添寝する</label></input></div>';
            document.getElementById('select_age_container2').innerHTML  += result;
            i++;
            }
            
    }
}
function under12_minus2() {
    let number = parseInt(document.querySelector('.under12_number2').innerHTML);
    if(number > 0){
        number-- ;
        document.getElementById('under12_number2').innerHTML = number;
        
    }
    if(number == 0){
        document.getElementById('selected_accommodation_radio1').style.display = "none";
    }
    let i = 0;
    document.getElementById('select_age_container2').innerHTML = "<div></div>"
    while(i< number){
        let result = '<div class="age_modal" id="age_modal"><div><p>'+(i+1)+'人目</p></div><select class="select_age" name="age" id="age"><option value="1歳">1歳</option><option value="2歳">2歳</option><option value="3歳">3歳</option><option value="4歳">4歳</option><option value="5歳">5歳</option><option value="6歳">6歳</option><option value="7歳">7歳</option><option value="8歳">8歳</option><option value="9歳">9歳</option><option value="10歳">10歳</option><option value="11歳">11歳</option></select><input name="sleeping" type="radio" ><label>添寝しな</label></input><input name="sleeping" type="radio" ><label>添寝する</label></input></div>';
        document.getElementById('select_age_container2').innerHTML  += result;
        i++;
        }
   
}
function plus3() {
    let number = parseInt(document.querySelector('.number3').innerHTML);
    number++ ;
    document.getElementById('number3').innerHTML = number;
    if(number >=1){
        document.getElementById('display_over12_3').style.display = "flex";
    }
}
function minus3() {
    let number = parseInt(document.querySelector('.number3').innerHTML);
    if(number > 0){
        number-- ;
        document.getElementById('number3').innerHTML = number;
    }
    if(number == 0){
        document.getElementById('display_over12_3').style.display = "none";
    }
   
}

function under12_plus3() {
    let number = parseInt(document.querySelector('.under12_number3').innerHTML);
    number++ ;
    document.getElementById('under12_number3').innerHTML = number;
    document.getElementById('selected_accommodation_radio1').style.display = "flex";
    if(number >  0){
        
        document.getElementById('select_age_container3').style.display = "block";
        let i = 0;
        document.getElementById('select_age_container3').innerHTML = "<div></div>"
        while(i< number){
            let result = '<div class="age_modal" id="age_modal"><div><p>'+(i+1)+'人目</p></div><select class="select_age" name="age" id="age"><option value="1歳">1歳</option><option value="2歳">2歳</option><option value="3歳">3歳</option><option value="4歳">4歳</option><option value="5歳">5歳</option><option value="6歳">6歳</option><option value="7歳">7歳</option><option value="8歳">8歳</option><option value="9歳">9歳</option><option value="10歳">10歳</option><option value="11歳">11歳</option></select><input name="sleeping" type="radio" ><label>添寝しな</label></input><input name="sleeping" type="radio" ><label>添寝する</label></input></div>';
            document.getElementById('select_age_container3').innerHTML  += result;
            i++;
            }
            
    }
}
function under12_minus3() {
    let number = parseInt(document.querySelector('.under12_number3').innerHTML);
    if(number > 0){
        number-- ;
        document.getElementById('under12_number3').innerHTML = number;
        
    }
    if(number == 0){
        document.getElementById('selected_accommodation_radio1').style.display = "none";
    }
    let i = 0;
    document.getElementById('select_age_container3').innerHTML = "<div></div>"
    while(i< number){
        let result = '<div class="age_modal" id="age_modal"><div><p>'+(i+1)+'人目</p></div><select class="select_age" name="age" id="age"><option value="1歳">1歳</option><option value="2歳">2歳</option><option value="3歳">3歳</option><option value="4歳">4歳</option><option value="5歳">5歳</option><option value="6歳">6歳</option><option value="7歳">7歳</option><option value="8歳">8歳</option><option value="9歳">9歳</option><option value="10歳">10歳</option><option value="11歳">11歳</option></select><input type="radio" name="sleeping"><label>添寝しな</label></input><input type="radio" name="sleeping"><label>添寝する</label></input></div>';
        document.getElementById('select_age_container3').innerHTML  += result;
        i++;
        }
   
}
function plus4() {
    let number = parseInt(document.querySelector('.number4').innerHTML);
    number++ ;
    document.getElementById('number4').innerHTML = number;
    if(number >=1){
        document.getElementById('display_over12_4').style.display = "flex";
    }
}
function minus4() {
    let number = parseInt(document.querySelector('.number4').innerHTML);
    if(number > 0){
        number-- ;
        document.getElementById('number4').innerHTML = number;
    }
    if(number == 0){
        document.getElementById('display_over12_4').style.display = "none";
    }
   
}

function under12_plus4() {
    let number = parseInt(document.querySelector('.under12_number4').innerHTML);
    number++ ;
    document.getElementById('under12_number4').innerHTML = number;
    document.getElementById('selected_accommodation_radio1').style.display = "flex";
    if(number >  0){
        
        document.getElementById('select_age_container4').style.display = "block";
        let i = 0;
        document.getElementById('select_age_container4').innerHTML = "<div></div>"
        while(i< number){
            let result = '<div class="age_modal" id="age_modal"><div><p>'+(i+1)+'人目</p></div><select class="select_age" name="age" id="age"><option value="1歳">1歳</option><option value="2歳">2歳</option><option value="3歳">3歳</option><option value="4歳">4歳</option><option value="5歳">5歳</option><option value="6歳">6歳</option><option value="7歳">7歳</option><option value="8歳">8歳</option><option value="9歳">9歳</option><option value="10歳">10歳</option><option value="11歳">11歳</option></select><input type="radio" name="sleeping" ><label>添寝しな</label></input><input type="radio" name="sleeping" ><label>添寝する</label></input></div>';
            document.getElementById('select_age_container4').innerHTML  += result;
            i++;
            }
            
    }
}
function under12_minus4() {
    let number = parseInt(document.querySelector('.under12_number4').innerHTML);
    if(number > 0){
        number-- ;
        document.getElementById('under12_number4').innerHTML = number;
        
    }
    if(number == 0){
        document.getElementById('selected_accommodation_radio1').style.display = "none";
    }
    let i = 0;
    document.getElementById('select_age_container4').innerHTML = "<div></div>"
    while(i< number){
        let result = '<div class="age_modal" id="age_modal"><div><p>'+(i+1)+'人目</p></div><select class="select_age" name="age" id="age"><option value="1歳">1歳</option><option value="2歳">2歳</option><option value="3歳">3歳</option><option value="4歳">4歳</option><option value="5歳">5歳</option><option value="6歳">6歳</option><option value="7歳">7歳</option><option value="8歳">8歳</option><option value="9歳">9歳</option><option value="10歳">10歳</option><option value="11歳">11歳</option></select><input type="radio" name="sleeping" ><label>添寝しな</label></input><input type="radio" name="sleeping" ><label>添寝する</label></input></div>';
        document.getElementById('select_age_container4').innerHTML  += result;
        i++;
        }
   
}
function insert_room(){
    let i = 0;
    // if( i <= 10){
       
    //     let room = '<div class="input_roomdetails'+i+'"> <div class="selected_accommodation_button"><button type="button" class="selected_accommodation" onclick="">'+i+'部屋目  </button><p>お部屋の内訳を入力してください</p> </div> <div class="over12"> <div><p>12歳以上</p><p class="over12_price">(大人料金)</p></div> <div><button type="button" class="minius_button" onclick="minus()">-</button><p class="minus">減らす</p></div> <div class="over12_number"><span class="number" id="number">0</span></div> <div><button type="button" class="plus_button" onclick="plus()">+</button><p class="plus">増やす</p></div> </div>  <div class="selected_accommodation_radio" id="selected_accommodation_radio">  <div><p>満18歳未満の方のお申込：親権者の同意書が必要です。</p></div>  </div> <div class="display_over12" id="display_over12"> <div><p>12歳未満<br>満2歳以上</p><p class="over12_price">(小人・幼児) </p></div> <div><button type="button" class="minius_button" onclick="under12_minus()" >-</button><p class="minus">減らす</p></div> <div class="over12_number"><span class="under12_number" id="under12_number">0</span></div>  <div><button type="button" class="plus_button" onclick="under12_plus()">+</button><p class="plus">増やす</p></div> </div>  <div> <div class="selected_accommodation_radio1" id="selected_accommodation_radio1">  <div><p>幼児：ご旅行からの帰着日時点で0歳～2歳未満のお子様</p></div> </div> <div class="select_age_container" id="select_age_container"> </div> </div> <div class="insert_roomdetail" > <button class="insert" onclick="insert_room()">＋　部屋タイプを追加する</button> </div></div>';
    //     document.getElementById('add_room').innerHTML += room; 
    //     i++; }
    document.getElementById("2").style.display = "block";
}
function delete_room(){
    document.getElementById("2").style.display = "none";
}
function delete_room3(){
    document.getElementById("3").style.display = "none";
}
function delete_room4(){
    document.getElementById("4").style.display = "none";
}
function insert_room3(){
    let i = 3;
        //let room = ' <div class="input_roomdetails1"> <div class="selected_accommodation_button"><button type="button" class="selected_accommodation" onclick="">'+i+'部屋目  </button><p>お部屋の内訳を入力してください</p> </div> <div class="room_type" id="room_type"><div><p>部屋タイプ</p><p class="selected_room">選択</p></div><select class="select_roomtype" name="age" id="age"><option value="4名1室">4名1室</option><option value="4名1室">4名1室</option><option value="4名1室">4名1室</option></select></div><div class="over12"> <div><p>12歳以上</p><p class="over12_price">(大人料金)</p></div> <div><button type="button" class="minius_button" onclick="minus'+i+'()">-</button><p class="minus">減らす</p></div> <div class="over12_number"><span class="number'+i+'" id="number'+i+'">0</span></div> <div><button type="button" class="plus_button" onclick="plus'+i+'()">+</button><p class="plus">増やす</p></div> </div>  <div class="selected_accommodation_radio" id="selected_accommodation_radio'+i+'">  <div><p>満18歳未満の方のお申込：親権者の同意書が必要です。</p></div>  </div> <div class="display_over12" id="display_over12"> <div><p>12歳未満<br>満2歳以上</p><p class="over12_price">(小人・幼児) </p></div> <div><button type="button" class="minius_button" onclick="under12_minus'+i+'()" >-</button><p class="minus">減らす</p></div> <div class="over12_number"><span class="under12_number" id="under12_number">0</span></div>  <div><button type="button" class="plus_button" onclick="under12_plus'+i+' ()">+</button><p class="plus">増やす</p></div> </div>  <div> <div class="selected_accommodation_radio1" id="selected_accommodation_radio1">  <div><p>幼児：ご旅行からの帰着日時点で0歳～2歳未満のお子様</p></div> </div> <div class="select_age_container" id="select_age_container"> </div> </div> <div class="delete_roomdetail"><button class="delete" onclick="delete_room'+i+' ()">部屋タイプを削除</button> </div> </div>';
        //document.getElementById('add_room').innerHTML += room;  
        document.getElementById("3").style.display = "block";
}
function insert_room4(){
    let i = 4;
        //let room = ' <div class="input_roomdetails1"> <div class="selected_accommodation_button"><button type="button" class="selected_accommodation" onclick="">'+i+'部屋目  </button><p>お部屋の内訳を入力してください</p> </div> <div class="room_type" id="room_type"><div><p>部屋タイプ</p><p class="selected_room">選択</p></div><select class="select_roomtype" name="age" id="age"><option value="4名1室">4名1室</option><option value="4名1室">4名1室</option><option value="4名1室">4名1室</option></select></div><div class="over12"> <div><p>12歳以上</p><p class="over12_price">(大人料金)</p></div> <div><button type="button" class="minius_button" onclick="minus'+i+'()">-</button><p class="minus">減らす</p></div> <div class="over12_number"><span class="number'+i+'" id="number'+i+'">0</span></div> <div><button type="button" class="plus_button" onclick="plus'+i+'()">+</button><p class="plus">増やす</p></div> </div>  <div class="selected_accommodation_radio" id="selected_accommodation_radio'+i+'">  <div><p>満18歳未満の方のお申込：親権者の同意書が必要です。</p></div>  </div> <div class="display_over12" id="display_over12"> <div><p>12歳未満<br>満2歳以上</p><p class="over12_price">(小人・幼児) </p></div> <div><button type="button" class="minius_button" onclick="under12_minus'+i+'()" >-</button><p class="minus">減らす</p></div> <div class="over12_number"><span class="under12_number" id="under12_number">0</span></div>  <div><button type="button" class="plus_button" onclick="under12_plus'+i+' ()">+</button><p class="plus">増やす</p></div> </div>  <div> <div class="selected_accommodation_radio1" id="selected_accommodation_radio1">  <div><p>幼児：ご旅行からの帰着日時点で0歳～2歳未満のお子様</p></div> </div> <div class="select_age_container" id="select_age_container"> </div> </div> <div class="delete_roomdetail"><button class="delete" onclick="delete_room'+i+' ()">部屋タイプを削除</button> </div> </div>';
        //document.getElementById('add_room').innerHTML += room;  
        document.getElementById("4").style.display = "block";
}
function hide_usedate(){
    document.getElementById("usedate").style.display = "flex";
    document.getElementById("use").style.display = "flex";
    document.getElementById("under_arrow").style.display = "none";
    document.getElementById("up_arrow").style.display = "flex";
}
function add_hide_usedate(i){
    document.getElementById("usedate"+i).style.display = "flex";
    document.getElementById("use"+i).style.display = "flex";
    document.getElementById("under_arrow"+i).style.display = "none";
    document.getElementById("up_arrow"+i).style.display = "flex";
}
function show_usedate(){
    document.getElementById("usedate").style.display = "none";
    document.getElementById("use").style.display = "none";
    document.getElementById("up_arrow").style.display = "none";
    document.getElementById("under_arrow").style.display = "flex";
}
function add_show_usedate(i){
    document.getElementById("usedate"+i).style.display = "none";
    document.getElementById("use"+i).style.display = "none";
    document.getElementById("up_arrow"+i).style.display = "none";
    document.getElementById("under_arrow"+i).style.display = "flex";
}
function rentalwear_number_plus(){
    let number = parseInt(document.querySelector('.rentalwear_number').innerHTML);
    number++ ;
    document.getElementById('rentalwear_number').innerHTML = number;
    if(number >  0){
        
        document.getElementById('show_rental').style.display = "block";
            
    }
}
function add_rentalwear_number_plus(i){
    let number = parseInt(document.querySelector('.rentalwear_number'+i).innerHTML);
    number++ ;
    document.getElementById('rentalwear_number'+i).innerHTML = number;
    if(number >  0){
        
        document.getElementById('show_rental').style.display = "block";
            
    }
}
function rentalwear_number_minus(){
        let number = parseInt(document.querySelector('.rentalwear_number').innerHTML);
        if(number > 0){
            number-- ;
            document.getElementById('rentalwear_number').innerHTML = number;
        }
} 
function add_rentalwear_number_minus(i){
    let number = parseInt(document.querySelector('.rentalwear_number'+i).innerHTML);
    if(number > 0){
        number-- ;
        document.getElementById('rentalwear_number'+i).innerHTML = number;
    }
} 
function change_backcolor(){
    element.style.backgroundColor = "red";
}

function add_rentalwear(){
        index++;
        let rentalwear = '<div class="rental_wear"><p>レンタルウェア'+index+'日</p><div class="margin-10" ><p>大人 *****円</p><p class="child">小人 *****円</p></div>    <div class="font-lighter font-20 margin-10"><p>利用す</p></div>  <button class="under_arrow button-border" id="under_arrow'+index+'" onclick="add_hide_usedate('+index+');"><img src="./assets/img/under_arrow.jpg" class="under_arrow"></button>   <button class="under_arrow button-border display-none" id="up_arrow'+index+'" onclick="add_show_usedate('+index+');"><img src="./assets/img/up_arrow.jpg" class="under_arrow"></button>   </div>   <div class="use" id="use'+index+'">   <div class="font-bold font-color-949494 font-25"><p>利用日</p></div>    <select class="width-30 back-cccc font-30 font-color-white font-bold margin-10" name="" id="">    <option value="選択してください">選択してください</option>   <option value="選択してください">選択してください</option>    <option value="選択してください">選択してください</option>    </select>   </div>  <div class="use_date" id="usedate'+index+'"> <div><p class="font-color-949494 margin-20"> 大人(12歳以上)</p>  <div class="display-flex margin-top-20px">  <div><button type="button" class="minius_button minus_width" onclick="add_minus('+index+')">-</button><p class="minus" >減らす</p></div>   <div class="over12_number"><span class="number'+index+'" id="number'+index+'">0</span></div>    <div><button type="button" class="plus_button" onclick="add_plus('+index+')">+</button><p class="plus ">増やす</p></div>  </div>   </div>   <div class="margin-10" ><p class="margin-40 font-color-949494">小人</p>   <div class="display-flex margin-top-20px"> <div><button type="button" class="minius_button minus_width" onclick="add_rentalwear_number_minus('+index+')" >-</button><p class="minus" >減らす</p></div>   <div class="over12_number"><span class="rentalwear_number'+index+'" id="rentalwear_number'+index+'">0</span></div>   <div><button type="button" class="plus_button" onclick="add_rentalwear_number_plus('+index+')">+</button><p class="plus">増やす</p></div> </div> </div> </div> </div>  <div class="display-flex margin-25" style="justify-content: left;"> <input type="checkbox" class="not_use"></input> <p class="margin-5 font-20 font-bold font-color-949494">利用しない</p> </div> <div class="display-flex"></div> <div class="display-flex"><p class="underline"></p></div> </div>';
        document.getElementById('add_rentalwear').innerHTML += rentalwear;  
        
}
function add_plus(i) {
    let number = parseInt(document.querySelector('.number'+i).innerHTML);
    number++ ;
    document.getElementById('number'+i).innerHTML = number;
}
function add_minus(i) {
    let number = parseInt(document.querySelector('.number'+i).innerHTML);
    if(number > 0){
        number-- ;
        document.getElementById('number'+i).innerHTML = number;
    }
}
function dropdown_position(){
    alert();
}