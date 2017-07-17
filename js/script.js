var kompreqem = Math.floor(Math.random() * 50);
console.log(kompreqem);
var button = document.querySelector(".btn");
button.addEventListener("click", submit);
var sans = 5;

document.body.addEventListener("keyup", function (event) {
    if (event.which == 13) {
        submit();
    }
})




function submit() {
    if (sans > 0) {
        sans--;
        document.querySelector(".luck").innerHTML = '"' + sans + '"';
        var userInmpt = document.querySelector(".inpt").value;
        if (userInmpt == kompreqem) {
            document.querySelector(".pointer1").innerHTML = "congratulations ! ! !";
            document.querySelector(".pointer2").innerHTML = "For start new game push F5";
        } else {
            document.querySelector(".pointer1").innerHTML = "Try again";
            if (userInmpt < kompreqem) {
                document.querySelector(".pointer2").innerHTML = "It is bigger than "+ userInmpt;
            } else {
                document.querySelector(".pointer2").innerHTML = "It is lower than " +userInmpt;
            };
        };

    } else {
        document.querySelector(".pointer1").innerHTML = "End ! ! !";
        document.querySelector(".pointer2").innerHTML = "For start new game push F5"
    }
}






