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

//5.函数参数的解构赋值
//function add([x,y]){
//	return x+y;
//}
//console.log(add([1,2]));

//[[1,2],[3,4]].map(([a,b])=>a+b);

//function move({x = 0,y=0}={}){
//	console.log([x,y]);
//}
//move({x:3})

//function move({x,y} = {x:0,y:0}){
//	console.log([x,y]);
//}
//move({x:2,y:3})
//move({})
//move()

//[1,undefined,3].map((x='yes')=>console.log(x));
//
//let [(a)] = [1];
//let {x: (c)} = {};
//let ({x: c}) = {};
//let {(x: c)} = {};
//let {(x): c} = {};

//let x = 1;
//let y = 2;
//[x,y] = [y,x];
//console.log(x,y)

//function example(){
//	return [1,2,3];
//}
//let [a,b,c] = example();
//console.log(a,b,c)

//function f([x,y,z]){
//	console.log(x,y,z);
//}
//f([1,2,3])

//function f({x=0,y=0,z=1}){
//	console.log('x:'+x,'y:'+y,'z:'+z);
//}
//f({x:10,z:20})

//let jsonData = {
//	id:22,
//	status:'ok',
//	data:[888,999]
//}
//let {id,status,data:number} = jsonData;
//console.log(id,status,number);

//var map = new Map();
//map.set('first','hello');
//map.set('second','world');
//for(let [key,value] of map){
//	console.log(key,value)
//}

//var [foo] = ['Hello'];
//console.log(foo)

//let formInit = {
//	one: {
//		value: 'one'
//	},
//	two: {
//		value: 'two'
//	}
//};
//let [x,y] =[formInit.one,formInit.two]
//console.log(x,y)

//for(let item of "hahahahahahahah"){
//	console.log(item)
//}

//console.log("d哈df".charAt(1));

//var s = "hello world";
//console.log(s.startsWith('he'));
//console.log(s.endsWith('ld'));
//console.log(s.includes(' '));

//var s = "hello world";
//console.log(s.startsWith('e',1));
//console.log(s.endsWith('he',2)); //前几个字符
//console.log(s.includes('llo', 2)) // false

//var s = 'x'.repeat(2);
//var s = 'hello'.repeat(2.1)
//var s = 'hello'.repeat(2.9)
//console.log(s);

//console.log(`there is 
//	work`);
//	
//var name = "bob",time = "today";
//console.log(`hello ${name},how are you ${time}`);

//var tim = `\`yo\`,wa!!`;
//console.log(tim)

//var time = `
//	<ul>
//		<li></li>
//	</ul>
//`;
//console.log(time)
//console.log(time.trim())

//var x = 1;
//var y = 2;
//var s = `${x}+${y}=${x+y}`;
//console.log(s);
//var st = `${x}+${y*2} = ${x+y*2}`;
//console.log(st)

//var obj = {x:1,y:2};
//var con =  `${obj.x+obj.y}`;
//console.log(con)

//function fn(){
//	return 'hahah';
//}
//var s = `foo ${fn()} bar`;
//console.log(s)

//var msg = `Hello ${'haha'}`;
//console.log(msg)

//const tmpl = addrs =>`
//	<table>
//		${addrs.map(addr=>`
//			<tr><td>${addr.first}</td></tr>
//			<tr><td>${addr.last}</td></tr>
//	`).join('')}
//	</table>
//`;
//const data = [
//	{first:'<Jane>',last:'Bond'},
//	{first:'Lars',last:'<Croft>'}
//]
//console.log(tmpl(data));

//let str = 'return' + '`Hello ${name}!`';
//let func = new Function('name',str);
//func('jack')
//console.log(func('jack'))

