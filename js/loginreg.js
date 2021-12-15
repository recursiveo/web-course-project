var userDetailsArray = []
function AddUserData(name,email,password)
{
  debugger;
  var userObj = {
      name:name,
      email:email,
      password:password
  }
  if(sessionStorage.UserData != undefined)
    {
        userDetailsArray = JSON.parse(sessionStorage.UserData);
    }
  var found = false;
  for(var i =0;i<userDetailsArray.length;i++)
  {
      if(userDetailsArray[i].email === userObj.email)
      found = true 
  }
  if(!found)
  {
  userDetailsArray.push(userObj);
  console.log(name,email,password);
  sessionStorage.UserData=JSON.stringify(userDetailsArray);
  document.getElementById("signUpForm").reset();
  document.getElementById("flip").checked = false;
  }
  else
  {
    document.getElementById("flip").checked = true;
      alert("Email already registered");
  }
  
}

function CheckUserData(email,password)
{
    debugger;
    var userArr = []
    if(sessionStorage.UserData){
        userArr = JSON.parse(sessionStorage.UserData);
    }
    //var found = userArr.some(el => el.email === email);
    console.log(email,password)
    var user = userArr.find(x => x.email === email)
    if((user) && (user.password === password))
    {
        alert("login Successfull");
        sessionStorage.CurrentUser=JSON.stringify(user);
        window.location.assign("home.html")
    }
    else
    {
        alert("Invalid Username or password");
    }
}
