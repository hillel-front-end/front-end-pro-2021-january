window.onload = function() {
    const forms = document.querySelectorAll('.form');

    forms.forEach((form, index) => {
       form.addEventListener('submit', event => {
           event.preventDefault();
           const payload = serializeForm(form);

           console.log(payload, 'payload');

           sendAjax({
               method: 'POST',
               url: 'http://localhost:3000/foo',
               success: function(response) {
                   console.log(response, 'resp');
                   nextStep(index, index + 1);   
               },
               body: payload
           })
       });
    });

 

    function nextStep(current, next) {
        if (!forms[next]) return;

        forms[current].classList.remove('center');
        forms[next].classList.add('center');
    }


};