// import { of } from 'rxjs';  
// import { map } from 'rxjs/operators';  
// map(x => x * x)(of(1, 2, 3, 4, 5))
// .subscribe(
//     (v) => console.log(`Output is: ${v}`)
// );


// import { from, Subject } from 'rxjs';
// import { multicast } from 'rxjs/operators';
// const source = from([1, 2, 3]);
// const subject = new Subject();
// const multicasted = source.pipe(multicast(subject));
// // These are, under the hood, `subject.subscribe({...})`:
// multicasted.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });
// multicasted.subscribe({
//   next: (v) => console.log(`observerB: ${v}`)
// });
// // This is, under the hood, `source.subscribe(subject)`:
// multicasted.connect();


// import { Observable } from 'rxjs';
// var observable = new Observable((observer) => {
//     observer.next('RXJS 101!');
//     observer.next('Welcome to RXJS!');
//     observer.complete();
//     observer.next('Bye');
// });
// observable.subscribe(
//     (x) => logItem(x), 
//     (error) => logItem('Error: ' + error), 
//     () => logItem('This is the first Example')
// );
// function logItem(val) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("list").appendChild(node);
// }


// import { from } from 'rxjs';  
// import { max } from 'rxjs/operators';  
// let list1 = [3, 7, 45, 22, 76, 11, 27];  
// from(list1).pipe(max((a,b)=>a-b)).subscribe(
//     x => console.log(`The Max value is ${x}`)
// );


///////////////////////////////// RxJS Operators ////////////////////////////////////////////
// import { of } from 'rxjs';  
// import { reduce, filter } from 'rxjs/operators';  
// let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);  
// let case1 = test1.pipe(  
//    filter(x => x % 2 === 0),  
//    reduce((acc, one) => acc + one, 0)  
// )  
// case1.subscribe(x => console.log(x));  


// import { interval } from 'rxjs';  
// import { take } from 'rxjs/operators';  
// let test = interval(1000);  
// let case1 = test.pipe(take(10));  
// case1.subscribe(x => console.log(x));  


//// Creation Operators ////

//1.ajax
// import { ajax } from 'rxjs/ajax';  
// import { map, catchError } from 'rxjs/operators';  
// const githubUsers = `https://api.github.com/users?per_page=2`;  
// const users = ajax.getJSON(githubUsers)  
// const subscribe = users.subscribe(  
//     res => console.log(res),  
//     err => console.error(err)  
// );  

// import { ajax } from 'rxjs/ajax';
// const githubUsers = `https://api.github.com/error`;  
// const users = ajax.getJSON(githubUsers)  
// const subscribe = users.subscribe(  
//     res => console.log(res),  
//     err => console.error(err)  
// );

// import { ajax } from 'rxjs/ajax';  
// const githubUsers = `https://api.github.com/error`;  
// const users = ajax({  
//   url: githubUsers,  
//   method: 'GET',  
//   headers: {  
//     /*some headers*/  
//   },  
//   body: {  
//     /*in case you need a body*/  
//   }  
// });  
// const subscribe = users.subscribe(  
//   res => console.log(res),  
//   err => console.error(`Error here: ${err}`)  
// );  


//2.from
// import { from } from 'rxjs';  
// let arr = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];  
// let test = from(arr);  
// test.subscribe(x => console.log(x));  

// import { from } from 'rxjs';  
// //emit result of promise  
// const promiseSource = from(new Promise(resolve => resolve('Hello Rxjs!')));  
// const subscribe = promiseSource.subscribe(val => console.log(val));  

// import { from } from 'rxjs';  
// import { take } from 'rxjs/operators';  
// function* generateDoubles(seed) {  
//    let i = seed;  
//    while (true) {  
//      yield i;  
//      i = 2 * i; // double it  
//    }  
// }  
// const iterator = generateDoubles(3);  
// const result = from(iterator).pipe(take(10));  
// result.subscribe(x => console.log(x));  


//3. fromEvent
// import { fromEvent } from 'rxjs';  
// const clicks = fromEvent(document, 'click');  
// clicks.subscribe(x => console.log(x));  

// import { fromEvent } from 'rxjs';  
// import { map } from 'rxjs/operators';  
// //create observable that emits click events  
// const source = fromEvent(document, 'click');  
// //map to string with given event timestamp  
// const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));  
// const subscribe = example.subscribe(val => console.log(`...${val}`));  


//4.fromEventPattern
// import { fromEventPattern } from 'rxjs';  
// function addClickHandler(handler) {  
//   document.addEventListener('click', handler);  
// }  
// function removeClickHandler(handler) {  
//   document.removeEventListener('click', handler);  
// }  
// const clicks = fromEventPattern(  
//   addClickHandler,  
//   removeClickHandler  
// );  
// clicks.subscribe(x => console.log(x));  

// import { fromEventPattern } from 'rxjs';   
// const nodeLikeRequest = (url, callback) => {  
//   setInterval(() => callback('zipper'), 1000);  
// }  
// const nodeLikeRequestAdaptor = callback => {  
//   nodeLikeRequest('some url', callback);  
// }  
// fromEventPattern(  
//   nodeLikeRequestAdaptor  
// ).subscribe(x=>console.log(`...${x}`));  
// // Whenever you click anywhere in the browser, DOM MouseEvent object will be logged.


//5.interval
// import { interval } from 'rxjs';  
// //emit value in sequence every 1 second  
// const source = interval(1000);  
// const subscribe = source.subscribe(val => console.log(val));  

// import { interval } from 'rxjs';  
// import { take } from 'rxjs/operators';  
// const numbers = interval(1000);  
// const takeFourNumbers = numbers.pipe(take(8));  
// takeFourNumbers.subscribe(x => console.log('The upcoming value is: ', x)); 


//6.of
// import { of } from 'rxjs';  
// //emits any number of provided values in sequence  
// const source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  
// const subscribe = source.subscribe(val => console.log(val));  

// import { of } from 'rxjs';  
// of([1, 2, 3, 4, 5])  
// .subscribe(  
//   next => console.log('The returned array is:', next),  
//   err => console.log('error:', err),  
//   () => console.log('the end'),  
// );

// import { of } from 'rxjs';  
// //emits values of any type  
// const source = of({ name: 'Alexa' }, function hello() {  
//   return 'Hello';  
// });  
// const subscribe = source.subscribe(val => console.log(val));  


//7.range
// import { range } from 'rxjs';  
// //emit 1-10 in sequence  
// const source = range(1, 10);  
// const example = source.subscribe(val => console.log(val));  


//8.throwError
// import { throwError, concat, of } from 'rxjs';  
// const result = throwError(new Error('An error is occurred...'));  
// result.subscribe(x => console.log(x), e => console.error(e));  

// import { throwError, concat, of } from 'rxjs';  
// const result = concat(of(1, 2, 3, 4, 5), throwError(new Error('Oops! Error is occurred')));  
// result.subscribe(x => console.log(x), e => console.error(e));  

// import { throwError, interval, of } from 'rxjs';  
// import { mergeMap } from 'rxjs/operators';  
// interval(1000).pipe(  
//   mergeMap(x => x === 3  
//     ? throwError('This is an error message!')  
//     : of('a', 'b', 'c')  
//   ),  
// ).subscribe(x => console.log(x), e => console.error(e));  


//9.timer
// import { timer } from 'rxjs';  
// //emit 0 after 1 second then complete, since no second argument is supplied  
// const source = timer(1000);  
// const subscribe = source.subscribe(val => console.log(val));  

// import { timer } from 'rxjs';  
// /* timer takes a second argument, how often to emit subsequent values, in this case, we will emit first value after 1 second and subsequent values every 2 seconds after */  
// const source = timer(1000, 2000);  
// const subscribe = source.subscribe(val => console.log(val));  


//10.iif
// import { iif, of, interval } from 'rxjs';  
// import { mergeMap } from 'rxjs/operators';  
// const r$ = of('R');  
// const x$ = of('X');  
// interval(1000)  
//   .pipe(mergeMap(v => iif(() => v % 4 === 0, r$, x$)))  
//   .subscribe(console.log); 

// import { iif, of, interval } from 'rxjs';  
// import { mergeMap } from 'rxjs/operators';  
// interval(1000)  
//   .pipe(  
//     mergeMap(v =>  
//       iif(  
//         () => !!(v % 2),  
//         of(v)  
//         // if not supplied defaults to EMPTY  
//       )  
//     )  
//   )  
//   .subscribe(console.log);  


//// Mathematical Operators ////

