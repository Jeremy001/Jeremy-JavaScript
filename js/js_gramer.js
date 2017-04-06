var x = 1;
'Hello, world!';
var x = 1; var y = 2; // 不建议一行中写多个语句；
// 语句块
if(2 > 1){
    x = 1;
    y = 2;
    z = 3;
}
// 注释的方法：
//  这一行是注释
/* 这一块是注释
这一块是注释
这一块是注释
这一块是注释
*/
// 数据类型
// number
123; // 整数
4.56; // 浮点数
1.2345e3; // 科学计数法
-99; // 负数
NaN; // not a number,不是number类型，当无法计算时用这个表示
Infinity; // 无限大
// 四则运算
1 + 2; // 3
(1 + 2) * 5 / 2; // 7.5
2 / 0; // NaN
0 / 0; // Infinity
10 / 3; // 3.33
10 % 3; // 1
10.5 % 3; // 1.5
// 字符串
'xyz';
"xyz";
// 布尔值
true;
false;
2 > 1;
2 >= 3;
// 与运算 &&
true && true;
true && false;
false && false;
// 或运算 ||
false || false;
true || true;
true || false;
// 非运算 !
! true;
! false;
! (2 > 5);
var age = 15;
if age >= 18{
    alert('adult');
} else {
    alert('teenager');
}
// 比较运算符
2 > 5;
2 >= 5;
2 < 5;
2 <=5;
7 === 5; // 相等的比较，用===，不要用==
NaN === NaN; // false
isNaN(NaN);
// 浮点数的比较
1 / 3 === (1 - 2 / 3); // false
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true
// null
// undefined
// 数组，可以不同的类型
var attr = [1, 2, 'hello', '3.14', null, NaN, true];
attr[0]; // 数组元素的索引从0开始
// 对象，键值
var person = {
    name:'Jeremy',
    age:'18',
    tags:['hello', 'world', 'haha'],
    city:'Beijing',
    hascar:true,
    zipcode:null
};
// 获取对象的属性，用对象变量.属性名
person.name; // 'Jeremy'
// 变量
var a;
var b = 1;
























