let firstName = document.getElementById('firstName');
const regExpNames = /^[a-zA-Z]{3,10}$/;
firstName.addEventListener('input',()=>{
  if(regExpNames.test(firstName.value)){
    document.getElementById('firstError').style.display="none";
    document.getElementById('firstName').style.borderColor="green";
  }
  else{
    document.getElementById('firstError').style.display="inline";
    document.getElementById('firstName').style.borderColor="#D35400";

  }
});

let lastName = document.getElementById('lastName');
lastName.addEventListener('input',()=>{
  if(regExpNames.test(lastName.value)){
    document.getElementById('lastError').style.display="none"
    document.getElementById('lastName').style.borderColor="green";
  }else{
    document.getElementById('lastError').style.display="inline";
    document.getElementById('lastName').style.borderColor="#D35400";
  }
})

let emailName = document.getElementById('emailName');
emailName.addEventListener('input',()=>{
  const regExpEmail =/^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,3}$/;
  if(regExpEmail.test(emailName.value)){
    document.getElementById('emailError').style.display="none";
    document.getElementById('emailName').style.borderColor="green";
  }else{
    document.getElementById('emailError').style.display="inline";
    document.getElementById('emailName').style.borderColor="#D35400";
  }
})

let mobileName = document.getElementById('mobileName');
mobileName.addEventListener('input',()=>{
  const regExpMobile = /^[0-9]{10}$/;
  if(regExpMobile.test(mobileName.value)){
    document.getElementById('mobileError').style.display='none';
    document.getElementById('mobileName').style.borderColor="green";
  }else{
    document.getElementById('mobileError').style.display='inline';
    document.getElementById('mobileName').style.borderColor="#D35400";
  }
})

let passwordName = document.getElementById('passwordName');
passwordName.addEventListener('input',()=>{
  const regExpPassword =/^[a-zA-Z0-9\@_-]{8,16}$/;
  if(regExpPassword.test(passwordName.value)){
    document.getElementById('passwordError').style.display='none';
    document.getElementById('passwordName').style.borderColor="green";
  }else{
    document.getElementById('passwordError').style.display='inline';
    document.getElementById('passwordName').style.borderColor="#D35400";
  }
})
document.getElementById('buttonClick').addEventListener('click',(e)=>{
  e.preventDefault()
  checkError();
})
function checkError(){
  let checkBox = document.querySelectorAll('input');
  let errorBox = [];
  const regExpNames = /^[a-zA-Z]{3,10}$/;
  const regExpEmail =/^[a-zA-Z0-9.\-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,3}$/;
  const regExpMobile = /^[0-9]{10}$/;
  const regExpPassword =/^[a-zA-Z0-9\@_-]{8,16}$/;
  let firstName = document.getElementById('firstName');
  let lastName = document.getElementById('lastName');
  let emailName = document.getElementById('emailName');
  let mobileName = document.getElementById('mobileName');
  let passwordName = document.getElementById('passwordName');

      if(regExpNames.test(firstName.value) && regExpNames.test(lastName.value) && regExpEmail.test(emailName.value) && regExpMobile.test(mobileName.value) && regExpPassword.test(passwordName.value)){
        firstName.value ="";
        lastName.value ="";
        emailName.value ="";
        mobileName.value ="";
        passwordName.value ="";
        alert('Submitted Successfully')
    }else{

      checkBox.forEach((elem)=>{
        if(regExpNames.test(elem.value) || regExpEmail.test(elem.value) || regExpMobile.test(elem.value) || regExpPassword.test(elem.value)){
          document.getElementById('headError').style.display="inline";
          setTimeout(()=>{
            document.getElementById('headError').style.display="none";
          },2000);
        }
          else{
            errorBox.push(elem);
            document.getElementById('headError').style.display="inline";
            setTimeout(()=>{
              document.getElementById('headError').style.display="none";
            },2000);
          }
      })
    }
  errorBox.forEach((e)=>{
    document.getElementById(e.id).style.borderColor='red';
    let nextElem = document.getElementById(e.id).nextElementSibling;
    nextElem.style.display="inline";
  })
}