//1.Count
// import { of } from 'rxjs';  
// import { count } from 'rxjs/operators';  
// let all_nums = of(1, 3, 5, 7, 11, 13, 23, 27);  
// let final_val = all_nums.pipe(count());  
// final_val.subscribe(x => console.log("The count is "+x));  

// import { of } from 'rxjs';  
// import { count } from 'rxjs/operators';  
// let all_nums = of(1, 3, 5, 6, 12, 13, 24, 28);  
// let final_val = all_nums.pipe(count(a => a % 2 === 0));  
// final_val.subscribe(x => console.log("The count is "+x));  


//2.Max
// import { of } from 'rxjs';  
// import { max } from 'rxjs/operators';  
// let all_nums = of(1, 3, 5, 6, 12, 13, 24, 28);  
// let final_val = all_nums.pipe(max());  
// final_val.subscribe(x => console.log("The Max value is "+x));  

// import { from } from 'rxjs';  
// import { max } from 'rxjs/operators';  
// let list1 = [11, 13, 26, 70, 58, 2, 40];  
// let final_val = from(list1).pipe(max((a,b)=>a-b));  
// final_val.subscribe(x => console.log("The Max value is "+x));  


//3. Min
// import { from } from 'rxjs';  
// import { min } from 'rxjs/operators';  
// let list1 = [11, 13, 26, 70, 58, 2, 40];  
// let final_val = from(list1).pipe(min());  
// final_val.subscribe(x => console.log("The Min value is "+x));  

// import { from} from 'rxjs';  
// import { min } from 'rxjs/operators';  
// let list1 = [11, 13, 26, 70, 58, 2, 40];  
// let final_val = from(list1).pipe(min((a,b) => a - b));  
// final_val.subscribe(x => console.log("The Min value is "+x));  


//4.Reduce
// import { from } from 'rxjs';  
// import { reduce } from 'rxjs/operators';  
// let products = [  
//    {product1: "A", price: 10000.00},  
//    {product2: "B", price: 7500.00},  
//    {product3: "C", price: 2000.00},  
//    {product4: "D", price: 3500.00}  
// ];  
// let final_val = from(products).pipe(reduce((acc, productsdet) => acc+productsdet.price, 0));  
// final_val.subscribe(x => console.log("Total Price of Products is: "+x));  


//// Join Operators ////

//1.concat
// import { of } from 'rxjs';  
// import { concat } from 'rxjs';  
// let list1 = of(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);  
// let list2 = of(1, 3, 5, 7, 9, 11, 13, 15, 17, 19);  
// let final_val = concat(list1, list2);  
// final_val.subscribe(x => console.log(x));

//2.forkJoin
// import { of, forkJoin } from 'rxjs';
// let list1 = of(1, 2, 3, 4, 5);  
// let list2 = of(6, 7, 8, 9, 10);  
// let final_val = forkJoin([list1, list2]);  
// final_val.subscribe(x => console.log(x));  

// import { of, forkJoin } from 'rxjs';
// let list1 = of(2, 3, 4, 5, 6);  
// let list2 = of(4, 9, 16, 25, 36);  
// let list3 = of(20, 60, 80, 90, 100);  
// let final_val = forkJoin([list1, list2, list3]);  
// final_val.subscribe(x => console.log(x));  

//3.merge
// import { of, merge } from 'rxjs';
// let list1 = of(1, 2, 3, 4, 5);  
// let list2 = of(4, 5, 6, 7, 8, 9, 10)  
// let final_val = merge(list1, list2);  
// final_val.subscribe(x => console.log(x));  

// import { mapTo } from 'rxjs/operators';  
// import { interval, merge } from 'rxjs';  
// //emit every 4 seconds  
// const first = interval(4000);  
// //emit every 3 seconds  
// const second = interval(3000);  
// //emit every 2 seconds  
// const third = interval(2000);  
// //emit every 1 second  
// const fourth = interval(1000);  
// //emit outputs from one observable  
// const example = merge(  
//   first.pipe(mapTo('FIRST!')),  
//   second.pipe(mapTo('SECOND!')),  
//   third.pipe(mapTo('THIRD')),  
//   fourth.pipe(mapTo('FOURTH'))  
// );  
// example.subscribe(x => console.log(x));

// import { merge } from 'rxjs';  
// import { interval } from 'rxjs';  
// //emit every 4 seconds  
// const first = interval(4000);  
// //emit every 2 second  
// const second = interval(2000);  
// //used as instance method  
// const example = merge(first,second);  
// const subscribe = example.subscribe(val => console.log(val));  

//4.race
// import { of, race } from 'rxjs';
// let list1 = of(1, 2, 3, 4, 5);  
// let list2 = of(7, 9, 11, 17, 23)  
// let final_val = race(list1, list2);  
// final_val.subscribe(x => console.log(x));  

// import { mapTo } from 'rxjs/operators';
// import { interval } from 'rxjs';  
// import { race } from 'rxjs';  
// // It takes the first observable to emit  
// const example = race(  
//   //emit every 1.5s  
//   interval(1500).pipe(mapTo('1500 won!')),  
//   //emit every 1s  
//   interval(1000).pipe(mapTo('1st won!')),  
//   //emit every 2s  
//   interval(2000),  
//   //emit every 2.5s  
//   interval(2500)  
// );  
// const subscribe = example.subscribe(val => console.log(val));

// import { delay, map } from 'rxjs/operators';  
// import { of, race } from 'rxjs';  
// //It will throw an error and ignore the other observables.  
// const first = of('first').pipe(  
//   delay(100),  
//   map(_ => {  
//     throw 'error';  
//   })  
// );  
// const second = of('second').pipe(delay(200));  
// const third = of('third').pipe(delay(300));  
// race(first, second, third).subscribe(val => console.log(val));  


//// Transformation Operators ////

//1.buffer
// import { fromEvent } from "rxjs";  
// import { buffer, filter, throttleTime } from "rxjs/operators";  
// const clicks$ = fromEvent(document, "click");  
// clicks$  
//   .pipe(  
//     buffer(clicks$.pipe(throttleTime(500))),  
//     // if array is greater than 1, double click occured  
//     filter(clickArray => clickArray.length > 1)  
//   )  
//   .subscribe(() => console.log("This is a double click!"));  

// import { interval, fromEvent } from 'rxjs';  
// import { buffer } from 'rxjs/operators';  
// //Create an observable that emits a value every second  
// const myInterval = interval(1000);  
// //Create an observable that emits every time document is clicked  
// const bufferBy = fromEvent(document, 'click');  
// const myBufferedInterval = myInterval.pipe(buffer(bufferBy));  
// const subscribe = myBufferedInterval.subscribe(val =>  
//   console.log(' Buffered Values:', val)  
// );  

//2.bufferCount
// import { interval } from 'rxjs';  
// import { bufferCount } from 'rxjs/operators';  
// //Create an observable that emits a value every second  
// const source = interval(1000);  
// //After three values are emitted, pass on as an array of buffered values  
// const bufferThree = source.pipe(bufferCount(3));  
// const subscribe = bufferThree.subscribe(val =>  
//   console.log('Buffered Values:', val)  
// );

// import { interval } from 'rxjs';  
// import { bufferCount } from 'rxjs/operators';  
// //Create an observable that emits a value every second  
// const source = interval(1000);  
// const bufferEveryOne = source.pipe(bufferCount(3, 1));  
// const subscribe = bufferEveryOne.subscribe(val =>  
//   console.log('Start Buffer Every 1:', val)  
// );  

//3.bufferTime
// import { interval } from "rxjs";  
// import { bufferTime } from "rxjs/operators";  
// const clicks = interval(2000);  
// const buffered = clicks.pipe(bufferTime(1000));  
// buffered.subscribe(x => console.log(x));

// import { interval } from "rxjs";  
// import { bufferTime } from "rxjs/operators";  
// const clicks = interval(2000);  
// const buffered = clicks.pipe(bufferTime(1000, 1000));  
// buffered.subscribe(x => console.log(x));  

//4.bufferToggle
// import { interval } from 'rxjs';  
// import { bufferToggle } from 'rxjs/operators';  
// //emit value every second  
// const sourceInterval = interval(1000);  
// //start first buffer after 5s, and every 5s after  
// const startInterval = interval(5000);  
// //emit value after 3s, closing corresponding buffer  
// const closingInterval = val => {  
//   console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);  
//   return interval(3000);  
// };  
// //every 5s a new buffer will start, collecting emitted values for 3s then emitting buffered values  
// const bufferToggleInterval = sourceInterval.pipe(  
//   bufferToggle(startInterval, closingInterval)  
// );  
// const subscribe = bufferToggleInterval.subscribe(val =>  
//   console.log('Emitted Buffer:', val)  
// );

