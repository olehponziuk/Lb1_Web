const test = document.getElementById("TA");
const reg = document.getElementsByClassName("Reg")[0];
const tag = document.getElementsByTagName("button")[0];
const name1 = document.getElementsByName("button1")[0];
const select = document.querySelector('#education');



function testHandler() {
    test.style.fontSize = "2em"; 
}

function test_outHandler() {
    test.style.fontSize = ""; 
}

function regHandler() {
    reg.style.color= "green";
}

function dbregHandler() {
    reg.style.color= "black";
}

function tgHandler() {
    tag.style.backgroundColor = 'yellow'; 
}

function nameHandler() {
    alert("I am COCOGAMBO!") 
}

function educationHandler(event) {
    const selectedValue = event.target.value;

    if (selectedValue === "high-school") {
        alert("Ви обрали Середню освіту");
    } else if (selectedValue === "bachelor") {
        alert("Ви обрали Бакалавра");
    } else if (selectedValue === "master") {
        alert("Ви обрали Магістра");
    } else if (selectedValue === "phd") {
        alert("Ви обрали Доктора наук");
    }
}



test.addEventListener("mouseover", testHandler);
test.addEventListener("mouseout", test_outHandler);

reg.addEventListener("click", regHandler);
reg.addEventListener("dblclick", dbregHandler);

tag.addEventListener("click", tgHandler);

name1.addEventListener("click", nameHandler);

select.onchange = educationHandler;

