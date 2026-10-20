// ฟังก์ชัน

// แบบปกติ
function calculateTotal(price, quality) {
    return price * quality;
}
console.log(`ราคารวม ${calculateTotal(25, 4)}`);

// แบบ arrow function
const calculateTotalArrow = (price, quality) => price * quality;
console.log(`ราคารวม ${calculateTotalArrow(20, 3)}`);

// แบบ arrow function + default parameter
const calculateWithVat = (price, quality, vat = 0.07) => {
    const subtotal = price * quality;
    return (subtotal + subtotal * vat).toFixed(2);
}
console.log(`รวมค่า vat ${calculateWithVat(100, 2)}`);