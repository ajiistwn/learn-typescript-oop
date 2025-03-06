describe('Polymorphism Tests', () => {
    class Employee {
        constructor(private _name: string) {
        }
        get name() {
            return this._name;
        }
        set name(name: string) {
            this._name = name;
        }
    }

    class Manager extends Employee { }

    class Director extends Employee { }

    function sayHello(employee: Employee) {
        if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello Manager ${manager.name}`);
        } else if (employee instanceof Director) {
            const director = employee as Director;
            console.info(`Hello Director ${director.name}`);
        } else {
            console.info(`Hello ${employee.name}`);
        }
    }

    it('should demonstrate polymorphism with class inheritance', () => {
        let employee = new Employee('Nanda');
        console.info(employee); // Nanda

        employee = new Manager('David');
        console.info(employee); // David

        employee = new Director('Aji');
        console.info(employee);

    });
    it("sohuld demonstrate polymorphism with function parameter", () => {
        sayHello(new Employee('Nanda')); // Hello Nanda
        sayHello(new Manager('David')); // Hello David
        sayHello(new Director('Aji'));

    });

});