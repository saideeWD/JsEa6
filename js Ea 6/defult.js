function add (num , num2 = 50){
    num2 =  num2 || 20;
    return num + num2;
}
const total = add(32 );
document.write(total);
