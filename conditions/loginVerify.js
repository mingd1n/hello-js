let whoAre = prompt('Who are you?');

if (whoAre == 'Admin') {
    let Password = prompt('Password?',"")
    
    if (Password == 'TheMaster') {
    alert('welcome')
 } else if (Password === '' || Password === null) {
    alert('cancaled')
 } else
    alert ('wrong password')
/*您使用的 == false 确实能够工作，但因为它依赖于隐式类型转换，可能会带来问题：

null == false：在 JS 中评估为 false (这是特例)。

"" == false：在 JS 中评估为 true (因为 "" 是 Falsy，被转换为 0，false 被转换为 0)。*/
} else if (whoAre === '' || whoAre === null) {
    alert('canceled')
} else {
    alert ("i don't know you")
}
 