//5.bufferWhen
// import { interval } from 'rxjs';  
// import { bufferWhen } from 'rxjs/operators';  
// //emit value every 1 second  
// const oneSecondInterval = interval(1000);  
// //return an observable that emits value every 3 seconds  
// const threeSecondInterval = () => interval(3000);  
// //every three seconds, emit buffered values  
// const bufferWhenExample = oneSecondInterval.pipe(  
//   bufferWhen(threeSecondInterval)  
// );  
// const subscribe = bufferWhenExample.subscribe(val =>  
//   console.log('Emitted Buffer values are: ', val)  
// );

//6.expand
// import { of } from "rxjs";  
// import { expand, delay, take } from "rxjs/operators";  
// const powersOfTwo = of(1, 2, 3, 4, 5).pipe(  
//   expand(x => of(x).pipe(delay(1000))),  
//   take(10)  
// );  
// powersOfTwo.subscribe(x => console.log(x));

// import { interval, of } from 'rxjs';  
// import { expand, take } from 'rxjs/operators';  
// //emit 1  
// const source = of(1);  
// const example = source.pipe(  
//   //recursively call supplied function  
//   expand(val => {  
//     console.log(`The passed value is: ${val}`);  
//     return of(1 + val);  
//   }),  
//   //call 10 times  
//   take(10)  
// );  
// const subscribe = example.subscribe(val => console.log(`Output: ${val}`));

//7.groupBy
// import { from } from 'rxjs';  
// import { groupBy, mergeMap, toArray } from 'rxjs/operators';  
// const people = [  
//   { name: 'Alex', age: 31 },  
//   { name: 'Adam', age: 31 },  
//   { name: 'Alia', age: 21 },  
//   { name: 'David', age: 35 }  
// ];  
// //emit each person  
// const source = from(people);  
// //group by age  
// const example = source.pipe(  
//   groupBy(person => person.age),  
//   // return each item in group as array  
//   mergeMap(group => group.pipe(toArray()))  
// );  
// const subscribe = example.subscribe(val => console.log(val));  

// import { of } from 'rxjs';  
// import { mergeMap, groupBy, reduce } from 'rxjs/operators';  
// of(  
//   {course_id: 1, name: 'Java'},  
//   {course_id: 2, name: 'Vue.js'},  
//   {course_id: 2, name: 'AngularJS'},  
//   {course_id: 1, name: 'Python'},  
//   {course_id: 3, name: 'PHP'}  
// ).pipe(  
//   groupBy(p => p.course_id),  
//   mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], []))),  
// )  
// .subscribe(p => console.log(p));

// import { from, of, zip } from 'rxjs';  
// import { groupBy, mergeMap, toArray } from 'rxjs/operators';  
// const people = [  
//   { name: 'Alex', age: 31 },  
//   { name: 'Adam', age: 28 },  
//   { name: 'Alia', age: 21 },  
//   { name: 'David', age: 35 },  
//   { name: 'Rhea', age: 28 },  
//   { name: 'Samson', age: 31 },  
//   { name: 'Dhoni', age: 35 }  
// ];  
// from(people)  
//   .pipe(  
//     groupBy(  
//       person => person.age,  
//       p => p.name  
//     ),  
//     mergeMap(group => zip(of(group.key), group.pipe(toArray())))  
//   )  
//   .subscribe(console.log);

//8.map
// import { from } from 'rxjs';  
// import { map } from 'rxjs/operators';
// const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  
// //add 20 to each value  
// const example = source.pipe(map(val => val + 20));  
// const subscribe = example.subscribe(val => console.log(val));

// import { from } from 'rxjs';  
// import { map } from 'rxjs/operators';  
// const source = from([  
//   { name: 'Alex', age: 31 },  
//   { name: 'Adam', age: 28 },  
//   { name: 'Alia', age: 21 },  
//   { name: 'David', age: 35 },  
//   { name: 'Rhea', age: 28 },  
//   { name: 'Samson', age: 31 },  
//   { name: 'Dhoni', age: 35 }  
// ]);  
// const example = source.pipe(map(({ name }) => name));  
// const subscribe = example.subscribe(val => console.log(val));

//9.mapTo
// import { interval } from 'rxjs';  
// import { mapTo } from 'rxjs/operators';  
// //emit value every three seconds  
// const source = interval(3000);  
// //map all emissions to one value  
// const example = source.pipe(mapTo('rxjs!'));  
// const subscribe = example.subscribe(val => console.log(val));  

// import { fromEvent } from 'rxjs';  
// import { mapTo } from 'rxjs/operators';  
// //emit every click on document  
// const source = fromEvent(document, 'click');  
// //map all emissions to one value  
// const example = source.pipe(mapTo('Hello rxjs!'));  
// const subscribe = example.subscribe(val => console.log(val)); 

//10.mergeMap
// import { of, interval } from 'rxjs';  
// import { mergeMap, map } from 'rxjs/operators';  
// const letters = of('a', 'b', 'c', 'd', 'e', 'f');  
// const result = letters.pipe(  
//   mergeMap(x => interval(2000).pipe(map(i => x+i))),  
// );  
// result.subscribe(x => console.log(x));  

// import { interval } from 'rxjs';  
// import { mergeMap, take } from 'rxjs/operators';  
// // It emits value in every 2 second  
// const source$ = interval(2000);  
// source$  
//   .pipe(  
//     mergeMap(  
//       // project  
//       val => interval(5000).pipe(take(2)),  
//       // resultSelector  
//       (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],  
//       // concurrent  
//       2  
//     )  
//   )  
//   .subscribe(val => console.log(val));  

// import { of } from 'rxjs';  
// import { mergeMap } from 'rxjs/operators';  
// // Create promise  
// const myPromise = val =>  
//   new Promise(resolve => resolve(`${val} Welcome to Rxjs!`));  
// const source$ = of('Hello Guys,');  
// source$  
//   .pipe(mergeMap(val => myPromise(val)))  
//   .subscribe(val => console.log(val));  

// import { of } from 'rxjs';  
// import { mergeMap } from 'rxjs/operators';  
// // Create promise  
// const myPromise = val =>  
//   new Promise(resolve => resolve(`${val} Welcome to Rxjs!`));  
// const source$ = of('Hello');  
// source$  
//   .pipe(  
//     mergeMap(  
//       val => myPromise(val),  
//       (valueFromSource, valueFromPromise) => {  
//         return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;  
//       }  
//     )  
//   )  
//   .subscribe(val => console.log(val));

// import { fromEvent } from 'rxjs';  
// import { ajax } from 'rxjs/ajax';  
// import { mergeMap } from 'rxjs/operators';  
// // free api url  
// const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';  
// const click$ = fromEvent(document, 'click');  
// click$  
//   .pipe(  
//     mergeMap(() => ajax.getJSON(API_URL))  
//   )  
//   .subscribe(console.log);

//11.switchMap
// import { of} from 'rxjs';  
// import { switchMap } from 'rxjs/operators';  
// let text = of('Hello guys, Welcome To');  
// let case1 = text.pipe(switchMap((value) => of(value + ' rxjs!')));  
// case1.subscribe((value) => {console.log(value);});  

// import { timer, interval } from 'rxjs';  
// import { switchMap } from 'rxjs/operators';  
// // switch to new inner observable when source emits, emit result of project function  
// timer(0, 5000)  
//   .pipe(  
//     switchMap(  
//       _ => interval(2000),  
//       (outerValue, innerValue, outerIndex, innerIndex) => ({  
//         outerValue,  
//         innerValue,  
//         outerIndex,  
//         innerIndex  
//       })  
//     )  
//   )  
//   .subscribe(console.log);

// import { of } from 'rxjs';  
// import { switchMap } from 'rxjs/operators';  
// const switched = of(2, 3, 5).pipe(switchMap((x) => of(x, x ** 2, x ** 3)));  
// switched.subscribe(x => console.log(x));  

// import { interval, fromEvent } from 'rxjs';  
// import { switchMap } from 'rxjs/operators';  
// fromEvent(document, 'click')  
// .pipe(  
//   // restart counter on every click  
//   switchMap(() => interval(1000))  
// )  
// .subscribe(console.log);

