import { FoodAndBeverages } from "./foodAndBeverages";

class Courier implements FoodAndBeverages.Delivery {
  protected placesToVisit: { customerName: string; visited: boolean }[];

  constructor(placesToVisit: { customerName: string; visited: boolean }[]) {
    this.placesToVisit = placesToVisit;
  }

  newCustomer(customerName: string, visited: boolean = false): string {
    const isFound = this.placesToVisit.find(
      (customer) => customer.customerName === customerName
    );
    // if it's found it's already a customer
    if (isFound) {
      throw new Error(`${customerName} is already a customer of yours!`);
    }
    // if it's not it's a new customer
    this.placesToVisit.push({ customerName, visited });
    return `${customerName} just became your client.`;
  }

  visitCustomer(customerName: string): void {
    const customerIndex = this.placesToVisit.findIndex(
      (customer) => customer.customerName === customerName
    );
    // if the customer is not found
    if (customerIndex === -1) {
      throw new Error(`${customerName} is not your customer`);
    }
    this.placesToVisit[customerIndex].visited = true;
  }

  showCustomers(): string {
    return this.placesToVisit
      .map((customer) => {
        return `${customer.customerName} -> ${customer.visited}`;
      })
      .join("\n");
  }
}

let courier = new Courier([
  {
    customerName: "DHL",

    visited: false,
  },
]);

courier.newCustomer("Speedy");

courier.newCustomer("MTM");

courier.newCustomer("TipTop");

courier.visitCustomer("DHL");

courier.visitCustomer("MTM");

courier.visitCustomer("MTM");

console.log(courier.showCustomers());
