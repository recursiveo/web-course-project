function getUser()
{
    debugger;
    var CurrentUser = JSON.parse(sessionStorage.CurrentUser);
    document.getElementById('NameTag').innerHTML = "Welcome "+CurrentUser.name;
    document.getElementById('CardNameTag').innerHTML = CurrentUser.name;
    document.getElementById('CardEmailTag').innerHTML = CurrentUser.email;
}

function logoutFunc()
{
    debugger;
    window.location.href = "loginreg.html";
    var tempObj = {}
    sessionStorage.CurrentUser=JSON.stringify(tempObj);
}

function editDetails(type)
{
    if(type =='name')
    {
       document.getElementById('detailsDiv').innerHTML = " <br><br><br><br><br>"+
       "<table style='margin: auto;'>"+
           "<tr><td>"+ 
               "<b>Please Enter your New Name</b>"+
           "</td>"+ 
           "<td>"+ 
               "<input style='height: 30px;' type='text' value='' id='newName'>"+
           "</td></tr>"+
           "<tr><td>"+
               "<b>Please Enter your password</b>"+
           "</td>"+ 
           "<td>"+ 
               "<input style='height: 30px;' type='password' value='' id='userPassword'>"+
           "</td></tr>"+
           "<tr><td><br><br>"+ 
           "<button onclick='cancel()'>Cancel</button>"+
           "</td> "+
           "<td><br><br>"+ 
               "<button onclick='UpdateName()'>Update Name</button>"+
           "</td></tr>"+
       "</table> "
    }
    if(type == 'email')
    {
        document.getElementById('detailsDiv').innerHTML = " <br><br><br><br><br>"+
       "<table style='margin: auto;'>"+
           "<tr><td>"+ 
               "<b>Please Enter your New Email</b>"+
           "</td>"+ 
           "<td>"+ 
               "<input style='height: 30px;' type='email' value='' id='newEmail'>"+
           "</td></tr>"+
           "<tr><td>"+
               "<b>Please Enter your password</b>"+
           "</td>"+ 
           "<td>"+ 
               "<input style='height: 30px;' type='password' value='' id='userPassword'>"+
           "</td></tr>"+
           "<tr><td><br><br>"+ 
           "<button onclick='cancel()'>Cancel</button>"+
           "</td> "+
           "<td><br><br>"+ 
               "<button onclick='UpdateEmail()'>Update Email</button>"+
           "</td></tr>"+
       "</table> ";
    }
    if(type=='pass')
    {
        document.getElementById('detailsDiv').innerHTML = " <br><br><br><br><br>"+
       "<table style='margin: auto;'>"+
           "<tr><td>"+ 
               "<b>Please Enter your New Password </b>"+
           "</td>"+ 
           "<td>"+ 
               "<input style='height: 30px;' type='password' value='' id='newPassword'>"+
           "</td></tr>"+
           
           "<tr><td>"+ 
               "<b>Please Confirm New Password </b>"+
           "</td>"+ 
           "<td>"+ 
               "<input style='height: 30px;' type='password' value='' id='ConfirmNewPassword'>"+
           "</td></tr>"+

           "<tr><td>"+
               "<b>Please Enter your Current password</b>"+
           "</td>"+ 
           "<td>"+ 
               "<input style='height: 30px;' type='password' value='' id='userPassword'>"+
           "</td></tr>"+
           "<tr><td><br><br>"+ 
           "<button onclick='cancel()'>Cancel</button>"+
           "</td> "+
           "<td><br><br>"+ 
               "<button onclick='UpdatePassword()'>Update Password</button>"+
           "</td></tr>"+
       "</table> ";
    }
    //document.getElementById('detailsDiv').innerHTML = "<input type='text' value=''>"
    //var CurrentUser = JSON.parse(sessionStorage.CurrentUser);
    //document.getElementById('detailsDiv').innerHTML = "<table>   <tr>        <td>Name</td>        <td><input type='text' value="+CurrentUser.name +"readonly='true'></td>    </tr>    </table>";
}