// import { interval, fromEvent, merge, empty } from 'rxjs';  
// import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';  
// const COUNTDOWN_SECONDS = 60;  
// // elem refs  
// const remainingLabel = document.getElementById('remaining');  
// const pauseButton = document.getElementById('pause');  
// const resumeButton = document.getElementById('resume');  
// // streams  
// const interval$ = interval(1000).pipe(mapTo(-1));  
// const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));  
// const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));  
// const timer$ = merge(pause$, resume$)  
//   .pipe(  
//     startWith(true),  
//     switchMap(val => (val ? interval$ : empty())),  
//     scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),  
//     takeWhile(v => v >= 0)  
//   )  
//   .subscribe((val) => remainingLabel.innerHTML = val);  

//12.window
// import { timer, interval } from 'rxjs';  
// import { window, scan, mergeAll } from 'rxjs/operators';  
// //emit immediately then every 1s  
// const source = timer(0, 1000);  
// const example = source.pipe(window(interval(5000)));  
// const count = example.pipe(scan((acc, curr) => acc + 1, 0));  
// const subscribe = count.subscribe(val => console.log(`Window ${val}:`));  
// const subscribeTwo = example  
//   .pipe(mergeAll())  
//   .subscribe(val => console.log(val));  


//// Filtering Operators ////

//1.debounce
// import { of, timer } from 'rxjs';  
// import { debounce } from 'rxjs/operators';  
// //emit four strings  
// const example = of('This is the first value', 'This is the second value', 'This is the third value', 'This is the last value');  
// /* 
//     Only emit values after a second has passed between the last emission, throw away all other values 
// */  
// const debouncedExample = example.pipe(debounce(() => timer(1000)));  
// /* 
//     In this example, all values except last will be omitted. It will show only the last value as output.  
// */  
// const subscribe = debouncedExample.subscribe(val => console.log(val));  

// import { interval, timer } from 'rxjs';  
// import { debounce } from 'rxjs/operators';  
// //emit value every 1 second  
// const interval$ = interval(1000);  
// //raise the debounce time by 200ms each second  
// const debouncedInterval = interval$.pipe(debounce(val => timer(val * 200)));  
// /* 
//   After 5 seconds, debounce time will be greater than interval time, and no values will be emitted 
// */  
// const subscribe = debouncedInterval.subscribe(val =>  
//   console.log(`Example Two: ${val}`)  
// );

//2.debounceTime
// import { fromEvent } from 'rxjs';  
// import { debounceTime, map } from 'rxjs/operators';  
// // elem ref  
// const searchBox = document.getElementById('search');  
// // streams  
// const keyup$ = fromEvent(searchBox, 'keyup')  
// // wait 1 second between keyups to emit current value  
// keyup$.pipe(  
//   map((i) => i.currentTarget.value),  
//   debounceTime(1000)  
// )  
// .subscribe(console.log);

//3.distinct
// import { of } from 'rxjs';  
// import { distinct } from 'rxjs/operators';  
// let all_nums = of(1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 3, 4, 5, 1, 2, 3, 4, 5);  
// let final_val = all_nums.pipe(distinct());  
// final_val.subscribe(x => console.log("The Distinct values are "+x));   

// import { from } from 'rxjs';  
// import { distinct } from 'rxjs/operators';  
// const obj1 = { id: 1, name: 'Alex' };  
// const obj2 = { id: 2, name: 'Akira' };  
// const obj3 = { id: 3, name: 'Aisha' };  
// const obj4 = { id: 2, name: 'Anisha' };  
// const obj5 = { id: 3, name: 'Akira' };  
// const obj6 = { id: 4, name: 'Alisha' };  
// const vals = [obj1, obj2, obj3, obj4, obj5, obj6];  
// from(vals)  
//   .pipe(distinct(e => e.id))  
//   .subscribe(console.log);  

//4.elementAt
// import { fromEvent } from 'rxjs';  
// import { elementAt } from 'rxjs/operators';  
// const clicks = fromEvent(document, 'click');  
// const result = clicks.pipe(elementAt(2));  
// result.subscribe(x => console.log(x));

//5.filter
// import { from } from 'rxjs';  
// import { filter } from 'rxjs/operators';  
// const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  
// //filter out non-even numbers  
// const example = source.pipe(filter(num => num % 2 === 0));  
// const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));  

// import { from } from 'rxjs';  
// import { filter } from 'rxjs/operators';  
// const source = from([  
//   { name: 'Alex', age: 32 },  
//   { name: 'Akira', age: 25 },  
//   { name: 'Aisha', age: 23 },  
//   { name: 'Anisha', age: 16 },  
//   { name: 'Anisha', age: 19 },  
//   { name: 'Alisha', age: 22 }  
// ]);  
// const example = source.pipe(filter(person => person.age <= 25));  
// const subscribe = example.subscribe(val => console.log(`Under the age of 25: ${val.name}`));  

// import { interval } from 'rxjs';  
// import { filter } from 'rxjs/operators';  
// //emit every second  
// const source = interval(1000);  
// //filter out all values until interval is greater than 3  
// const example = source.pipe(filter(num => num > 3));  
// const subscribe = example.subscribe(val =>  
//   console.log(`Number greater than 3: ${val}`)  
// );

//6.first
// import { from } from 'rxjs';  
// import { first } from 'rxjs/operators';  
// const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  
// //no arguments, emit first value  
// const example = source.pipe(first());  
// const subscribe = example.subscribe(val => console.log(`The first value is: ${val}`));  

// import { from } from 'rxjs';  
// import { first } from 'rxjs/operators';  
// const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  
// //emit first item to meet the condition   
// const example = source.pipe(first(num => num === 5));  
// const subscribe = example.subscribe(val =>  
//   console.log(`The first value to meet condition is: ${val}`)  
// );  

// import { from } from 'rxjs';  
// import { first } from 'rxjs/operators';  
// const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  
// //no value will pass, emit default  
// const example = source.pipe(first(val => val > 10, 'Nothing to Emit'));  
// const subscribe = example.subscribe(val => console.log(val));  

//7.last
// import { from } from 'rxjs';  
// import { last } from 'rxjs/operators';  
// const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  
// //no arguments, emit last value  
// const example = source.pipe(last());  
// const subscribe = example.subscribe(val => console.log(`The last value is: ${val}`));  

// import { from } from 'rxjs';  
// import { last } from 'rxjs/operators';  
// const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);  
// //emit last even number  
// const exampleTwo = source.pipe(last(num => num % 2 === 0));  
// const subscribeTwo = exampleTwo.subscribe(val =>  
//   console.log(`The last value to meet condition is: ${val}`)  
// );

// import { from } from 'rxjs';  
// import { last } from 'rxjs/operators';  
// const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  
// //no values will pass given predicate, emit default  
// const exampleTwo = source.pipe(last(v => v > 10, 'Nothing to emit'));  
// const subscribeTwo = exampleTwo.subscribe(val => console.log(val));  

//8.ignoreElements
// import { interval } from 'rxjs';  
// import { take, ignoreElements } from 'rxjs/operators';  
// //emit value every 100ms  
// const source = interval(100);  
// //ignore everything but complete  
// const example = source.pipe(take(5), ignoreElements());  
// //output: "COMPLETE!"  
// const subscribe = example.subscribe(  
//   val => console.log(`NEXT: ${val}`),  
//   val => console.log(`ERROR: ${val}`),  
//   () => console.log('The Task is Completed!')  
// );

// import { of } from 'rxjs';  
// import { ignoreElements } from 'rxjs/operators';  
// let all_nums = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  
// let final_val = all_nums.pipe(ignoreElements());  
// final_val.subscribe(  
//    x => console.log("The last value is = "+x),  
//    e => console.log('error:', e),  
//    () => console.log('The task is completed!')  
// );

// import { interval, throwError, of } from 'rxjs';  
// import { mergeMap, ignoreElements } from 'rxjs/operators';  
// //emit value every 100ms  
// const source = interval(100);  
// //ignore everything but error  
// const error = source.pipe(  
//   mergeMap(val => {  
//     if (val === 4) {  
//       return throwError(`ERROR AT No.: ${val}`);  
//     }  
//     return of(val);  
//   }),  
//   ignoreElements()  
// );  
// const subscribe = error.subscribe(  
//   val => console.log(`NEXT: ${val}`),  
//   val => console.log(`ERROR: ${val}`),  
//   () => console.log('This is also completed!')  
// );

