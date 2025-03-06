describe('Instance Of Tests', () => {
    it('should return true for instance of a class', () => {
        class Employee { }
        class Manager { }
        const budi = new Employee();
        const nanda = new Manager();

        console.info(typeof budi); // object
        console.info(budi instanceof Employee); // true
        console.info(nanda instanceof Manager); // true
    });
});