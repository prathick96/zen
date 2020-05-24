function btnclk(){
    if( document.myForm.fullname.value == "" ) {
        alert( "Please provide all details" );
        return false;
    }
    else if (document.myForm.addr1.value == "" ) {
        alert( "Please provide all details" );
        return false;
    } 
    else if (document.myForm.addr2.value == "" ) {
        alert( "Please provide all details" );
        return false;
    }
    else if (document.myForm.city.value == "" ) {
        alert( "Please provide all details" );
        return false;
    }
    else if (document.myForm.state.value == "" ) {
        alert( "Please provide all details" );
        return false;
    }
    else if (document.myForm.zip.value == "" ) {
        alert( "Please provide all details" );
        return false;
    }
    else if (document.myForm.country.value == "" ) {
        alert( "Please provide all details" );
        return false;
    }
    else if (document.myForm.email.value == "" ) {
        alert( "Please provide all details" );
        return false;
    }
    else if (document.myForm.phone.value == "" ) {
        alert( "Please provide all details" );
        return false;
    }
    else {
        alert("Thank you!"); 
    }
}