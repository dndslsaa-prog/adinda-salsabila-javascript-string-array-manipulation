const rawInput = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const trimmedInput = rawInput.trim();
const namesArray = trimmedInput.split(",");
const cleanedNames = namesArray.map((name) => name.trim().toLowerCase());
const finalString = cleanedNames.join(" | ");

console.log("=== Case 1: User Data Cleaner ===");
console.log("Input mentah :", `"${rawInput}"`);
console.log("Setelah trim :", `"${trimmedInput}"`);
console.log("Array nama   :", namesArray);
console.log("Array bersih :", cleanedNames);
console.log("Hasil akhir  :", finalString);

const products = [
  { name: "Laptop", price: 1000, active: true },
  { name: "Mouse", price: 20, active: false },
  { name: "Keyboard", price: 50, active: true },
];

const activeProducts = products.filter((product) => product.active === true);

const activeProductNames = activeProducts.map((product) =>
  product.name.toUpperCase()
);

const totalPrice = activeProducts.reduce(
  (accumulator, product) => accumulator + product.price,
  0
);

console.log("\n=== Case 2: E-Commerce Product Filter ===");
console.log("Produk aktif      :", activeProducts);
console.log("Nama produk aktif :", activeProductNames);
console.log("Total harga aktif :", totalPrice);
