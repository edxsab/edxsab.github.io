
function myFunction() {
    var verticalmenu = document.getElementById('verticalmenu');
    if(verticalmenu.style.display == "flex") {
        document.getElementById("verticalmenu").style.display = "none";
    }
    else document.getElementById("verticalmenu").style.display = "flex";
}

document.addEventListener('click', function handleClickOutsideBox(event) {
    var verticalmenu = document.getElementById('verticalmenu');
    var dropdownButton = document.getElementsByClassName('dropdownButton')[0];

    if ( !dropdownButton.contains(event.target) && verticalmenu.style.display == "flex" ) {
      document.getElementById("verticalmenu").style.display = "none";
    }
});

(function() {

    emailjs.init('m9EQs28T9-SK5qVRX');
})();

window.onload = function() {
    document.getElementById('contactform').addEventListener('submit', function(event) {
        event.preventDefault();

       
        this.contact_number.value = Math.random() * 100000 | 0;
        
        emailjs.sendForm('service_9utdalp', 'template_ekq675w', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById('grazie').style.display="block";
                document.getElementById('formid').style.display="none";
            }, function(error) {
                console.log('FAILED...', error);
            })
            ;
        
        
        
    });
    }
