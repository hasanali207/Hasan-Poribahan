const allseatName = document.getElementsByClassName('seat-name');
let selectSeatNumber = 0;
const ticketPrice = getTextElementValueById('ticket-price')
let SeatNumber = 4
for(seatName of allseatName){
        seatName.addEventListener('click', function(event){
        
        event.target.style.backgroundColor = '#1DD100';
        event.target.style.color = '#fff';
        event.target.style.borderRadius = '6px';
        event.target.style.cursor = 'not-allowed';
        event.target.style.pointerEvents = 'none';
        
    
        selectSeatNumber = selectSeatNumber + 1;
        setInnerText('select-seat-number', selectSeatNumber)

    // SeatNumberCoundown up to down
        const availableSeatNumber = getTextElementValueById('available-seat');
        const updatedSeat = availableSeatNumber - 1;
        setInnerText('available-seat', updatedSeat);
        if(updatedSeat === 0){
            alert('No Seat Is Avaiable');
           
              }
        
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


 let totalCost =  getTextElementValueById('total-cost');
     let  sumOfTotalCost = totalCost + ticketPrice
      
      setInnerText('total-cost',sumOfTotalCost)

      let grandTotal = getTextElementValueById('grand-total');
       let grandTotalCost = grandTotal + ticketPrice;
      setInnerText('grand-total', grandTotalCost)


      const calculateButton = document.getElementById('calculate-btn');
        const discountCodeInput = document.getElementById('discount-code')
        calculateButton.addEventListener('click', function(event){
            
            const couponCodeWrapper = document.getElementById('coupon-code-area');
            const discountCode = discountCodeInput.value
           if(SeatNumber <= selectSeatNumber){
            if(discountCode === "NEW15"){
                grandTotalCost = grandTotalCost - (grandTotalCost * 0.15)
                setInnerText('grand-total', grandTotalCost)
                couponCodeWrapper.style.display = 'none'
            }
            else if(discountCode === "Couple20"){
                grandTotalCost = grandTotalCost - (grandTotalCost * 0.20)
                setInnerText('grand-total', grandTotalCost)
                couponCodeWrapper.style.display = 'none'
            }
            
           }

            
        })


        const phone = document.getElementById('phone');
        const submitButton = document.getElementById('submit-btn')
        submitButton.querySelector('click', function(){
            event.par
        })

      
      

  
    })
}




function setInnerText(id,value){
    document.getElementById(id).innerText = value;
    return;
}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
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
//     // console.log(inputValue);
//     return inputValueText;
// }

// // function setInnerTextById(elementId, area){
// //     const element = document.getElementById(elementId);
// //     element.innerText = area;
// // }