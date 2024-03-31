function NPC() {

  function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.greet = function() {
      console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    };
  }

  const Alice = new  Person('Alice', 22, 'female');
  const John = new Person('John', 42, 'male');
  const  Steven = new Person('Steven', 6, 'male');


    return (
      <div>


      </div>
  
    )
  }
  
  export default NPC