//var tmpl = `
//	<ul>
//		<% for(var i =0;i<data.supplies.length;i++){ %>
//		<li><%= data.supplies[i] %></li>
//		<% } %>
//	</ul>
//`;
//function compile(template){
//var evalExpr = /<%=(.+?)%>/g;
//var expr = /<%([\s\S]+?)%>/g;
//
//template = template
//  .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
//  .replace(expr, '`); \n $1 \n  echo(`');
//
//template = 'echo(`' + template + '`);';
//console.log(template);
//var script =
//`(function parse(data){
//  var output = "";
//
//  function echo(html){
//    output += html;
//  }
//
//  ${ template }
//
//  return output;
//})`;
//
//return script;
//}
//var parse = eval(compile(tmpl));
//var  s = parse({supplies:['broom','mop','cleaner']});
//console.log(s);

//console.log`123456`

//var a =5;
//var b = 10;
//function tag(s,v1,v2){
//	console.log(s[0]);
//	console.log(s[1]);
//	console.log(s[2]);
//	console.log(v1);
//	console.log(v2);
//	
//	return "ok";
//}
//tag`Hello ${a+b} world ${a*b}`;

//let sender = '<script>alert("abc")</script> <><><>';
//function saferHtml(tml){
//	var s = tml[0];
//	for(var i = 0;i<arguments.length;i++){
//		var arg = String(arguments[i]);
//		s+=arg.replace(/$/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
//		console.log(arg)
//	}
//}
//saferHtml(sender);
//var msg = saferHtml`<p>我是谁</p>`;

//function tag(strings){
//	console.log(strings.raw[0]);
//}
//tag`First Line\nSecond line`;

//console.log(String.raw`Hi\n${2+3}!`);

//console.log(String.raw({raw:'test'},0,1,2));

//console.log`123`;
//console.log(`123`);

//var regex = new RegExp('xyz','i')
//console.log(regex);

//console.log(3===3.0);

//console.log(Number.EPSILON)
//console.log(Number.EPSILON.toFixed(20))

//console.log(0.1+0.2)
//console.log(0.1+0.2-0.3)
 
//console.log(Math.trunc(4.11));
//console.log(Math.trunc(4.9));

//console.log(Math.trunc('123.456'))

//console.log( Math.sign(-5));
//console.log( Math.sign(5));
//console.log( Math.sign(0));
//console.log( Math.sign(-0));

//let a **= 2;
//console.log(a)

//let arrayLike = {
//	'0':'a',
//	'1':'b',
//	'2':'c',
//	length:3
//}
//console.log(arrayLike);
//var arr1 = [].slice.call(arrayLike);
//console.log(arr1);
//var arr2 = Array.from(arrayLike);
//console.log(arr2)

//var ss = Array.from('hello');
//console.log(ss)

//console.log(Array.from({length:3}))

//console.log(Array.from([1,2,3],(x)=>x*x))

//console.log(Array.of(1,2,3))

//var a={
//	b:2,
//	c:3
//}
//var b = {
//	b:3,
//	c:4
//}
//console.log(Array.of(a,b));

//console.log([1,2,3,4,5,6].copyWithin(0,3,this.length));

//console.log( [1,4,-5,-10].find((n)=>n<0));

//[1,5,10,15].findIndex(function(val,index,arr){
//	console.log(val>9)
//})
 
//console.log([1,2,3,4,5,5].fill(12346));

//for(let index of ['a','b'].keys()){
//	console.log(index);
//}
//for (let [i,elem] of ['a', 'b'].entries()) {
//console.log(i,elem);
//}

//[,'a'].forEach((x,i)=> console.log(i));
//['a',,'b'].filter(x=>true);
//console.log( [,'a'].map(x=>1));
//console.log( [,'a'].join('#'));

//console.log([...['a',,'b']])
//let s= [...'jajajajaja'];
//console.log(s)
//
//console.log(...[])

//function log(x,y){
//	y = y || "world";
//	console.log(x,y)
//}
//log(1,'')

function Point(x = 0,y=0){
	this.x = x;
	this.y = y;
}
var p = new Point();



