//9.sample
// import { interval } from 'rxjs';  
// import { sample } from 'rxjs/operators';  
// //emit value every 1 second  
// const source = interval(1000);  
// //sample last emitted value from source every 2 second  
// const example = source.pipe(sample(interval(2000)));  
// const subscribe = example.subscribe(val => console.log(val));  

// import { interval, zip, from } from 'rxjs';  
// import { sample } from 'rxjs/operators';  
// const source = zip(  
//   from(['Alex', 'James', 'Maria', 'Andrew']),  
// //emit value every 4 second  
//   interval(4000)  
// );  
// //sample last emitted value from source every 5 second   
// const example = source.pipe(sample(interval(5000)));  
// const subscribe = example.subscribe(val => console.log(val)); 

// import { fromEvent, merge } from 'rxjs';  
// import { sample, mapTo } from 'rxjs/operators';  
// const listener = merge(  
//     fromEvent(document, 'mousedown').pipe(mapTo(false)),  
//     fromEvent(document, 'mousemove').pipe(mapTo(true))  
//   )  
//   .pipe(sample(fromEvent(document, 'mouseup')))  
//   .subscribe(isDragging => {  
//     console.log('Were you dragging?', isDragging);  
//   }) 

//10.skip
// import { interval } from 'rxjs';  
// import { skip } from 'rxjs/operators';  
// //emit after every 1 second   
// const source = interval(1000);  
// //skip the first 5 emitted values  
// const example = source.pipe(skip(5));  
// const subscribe = example.subscribe(val => console.log(val));

// import { from } from 'rxjs';  
// import { skip, filter } from 'rxjs/operators';  
// const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);  
// const skipObs = numArrayObs.pipe(skip(2)).subscribe(console.log);  
// //It will also give the same result  
// const filterObs = numArrayObs  
//   .pipe(filter((val, index) => index > 1))  
//   .subscribe(console.log);

//11.throttle
// import { interval } from 'rxjs';  
// import { throttle } from 'rxjs/operators';  
// //emit value every 1 second  
// const source = interval(1000);  
// //throttle for 2 seconds, emit latest value  
// const example = source.pipe(throttle(val => interval(2000)));  
// const subscribe = example.subscribe(val => console.log(val));

// import { interval } from 'rxjs';  
// import { throttle, map } from 'rxjs/operators';  
// //emit value every 1 second  
// const source = interval(1000);  
// //incrementally increase the time to resolve based on source  
// const promise = val =>  
//   new Promise(resolve =>  
//     setTimeout(() => resolve(`Resolved: ${val}`), val * 100)  
//   );  
// //when promise resolves emit item from source  
// const example = source.pipe(  
//   throttle(promise),  
//   map(val => `This is throttled off Promise no.: ${val}`)  
// );  
// const subscribe = example.subscribe(val => console.log(val));


//// Utility Operators ////

//1.tap
// import { of } from 'rxjs';  
// import { tap, filter } from 'rxjs/operators';  
// let list1 = of(1, 2, 3, 4, 5, 6);  
// let final_val = list1.pipe(  
//    tap(x => console.log("From tap() =" + x),  
//       e => console.log(e),  
//       () => console.log("Task completed")),  
//    filter(a => a % 2 === 0)  
// );  
// final_val.subscribe(x => console.log("The even number is=" + x));  

// import { of } from 'rxjs';  
// import { tap, map } from 'rxjs/operators';  
// const source = of(1, 2, 3, 4, 5);  
// // transparently log values from source with 'tap'  
// const example = source.pipe(  
//   tap(val => console.log(`BEFORE MAP: ${val}`)),  
//   map(val => val + 10),  
//   tap(val => console.log(`AFTER MAP: ${val}`))  
// );  
// //'tap' does not transform values  
// const subscribe = example.subscribe(val => console.log(val));  

// import { of } from 'rxjs';  
// import { tap, map } from 'rxjs/operators';  
// const source = of(1, 2, 3, 4, 5);  
// // tap also accepts an object map to log next, error, and complete  
// const example = source  
//   .pipe(  
//     map(val => val + 10),  
//     tap({  
//       next: val => {  
//         console.log('on next', val);  
//       },  
//       error: error => {  
//         console.log('on error', error.message);  
//       },  
//       complete: () => console.log('on complete')  
//     })  
//   )  
//   .subscribe(val => console.log(val));  

//2.delay
// import { of, merge } from 'rxjs';  
// import { mapTo, delay } from 'rxjs/operators';  
// //emit one item  
// const example = of(null);  
// //delay output of each by a second  
// const message = merge(  
//   example.pipe(mapTo('Hello')),  
//   example.pipe(mapTo('Guys!'), delay(100)),  
//   example.pipe(mapTo('Welcome'), delay(2000)),  
//   example.pipe(mapTo('to'), delay(3000)),  
//   example.pipe(mapTo('rxjs'), delay(4000))  
// );  
// const subscribe = message.subscribe(val => console.log(val));

// import { fromEvent, of } from 'rxjs';   
// import { mergeMap, delay, takeUntil } from 'rxjs/operators';  
// const mousedown$ = fromEvent(document, 'mousedown');  
// const mouseup$ = fromEvent(document, 'mouseup');  
// mousedown$.pipe(  
//   mergeMap(event => of(event).pipe(  
//     delay(700),  
//     takeUntil(mouseup$)  
//   ))  
// ).subscribe(event => console.log('Long Press!', event));  

//3.delayWhen
// import { interval, timer } from 'rxjs';  
// import { delayWhen } from 'rxjs/operators';  
// //emit value in 1 second time interval  
// const message = interval(1000);  
// //emit value after five seconds  
// const delayForFiveSeconds = () => timer(5000);  
// //after 5 seconds, start emitting delayed interval values  
// const delayWhenExample = message.pipe(delayWhen(delayForFiveSeconds));  
// //log values, delayed for 5 seconds   
// const subscribe = delayWhenExample.subscribe(val => console.log(val));  

// import { fromEvent, interval } from 'rxjs';  
// import { delayWhen } from 'rxjs/operators';  
// const clicks = fromEvent(document, 'click');  
// const delayedClicks = clicks.pipe(  
//   delayWhen(event => interval(Math.random() * 5000)),  
// );  
// delayedClicks.subscribe(x => console.log(x));

//4.observeOn
// import { interval } from 'rxjs';  
// import { observeOn } from 'rxjs/operators';  
// import { animationFrameScheduler } from 'rxjs';
// const intervals = interval(1000);  
// let case1 = intervals.pipe(  
//    observeOn(animationFrameScheduler),  
// );  
// let sub1 = case1.subscribe(val => {  
//    console.log(val);  
// });  

//5.subscribeOn
// import { of, merge } from 'rxjs';  
// let test1 = of(1, 2, 3, 4, 5);  
// let test2 = of(6, 7, 8, 9, 10);  
// let sub1 = merge(test1, test2).subscribe(console.log);  

// import { of, merge, asyncScheduler } from 'rxjs';  
// import { subscribeOn } from 'rxjs/operators';  
// let test1 = of(1, 2, 3, 4, 5).pipe(subscribeOn(asyncScheduler));  
// let test2 = of(6, 7, 8, 9, 10);  
// let sub1 = merge(test1, test2).subscribe(console.log);  

//6.timeInterval
// import { of } from 'rxjs';  
// import { filter, timeInterval } from 'rxjs/operators';  
// let list1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  
// let final_val = list1.pipe(timeInterval());  
// final_val.subscribe(x => console.log(x));  

// import { fromEvent } from 'rxjs';  
// import { timeInterval, tap } from 'rxjs/operators';  
// fromEvent(document, 'mousedown')  
//   .pipe(timeInterval(), tap(console.log))  
//   .subscribe(  
//     i =>  
//       (document.body.innerText = `Time since last click (in milliseconds): ${i.interval}`)  
//   );

//7.timestamp
// import { of } from 'rxjs';  
// import { filter, timestamp } from 'rxjs/operators';  
// let list1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  
// let final_val = list1.pipe(timestamp());  
// final_val.subscribe(x => console.log(x));

// import { fromEvent } from 'rxjs';  
// import { timestamp } from 'rxjs/operators';  
// const clickWithTimestamp = fromEvent(document, 'click').pipe(  
//   timestamp()  
// );  
// // Emits data of type {value: MouseEvent, timestamp: number}  
// clickWithTimestamp.subscribe(data => {  
//   console.log(data);  
// });

