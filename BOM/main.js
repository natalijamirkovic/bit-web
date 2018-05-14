

(function(){

console.log(window.navigator.platform + "\n" + window.navigator.vendor + "\n" + window.navigator.appVersion);
})();



function isOnline (){

    if(window.navigator.onLine === true) {
        return "online"; 
    } else {
        return "offline";
    }
}

console.log(isOnline());




(function () {

   console.log (window.screen.width + "\n" + window.screen.height + "\n" + window.screen.availHeight);

})();

(function(){

    console.log("full url: " + window.location.href + "\n" + window.location.host + "\n" + window.location.protocol + "\n" + window.location.pathname);
})();

function reloadPage () {

  console.log (window.location.reload());
};

function redirect () {

    console.log(window.location.href = "http://www.facebook.com");

  };


function storeData () {

 console.log(window.localStorage.setItem("fdtfyfy", "casa"));
    
};


function storeData2 () {

    console.log(window.sessionStorage.setItem("fdtfyfy", "casa2"));
       
   };

function getData () {
    if (window.localStorage.getItem("fdtfyfy") === "") {
        console.log("there is no data") ;
    } else {
    console.log(window.localStorage.getItem("fdtfyfy"));
 }
};


function getData2 () {
    if (window.sessionStorage.getItem("fdtfyfy") === "") {
        console.log("there is no data") ;
    } else {
    console.log(window.sessionStorage.getItem("fdtfyfy"));
 }
};

function removeData () {
    console.log(window.localStorage.removeItem("fdtfyfy"));
};


function removeData2 () {
    console.log(window.sessionStorage.removeItem("fdtfyfy"));
};



function navigater () {

    console.log(window.history.back(2));
};