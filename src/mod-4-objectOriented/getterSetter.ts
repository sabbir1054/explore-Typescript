/* ======================

normally we call a method like this==> acc1.getBalance();
but 
when we make it getter we can access it like property ===> acc1.getBalance

==================================== */

class BankAccount {
  public id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  // getter
  get getBalance():number {
    return this._balance;
  }
  // setter
  set addDeposite(amount: number) {
    this._balance =this._balance+amount;
  }
}

const acc2 = new BankAccount(12, "Shakil", 14785);
acc2.addDeposite=500;
const balance = acc2.getBalance
console.log(balance);
