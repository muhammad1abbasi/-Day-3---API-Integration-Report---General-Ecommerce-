export default {
  name: "order",
  type: "document",
  title: "Orders",
  fields: [
    { name: "customerName", type: "string", title: "Customer Name" },
    { name: "email", type: "string", title: "Email" },
    { name: "address", type: "text", title: "Address" },
    { name: "totalAmount", type: "number", title: "Total Amount" },
    { name: "status", type: "string", title: "Status", options: { list: ["Pending", "Completed"] } },
    { name: "cartItems", type: "array", title: "Cart Items", of: [{ type: "object", fields: [
      { name: "name", type: "string", title: "Product Name" },
      { name: "price", type: "number", title: "Price" },
      { name: "quantity", type: "number", title: "Quantity" },
    ] }] },
  ],
};
