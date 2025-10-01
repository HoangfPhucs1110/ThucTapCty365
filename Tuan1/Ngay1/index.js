// Sử dụng ES6 Demo quản lý danh sách sản phẩm

// 1. Khai báo biến
const storeName = "HPStore";
let products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "PC", price: 2000 },
  { id: 3, name: "Màn hình", price: 500 }
];

// 2. Arrow function + Default parameter
const discountPrice = (price, percent = 10) => price - (price * percent / 100);

// 3. Template literals + Destructuring
products.forEach(({ id, name, price }) => {
  console.log(`Sản phẩm #${id}: ${name} - Giá gốc: ${price}$`);
  console.log(`   ➝ Giá sau giảm: ${discountPrice(price)}$`);
});

// 4. Thêm sản phẩm bằng Spread
const newProduct = { id: 4, name: "Bàn phím", price: 100 };
products = [...products, newProduct];

// 5. Rest parameter để tính tổng giá trị
function totalValue(...items) {
  return items.reduce((sum, p) => sum + p.price, 0);
}
console.log(`Tổng giá trị hàng hóa: ${totalValue(...products)}$`);

// 6. Class + Method
class Cart {
  constructor() {
    this.items = [];
  }
  add(product) {
    this.items.push(product);
    console.log(`${product.name} đã thêm vào giỏ`);
  }
  show() {
    this.items.forEach(p => console.log(`- ${p.name}: ${p.price}$`));
  }
}
const myCart = new Cart();
myCart.add(products[0]);
myCart.add(products[3]);
myCart.show();

// 7. Promise + async/await (giả lập gọi API)
const fakeApi = () =>
  new Promise(resolve => setTimeout(() => resolve(products), 1500));

async function loadProducts() {
  console.log("\nĐang tải dữ liệu sản phẩm...");
  let data = await fakeApi();
  console.log("Dữ liệu đã nhận:", data);
}
loadProducts();