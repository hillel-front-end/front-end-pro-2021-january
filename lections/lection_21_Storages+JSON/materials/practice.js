

function moduleAuth() {
    
    const form = document.querySelector('#auth-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const data = serializeForm(this);
        localStorage.setItem(this.id, data);
    });

    const checkAllowElementForm = (item) => {
        return item.tagName.toLowerCase() != 'button' && item.type != 'button';
    }

    function serializeForm(form) {
        const payload = {};

        for(let i = 0; i < form.length; i++) {
            const item = form[i];

            if (checkAllowElementForm(item)) {
                item.name && (payload[item.name] = item.value);
            }
        }

        return JSON.stringify(payload);
    }

    function setFormDataFromStore(form) {
        if (!form || !form.id) return;
    
        const data = localStorage.getItem(form.id);
        const parsedData = JSON.parse(data);
        

        for(let i = 0; i < form.length; i++) {
            const item = form[i];
    
            if (checkAllowElementForm(item)) {
                item.value = parsedData[item.name];
            }
        }
    }

   return {
       init: function() {
            setFormDataFromStore(form);
       }
   }
}


window.addEventListener('load', () => {
    const module = moduleAuth();

    module.init();
});