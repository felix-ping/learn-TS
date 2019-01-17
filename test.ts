interface Person{
  readonly name:string;
  age?:number;
  salary?:any;
  [propName:string]:string|number;
}

let tom: Person = {
  name: 'Tom',
  age: 1,
  salary:1,
  go:'xx'
};
let data: (number|string)[];
data = [1, 2, 4,'xxx'];

let goodsData: Array<number>;
goodsData = [1, 2, 34, 5];

interface numberArray {
  [index:number]:number;
}


function go(num1:number, str2:string):string{
  return num1+str2
}
let newFn=function(x:number, y:Person):any{
  return
}
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}// 右侧就是正常的函数声明，左侧则是用箭头函数表达左侧的类型，箭头表示函数的定义，左侧是输入类型，必须用括号，
//右侧是输出类型。
interface Human{
  (
    name:string,
    age:number,
    salary:number[]
  ):string;
  salary?:number[];
}
let mySearch : Human

mySearch=function(name:string,age:number,salary?:number[]):string{
  return name+age
}


function buildName(lastName:string,firstName:string='yyy',secondName:string){

}

function assertSome(arr:number|string):number{
  if(<string>arr){
    return (<string>arr).length
  }

}
//单独放入声明文件 后缀为.d.ts
declare var jquery:(selector:string)=>any

//在使用到的文件的开头这样表示引用了声明文件。
///    <reference path='./jquery.d.ts'/>
declare var jQuery:(string)=>any
//大写
type Name = string
let n:Name

type EventsNames = 'click' | 'scroll' | 'mouseTouch'

function handleEvents(ele:Element,event:EventsNames){

}

//元组
let metaArr : [string,number]=['xx',1]
metaArr.push(1)

enum Days {Sun=7, Mon, Tue, Wed, Thu, Fri, Sat}
console.log(Days['Sun'] === 7); //重复时会覆盖
//引入一个概念，递增步长

enum Color{Red='red'.length,Blue=1}

const enum Direction{
  Up,Down,Left,Right
}
let direction =[Direction.Up,Direction.Down]
//编译阶段被删除，不包含计算成员。



declare enum Directions{

}



class Animal{

}











