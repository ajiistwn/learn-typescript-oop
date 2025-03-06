describe("Static Tests", () => {
    class Configuration {
        static NAME: string = 'Learning TypeScript';
        static VERSION: string = '1.0.0';
        static AUTHOR: string = 'Aji Setiawan';
    }

    class MathUtility {
        static sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
    }

    it("should implement static methods", () => {
        console.info(Configuration.NAME);
        console.info(Configuration.VERSION);
        console.info(Configuration.AUTHOR);
    });

    it("should demonstrate static Methode", () => {
        const result = MathUtility.sum(1, 2, 3);
        console.info(result);
    });
});