//8.timeout
// import { of, interval } from 'rxjs';  
// import { filter, timeout } from 'rxjs/operators';  
// let list1 = interval(1000);  
// let final_val = list1.pipe(timeout(new Date("November 09, 2020 19:10:45")));  
// final_val.subscribe(  
//    x => console.log(x),  
//    e => console.log(e),  
//    () => console.log("Task complete")  
// );  

// import { of } from 'rxjs';  
// import { concatMap, timeout, catchError, delay } from 'rxjs/operators';  
// // simulate request  
// function makeRequest(timeToDelay) {  
//   return of('Request is Completed!').pipe(delay(timeToDelay));  
// }  
// of(8000, 7000, 6000, 5000, 4000, 3000, 2000)  
//   .pipe(  
//     concatMap(duration =>  
//       makeRequest(duration).pipe(  
//         timeout(2500),  
//         catchError(error => of(`Request timed out after: ${duration}`))  
//       )  
//     )  
//   )  
//   .subscribe(val => console.log(val));  

// import { interval } from 'rxjs';  
// import { timeout } from 'rxjs/operators';  
// const seconds = interval(900);  
// seconds.pipe(timeout(1500))        
// .subscribe(  
//     value => console.log('1500...'+value),   
//     err => console.log('1500 error...'+err),       
// );  
// seconds.pipe(timeout(900))  
// .subscribe(  
//     value => console.log('900...'+value),   
//     err => console.log('900 error...'+err),       
// );

//9.toArray
// import { of} from 'rxjs';  
// import { toArray } from 'rxjs/operators';  
// let list1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  
// let final_val = list1.pipe(toArray());  
// final_val.subscribe(x => console.log(x));

// import { interval } from 'rxjs';  
// import { toArray, take } from 'rxjs/operators';  
// const source = interval(100);  
// const example = source.pipe(  
//   take(10),  
//   toArray()  
// );  
// const subscribe = example.subscribe(val => console.log(val));  


//// Conditional Operators ////

//1.defaultIfEmpty
// import { defaultIfEmpty } from 'rxjs/operators';  
// import { of } from 'rxjs';  
// //emit 'Observable.of() Empty!' when empty, else any values from source  
// const exampleOne = of().pipe(defaultIfEmpty('Observable.of() Empty!'));  
// const subscribe = exampleOne.subscribe(val => console.log(val));

// import { of } from 'rxjs';  
// import { defaultIfEmpty } from 'rxjs/operators';  
// let list1 = of();  
// let final_val = list1.pipe(defaultIfEmpty('This field is Empty. There is no values'));  
// final_val.subscribe(x => console.log(x));

// import { defaultIfEmpty } from 'rxjs/operators'; 
// import {EMPTY} from 'rxjs';
// //emit 'Observable.empty()!' when empty, else any values from source  
// const example = EMPTY.pipe(defaultIfEmpty('Observable.empty()!'));  
// const subscribe = example.subscribe(val => console.log(val));  

//2.every
// import { of } from 'rxjs';  
// import { every } from 'rxjs/operators';  
//  of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(  
//     every(x => x < 5),  
// )  
// .subscribe(x => console.log(x));

// import { of } from 'rxjs';  
// import { every } from 'rxjs/operators';  
//  of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(  
//     every(x => x < 10),  
// )  
// .subscribe(x => console.log(x));

// import { every } from 'rxjs/operators';  
// import { of } from 'rxjs';  
// //emit 5 values  
// const source = of(1, 2, 3, 4, 5);  
// const example = source.pipe(  
//   //is every value even?  
//   every(val => val % 2 === 0)  
// );  
// const subscribe = example.subscribe(val => console.log(val));

// import { every } from 'rxjs/operators';  
// import { of } from 'rxjs';  
// //emit 5 values  
// const allEvens = of(2, 4, 6, 8, 10);  
// const example = allEvens.pipe(  
//   //is every value even?  
//   every(val => val % 2 === 0)  
// );  
// const subscribe = example.subscribe(val => console.log(val));

//3.find
// import { of } from 'rxjs';  
// import { find } from 'rxjs/operators';  
// let list1 = of(11, 22, 33, 44, 55, 66, 77, 88, 99);  
// let final_val = list1.pipe(find(x => x % 2 === 0),);  
// final_val.subscribe(x => console.log(x));

// import { fromEvent } from 'rxjs';   
// import { find, repeatWhen, mapTo, startWith, filter} from 'rxjs/operators';  
// // elem ref  
// const status = document.getElementById('status');  
// // streams  
// const clicks$ = fromEvent(document, 'click');  
// clicks$  
//   .pipe(  
//     find((event) => event.target.id === 'box'),  
//     mapTo('You have Found me'),  
//     startWith('Hey! Find me'),  
//     // reset when click outside box  
//     repeatWhen(() =>  
//       clicks$.pipe(filter((event) => event.target.id !== 'box'))  
//     )  
//   )  
//   .subscribe(message => (status.innerHTML = message));   

//4.findIndex
// import { of } from 'rxjs';  
// import { findIndex } from 'rxjs/operators';  
// let list1 = of(11, 22, 33, 44, 55, 66, 77, 88, 99);  
// let final_val = list1.pipe(findIndex(x => x % 2 === 0),);  
// final_val.subscribe(x => console.log(x));

//5.isEmpty
// import { of } from 'rxjs';  
// import { isEmpty } from 'rxjs/operators';  
// let list1 = of();  
// let final_val = list1.pipe(isEmpty(),);  
// final_val.subscribe(x => console.log(x));

// import { of } from 'rxjs';  
// import { isEmpty } from 'rxjs/operators';  
// let list1 = of(11, 22, 33, 44, 55, 66, 77, 88, 99);  
// let final_val = list1.pipe(isEmpty(),);  
// final_val.subscribe(x => console.log(x));  


//// Multicasting Operators ////

//1.multicast
// import { Observable } from 'rxjs';  
// var observable = new Observable(function subscribe(subscriber) {  
//    try {  
//       subscriber.next(Math.random());  
//    } catch (e) {  
//       subscriber.error(e);  
//    }  
// });  
// const subscribe_one = observable.subscribe(val => console.log(  
//    "Value received from Sub1 = "+val)  
// );  
// const subscribe_two = observable.subscribe(val => console.log(  
//    "Value received from Sub2 = "+val)  
// );

// import { Observable, Subject } from 'rxjs';  
// import { multicast } from 'rxjs/operators';  
// var observable = new Observable(function subscribe(subscriber) {  
//    try {  
//       subscriber.next(Math.random());  
//    } catch (e) {  
//       subscriber.error(e);  
//    }  
// });  
// const multi_op = observable.pipe(multicast(() => new Subject()));  
// const subscribe_one = multi_op.subscribe(  
//    x => console.log("Value received from Sub1 = "+x)  
// );  
// const subscribe_two = multi_op.subscribe(  
//    x => console.log("Value received from Sub2 = "+x)  
// );  
// multi_op.connect();

// import { Subject, interval } from 'rxjs';  
// import { take, tap, multicast, mapTo } from 'rxjs/operators';  
// //emit every 2 seconds, take 5  
// const source = interval(2000).pipe(take(5));  
// const example = source.pipe(  
//   //since we are multicasting below, side effects will be executed once  
//   tap(() => console.log('See the result:')),  
//   mapTo('This will be same')  
// );  
// //subscribe subject to source upon connect()  
// const multi = example.pipe(multicast(() => new Subject()));  
// const subscriberOne = multi.subscribe(val => console.log(val));  
// const subscriberTwo = multi.subscribe(val => console.log(val));  
// //subscribe subject to source  
// multi.connect();

// import { interval, ReplaySubject } from 'rxjs';  
// import { take, multicast, tap, mapTo } from 'rxjs/operators';  
// //emit every 2 seconds, take 5  
// const source = interval(2000).pipe(take(5));  
// //example with ReplaySubject  
// const example = source.pipe(  
//   //since we are multicasting below, side effects will be executed once  
//   tap(_ => console.log('See this result:')),  
//   mapTo('This is the result')  
// );  
// //can use any type of subject  
// const multi = example.pipe(multicast(() => new ReplaySubject(5)));  
// //subscribe subject to source  
// multi.connect();  
// setTimeout(() => {  
//   /* 
//    subscriber will receive all previous values on subscription because of ReplaySubject 
//    */  
//   const subscriber = multi.subscribe(val => console.group(`gp: ${val}`));  
// }, 5000);


