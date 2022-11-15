// console.log('i am who i am');

const jonas = {
    firstName : 'jonas',
    lastName : 'schmedtman',
    birthYeah: 1991,
    job : 'teacher',
    friends : ['mwenda','makena','schola'],
    hasDriversLicense : true,

//     calcAge : function(birthYeah){
//         return 2037- birthYeah;
//     }

// onsole.log(jonas.calcAge(1991)); 

// // calcAge: function(){
// //     return 2037- this.birthYeah;
// },
calcAge: function(){
    this.age = 2037 - this.birthYeah;
    return  this.age; 
},

    getSummary: function (){
        return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job},and he has ${this.hasDriversLicense ? 'a': 'no'} druvers licesnse.`
    }
}
 
 console.log(jonas.calcAge());
 console.log(jonas.age);
 console.log(jonas.age);
 console.log(jonas.age);
 console.log(jonas.getSummary());
