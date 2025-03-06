describe("Abstract Tests", () => {
    it("should test abstract class", () => {
        // Test goes here
        abstract class Customer {
            constructor(public id: number, public name: string, public age?: number) {
                console.info('Customer class created');
            }
            abstract sayHello(): void;
        }
        class RegularCustomer extends Customer {
            constructor(public id: number, public name: string, public age?: number) {
                super(id, name, age);
            }
            sayHello() {
                console.info(`Hello ${this.name}`);
            }
        }
        const nanda = new RegularCustomer(1, 'Nanda');
        console.info(nanda);
        nanda.age = 30;
        console.info(nanda);
        nanda.sayHello();
    });
});