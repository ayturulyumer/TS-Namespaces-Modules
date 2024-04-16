export namespace FoodAndBeverages {
  export interface Delivery {
    newCustomer(customerName: string, visited: boolean): void;
    visitCustomer(customerName: string): void;
    showCustomers(): string;
  }
}
