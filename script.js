let validator = {
    handleSubmit:(e)=>{
        e.preventDefault();

        let send = true;

        let inputs = form.querySelectorAll('input');

        for(let i=0;i<inputs.length;i++){
            let input = inputs[i];
            console.log(input);
        }
        send =false;
        if(send){
            form.submit();
        }
    }
};

let form = document.querySelector('.validator');
form.addEventListener('submit', validator.handleSubmit);