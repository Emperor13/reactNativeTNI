// กำหนดตัวแปร enum
enum orderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Cancelled = "Cancelled",
}

//function
function displayOrderStatus(status: orderStatus) {
  switch (status) {
    case orderStatus.Pending:
      console.log("Your order is pending...");
      break;
    case orderStatus.Shipped:
      console.log("Your status is now shipped...");
      break;
    case orderStatus.Cancelled:
      console.log("Your order has been cancel...");
      break;
    default:
      console.log("unknown order status...");
      break;
  }
} // end of function

displayOrderStatus(orderStatus.Shipped);
displayOrderStatus(orderStatus.Cancelled);
displayOrderStatus(orderStatus.Pending);
