//number one
function seerToMon(seer){
    // this condition will convart seer to mon
    if(typeof seer != "number"){
        return "please give a type of number";
    }
    if( seer < 0){
        return "please give a positive number"
    }
    let mon = seer / 40;
    return mon;
}
//call
let seer = 80;
console.log(seerToMon(seer));
//end  number one


// problem number two
function totalSales(shartQuantity, pantQuantity, shoesQuantity){
    //this condition will convart total sale
    if(typeof shartQuantity && pantQuantity && shoesQuantity <= 0){
        return "there is no sales today";
    }
    const perShart = 100;
    const perpant = 200;
    const pershoes = 500;
    const perShartQuantity = shartQuantity * perShart;
    const perpantQuantity = pantQuantity * perpant;
    const perShoesQuantity = shoesQuantity * pershoes;

    const totalCart = perShartQuantity + perpantQuantity + perShoesQuantity;

    return totalCart;
}
const friestOption = totalSales(1, 4, 1);
console.log(friestOption);
//end  number two


//start  number three
function deliveryCost(product){
    const frist100shirst = 100;
    const Second100shirst = 80;
    const restOfTheshirst = 50;

    //this Condition will not accept Nagitive Value;
    if(product < 0 || typeof product != 'number'){
        return "Please Enter a Valid Number";
    } else if(product <= 100){
        //Frist 100 items cost
        const frist100shirtsTotal = frist100shirst * product;
        return frist100shirtsTotal;
    }else if(product <= 200){
        //second 100 itmes Cost 
        const first100DeliveryCost= 100 * frist100shirst;
        const restOfShirts = product-100;
        const Second100DeliveryCost = restOfShirts *Second100shirst;
        const second100Total=first100DeliveryCost+Second100DeliveryCost;
        return second100Total;
    }else{
        //Rest Of The Shirts Delivery Cost
        const first100DeliveryCost= 100 * frist100shirst;
        const Second100DeliveryCost = 100 *Second100shirst;
        const restOfShirts=product-200;
        const restOfShirtDeliveryCost= restOfShirts * restOfTheshirst;
        const inTotalDeliveryCost = first100DeliveryCost + Second100DeliveryCost + restOfShirtDeliveryCost;
        return inTotalDeliveryCost;
    }

}
let grandTotal=deliveryCost(10);
console.log(grandTotal);
//end number three


//start  number four
let names = ['omur shorif', 'robel hossen', 'jaber', 'sondur ali', 'akash', 'batash'];
function perfectFriend(names){
    //this condition will not accept a string type object
    let number = names.every(e => typeof(e) === 'string');
    if(number){
        for(let i = 0; i < names.length; i++){
            if(names[i].length == 5){
                return names[i];
            }
        }
    }else{
        return "array element of not a number";
    }
}
console.log(perfectFriend(names));
//end  number four
