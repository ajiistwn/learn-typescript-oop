describe("Inheritance Tests", () => {
    it("should test inheritance", () => {
        class Employee {
            name: string;

            constructor(name: string) {
                this.name = name;
            }
        }

        class Manager extends Employee {
            constructor(name: string) {
                super(name);
            }
        }
        const employee = new Employee("Budi");
        const manager = new Manager("Jane Doe");
        console.info(employee);
        console.info(manager);

    });

});