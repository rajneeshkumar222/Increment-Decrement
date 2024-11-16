const countvalue = document.querySelector('#counter');
//  queryselector ke jagah pe getelement by id bhi kr skte ho
const increment =() =>{
        // isko ham function increment() se bhi kr sktr the 
    // get the value 
    let value=parseInt(countvalue.innerText);  // parseInt string ko int me badlta h
    // update the value
    value=value+1;
    // set the value onto UI
    countvalue.innerText=value;
};
const decrement = ()=>{
    // isko ham function decrement() se bhi kr sktr the 
    // get the value 
    let value=parseInt(countvalue.innerText);  // parseInt string ko int me badlta h
    // update the value
    value=value-1;
    // set the value onto UI
    countvalue.innerText=value;
};