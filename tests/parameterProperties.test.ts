describe("Parameter Properties Tests", () => {
    it("should test parameter properties", () => {
        // Test goes here
        class Employee {
            constructor(private name: string) {
                console.info('Employee created');
            }
            public getName(): string {
                return this.name;
            }
        }

        const employee = new Employee('Nanda');
        console.info(employee.getName()); // Nanda
        // employee.name = 'Bob'; // Error: Property 'name' is private and only accessible within class 'Employee'.
    });
});