//2.publish
// import { interval } from 'rxjs';  
// import { publish, tap } from 'rxjs/operators';  
// //emit value every 1 second  
// const source = interval(1000);  
// //do nothing until connect() is called  
// const example = publish()(source.pipe(  
//   //side effects will be executed once  
//   tap(_ => console.log('Now start!')),  
// ));  
// const subscribe = example.subscribe(val =>  
//   console.log(`Subscriber One: ${val}`)  
// );  
// const subscribeTwo = example.subscribe(val =>  
//   console.log(`Subscriber Two: ${val}`)  
// );  
// //call connect after 5 seconds, causing source to begin emitting items  
// setTimeout(() => {  
//   example.connect();  
// }, 5000);

// import { of, zip, interval, merge } from "rxjs";  
// import { map, publish, tap } from "rxjs/operators";  
// const source$ = zip(interval(2000), of(1, 2, 3, 4, 5)).pipe(  
//   map(values => values[1])  
// );  
// source$  
//   .pipe(  
//     publish(multicasted$ =>  
//       merge(  
//         multicasted$.pipe(tap(x => console.log('Stream 1:', x))),  
//         multicasted$.pipe(tap(x => console.log('Stream 2:', x))),  
//         multicasted$.pipe(tap(x => console.log('Stream 3:', x))),  
//       )  
//     )  
//   )  
//   .subscribe();


//3.publishBehaviour
// import { interval} from 'rxjs';  
// import { take, publishBehavior} from 'rxjs/operators';  
// let observer = interval(2000).pipe(  
//    take(5),  
//    publishBehavior(4)  
// );  
// const subscribe_one = observer.subscribe(  
//    x => console.log("Value recevied from Sub1 = "+x)  
// );  
// const subscribe_two = observer.subscribe(  
//    x => console.log("Value recevied from Sub2 = "+x)  
// );  
// observer.connect();  
// console.log("After 3 seconds");  
// setTimeout(() => {  
//    const subscribe_three = observer.subscribe(  
//       x => console.log("Value recevied from Sub3 = "+x)  
//    );  
// }, 3000);


//4.publishLast
// import { interval } from 'rxjs';  
// import { take, publishLast} from 'rxjs/operators';  
// let observer = interval(2000).pipe(  
//    take(10),  
//    publishLast()  
// );  
// const subscribe_one = observer.subscribe(  
//    x => console.log("Value from Sub1 = "+x)  
// );  
// const subscribe_two = observer.subscribe(  
//    x => console.log("Value from Sub2 = "+x)  
// );  
// observer.connect();

// import { interval } from 'rxjs';  
// import { publishLast, tap, take } from 'rxjs/operators';  
// const connectable =  
//   interval(1000)  
//     .pipe(  
//       tap(x => console.log("See the result", x)),  
//       take(3),  
//       publishLast());  
// connectable.subscribe(  
//   x => console.log(  "Sub. A", x),  
//   err => console.log("Sub. A Error", err),  
//   () => console.log( "Sub. A Complete"));  
// connectable.subscribe(  
//   x => console.log(  "Sub. B", x),  
//   err => console.log("Sub. B Error", err),  
//   () => console.log( "Sub. B Complete"));  
// connectable.connect();


//5.publishReplay
// import { interval} from 'rxjs';  
// import { take, publishReplay} from 'rxjs/operators';  
// let observer = interval(1000).pipe(  
//    take(3),  
//    publishReplay(2)  
// );  
// const subscribe_one = observer.subscribe(  
//    x => console.log("Value from Sub1 = "+x)  
// );  
// const subscribe_two = observer.subscribe(  
//    x => console.log("Value from Sub2 = "+x)  
// );  
// observer.connect();  
// setTimeout(() => {  
//    const subscribe_three = observer.subscribe(  
//       x => console.log("Value from Sub3 = "+x)  
//    );  
// }, 2000);


//6.share
// import { interval} from 'rxjs';  
// import { take, share} from 'rxjs/operators';  
// let observer = interval(1000).pipe(take(5), share());  
// const subscribe_one = observer.subscribe(  
//    x => console.log("Value from Sub1 = "+x)  
// );  
// const subscribe_two = observer.subscribe(  
//    x => console.log("Value from Sub2 = "+x)  
// );  
// setTimeout(() => {  
//    const subscribe_three = observer.subscribe(  
//       x => console.log("Value from Sub3 = "+x)  
//    );  
// }, 2000);

// import { timer } from 'rxjs';  
// import { tap, mapTo, share } from 'rxjs/operators';  
// //emit value in 1s  
// const source = timer(1000);  
// //log side effect, emit result  
// const example = source.pipe(  
//   tap(() => console.log('***SIDE EFFECT***')),  
//   mapTo('***RESULT***')  
// );  
// const subscribe = example.subscribe(val => console.log('s1'+val));  
// const subscribeTwo = example.subscribe(val => console.log('s2'+val));  
// //share observable among subscribers  
// const sharedExample = example.pipe(share());  
// const subscribeThree = sharedExample.subscribe(val => console.log('s3'+val));  
// const subscribeFour = sharedExample.subscribe(val => console.log('s4'+val));


//// Error Handling Operators ////

//1.catchError
// import { throwError, of } from 'rxjs';  
// import { catchError } from 'rxjs/operators';  
// //emit error  
// const source = throwError('There is an error!');  
// //gracefully handle error, returning observable with error message  
// const example = source.pipe(catchError(val => of(`Alert: ${val}`)));  
// const subscribe = example.subscribe(val => console.log("-->"+val));

// import { of } from 'rxjs';  
// import { map, filter, catchError } from 'rxjs/operators';  
// let all_nums = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);  
// let final_val = all_nums.pipe(  
//    map(el => {  
//       if (el === 8) {  
//          throw new Error("Testing catchError.");  
//       }  
//       return el;  
//    }),  
//    catchError(err => {  
//       console.error(err.message);  
//       return of("From catchError");  
//    })  
// );  
// final_val.subscribe(  
//    x => console.log(x),  
//    err => console.error(err),  
//    () => console.log("Task is Completed now.")  
// );

// import { of } from 'rxjs';  
// import { map, catchError } from 'rxjs/operators';  
// of(1, 2, 3, 4, 5).pipe(  
//     map(n => {  
//        if (n === 4) {  
//            throw 'four!';  
//       }  
//      return n;  
//     }),  
//     catchError(err => of('I', 'II', 'III', 'IV', 'V')),  
//   )  
//   .subscribe(x => console.log(x));

// import { timer, from, of } from 'rxjs';  
// import { mergeMap, catchError } from 'rxjs/operators';  
// //create promise that immediately rejects  
// const myBadPromise = () =>  
//   new Promise((resolve, reject) => reject('Rejected!'));  
// //emit single value after 1 second  
// const source = timer(1000);  
// //catch rejected promise, returning observable containing error message  
// const example = source.pipe(  
//   mergeMap(_ =>  
//     from(myBadPromise()).pipe(catchError(error => of(`This is Bad Promise: ${error}`)))  
//   )  
// );  
// const subscribe = example.subscribe(val => console.log(val));


//2.retry
// import { interval, of, throwError } from 'rxjs';  
// import { mergeMap, retry } from 'rxjs/operators';  
// const source = interval(1000);  
// const example = source.pipe(  
//   mergeMap(val => {  
//     if(val > 5){  
//       return throwError('Error!');  
//     }  
//     return of(val);  
//   }),  
//   //retry 2 times on error  
//   retry(2)  
// );  
// const subscribe = example.subscribe({  
//   next: val => console.log(val),  
//   error: val => console.log(`${val}: Retried 2 times then quit!`)  
// });


//3.retryWhen
// import { timer, interval } from 'rxjs';  
// import { map, tap, retryWhen, delayWhen } from 'rxjs/operators';  
// //emit value every 1s  
// const source = interval(1000);  
// const example = source.pipe(  
//   map(val => {  
//     if (val > 5) {  
//       //error will be picked up by retryWhen  
//       throw val;  
//     }  
//     return val;  
//   }),  
//   retryWhen(errors =>  
//     errors.pipe(  
//       //log error message  
//       tap(val => console.log(`Value ${val} was too high!`)),  
//       //restart in 6 seconds  
//       delayWhen(val => timer(val * 1000))  
//     )  
//   )  
// );  
// const subscribe = example.subscribe(val => console.log(val));



//// RxJS Observables ////
// import { Observable } from 'rxjs';  
// const observable = new Observable(subscriber => {  
//   subscriber.next(10);  
//   subscriber.next(20);  
//   subscriber.next(30);  
//   setTimeout(() => {  
//     subscriber.next(40);  
//     subscriber.complete();  
//   }, 1000);  
// });  
// console.log('These are the values just before subscribe');  
// observable.subscribe({  
//   next(x) { console.log('We have got value ' + x); },  
//   error(err) { console.error('something wrong occurred: ' + err); },  
//   complete() { console.log('Done successfully'); }  
// });  
// console.log('This value is just after subscribe');  

