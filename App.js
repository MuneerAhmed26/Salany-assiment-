

// // Q.n 1

// var itemsArray = [
//     {name:"Mango",price:"50", quantity:"3"},
//     {name:"Pizza",price:"30", quantity:"9"},
//     {name:"shirt",price:"880", quantity:"1"},
//     {name:"pencil",price:"100", quantity:"2"}];


// var MangoPrice = itemsArray[0].price * itemsArray[0].quantity
// var PizzaPrice = itemsArray[1].price * itemsArray[1].quantity
// var shirtPrice = itemsArray[2].price * itemsArray[2].quantity
// var pencilPrice = itemsArray[3].price * itemsArray[3].quantity
// var totalPrice = MangoPrice + PizzaPrice + shirtPrice + pencilPrice



// // Q.n 2

// var Data = {
//     name : "Muneer",
//     email : "Muneerahmed26@gmail.com",
//     password : "123456",
//     age : 30,
//     gender : "male",
//     city : "Karachi",
//     country : "Pakistan"
// }

// console.log("age" in Data);
// console.log("country" in Data);
// console.log("firstName" in Data);
// console.log("lastName" in Data);





// // Q.n 3

// function Record (name, age, city, country){
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.country = country;
// }

// var Record = new Record ("Muneer","20","Karachi","Pakistan");
// var Record = new Record ("Ahmed","22","Karachi","Pakistan");
// var Record = new Record ("Ali","24","Karachi","Pakistan");


// // Q.n 4


function submission() {

    function Population (name, gender, address, education, profession) {
        this.myname = name;
        this.mygender = gender;
        this.myaddress = address;
        this.myeducation = education;
        this.myprofession = profession;
    }

    var population1 = new Population(fname.value, gender.value, address.value, education, profession)
    console.log(population1);
    console.log(fname.value, gender.value, address.value, profession, education)
}











