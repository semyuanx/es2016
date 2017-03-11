/*
 *  es2016入门书籍实例
 *  网址：http://es6.ruanyifeng.com/#docs/destructuring
 */
//var a = [];
//for(var i=0;i<10;i++){
//	a[i] = (function(){
//		console.log(i)
//	})(i)
//};
//console.log(a[6]());
//	
//for(let i = 0;i<3;i++){
//	let i = "abc";
//	console.log(i);
//}

//console.log(foo);
//var foo=2;
//
//console.log(bar);
//let bar = 2;

//var tmp = 123;
//if(1){
//	tmp = 'abc';
//	let tmp;
//}

//if(1){
//	tmp = "abc";
//	console.log(tmp);
//	
//	let tmp;
//	console.log(tmp);
//	
//	tmp = 123;
//	console.log(tmp);
//}

//console.log(typeof x);

//function bar(x = y,y=2){
//	return [x,y];
//}
//bar();

//var x = x;
//let x = x;

//function aa(){
//	let a = 10;
//	var a = 1;
//}
//
//function bb(){
//	let a = 10;
//	let a = 1;
//}

//function (a){
//	let a =10;
//}
//function (a){
//	{
//		let a =10;
//	}
//}

//var tmp = new Date();
//function f(){
//	console.log(tmp);
//	if(false){
//		var tmp = "hello world";
//	}
//}
//f();

//var s ="hello";
//for(var i = 0;i<s.length;i++){
//	console.log(s[i]);
//}
//console.log(i)

//function f1(){
//	let n = 5;
//	if(1){
//		let n = 10;
//	}
//	console.log(n)
//}
//f1()

//{{
//	let a = 20;
//	{let a = 10;}
//}}
//{{
//	{let a = 10;}
//	console.log(a)
//}}

//if(true){
//	function f(){
//		
//	}
//}
//try{
//	function f(){}
//}catch(e){
//	
//}

//function f(){console.log("我是谁")}
//(function(){
//	if(false){
//		function f(){console.log("123")}
//	}
//	f();
//}())

//let x = do {
//	let t = f();
//	t*t+1;
//};

//const PI = 3.1415;
//PI = 3;
//console.log(PI)

//const bb;

//if(true){
//	const Max = 5;
//}
//console.log(Max);

//var message = "111";
//var age = 25;
//const message = "23";
//const age = 2;

//const foo = {};
//foo.prop = 123;
//
//foo = {};

//const a = [];
//a.push("hello");
//a.length = 0;
//a=['aaa'];

//const foo = Object.freeze({});
//foo.prop =123;
//console.log(foo.prop);

//global.a = 1;
//console.log(a);
//let b=2;
//console.log(global.b);

//let a  = 1;
//let b =2;
//let c = 3;

//let [a,b,c] = [1,2,3];
//console.log(a,b,c);

//let [foo,[[bar],baz]]=[1,[[2],3]];
//console.log(foo,bar,baz);

//let [,,third]=["foo","bar","baz"];
//console.log(third);

//let [x,,y] = [1,2,3];
//console.log(x,y)

//let [h,...tail]=[1,2,3,4];
//console.log(h,tail)

//let [x,y,...z] = ['a'];
//console.log(x,y,z)

//let [foo] = 1;
//console.log(foo)

//let [foo = true] = [];
//console.log(foo);

//let [x,y='b']=['a'];
//let [x,y='b']=['a',undefined];
//console.log(x,y)

//let [x=1]=[undefined];
//console.log(x);

//let [x = 1] = [null];
//console.log(x);

//function f(){
//	console.log('aaa');
//}
//let [x = f()]=[];
//console.log(x)

//let x;
//if ([5][0] === undefined) {
//x = f();
//} else {
//x = [5][0];
//}
//console.log(x)

//let {foo,bar} = {foo:"aaa",bar:"bbb"};
//console.log(foo,bar)
//
//let { baz } = { foo: "aaa", bar: "bbb" };
//console.log(baz);

//var {foo:baz}  = {foo:'aaa',bar:'bbb'}
//console.log(baz);

//let obj = {
//	p:[
//	'hello',
//	{y:'World'}
//	]
//};
//let { p : [ x , { y }] } = obj;
//console.log(x,y)

//var {x = 3} = {};
//console.log(x)

//let {x =3}={x:undefined};
//console.log(x)

//let {x = 3} = {x:null};
//console.log(x)

//let {foo:{bar}} = {baz:'baz'};

//let x;
//{x} = {x:1};
//({x} = {x:1})
//console.log(x);

//({} = [true,false]);
//({} = 'abc');
//({} = []);

//let {log,sin,cos} = Math;
//console.log(log(100),sin(456),cos(999));
//console.log(Math.log);

//let arr = [1,2,3];
//let {0:first,[arr.length -1]:last} = arr;
//console.log(first,last);

//const [a,b,c,d,e] = 'hello';
//console.log(a,b,c,d,e);

//let { length:len } = 'hello';
//console.log(len);
//console.log('hello'.length)

//let {toString:s} = 123;
//s === Number.prototype.toString;

5.函数参数的解构赋值



























