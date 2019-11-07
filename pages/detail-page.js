
/*
function submitComment() {



    event.preventDefault()  //stop page from refreshing on click

    const inputField = document.getElementById("name")
    const name = inputField.value

    const inputFieldOne = document.getElementById("msg")
    const msg = inputFieldOne.value


    const comment = document.createElement("section")
    const h3 = document.createElement("h3") 
    const p = document.createElement("p")
    
    h3.innerHTML =  '${name} said:';
    p.innerHTML = msg;
    comment.classList.add("comment");
    comment.appendChild(h3);
    comment.appendChild(p);

    const commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);
    


    inputField.value = null;
    inputFieldOne.value = null;
    
    }
*/

// add event handler

function doesNotPassAllValidations(name, msg) {
    key = event.keyCode;
    if (!name || !msg) {
        alert('You forgot to fill in your name or message!')
        return true
       
    } 
    if (msg.length > 25 || name.length > 25) {
        alert('Your message is too long man')
        return true 
    } else {
        return false
    }}
    



function capitalizeFirstLetter(msg) {
    let restOfString = msg.slice(1, msg.length)
    let firstLetter = msg.slice(0,1)
    firstLetter = firstLetter.toUpperCase()
   
    msg = firstLetter + restOfString
    return msg
}
    







function submitComment() {
    // gather data


    event.preventDefault()  //stop page from refreshing on click

    const inputField = document.getElementById("name");
    let name = inputField.value;
    const textArea = document.getElementById("msg");
    const msg = textArea.value;
  
    if(doesNotPassAllValidations(name, msg)) {
        return null
    } else {

    name = capitalizeFirstLetter(name)
    
    // create the elements you need
    const comment = document.createElement("section");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
  
    // adjust the elements we created
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add("comment");
    comment.appendChild(h3);
    comment.appendChild(p);
  
    // display the elements on the page
    const commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);
  
    // reset form values

    
    inputField.value = null;
    textArea.value = null;

    // some console logs

  
    }


}
  






