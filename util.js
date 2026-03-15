function daysLeft(date){

let today=new Date();
let due=new Date(date);

let diff=(due-today)/(1000*60*60*24);

if(diff<0) return "⚠ Overdue";
if(diff<1) return "⏰ Due Today";

return "Due in "+Math.ceil(diff)+" days";

}