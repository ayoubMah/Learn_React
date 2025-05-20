const book = {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
}

const summary = `${book.title} is a book`
console.log(summary);

const val = 199 ;
let op = val > 100 ? "yes" : "NO";
console.log(op);

let o = (s , e) => s + e ;
console.log(o(8,7));

const i  = [1,2,3,4,5].map((mul) => mul * 2 );
console.log(i);



let arr = [1,2,3,4,5]
const newArr = arr.filter((i) => i > 3);
console.log(newArr);

console.log(fetch("https://jsonplaceholder.typicode.com/todos/3")
    .then((res) => res.json())
    .then((data) => console.log(data)));



async function getTodos(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data  =  await res.json();
    console.log (data);
}
getTodos();
