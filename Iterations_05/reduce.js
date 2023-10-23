const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curvalue) => acc + curvalue, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Python",
        Price: 999
    },
    {
        itemName: "Datascience",
        Price: 999
    },
    {
        itemName: "Cloud",
        Price: 999
    }
 ]
const price2 = shoppingCart.reduce( (acc, item) => acc + item.Price  ,0 )
 console.log(price2);