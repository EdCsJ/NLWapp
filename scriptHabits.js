const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia ja incluso")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()

//armazena o elemento "input" de nome;
let nameTitle = document.querySelector(".nameTitle")
//adiciona uma função "updateValue" para acionar quando o input do "nameTitle" acontecer;
nameTitle.addEventListener("input", updateValue)
//adiciona uma função "sufixed" para acionar quando o usuário clica fora do input "nameTitle";
nameTitle.addEventListener("blur", sufixed)
//
if(localStorage.getItem('nameTitleStorage') === ""){
  
    localStorage.setItem("nameTitleStorage", "Your name Habit's")
} else{
        
    nameTitle.value = localStorage.getItem("nameTitleStorage")

}

function updateValue(event){

    //event.target.value pega o valor do input no exato momento em que acontece;
    localStorage.setItem("nameTitleStorage", event.target.value)
    nameTitle.value = localStorage.getItem("nameTitleStorage")
}

function sufixed(event){
  //edson
  const userinput = localStorage.getItem("nameTitleStorage")
  //userinput.includes("Habit's") => false
  //!userinput.includes("Habit's") => !false => true
  if (!userinput.includes("Habit's")) {
    localStorage.setItem(
        "nameTitleStorage",
        //pega o primeiro caracter da strig e transforma em Maiúsculo => E
      userinput.charAt(0).toUpperCase() 
      //corta a string a partir da segunda letra => dson
      + userinput.slice(1) 
      // E + dson + Habit's
      + " Habit's"
    )
    //atualiza o documento;
    nameTitle.value = localStorage.getItem("nameTitleStorage")
  }
}