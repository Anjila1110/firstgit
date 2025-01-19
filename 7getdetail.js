//Create an object car with properties brand, model, and a method getDetails that returns "This car is a [brand] [model]". Use this inside the method.

const car = {
    brand: "Porshe",
    model: "918 Spyder",
    getDetails: function() {
      return `This car is a ${this.brand} ${this.model}`;
    }
  };
  
  // Example usage
  console.log(car.getDetails());            //output:This car is a Porshe 918 Spyder

