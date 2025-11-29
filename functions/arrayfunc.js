/*
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
); 
rewrite
*/

let ask = (question, yes, no) => {
      if (confirm(question)) yes();
    else no();
}

ask("do u agree?", () => {alert('u agree')}, () => {alert('u dont agree')})
/*
let func = () => expression
let 
*/