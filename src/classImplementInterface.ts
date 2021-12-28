import { HasPrint } from "./interfaceForClass";

export class Invoid implements HasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number
  ) {}

  print() {
    return `${this.client} owes ${this.amount} dollar(s)  for work ${this.work}`;
  }
}
export class Payment implements HasPrint {
  constructor(
    readonly reciplend: string,
    private jod: string,
    public amt: number
  ) {}
  print() {
    return `I ows ${this.reciplend} ${this.amt} dollar(s)  for work ${this.jod}`;
  }
}