// function foo() {  
//     console.log('Hello World!');  
//     return 123;  
// }  
// const x = foo.call(); // same as foo()  
// console.log(x);  
// const y = foo.call(); // same as foo()  
// console.log(y);  

// import { Observable } from 'rxjs';  
// const foo = new Observable(subscriber => {  
//   console.log('Hello World!');  
//   subscriber.next(123);  
// });  
// foo.subscribe(x => {  
//   console.log(x);  
// });  
// foo.subscribe(y => {  
//   console.log(y);  
// });

// import { Observable } from 'rxjs';  
// var observer = new Observable(  
//    function subscribe(subscriber) {  
//       subscriber.next("This is my first Observable")   
//    }  
// );  
// observer.subscribe(x => console.log(x));

// import { Observable } from 'rxjs';  
// var observer = new Observable(  
//    function subscribe(subscriber) {  
//       try {  
//          subscriber.next("This is my first Observable");  
//          subscriber.next("Testing Observable");  
//          subscriber.complete();  
//       } catch(e){  
//          subscriber.error(e);  
//       }  
//    }  
// );  
// observer.subscribe(
//     x => console.log(x), 
//     (e)=>console.log(e),   
//     ()=>console.log("Observable is completed now.")
// );


//// RxJs Subscription ////
// import { of } from 'rxjs';  
// import { count } from 'rxjs/operators';  
// let all_nums = of(1, 3, 5, 7, 11, 13, 15, 17, 23, 27, 29);  
// let final_val = all_nums.pipe(count());  
// final_val.subscribe(x => console.log("The total count is "+x));

// import { of } from 'rxjs';
// import { count } from 'rxjs/operators';  
// let all_nums = of(1, 3, 5, 7, 11, 13, 15, 17, 23, 27, 29);  
// let final_val = all_nums.pipe(count());  
// let test = final_val.subscribe(x => console.log("The total count is "+x));  
// test.unsubscribe();  

// import { interval } from 'rxjs';  
// const observable1 = interval(400);  
// const observable2 = interval(300);  
// const subscription = observable1.subscribe(x => console.log('This is first: ' + x));  
// const childSubscription = observable2.subscribe(x => console.log('This is second: ' + x))
// subscription.add(childSubscription);  
// setTimeout(() => {  
//   // this will unsubscribe BOTH subscription and childSubscription  
//   subscription.unsubscribe();  
// }, 1000);



//// RxJS Subjects //// 

/*
The main difference between an Observable and a Subject is that a plain Observable by default is unicast. It means that each subscribed Observer owns an independent execution of the Observable. On the other hand, Subjects are multicast. A Subject is like an Observable, but it can multicast to many Observers.
*/

// import { Observable } from 'rxjs';  
// const observable = new Observable((observer) => {  
//     observer.next(Math.random());  
// });  
// // subscription 1  
// observable.subscribe((data) => {  
//   console.log(data);   
// });  
// // subscription 2  
// observable.subscribe((data) => {  
//    console.log(data);   
// });  

// import * as Rx from "rxjs";  
// const subject = new Rx.Subject();  
// // subscriber 1  
// subject.subscribe((data) => {  
//     console.log(data);   
// });  
// // subscriber 2  
// subject.subscribe((data) => {  
//     console.log(data);   
// });  
// subject.next(Math.random());  

// Convert Observables from Unicast to Multicast
// import { Observable } from 'rxjs';
// import * as Rx from "rxjs"; 
// const observable = new Observable((observer) => {  
//     observer.next(Math.random());  
// });  
// const subject = new Rx.Subject();  
// // subscriber 1  
// subject.subscribe((data) => {  
//     console.log(data);  
// });  
// // subscriber 2  
// subject.subscribe((data) => {  
//     console.log(data);   
// });  
// observable.subscribe(subject);  

// import { Subject } from 'rxjs';  
// const subject_test = new Subject();  
// subject_test.subscribe({  
//    next: (v) => console.log(`From Subject : ${v}`)  
// });  
// subject_test.subscribe({  
//    next: (v) => console.log(`From Subject: ${v}`)  
// });  
// subject_test.next("Hello");  
// subject_test.next("Good Morning");

// import { Subject } from 'rxjs';  
// const subject_test = new Subject();  
// subject_test.subscribe({  
//    next: (v) => console.log(`From Subject : ${v}`)  
// });  
// subject_test.subscribe({  
//    next: (v) => console.log(`From Subject: ${v}`)  
// });  
// subject_test.next("Hello");  
// subject_test.complete();  
// subject_test.next("Good Morning");

// import { Subject } from 'rxjs';  
// const subject_test = new Subject();  
// subject_test.subscribe({  
//    error: (e) => console.log(`From Subject : ${e}`)  
// });  
// subject_test.subscribe({  
//    error: (e) => console.log(`From Subject : ${e}`)  
// });  
// subject_test.error(new Error("There is an error message"));


/*
Types of RxJS Subjects

    Subject - This is the standard RxJS Subject. It doesn't have any initial value or replay behaviour.

    BehaviorSubject - This variant of RxJS subject requires an initial value and emits its current value (last emitted item) to new subscribers.

    ReplaySubject - This variant of RxJS subject is used to emit a specified number of last emitted values (a replay) to new subscribers.

    AsyncSubject - The AsyncSubject emits the latest value to observers upon completion.
*/

//BehaviorSubject
// import { BehaviorSubject } from 'rxjs';  
// const subject = new BehaviorSubject(0); // 0 is the initial value  
// subject.subscribe({  
//   next: (v) => console.log(`observerA: ${v}`)  
// });  
// subject.next(1);  
// subject.next(2);  
// subject.subscribe({  
//   next: (v) => console.log(`observerB: ${v}`)  
// });  
// subject.next(3);

//ReplaySubject
// import { ReplaySubject } from 'rxjs';  
// const subject = new ReplaySubject(3); // buffer 3 values for new subscribers  
// subject.subscribe({  
//   next: (v) => console.log(`observerA: ${v}`)  
// });  
// subject.next(1);  
// subject.next(2);  
// subject.next(3);  
// subject.next(4);  
// subject.subscribe({  
//   next: (v) => console.log(`observerB: ${v}`)  
// });  
// subject.next(5);  

// import { ReplaySubject } from 'rxjs';  
// const subject = new ReplaySubject(100, 500 /* windowTime */);  
// subject.subscribe({  
//   next: (v) => console.log(`observerA: ${v}`)  
// });  
// let i = 1;  
// setInterval(() => subject.next(i++), 200);  
// setTimeout(() => {  
//   subject.subscribe({  
//     next: (v) => console.log(`observerB: ${v}`)  
//   });  
// }, 1000);  

//AsyncSubject
// import { AsyncSubject } from 'rxjs';  
// const subject = new AsyncSubject();  
// subject.subscribe({  
//   next: (v) => console.log(`observerA: ${v}`)  
// });  
// subject.next(1);  
// subject.next(2);  
// subject.next(3);  
// subject.next(4);  
// subject.subscribe({  
//   next: (v) => console.log(`observerB: ${v}`)  
// });  
// subject.next(5);  
// subject.complete();  


//// RxJS Scheduler ////

//synchronous 
// import { of, asyncScheduler } from "rxjs"; 
// const observable = of(1, 2, 3);  
// console.log("Before sync subscribe");  
// observable.subscribe({  
//   next(x) {  
//     console.log(`Got sync value ${x}`);  
//   },  
//   error(err) {  
//     console.error(`Something wrong occurred: ${err}`);  
//   },  
//   complete() {  
//     console.log("This is done now.");  
//   }  
// });  
// console.log("After sync subscribe");  

//asynchronous (By using Scheduler)
import { of, asyncScheduler } from "rxjs";  
import { observeOn } from "rxjs/operators";  
const observable = of(1, 2, 3);  
console.log("Before async subscribe");  
observable.pipe(observeOn(asyncScheduler)).subscribe({  
  next(x) {  
    console.log(`Got async value ${x}`);  
  },  
  error(err) {  
    console.error(`Gomething wrong occurred: ${err}`);  
  },  
  complete() {  
    console.log("This is done now.");  
  }  
});  
console.log("After async subscribe");  

