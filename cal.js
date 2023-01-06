let billinputDiv = document.querySelectorAll('input')[0]
let tipInputDiv = document.querySelectorAll('input')[1]
let totalDiv = document.querySelector('.total')
let noOfpeopleDiv = document.querySelector('#span')

 let noOfpeople = Number(noOfpeopleDiv.innerText)


const buttons = document.querySelectorAll('button').length
const inputKey =document.querySelectorAll('input').length
for (let index = 0; index < inputKey; index++) {
    document.querySelectorAll('input')[index].addEventListener('keyup',calculateBill)
}
    
        function calculateBill() {

            let billInput = Number(billinputDiv.value)
            let tipInput = Number(tipInputDiv.value)
            if (billInput === NaN){
                alert('use number')
            }
  
            let TipPer = tipInput/ 100
            let  TipAmout = billInput * TipPer
          let totalAmout = TipAmout + billInput
          let totalperPerson = totalAmout/ noOfpeople
            totalDiv.innerHTML = `$${ Number(totalperPerson.toFixed(2))}`
         }
  


         for (let index = 0; index< buttons; index++) {
    document.querySelectorAll('button')[index].addEventListener('click', function (e) {
        
         //clickedbtn = e.target.innerText // another way
        const clickedbtn = this.innerText
        if(clickedbtn=== '+')
    {
       increasePeople()
    }else if(clickedbtn ==='-'){
        decreasePeople()
    }
    })

    
 }
    

let increasePeople=()=>{
    noOfpeople += 1
    noOfpeopleDiv.innerText = noOfpeople
    // calculate the bill based on the new number of people
   calculateBill()
}

let decreasePeople =()=>{
    // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
    if (noOfpeople <=1){ 
        return
    }
    noOfpeople -= 1
    noOfpeopleDiv.innerText = noOfpeople
    // calculate the bill based on the new number of people
    calculateBill()
}

