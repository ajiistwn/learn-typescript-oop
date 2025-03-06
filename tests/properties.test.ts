describe('Properties Class', () => {
    it('should support property class', () => {
        class Customer {
            readonly id: number;
            name: string;
            age?: number;

            constructor(id: number, name: string, age?: number) {
                this.id = id;
                this.name = name;
                this.age = age;
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

    });
});