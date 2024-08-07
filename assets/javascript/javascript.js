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
            let result = '<div class="age_modal" id="age_modal"><div><p>'+(i+1)+'人目</p></div><select class="select_age" name="age" id="age"><option value="1歳">1歳</option><option value="2歳">2歳</option><option value="3歳">3歳</option><option value="4歳">4歳</option><option value="5歳">5歳</option><option value="6歳">6歳</option><option value="7歳">7歳</option><option value="8歳">8歳</option><option value="9歳">9歳</option><option value="10歳">10歳</option><option value="11歳">11歳</option></select><input type="radio" ><label>添寝しな</label></input><input type="radio" ><label>添寝する</label></input></div>';
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
        let result = '<div class="age_modal" id="age_modal"><div><p>'+(i+1)+'人目</p></div><select class="select_age" name="age" id="age"><option value="1歳">1歳</option><option value="2歳">2歳</option><option value="3歳">3歳</option><option value="4歳">4歳</option><option value="5歳">5歳</option><option value="6歳">6歳</option><option value="7歳">7歳</option><option value="8歳">8歳</option><option value="9歳">9歳</option><option value="10歳">10歳</option><option value="11歳">11歳</option></select><input type="radio" ><label>添寝しな</label></input><input type="radio" ><label>添寝する</label></input></div>';
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
    let number = parseInt(document.querySelector('.under12_number').innerHTML);
    number++ ;
    document.getElementById('under12_number2').innerHTML = number;
    document.getElementById('selected_accommodation_radio1').style.display = "flex";
    if(number >  0){
        
        document.getElementById('select_age_container').style.display = "block";
        let i = 0;
        document.getElementById('select_age_container').innerHTML = "<div></div>"
        while(i< number){
            let result = '<div class="age_modal" id="age_modal"><div><p>'+(i+1)+'人目</p></div><select class="select_age" name="age" id="age"><option value="1歳">1歳</option><option value="2歳">2歳</option><option value="3歳">3歳</option><option value="4歳">4歳</option><option value="5歳">5歳</option><option value="6歳">6歳</option><option value="7歳">7歳</option><option value="8歳">8歳</option><option value="9歳">9歳</option><option value="10歳">10歳</option><option value="11歳">11歳</option></select><input type="radio" ><label>添寝しな</label></input><input type="radio" ><label>添寝する</label></input></div>';
            document.getElementById('select_age_container').innerHTML  += result;
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
    document.getElementById('select_age_container').innerHTML = "<div></div>"
    while(i< number){
        let result = '<div class="age_modal" id="age_modal"><div><p>'+(i+1)+'人目</p></div><select class="select_age" name="age" id="age"><option value="1歳">1歳</option><option value="2歳">2歳</option><option value="3歳">3歳</option><option value="4歳">4歳</option><option value="5歳">5歳</option><option value="6歳">6歳</option><option value="7歳">7歳</option><option value="8歳">8歳</option><option value="9歳">9歳</option><option value="10歳">10歳</option><option value="11歳">11歳</option></select><input type="radio" ><label>添寝しな</label></input><input type="radio" ><label>添寝する</label></input></div>';
        document.getElementById('select_age_container').innerHTML  += result;
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
function insert_room3(){
    let i = 3;
        let room = '    <div class="input_roomdetails1"> <div class="selected_accommodation_button"><button type="button" class="selected_accommodation" onclick="">1部屋目  </button><p>お部屋の内訳を入力してください</p> </div> <div class="over12"> <div><p>12歳以上</p><p class="over12_price">(大人料金)</p></div> <div><button type="button" class="minius_button" onclick="minus()">-</button><p class="minus">減らす</p></div> <div class="over12_number"><span class="number" id="number">0</span></div> <div><button type="button" class="plus_button" onclick="plus()">+</button><p class="plus">増やす</p></div> </div>  <div class="selected_accommodation_radio" id="selected_accommodation_radio">  <div><p>満18歳未満の方のお申込：親権者の同意書が必要です。</p></div>  </div> <div class="display_over12" id="display_over12"> <div><p>12歳未満<br>満2歳以上</p><p class="over12_price">(小人・幼児) </p></div> <div><button type="button" class="minius_button" onclick="under12_minus()" >-</button><p class="minus">減らす</p></div> <div class="over12_number"><span class="under12_number" id="under12_number">0</span></div>  <div><button type="button" class="plus_button" onclick="under12_plus()">+</button><p class="plus">増やす</p></div> </div>  <div> <div class="selected_accommodation_radio1" id="selected_accommodation_radio1">  <div><p>幼児：ご旅行からの帰着日時点で0歳～2歳未満のお子様</p></div> </div> <div class="select_age_container" id="select_age_container"> </div> </div> <div class="delete_roomdetail"><button class="delete" onclick="delete_room()">部屋タイプを削除</button> </div> </div>';
        document.getElementById('add_room').innerHTML += room;  
        document.getElementById("3").style.display = "block";
}
function hide_usedate(){
    document.getElementById("usedate").style.display = "none";
    document.getElementById("under_arrow").style.display = "none";
    document.getElementById("up_arrow").style.display = "flex";
}
function show_usedate(){
    document.getElementById("usedate").style.display = "flex";
    document.getElementById("under_arrow").style.display = "flex";
    document.getElementById("up_arrow").style.display = "none";
}
function rentalwear_number_plus(){
    let number = parseInt(document.querySelector('.rentalwear_number').innerHTML);
    number++ ;
    document.getElementById('rentalwear_number').innerHTML = number;
    if(number >  0){
        
        document.getElementById('show_rental').style.display = "block";
        let i = 0;
        document.getElementById('show_rental').innerHTML = "<div></div>"
        while(i< number){
            let result = '<div class="rental_wear"> <p>レンタルボード</p> <div class="margin-10" ><p>大人 *****円</p><p class="child">小人 *****円</p></div> <div class="font-lighter font-20 margin-10"><p>利用する</p></div> <img src="./assets/img/plus.jpg" class="under_arrow"> </div> <div class="display-flex margin-25" style="justify-content: left;"> <input type="checkbox" class="not_use"> </input> <p class="margin-5 font-20 font-bold font-color-949494">利用しない</p> </div> <div class="display-flex"><p class="underline"></p></div>';
            document.getElementById('show_rental').innerHTML  += result;
            i++;
            }
            
    }
}
function rentalwear_number_minus(){
        let number = parseInt(document.querySelector('.rentalwear_number').innerHTML);
        if(number > 0){
            number-- ;
            document.getElementById('rentalwear_number').innerHTML = number;
        }
        if(number == 0){
            document.getElementById('show_rental').style.display = "none";
        }
        let i = 0;
        document.getElementById('show_rental').innerHTML = "<div></div>"
         while(i< number){
        let result = '<div class="rental_wear"> <p>レンタルボード</p> <div class="margin-10" ><p>大人 *****円</p><p class="child">小人 *****円</p></div> <div class="font-lighter font-20 margin-10"><p>利用する</p></div> <img src="./assets/img/plus.jpg" class="under_arrow"> </div> <div class="display-flex margin-25" style="justify-content: left;"> <input type="checkbox" class="not_use"> </input> <p class="margin-5 font-20 font-bold font-color-949494">利用しない</p> </div> <div class="display-flex"><p class="underline"></p></div>';
        document.getElementById('show_rental').innerHTML  += result;
        i++;
        }
    }
    