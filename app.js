var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv= document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/oldenglish.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" +text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("We are fixing the server,please trying again after some time!")

}

function clickHandler() {
    var inputText = txtInput.value;

fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        })
.catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)