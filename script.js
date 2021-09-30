let validator = {
    handleSubmit:(e)=>{
        e.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        validator.clearErrors();

        for(let i=0;i<inputs.length;i++){
            let input = inputs[i];
            let check = validator.checkInput(input);
            if(check !== true){
                send=false;
                validator.showError(input, check);
            }
        }

        if(send){
            form.submit();
        }
    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');
        if(rules !== null){
            rules = rules.split('|');
            for(let i in rules) {
                let rDetais = rules[i].split('=');
                switch(rDetais[0]){
                    case 'required':
                        if(input.value == ''){
                            return 'Campo obrigatório!';
                        }
                    break;
                    case 'min':

                    break;
                }
            }
        }
        return true;
    },
    showError:(input, error)=>{
        input.style.borderColor = '#FF0000';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors:()=> {
        let errorElements = document.querySelectorAll('.error');
        for (let i=0;i<errorElements.length;i++) {
            errorElements[i].remove();
        }
    }
};

let form = document.querySelector('.validator');
form.addEventListener('submit', validator.handleSubmit);