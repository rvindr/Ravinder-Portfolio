const counters = document.querySelectorAll('.counter');
const speed =200;

counters.forEach(counter =>{
    const updateCount=()=>{
        // + add for change type string to num 
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count<target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 5)
        }else{
            counter.innerText = target;
        }

    }
    updateCount();
});