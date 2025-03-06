describe("Visibility Tests", () => {
    it("should test visibility", () => {
        // Test goes here
        class Employee {
            private name: string;
            constructor(name: string) {
                this.name = name;
            }
            public setName(name: string) {
                this.name = name;
            }
            public getName(): string {
                return this.name;
            }


        }

        const employee = new Employee('Nanda');
        console.info(employee.getName()); // Nanda
        employee.setName('Alice');
        console.info(employee.getName()); // Alice
        // employee.name = 'Bob'; // Error: Property 'name' is private and only accessible within class 'Employee'.
    });
}
);