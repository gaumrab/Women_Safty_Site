function start(){
    gsap.from("#photo",{
        x: "-100%",
        duration:1,
        opacity:0,
        ease: "power1.out",
    });
    
    gsap.from("#login",{
        x: "100%",
        duration:1,
        opacity:0,
        ease: "power1.out",
    });
    
    
    document.getElementById("validate").addEventListener("click",()=>{
        window.alert("All Feilds are required to fill");
        let phone = document.getElementById("3").value;
        let pass = document.getElementById("4").value;
        let cpass = document.getElementById("5").value;
        let regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    
        let sortString = (str) => {
            return [...str].sort((a, b) => 
            a.localeCompare(b)).join("");
        }
    
       if(regex.test(phone) == false || sortString(phone) == "0123456789"){
           window.alert("Your Phone Number Is Not Valid, Try Again!");
       }else if(pass !== cpass){
           window.alert("Try Password Again!");
       }
       else{
           document.getElementById("6").style.display = "block";
           window.alert("Your Validation Done Successfully Click on the submit Button.");
       }
    
    });
}
start();




