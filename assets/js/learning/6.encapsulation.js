class BankAccount {
    #balance = 100;

    deposit(amount) {
        // this.balance = this.#balance = amount;
        this.#balance+= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const accountBCA = new BankAccount();
console.log(accountBCA.getBalance ());

accountBCA.deposit (800);
console.log(accountBCA.getBalance ());

accountBCA.deposit (500);
console.log(accountBCA.getBalance ());