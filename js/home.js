function getUser()
{
    var CurrentUser = JSON.parse(sessionStorage.CurrentUser);
    console.log(sessionStorage);
    document.getElementById('NameTag').innerHTML = "Welcome "+CurrentUser.name;
}

function logoutFunc()
{
    // debugger;
    window.location.href = "loginreg.html";
    var tempObj = {}
    sessionStorage.CurrentUser=JSON.stringify(tempObj);
}