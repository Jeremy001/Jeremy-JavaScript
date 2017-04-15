// javascript中的字符串就是用''或""括起来的字符
'I am ok!';
"I am ok!";
"I'm ok!"
// 转义字符\
"I'm \"ok\"!"
// \n:换行;\t:制表符;\\:\字符本身
// ASCII码字符用'\x##'形式的十六进制表示：
'\x41'; // 'A'
// Unicode字符可以用'\u####'来表示：
'\u4e2d\u6587'; // '中文'
// 多行字符串：用反引号括起来，反引号就是Esc键下方/数字1左边的字符
`this is line1
this si line2
this is line3`;
// 连接字符串：+号
var name = '小明';
var age = '14';
var message = '你好，' + name + '， 你今年' + age + '了！';
alert message;
// 模板字符串；字符串连接的一种简便方法
var message = `你好，${name}， 你今年${age}岁了！`
// 操作字符串
var s = 'Hello, world!';
// 字符串长度
s.length; // 13
// 截取字符串，用类似Array的下标，序号从0开始：
s[0];  // H
s[5];  //,
s[12];  //!
s[13];  // undefined
// 字符串不可变，对字符串的某个索引赋值后，字符串并不会随之改变
var x = 'Test';
x[0] = H;
alert(x); // 结果还是Test
// Javascript为字符串提供了一些常用方法，调用这些方法并不会改变原有的字符串，而是产生新的字符串
// 转大写toUpperCase()
var s = 'Hello';
toUpperCase(s);  // HELLO
// 转小写toLowerCase
var s = 'HELLO';
lowers = toLowerCase(s);  // hello
lowers;
// 返回字符所在的序号indexOf()
var s = 'Hello, world!';
s.indexOf('world');  // 7
s.indexOf('World');  // -1，找不到指定的字符，返回-1
// 截取字符串substring()
var s = 'hello, world!';
s.substring(0, 5);  // hello，0-4，不包括5；
s.substring(7);  // worl!，从7开始到结束





