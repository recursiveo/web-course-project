

function logoutFunc()
{
    debugger;
    window.location.href = "loginreg.html";
    var tempObj = {}
    sessionStorage.CurrentUser=JSON.stringify(tempObj);
	alert("alert!");
}
