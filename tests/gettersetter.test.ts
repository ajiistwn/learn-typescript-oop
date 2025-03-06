describe('Getter and Setter Class', () => {
    it('should support getter and setter', () => {
        class Customer {
            _name: string = '';

            get name(): string {
                return this._name;
            }

            set name(value: string) {
                this._name = value;
            }
        }
        const customer = new Customer();
        console.info(customer);
        customer.name = 'John Doe';
        console.info(customer)
    });
});