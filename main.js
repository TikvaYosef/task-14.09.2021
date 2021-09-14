
// builtin loop functions


// let names = ["tikva", "yosef", "keren", "yafit", "eden"]

// names.forEach((item, index) => {
//     console.log(item, index)
// })


// let num = [5, 45, 21, 8, 96, 32, 14]

// num.forEach((item, index) => {
//     console.log(item, index)
// })

// num.forEach((item) => {
//     if (item%2 == 0){
//         console.log(item,"yes")

//     }else{
//         console.log(item, "no")
//     }
// })





// let objects = [
//     { name: "objectA", num: 1 },
//     { name: "objectB", num: 2 },
//     { name: "objectc", num: 3 },

// ]
// for(const object of objects){
//     console.log(object)
// }

// var objects = { name: "objectA", num: 1 }


// for (const key in objects) {
//     console.log(key , objects[key])

// }


// עבודת בית 


// שאלה 1
// נתון מערך של כתבות: כותרת, מחבר, תאריך

// let articles = [
//     { title: "titleA", author: "authorA", date: " 18/08/09" },
//     { title: "titleB", author: "authorB", date: " 20/02/20" },
//     { title: "titleB", author: "authorB", date: " 11/01/07" },
// ]


// // הדפס את כל הכתבות בעזרת forEach

// articles.forEach((article) => {
//         console.log(article)
//     })

// // הדפס את כל הכתבות בעזרת for-of

// for(const article of articles) {
//     console.log(article)

// }   


// שאלה 2
// נתון מערך של אובייקטים
// הדפס את כל ה- key וה-value של כל האובייקטים- שילוב לולאה + forIN



// for (let i = 0; i < articles.length; i++) {
//     for (const key in articles[i]) {
//         console.log(key)

//     }
//     console.log(articles[i].title , articles[i].author , articles[i].date)

// }



// שאלה 3
// // נתון מערך של 4 ספרים: שם, מחבר ומחיר:

// let books = [
//     { name: "bookA", author: "authorA", price: 150 },
//     { name: "bookB", author: "authorB", price: 180 },
//     { name: "bookC", author: "authorC", price: 160 },
//     { name: "bookD", author: "authorD", price: 200 },
// ]



// for (const item of books) {
//     console.log(item.name);
// }
// // הדפס את כל המחברים של הספרים

// for (const item of books) {
//     console.log(item.author);
// }



// שאלה 4 

let numbers = [ 
    12,8,40,5,71,10
]


let sum = 0 ;
numbers.forEach((element)=>{
    sum += element
})
console.log(sum);

let sumTwo = 0;
for (const item of numbers) {
    sumTwo += item
}
console.log(sumTwo);