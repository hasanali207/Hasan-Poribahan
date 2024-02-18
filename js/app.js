const AllseatName = document.getElementsByClassName('seat-name');
let selectSeatNumber = 0;
const ticketPrice = document.getElementById('ticket-price').innerText
for(seatName of AllseatName){
        seatName.addEventListener('click', function(event){
        
        event.target.style.backgroundColor = '#1DD100';
        event.target.style.color = '#fff';
        event.target.style.borderRadius = '6px';
        event.target.setAttribute('disabled', 'true')
        
        selectSeatNumber = selectSeatNumber + 1;
        setInnerText('select-seat-number', selectSeatNumber)
// Append Content 
    const getSeatName = event.target.innerText;           
    const appendContainer = document.getElementById('append-selected-seat') ;   
     const newElement = document.createElement('div');
     newElement.style.display = 'flex'
     newElement.style.justifyContent = 'space-between'
     newElement.style.padding = '10px 0'
    const p1  = document.createElement('p')
    p1.innerText = getSeatName;
    const p2  = document.createElement('p')
    p2.innerText = "Economy Class";
    const p3  = document.createElement('p')
    p3.innerText = ticketPrice;
    newElement.appendChild(p1)
    newElement.appendChild(p2)
    newElement.appendChild(p3)
    appendContainer.appendChild(newElement)
    console.log(newElement);
 const tatalCost = document.getElementById('tatal-cost').innerText
    


    })
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}



// const selectSeatNumber = getTextElementValueById('current-life');
// const updatedLife = selectSeatNumber - 1;
// setTextElementValueById('selectSeatNumber', updatedLife);

// if(updatedLife === 0){
//     gameOver();
// }


// function getInputValueById(inputFieldId){
//     const inputField = document.getElementById(inputFieldId);
//     const inputValueText = inputField.value;
//     const inputValue = parseFloat(inputValueText);
//     // console.log(inputValue);
//     return inputValue;
// }

// function setInnerTextById(elementId, area){
//     const element = document.getElementById(elementId);
//     element.innerText = area;
// }