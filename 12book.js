//Create a Book class with properties title, author, and year. Add a method to display information about the book using template literals.

class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    getInfo() {
      return `The book "${this.title}" was written by ${this.author} in ${this.year}.`;
    }
  }
  const myBook = new Book("I dont love you anymore", "Ritvik Singh", 2024);
  console.log(myBook.getInfo()); // Output: The book "I dont love you anymore" was written by Ritvik Singh in 2024.
  