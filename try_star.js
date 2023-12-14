// let n = 5; 
// for (let i = 1; i <= n; i++) { 
//     let str = ''; 
//     let count = "*"; 
//     for (let j = 1; j <= 2 * n; ++j) { 
//         if (i + j >= n + 1 && (i >= j - n + 1)) { 
//             // Add a space after each number 
//             str += count.toString() + ' '; 
//             // count++; 
//         } else { 
//             // Add two spaces for the gap 
//             str += '  '; 
//         } 
//     } 
  
//     console.log(str); 
// }
// // for (let i = 5; i <= n; i--) { 
// //     let str = ''; 
// //     let count = "*"; 
// //     for (let j = 1; j <= 2 * n; ++j) { 
// //         if (i + j >= n + 1 && (i >= j - n + 1)) { 
// //             // Add a space after each number 
// //             str += count.toString() + ' '; 
// //             // count++; 
// //         } else { 
// //             // Add two spaces for the gap 
// //             str += '  '; 
// //         } 
// //     } 
  
// //     console.log(str); 
// // }

// function cetakSegitigaTengah(jumlahBaris){
//     for(let i = 1; i <= jumlahBaris; i++){
//         let spasi= ' '.repeat(jumlahBaris - 1);
//         let bintang= '*'.repeat(i);
//         console.log(spasi+bintang);
//     }
// }
// cetakSegitigaTengah(4);
// function cetakSegitigaTengahKiri(jumlahBaris){
//     for(let i = jumlahBaris; i >= 1; i--){
//         let spasi= ' '.repeat(jumlahBaris - 1);
//         let bintang= '*'.repeat(i);
//         console.log(spasi+bintang);
//     }
// }
// cetakSegitigaTengahKiri(4)

// function cetakSegitigaTengah(jumlahBaris){
//     for(let i = 1; i <= jumlahBaris; i++){
//         let spasi= ' '.repeat(jumlahBaris - 1);
//         let bintang= '*'.repeat(i);
//         console.log(spasi+bintang);
//     }
//     for(let i = jumlahBaris; i >= 1; i--){
//         let spasi= ' '.repeat(jumlahBaris - 1);
//         let bintang= '*'.repeat(i);
//         console.log(spasi+bintang);
//     }
// }
// cetakSegitigaTengah(4)

// function Mahasiswa(nama, jurusan){
//     this.nama = nama
//     this.jurusan = jurusan
//     this.sapa = function(){
//         console.log("Halo, nama saya "+ this.nama + " dari jurusan "+ this.jurusan)
//     };
// }

// var mahsiswa1 = new Mahasiswa("Joko", "Kehutanan");
// var mahsiswa2 = new Mahasiswa("Anies", "Akuntansi");

// mahsiswa1.sapa();
// mahsiswa2.sapa();

// fetch("").then()



// let customers = []; // This array will hold customer objects

// function addCustomer(name, accountNumber) {
//   let newCustomer = {
//     name: name,
//     accountNumber: accountNumber,
//     balance: 0,
//     transactionHistory: []
//   };
//   validateCustomerData(name, accountNumber)
//   customers.push(newCustomer);
// }

// function findCustomerByAccountNumber(accountNumber) {
//   return customers.find(customer => customer.accountNumber === accountNumber);
// }

// function deposit(accountNumber, amount) {
//   let customer = findCustomerByAccountNumber(accountNumber);
//   if (customer) {
//     customer.balance += amount;
//     customer.transactionHistory.push({ date: Date.now(), type: 'deposit', amount: amount });
//     console.log(`Deposit of ${amount} to account number ${accountNumber} was successful.`);
//   } else {
//     console.log(`Customer with account number ${accountNumber} not found.`);
//   }
// }

// function withdraw(accountNumber, amount) {
//   let customer = findCustomerByAccountNumber(accountNumber);
//   if (customer) {
//     if (customer.balance >= amount) {
//       customer.balance -= amount;
//       customer.transactionHistory.push({ type: 'withdrawal', amount: amount });
//       console.log(`Withdrawal of ${amount} from account number ${accountNumber} was successful.`);
//     } else {
//       console.log(`Insufficient balance for withdrawal from account number ${accountNumber}.`);
//     }
//   } else {
//     console.log(`Customer with account number ${accountNumber} not found.`);
//   }
// }

// function validateCustomerData(name, accountNumber) {
    
//   }
  
// function editCustomerInfo(accountNumber, newInfo) {
    
//   }
  
// addCustomer('John Doe', '123456789');
// deposit('123456789', 1000);
// withdraw('123456789', 500);



let customers = []; // This array will hold customer objects

function addCustomer(name, accountNumber) {
  let newCustomer = {
    name: name,
    accountNumber: accountNumber,
    balance: 0,
    transactionHistory: []
  };
  customers.push(newCustomer);
}

function findCustomerByAccountNumber(accountNumber) {
  return customers.find(customer => customer.accountNumber === accountNumber);
}

function deposit(accountNumber, amount) {
  let customer = findCustomerByAccountNumber(accountNumber);
  if (customer) {
    customer.balance += amount;
    customer.transactionHistory.push({ date: Date.now(), type: 'deposit', amount: amount });
    console.log(`Deposit of ${amount} to account number ${accountNumber} was successful.`);
  } else {
    console.log(`Customer with account number ${accountNumber} not found.`);
  }
}

function withdraw(accountNumber, amount) {
  let customer = findCustomerByAccountNumber(accountNumber);
  if (customer) {
    if (customer.balance >= amount) {
      customer.balance -= amount;
      customer.transactionHistory.push({ type: 'withdrawal', amount: amount });
      console.log(`Withdrawal of ${amount} from account number ${accountNumber} was successful.`);
    } else {
      console.log(`Insufficient balance for withdrawal from account number ${accountNumber}.`);
    }
  } else {
    console.log(`Customer with account number ${accountNumber} not found.`);
  }
}

addCustomer('John Doe', '123456789');
deposit('123456789', 1000);
withdraw('123456789', 500);

function validateCustomerData(name, accountNumber) {
  if (customers.some(customer => customer.accountNumber === accountNumber)) {
    return false; // Account number is not unique
  }
  // Add more validation as needed
  return true;
}

function editCustomerInfo(accountNumber, {}) {
  let customer = findCustomerByAccountNumber(accountNumber);
  if (customer) {
    Object.assign(customer, newInfo);
    return "Customer info updated";
  } else {
    return "Customer not found";
  }
}

function getHighBalanceCustomers(minimumBalance) {
  return customers.filter(customer => customer.balance >= minimumBalance);
}

function calculateTotalBalance() {
  return customers.reduce((total, customer) => total + customer.balance, 0);
}
