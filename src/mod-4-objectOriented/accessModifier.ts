/* 
public  ==> is accessible from anywhere
privet  ==> only accessible own class not another inheritance
protected  ==> accessible from another class which extend from this

*/

class BAnkAcc {
  public id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  getBalance() {
    console.log("My current balance", this._balance);
  }
  addDeposite(amount: number): void {
    this._balance += amount;
  }
}

// const myAc1 = new BAnkAcc(44, "Sabbir", 15786);
// myAc1.getBalance();

class StudentAcc extends BAnkAcc {
  public studentId: number;
  constructor(is: number, name: string, _balance: number, studentId: number) {
    super(is, name, _balance);
    this.studentId = studentId;
  }
}
