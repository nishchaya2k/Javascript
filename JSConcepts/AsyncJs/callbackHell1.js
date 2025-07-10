//CallbackHell: Real - World Example: User Signup & Profile Setup Flow


/* 
When a user signs up, your app might need to:
 1. Create the user in the database.
 2. Log them in automatically.
 3. Fetch their profile data.
 4. Show them a welcome dashboard.
*/

createUser(userData, (err, user) => {
    if (err) {
        return console.error("Error creating user:", err);
    }

    login(user, (err, session) => {
        if (err) {
            return console.error("Login failed:", err);
        }
        getUserProfile(user.id, (err, profile) => {
            if (err) {
                return console.error("Fetching profile failed:", err);
            }

            loadDashboard(profile, (err, dashboardData) => {
                if (err) {
                    return console.error("Dashboard error:", err);
                }

                console.log("Welcome to your dashboard!", dashboardData);
            });
        });
    })
})


/*
Inversion Control: You're giving control of your code's flow to another function (like a library or framework). You don’t know exactly when or if your callback will be called.
*/



// ......................Example 2.......................

/*
Ordering Food Online
1. Log in to the app
2. Search for a restaurant
3. Place an order
4. Make payment
5. Receive confirmation
*/



loginUser("john", (err, user) => {
    if (err) return console.error("Login failed");

    findRestaurant("Pizza Place", (err, restaurant) => {
        if (err) return console.error("Restaurant not found");

        placeOrder(restaurant, user, (err, order) => {
            if (err) return console.error("Order failed");

            makePayment(order, (err, receipt) => {
                if (err) return console.error("Payment failed");

                sendConfirmation(receipt, (err, msg) => {
                    if (err) return console.error("Failed to send confirmation");
                    console.log("Order complete:", msg);
                });
            });
        });
    });
});
  


/*
Inversion of Control in this Example
- In the callback version:
-You're giving your placeOrder function your logic as a callback.
-You don't control when or how it's called, if it throws errors, or calls the callback multiple times.
-With Promises or async / await:
-You write the flow.
-No hidden control transfer to unknown logic.
*/



// Solution:
async function orderFood() {
    try {
        const user = await loginUser("john");
        const restaurant = await findRestaurant("Pizza Place");
        const order = await placeOrder(restaurant, user);
        const receipt = await makePayment(order);
        const msg = await sendConfirmation(receipt);
        console.log("Order complete:", msg);
    } catch (err) {
        console.error("Something went wrong:", err);
    }
}
  