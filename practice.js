// 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.

// const even = [1, 3, 5, 7, 9];
// // const evenTotal = even.map(e => e + 1);
// // console.log(evenTotal);
// for (let i = 0; i < even.length; i++) {
//     const evenTotal = even[i] + 1;
//     console.log(evenTotal)
// }

// 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.

// const devide = [33, 50, 79, 78, 90, 101, 30];
// // const devideTotal = devide.filter(f => f % 10 === 0);
// // console.log(devideTotal)

// // 3) Now do the same task of question 2. But do this using array.find()
// // method. Then compare the output of question 2 & question 3.

// const devideTotal = devide.find(f => f % 10 === 0);
// console.log(devideTotal)

// 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.

// const arr = [1, 9, 17, 22];
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
//     console.log(sum)
// }
// const arrReduce = arr.reduce((x, y) => x + y)
// console.log(arrReduce)

// 1) Challenging Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?
// 20 + 15 + 22 = 57 . The output will be 57
// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.

// const people = [
//     { name: 'Meena', age: 20 },
//     { name: 'Rina', age: 15 },
//     { name: 'Suchorita', age: 22 },
// ];
// const peopleTotal = people.reduce((x, y) => {
//     return x + y.age
// }, 0)
// console.log(peopleTotal)

// Practice Problem: Access Object values
// const student = {
//     name: 'Fredie',
//     age: 26
// };
// console.log(student.age)

// Practice Problem: Access Object values
// let data = {
//     location: [
//         {
//             latitue: '3.5',
//             longitude: '455',
//             city: 'hyrabad',
//             country: 'india'
//         }
//     ]
// }
// console.log(data.location[0].city)

// Practice Problem: Access Object Values

// const type = {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// }

// console.log(type.email)
// console.log(type.address)
// console.log(type.address.city)
// console.log(type.address.geo.lat)
// console.log(type.company.name)

// ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 

// const list = {
//     name: 'jajak',
//     address: 'komolatoli'
// }
// let template = `tar name ${list.name} and tar thikana ${list.address}`;
// console.log(template)

// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 

// const devide = x => x / 5;
// console.log(devide(5))

// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 

// const multiplay = (x, y) => {
//     const sum = x + y;
//     const plus = sum + 2
//     const a = plus * sum
//     console.log(a)
// }
// multiplay(5, 10)

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 

// const paramiter = (x, y, z) => {
//     return multiplay = x * y * z;
// }
// const retur = paramiter(100, 150, 250)
// console.log(retur)

// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

// const multiplay = (x, y) => {
//     const a = x + 2
//     const b = y + 2
//     const s = a * b;
//     return s
// }
// console.log(multiplay(10, 20));

// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

// const arr = [5, 10, 15, 20, 25, 30];
// const result = arr.map(a => a * 5)
// console.log(result)

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

// const arr = [5, 10, 15, 20, 25, 30];
// const result = arr.filter(a => a % 2 === 1)
// console.log(result)

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

// const obj = [
//     {id: 1, name: 'i-phone', price: 50000},
//     {id: 2, name: 'i-phone', price: 5000},
//     {id: 3, name: 'i-phone', price: 4000},
//     {id: 4, name: 'i-phone', price: 8000},
//     {id: 5, name: 'i-phone', price: 6000},
//     {id: 6, name: 'i-phone', price: 3000},
// ];
// const main = obj.find(f => f.price === 5000)
// console.log(main)

// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

// const {id, name, price} = {id: 1, name: 'i-phone', price: 50000};
// console.log(price);

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 

// const {id, name, price:three} = {id: 1, name: 'i-phone', price: 50000};
// console.log(three);

// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

// const three = (x, y, z = 7) => {
//     return x + y + z
// }
// console.log(three(10, 3))