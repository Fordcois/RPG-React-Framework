function Location() {

function Location(name, age, gender) 
    {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.greet = function() {console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');};
    }



return (
<div>
Here we go!

</div>
)};

export default Location