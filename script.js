let count = 0;
let optionType = document.getElementById('sub-option-type');
console.log("Abc", optionType.innerHTML)



let radio = `<input class="form-check-input ml-1" type="radio" name="flexRadioDefault"
id="flexRadioDefault1">`
let checkBox = `<input class="form-check-input ml-1" type="checkbox" name="flexRadioDefault"
id="flexRadioDefault1">`
let dropDown = `<select class="form-select bg-gradient-secondary border-3 small "
aria-label="Default select example">
<option selected>Select Option</option>

<option value="radio">Radio</option>
<option value="checkbox"><i class="fa-duotone fa-square-check"></i>Checkbox
</option>
<option value="dropdown">Dropdown</option>
<option value="text">Text</option>
</select>`
let text = `<input type="text" class="form-control bg-light border-3 small " placeholder="Discription"
aria-label="Search" aria-describedby="basic-addon2">`

function getType(optionTypeValue) {
    if (optionTypeValue == 'radio') {
        return radio
    } else if (optionTypeValue == 'checkbox') {
        return checkBox
    } else if (optionTypeValue == 'dropdown') {
        return dropDown
    } else if (optionTypeValue == 'text') {
        return text
    } else {
        return false
    }

}
function getvalue() {
    count = count + 1;
    let optionTypeValue = document.getElementById('option-type').value;
    console.log(optionTypeValue)
    let optionType = document.getElementById('sub-option-type');

    let optionHTML = '';
    optionHTML = `<div class="container" style="margin-top: 20px; " id="containerOptionArea">
   <div class="row">
   <div class="col-3"></div>
       
       <div class="col-2">
           ${optionTypeValue}
           <br>
           ${getType(optionTypeValue)}
           
       </div>
       
       <div class="col-2">
           Caption
           <br>
           <input type="text" class="form-control bg-light border-3 small " placeholder="Discription"
               aria-label="Search" aria-describedby="basic-addon2">

       </div>
       <div class="col-1">
           Price
           <br>
           <input type="text" class="form-control bg-light border-3 small " placeholder="Price"
               aria-label="Search" aria-describedby="basic-addon2">

       </div>
       <div class="col-4">
           <br>
           <button href="#" class="d-none d-sm-inline-block btn btn-secondary btn-success shadow-sm"
               onclick="addMoreOption(); ">
               Add Option </button>
       </div>
   </div>
</div>`;
    optionType.innerHTML = optionHTML

}

function addMoreOption() {

    let optionType = document.getElementById('sub-option-type');
    console.log("Botton is clicked...", optionType)
    let containerOptionArea = document.getElementById('containerOptionArea')
    console.log(containerOptionArea)
    optionType.innerHTML += containerOptionArea.innerHTML;

}

function addOptionType() {

    console.log("Bottun is clicked ...")
    let mainOption = document.getElementById('main-option')

    let mainHtml = ` <div class="row">
   <div class="col-3">
       <label class=".text-lg" style="font-size: 17px; margin-top: 1px;">Option
           Type
       </label>
   </div>
   <div class="col-4">
       <select class="form-select bg-gradient-secondary border-3 small " aria-label="Default select example"
           style="width: 300px;" id="option-type2" onchange="getvalue2() ">
           <option selected>Select your Option</option>

           <option value="radio">Radio</option>
           <option value="checkbox"><i class="fa-duotone fa-square-check"></i>Checkbox
           </option>
           <option value="dropdown">Dropdown</option>
           <option value="text">Text</option>
       </select>

   </div>

   <div class="col-5">
       <button href="#" class="d-none d-sm-inline-block btn btn-secondary btn-success shadow-sm"
           onclick="addOptionType2()">
           Add Option Type </button>
   </div>
   <div id="sub-option-type2" style="border: 2px solid red;">
   </div>
</div>`

    mainOption.innerHTML = mainHtml
    console.log(mainOption)
    // let div = document.createElement('div');
    // div.innerHTML = mainHtml;

    // mainOption.appendChild(div)
    // console.log("Count", count)



}

function getvalue2() {
    count = count + 1;
    let subOption2 = document.getElementById('sub-option-type2');
    let optionTypeValue = document.getElementById('option-type2').value;
    console.log(optionTypeValue)
    let optionType = document.getElementById('sub-option-type');

    let optionHTML = '';
    optionHTML = `<div class="container" style="margin-top: 20px; " id="containerOptionArea2">
   <div class="row">
   <div class="col-3"></div>
       
       <div class="col-2">
           ${optionTypeValue}
           <br>
           ${getType(optionTypeValue)}
           
       </div>
       
       <div class="col-2">
           Caption
           <br>
           <input type="text" class="form-control bg-light border-3 small " placeholder="Discription"
               aria-label="Search" aria-describedby="basic-addon2">

       </div>
       <div class="col-1">
           Price
           <br>
           <input type="text" class="form-control bg-light border-3 small " placeholder="Price"
               aria-label="Search" aria-describedby="basic-addon2">

       </div>
       <div class="col-4">
           <br>
           <button href="#" class="d-none d-sm-inline-block btn btn-secondary btn-success shadow-sm"
               onclick="addMoreOption2(); ">
               Add Option </button>
       </div>
   </div>
</div>`;
    subOption2.innerHTML = optionHTML
}



