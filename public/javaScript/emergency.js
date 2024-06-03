const email = document.getElementById("email");
const emergency = document.querySelector("#emergency");
const acctName = document.querySelector("em").innerHTML;
let arr = [];

emergency.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("clicked");
  for(x in arr){
  console.log(arr[x].email+"g");
  let subject = `......Emergency Call We Are From IAMSAFE ORGANIZATION.....`;
  let tbody =  `I need to talk to you urgently. [${acctName}] is in trouble.
  It's an emergency. [${acctName}] needs your help.
  Something's happened to [${acctName}]. You need to come quickly.
  Urgent: [${acctName}] is in danger. Please, we need your assistance.
  This is serious. [${acctName}] needs you now.
  Proof: She is Your [${arr[x].rel}]`;
  console.log(arr[x].email+"ggggg");
  console.log(subject,tbody);
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "IAMSAFE@gmail.com",
    Password: "6b1dfb20-0850-4617-b927-2e83a2348a7f",
    To: arr[x].email,
    From: "gauravtakhi68@gmail.com",
    Subject: subject,
    Body: tbody
  }).then(
    message => alert(message)
  );
}
});

const insert = document.querySelector("#insert");
insert.addEventListener("click",()=>{
    document.querySelector("form").classList.add("active");
});

const submit = document.getElementById("SUBMIT");


submit.addEventListener("click",()=>{
   let username = document.querySelector("#username").value;
   let email = document.querySelector("#email").value;
   let rel = document.querySelector("#rel").value;
   let index = 0;
   if(username != "" && email != "" && rel !=""){
    arr.push({id:++index,name:username,email:email,rel:rel});
   }
   showData();
   document.querySelector("form").classList.remove("active");
});

function showData(){
    let data = "<table border='3' align=center cellpadding='3' cellspacing='3'><tr><th>ID</th><th>Name</th><th>Email</th><th>Relation</th></tr>";
    for(x in arr){
       data += `<tr><td>${arr[x].id}</td><td>${arr[x].name}</td><td>${arr[x].email}</td><td>${arr[x].rel}</td></tr>`;
    }
   data+=`</table>`;
   document.querySelector("table").innerHTML = data;
}