function UpdateName()
{
    debugger;
    var CurrentUser = JSON.parse(sessionStorage.CurrentUser);
    //document.getElementById('newName').value,document.getElementById('userPassword').value
    var newName = document.getElementById('newName').value;
    var password = document.getElementById('userPassword').value;
    if(password == CurrentUser.password)
    {
        var tempObj ={
            
                name:newName,
                email:CurrentUser.email,
                password:password
            
        }
        sessionStorage.CurrentUser=JSON.stringify(tempObj);
        CurrentUser = JSON.parse(sessionStorage.CurrentUser);
        var userArr = JSON.parse(sessionStorage.UserData);
        for(var i=0; i<userArr.length;i++)
        {
            if(userArr[i].email === CurrentUser.email)
            {
                userArr[i].name = CurrentUser.name;
                userArr[i].password = CurrentUser.password;
            }
        }
        
        sessionStorage.UserData=JSON.stringify(userArr);
        alert("Name Successfully Updated");
        window.location.href = "profile.html"
    }
    else
    {
        alert("Incorrect Password");
    }
}

function UpdateEmail()
{

    debugger;
    var CurrentUser = JSON.parse(sessionStorage.CurrentUser);
    var userArr = JSON.parse(sessionStorage.UserData);
    //document.getElementById('newName').value,document.getElementById('userPassword').value
    var newEmail = document.getElementById('newEmail').value;
    var password = document.getElementById('userPassword').value;
    var isEmail = ValidateEmail(newEmail)
    var oldEmail = CurrentUser.email;
    if(isEmail)
    {

        if(password == CurrentUser.password)
        {
        
            var found = false;
            for(var i =0;i<userArr.length;i++)
            {
                if(userArr[i].email === newEmail)
                found = true 
            }

        if(found){
            alert("User With same Email already Exist");
        }
        else
        {
            var tempObj ={
            
                name:CurrentUser.name,
                email:newEmail,
                password:password
            }
            sessionStorage.CurrentUser=JSON.stringify(tempObj);
            CurrentUser = JSON.parse(sessionStorage.CurrentUser);
            userArr = JSON.parse(sessionStorage.UserData);
            for(var i=0; i<userArr.length;i++)
            {
                if(userArr[i].email === oldEmail)
                {
                userArr[i].email = CurrentUser.email;
                userArr[i].password = CurrentUser.password;
                }
            }
            sessionStorage.UserData=JSON.stringify(userArr);
            alert("Email Successfully Updated");
            window.location.href = "profile.html"
        }
        
        }
        else
        {
        alert("Incorrect Password");
        }

    }
}

function UpdatePassword()
{
    debugger;
    var CurrentUser = JSON.parse(sessionStorage.CurrentUser);
    //document.getElementById('newName').value,document.getElementById('userPassword').value
    var newPassword = document.getElementById('newPassword').value;
    var confirmNewPassword = document.getElementById('ConfirmNewPassword').value;
    var password = document.getElementById('userPassword').value;
    if(newPassword == confirmNewPassword)
    {

        if(password == CurrentUser.password)
        {
        var tempObj ={
            
                name:CurrentUser.name,
                email:CurrentUser.email,
                password:newPassword
            
        }
        sessionStorage.CurrentUser=JSON.stringify(tempObj);
        CurrentUser = JSON.parse(sessionStorage.CurrentUser);
        var userArr = JSON.parse(sessionStorage.UserData);
        for(var i=0; i<userArr.length;i++)
        {
            if(userArr[i].email === CurrentUser.email)
            {
                userArr[i].name = CurrentUser.name;
                userArr[i].password = CurrentUser.password;
            }
        }
        
        sessionStorage.UserData=JSON.stringify(userArr);
        alert("Password Successfully Updated");
        window.location.href = "profile.html"
        }
        else
        {
        alert("Incorrect Current Password");
        }


    }
    else
    {
        alert("New and Confirm Password Doesnot match!");
    }
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
        return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


function cancel()
{
    window.location.href = "profile.html"
}