function addMoreOption2() {
    let optionType = document.getElementById('sub-option-type2');
    console.log("Botton is clicked...", optionType)
    let containerOptionArea = document.getElementById('containerOptionArea2')
    console.log(containerOptionArea)
    optionType.innerHTML += containerOptionArea.innerHTML;
    // let div = document.createElement('div')
    // div.innerHTML = containerOptionArea.innerHTML;

    // optionType.appendChild(div)


}
function addOptionType2() {
    console.log("Button is clicked...")
    let mainOption = document.getElementById('main-option')

    let mainHtml = ` <div class="row">
   <div class="col-3">
       <label class=".text-lg" style="font-size: 17px; margin-top: 1px;">Option
           Type
       </label>
   </div>
   <div class="col-4">
       <select class="form-select bg-gradient-secondary border-3 small " aria-label="Default select example"
           style="width: 300px;" id="option-type3" onchange="getvalue3() ">
           <option selected>Select your Option</option>

           <option value="radio">Radio</option>
           <option value="checkbox"><i class="fa-duotone fa-square-check"></i>Checkbox
           </option>
           <option value="dropdown">Dropdown</option>
           <option value="text">Text</option>
       </select>

   </div>

   <div class="col-5">
       <button href="#" class="d-none d-sm-inline-block btn btn-secondary btn-success shadow-sm"
           onclick="addOptionType2()">
           Add Option Type </button>
   </div>
   <div id="sub-option-type3" style="border: 2px solid red;">
   </div>
</div>`

    mainOption.innerHTML += mainHtml
}
// Third Option.....
function getvalue3() {
    let subOption2 = document.getElementById('sub-option-type3');
    let optionTypeValue = document.getElementById('option-type3').value;
    console.log("AMU",optionTypeValue)
    let optionType = document.getElementById('sub-option-type');

    let optionHTML = '';
    optionHTML = `<div class="container" style="margin-top: 20px; " id="containerOptionArea3">
   <div class="row">
   <div class="col-3"></div>
       
       <div class="col-2">
           ${optionTypeValue}
           <br>
           ${getType(optionTypeValue)}
           
       </div>
       
       <div class="col-2">
           Caption
           <br>
           <input type="text" class="form-control bg-light border-3 small " placeholder="Discription"
               aria-label="Search" aria-describedby="basic-addon2">

       </div>
       <div class="col-1">
           Price
           <br>
           <input type="text" class="form-control bg-light border-3 small " placeholder="Price"
               aria-label="Search" aria-describedby="basic-addon2">

       </div>
       <div class="col-4">
           <br>
           <button href="#" class="d-none d-sm-inline-block btn btn-secondary btn-success shadow-sm"
               onclick="addMoreOption3(); ">
               Add Option </button>
       </div>
   </div>
</div>`;
    subOption2.innerHTML = optionHTML

}
function addMoreOption3() {
    let optionType = document.getElementById('sub-option-type3');
    console.log("Botton is clicked...", optionType)
    let containerOptionArea = document.getElementById('containerOptionArea3')
    console.log(containerOptionArea)
    optionType.innerHTML += containerOptionArea.innerHTML;
}


// VTRv





function getvalue4() {
    count = count + 1;
    let subOption2 = document.getElementById('sub-option-type4');
    console.log("jdj",subOption2)
    let optionTypeValue = document.getElementById('option-type4').value;
    console.log("Option type",optionTypeValue)
    let optionType = document.getElementById('sub-option-type');

    let optionHTML = '';
    optionHTML = `<div class="container" style="margin-top: 20px; " id="containerOptionArea5">
   <div class="row">
   <div class="col-3"></div>
       
       <div class="col-2">
           ${optionTypeValue}
           <br>
           ${getType(optionTypeValue)}
           
       </div>
       
       <div class="col-2">
           Caption
           <br>
           <input type="text" class="form-control bg-light border-3 small " placeholder="Discription"
               aria-label="Search" aria-describedby="basic-addon2">

       </div>
       <div class="col-1">
           Price
           <br>
           <input type="text" class="form-control bg-light border-3 small " placeholder="Price"
               aria-label="Search" aria-describedby="basic-addon2">

       </div>
       <div class="col-4">
           <br>
           <button href="#" class="d-none d-sm-inline-block btn btn-secondary btn-success shadow-sm"
               onclick="addMoreOption2(); ">
               Add Option </button>
       </div>
   </div>
</div>`;
    subOption2.innerHTML = optionHTML
}
