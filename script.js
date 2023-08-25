var clut = ""

function convert(){
    document.querySelector("#encryt-btn").addEventListener("click", function(){
        
       var input = document.getElementById("txtmsg").value
       console.log(input)
       var pass = document.getElementById("encpassword").value
       console.log(pass)

       const str = input.split("")
       console.log(str)

       str.forEach(element => {
            clut += `&#128${element.charCodeAt()} `
            
       });

       console.log(clut)

            
            document.querySelector("#result").innerHTML = clut

            var data = [];
            if(JSON.parse(localStorage.getItem("data1"))){
                data = JSON.parse(localStorage.getItem("data1"))
                data.push({"pass":pass,"input":input,"clut":clut})

            }else{
                data = [{"pass":pass,"input":input,"clut":clut}]
            }

            
            localStorage.setItem("data1",JSON.stringify(data))
    })
}


function decrypt(){
    document.querySelector("#decryt-btn").addEventListener("click", function(){
        var clut2 = "";
       var input2 =  document.getElementById("emojimsg").value
       var pass2 =  document.getElementById("decpassword").value

       var user = JSON.parse(localStorage.getItem("data1"))
       console.log(user)

       const str2 = input2.split(" ")
       str2.forEach(element => {
            clut2 += `&#${element.codePointAt(0)} `
        
       });
       console.log(clut2)
       var found;
       for(let i of user){
        if(i.clut==clut2)
        {
            found = i;
            console.log(i)
        }
       }
       if(found.clut===clut2){
        document.querySelector("#result").style.display = "block"
        document.querySelector("#result").innerHTML = found.input

       }else{
        document.querySelector("#result").style.display = "block"
        document.querySelector("#result").innerHTML = "Wrong password"

       }

    })
}


function btnClick(){
    document.querySelector("#dec-btn").addEventListener("click", function(){
        document.querySelector("#decrytion").style.display = "block"
        document.querySelector("#encrytion").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor = "#333"
        document.querySelector("#enc-btn").style.backgroundColor = "#222"
        document.querySelector("#result").style.display = "none"
        document.querySelector("#main>h1 span").style.rotate = "180deg"
    })

    document.querySelector("#enc-btn").addEventListener("click", function(){
        document.querySelector("#encrytion").style.display = "block"
        document.querySelector("#decrytion").style.display = "none"
        document.querySelector("#enc-btn").style.backgroundColor = "#333"
        document.querySelector("#dec-btn").style.backgroundColor = "#222"
        document.querySelector("#result").style.display = "none"
        document.querySelector("#main>h1 span").style.rotate = "360deg"
    })

    document.querySelector("#encryt-btn").addEventListener("click", function(){
        document.querySelector("#result").style.display = "block"
    })
    
    document.querySelector("#decryt-btn").addEventListener("click", function(){
        document.querySelector("#result").style.display = "block"
    })
}
convert();
decrypt();
btnClick();

// var arr = ["rohit",23,"Kol"]

// localStorage.setItem("array",JSON.stringify(arr))

// console.log(JSON.parse(localStorage.getItem("array")))