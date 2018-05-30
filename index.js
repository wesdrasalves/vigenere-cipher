window.addEventListener('DOMContentLoaded',function(){
    var _body = document.body;
    
    //Create html reference
    var _screen ={
        key : _body.querySelector("#keyCipher"),
        normalText : _body.querySelector("#normalText"),
        criptText : _body.querySelector("#criptText"),
        size : _body.querySelector("#sizeKey")
    }

    //Event to Cript
    _body.querySelector("#cript")
        .onclick = () =>{
            _screen.criptText.value = _screen.normalText.value.vigenereCrip(_screen.key.value);
        }

    //Event to Decript
    _body.querySelector("#descript")
        .onclick = () =>{
            _screen.normalText.value = _screen.criptText.value.vigenereDecrip(_screen.key.value);
        }
    
    //Event to Clear all controls
    _body.querySelector("#clear")
        .onclick = () =>{
            _screen.key.value = "";
            _screen.normalText.value = "";
            _screen.criptText.value = "";
        }

    //Event to Clear Normal Text
    _body.querySelector("#clearNormal").onclick = () =>{_screen.normalText.value = ""};

    //Event to Clear Cript Text
    _body.querySelector("#clearCrip").onclick = () =>{_screen.criptText.value = ""};
    
    //Event to Generated Key
    _body.querySelector("#generatedKey")
        .onclick = () =>{
            _screen.key.value = $vg.generatedRandomKey(parseInt(_screen.size.value));
        }
        
}, false);

