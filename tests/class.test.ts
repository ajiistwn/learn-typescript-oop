describe('Class Tests', () => {
    it('should test the class', () => {
        // Test goes here
        class Customer {
            constructor() {
                console.info('Customer class created');
            }
        }
        class Order {

        }

        const customer: Customer = new Customer();
        const order = new Order();
        console.info(customer);
        console.info(order);
    })
});