// กำหนดตัวแปร enum
var orderStatus;
(function (orderStatus) {
    orderStatus["Pending"] = "Pending";
    orderStatus["Shipped"] = "Shipped";
    orderStatus["Cancelled"] = "Cancelled";
})(orderStatus || (orderStatus = {}));
//function
function displayOrderStatus(status) {
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
