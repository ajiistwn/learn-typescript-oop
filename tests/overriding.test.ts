describe('Methode Overriding', () => {
    it('should test method overriding functionality', () => {

        class Employee {
            name: string;
            constructor(name: string) {
                this.name = name;
            }
            sayyHello() {
                return `Hello my name ${this.name}`;
            }
        }

        class Manager extends Employee {
            sayyHello() {
                const result = super.sayyHello();
                return `${result} i'm a manager`;
            }
        }

        const employee = new Employee('Nanda');
        const manager = new Manager('Alice');

        console.info(employee.sayyHello()); // Hello Nanda
        console.info(manager.sayyHello()); // Hello my name Alice i'm a manager



    });
});