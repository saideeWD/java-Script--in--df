const person ={ name: 'Ema wastone', email: 'emawaetine@gmail.com', age:'45', job:'Web designer ', friend:['saide hasan', 'shgaima khaivb', 'tammi'], gfName:"Rupa akhi tahina" ,phone:'0176498552'}
const {phone ,gfName , age , job,salary} = person ;
// const gfName = person.gfName;
// const phone  = person.phone;
console.log(gfName, phone,age,job , salary);

const friend = ["Shalman Khan" , 'Shakib Khan', 'resel Khan ' , 'Siyam khan'];
const complexctyObject ={
    name:'abc',

    info:{
        address :'Dewenjong jamalpur moulover chir 4 no  pra';
        leder: 'Tiger bk';
    }
const {leder} = complexctyObject.info


}
const [first , next,...older ]= friend;
console.log(older);