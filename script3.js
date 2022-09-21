function checkData(){
    var name=document.getElementsByTagName("Fname").value;
    var gender=document.getElementsByName("gender").value;
    var hobby=document.getElementById("hobby").value;

    if(name==""){
        alert("Enter Employee Name");
        return false;
    }
    else if(name.search(/[0-9]/)!=-1){
        alert("name should be is characters");
        return false;
    }
    else if(name.lenght <= 3||name.lenght >= 17){
        alert("name length must have 4 to 16 character");
        return false;
    }
    else if(gender==""){
        alert("Select gender");
        return false;
    }
    else if(!hobby.checked){
        alert("Select hobby");
        return false;
    }            
    else{
        alert("All done")
    }
}


