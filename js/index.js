let userType = true

function userTypeChnager(){
    if(userType == true){
       
        document.querySelector('#student_login').src='./img/Alumni_login.png';
    }
    else{
        document.querySelector('#student_login').src='./img/student_login.png';
    }
    userType = !userType



    
}