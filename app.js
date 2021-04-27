let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#text-input");
let outputDiv= document.querySelector("#output");

const serverURL="https://api.funtranslations.com/translate/oldenglish.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" +text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("We are fixing the server,please trying again after some time!")

}

function clickHandler() {
    let inputText = txtInput.value;

fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        })
.catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)