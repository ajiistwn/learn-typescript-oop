describe("Interface Tests", () => {
    it("should test interface", () => {
        // Test goes here
        interface Customer {
            id: number;
            name: string;
            age?: number;
            sayHello(): void;
        }
        class Customer implements Customer {
            constructor(public id: number, public name: string, public age?: number) {
                console.info('Customer class created');
            }
            sayHello() {
                console.info(`Hello ${this.name}`);
            }
        }
        const nanda = new Customer(1, 'Nanda');
        console.info(nanda);
        nanda.age = 30;
        console.info(nanda);
        nanda.sayHello();
    })
});