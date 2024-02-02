
// finding 
const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

// set values
const setValues = (defaultFontSize,defaultBgColor)=>{
    selectFontSize.value = defaultFontSize;
    selectBgColor.value = defaultBgColor;
    mainElement.style.background=defaultBgColor;
    mainElement.style.fontSize=defaultFontSize;
} 

// load LocalStorage Value
const initialSetup = () => {
    const defaultBgColor = localStorage.getItem("bgColor");
    const defaultFontSize = localStorage.getItem("fontSize");
    if(defaultBgColor&&defaultFontSize){
        setValues(defaultFontSize,defaultBgColor);
    }
    if(!defaultBgColor&&!defaultFontSize){  
        setValues("16px","aqua");
    }
    if(!defaultBgColor&&defaultFontSize){  
        setValues(defaultFontSize,"aqua");
    }
    if(defaultBgColor&&!defaultFontSize){  
        setValues("16px",defaultBgColor);
    }
}

// change font-size
const changeFontSize = (event) =>{
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize=selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize);
};

// change bg-color
const changeBgColor = (event) =>{
    const selectedBgColor = event.target.value;
    mainElement.style.background=selectedBgColor;
    localStorage.setItem("bgColor", selectedBgColor);
};
// clear
const clearLocalStorage = () =>{
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
    setValues("16px","aqua");
};
// add event listeners
selectFontSize.addEventListener("change",changeFontSize);
selectBgColor.addEventListener("change",changeBgColor);
resetButton.addEventListener("click", clearLocalStorage);

initialSetup();