
// ------
// Task 1 
// ------



const API = "https://fakestoreapi.com/products";

fetch(API)
    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then(products => {

        // Display title, price and category
        console.log("===== ALL PRODUCTS =====");

        products.forEach(product => {

            console.log(`Title: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log("----------------------");

        });


        // map() - title and price only
        const productDetails = products.map(product => {

            return {
                title: product.title,
                price: product.price
            };

        });

        console.log("===== TITLE AND PRICE =====");
        console.log(productDetails);


        // filter() - price greater than $100
        const expensiveProducts = products.filter(product => {

            return product.price > 100;

        });

        console.log("===== PRODUCTS ABOVE $100 =====");
        console.log(expensiveProducts);


        // find() - first electronics product
        const electronicsProduct = products.find(product => {

            return product.category === "electronics";

        });

        console.log("===== FIRST ELECTRONICS PRODUCT =====");
        console.log(electronicsProduct);


        // reduce() - total price
        const totalPrice = products.reduce((total, product) => {

            return total + product.price;

        }, 0);

        console.log(`Total Price: $${totalPrice.toFixed(2)}`);


        // sort() - highest to lowest
        const sortedProducts = [...products].sort((a, b) => {

            return b.price - a.price;

        });

        console.log("===== HIGHEST TO LOWEST =====");
        console.log(sortedProducts);

    })
    .catch(error => {

        console.log("Error:", error);

    })
    .finally(() => {

        console.log("===== TASK 1 COMPLETED =====");

    });











// -----------------------------------
// Task 2 — Product Category Dashboard
// -----------------------------------




function buildDashboard(products) {

    const totalProducts = products.length;


    // map() - create price array
    const prices = products.map(product => {

        return product.price;

    });


    // filter() - count categories
    const electronics = products.filter(product => {

        return product.category === "electronics";

    });

    const jewelery = products.filter(product => {

        return product.category === "jewelery";

    });

    const mensClothing = products.filter(product => {

        return product.category === "men's clothing";

    });

    const womensClothing = products.filter(product => {

        return product.category === "women's clothing";

    });


    // sort() - highest to lowest
    const sortedProducts = [...products].sort((a, b) => {

        return b.price - a.price;

    });

    const highestPrice = sortedProducts[0].price;

    const lowestPrice =
        sortedProducts[sortedProducts.length - 1].price;


    // reduce() - total price
    const totalPrice = prices.reduce((total, price) => {

        return total + price;

    }, 0);


    // Average
    const averagePrice = totalPrice / totalProducts;


    console.log("===== PRODUCT DASHBOARD =====");

    console.log(`Total Products: ${totalProducts}`);

    console.log(`Electronics: ${electronics.length}`);
    console.log(`Jewelery: ${jewelery.length}`);
    console.log(`Men's Clothing: ${mensClothing.length}`);
    console.log(`Women's Clothing: ${womensClothing.length}`);

    console.log(`Highest Price: $${highestPrice.toFixed(2)}`);
    console.log(`Lowest Price: $${lowestPrice.toFixed(2)}`);
    console.log(`Average Price: $${averagePrice.toFixed(2)}`);
}


fetch(API)
    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();

    })
    .then(products => {

        buildDashboard(products);

    })
    .catch(error => {

        console.log("Error:", error);

    });















// ------------------------
// Task 3 — User & Post API
// ------------------------




const USERS_API = "https://jsonplaceholder.typicode.com/users";
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";


// Fetch users
fetch(USERS_API)
    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        return response.json();

    })
    .then(users => {

        // Display all user names
        console.log("===== ALL USER NAMES =====");

        users.forEach(user => {

            console.log(user.name);

        });


        // Display name + email
        console.log("===== NAME AND EMAIL =====");

        users.forEach(user => {

            console.log(`Name: ${user.name}`);
            console.log(`Email: ${user.email}`);
            console.log("-------------------");

        });


        // Find user ID 5
        const user5 = users.find(user => {

            return user.id === 5;

        });

        console.log("===== USER ID 5 =====");
        console.log(user5);


        // Filter users from a city
        const city = "Gwenborough";

        const cityUsers = users.filter(user => {

            return user.address.city === city;

        });

        console.log(`===== USERS FROM ${city} =====`);
        console.log(cityUsers);

    })
    .catch(error => {

        console.log("User Error:", error);

    });


// Fetch posts
fetch(POSTS_API)
    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        return response.json();

    })
    .then(posts => {

        // Posts written by user ID 1
        const userPosts = posts.filter(post => {

            return post.userId === 1;

        });

        console.log("===== POSTS BY USER ID 1 =====");

        userPosts.forEach(post => {

            console.log(`Post ID: ${post.id}`);
            console.log(`Title: ${post.title}`);
            console.log("-------------------");

        });


        // Count posts
        console.log(
            `Number of posts by User 1: ${userPosts.length}`
        );


        // First post with title > 50 characters
        const longTitlePost = posts.find(post => {

            return post.title.length > 50;

        });

        console.log("===== FIRST LONG TITLE =====");
        console.log(longTitlePost);

    })
    .catch(error => {

        console.log("Post Error:", error);

    });











// ---------------------
// Task 4 — API + Search
// ---------------------




function searchProducts(products) {

    const category = prompt("Enter product category:");

    const maximumPrice =
        Number(prompt("Enter maximum price:"));


    const result = products.filter(product => {

        return product.category.toLowerCase() ===
               category.toLowerCase()
               &&
               product.price <= maximumPrice;

    });


    console.log("===== SEARCH RESULTS =====");


    if (result.length > 0) {

        result.forEach(product => {

            console.log(`Title: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log("----------------------");

        });

    } else {

        console.log("No products found.");

    }

}


fetch(API)
    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();

    })
    .then(products => {

        searchProducts(products);

    })
    .catch(error => {

        console.log("Error:", error);

    });













// --------------------------  
// Task 5 — API Shopping Cart
// --------------------------




fetch(API)
    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();

    })
    .then(products => {

        console.log("===== AVAILABLE PRODUCTS =====");


        // Display products
        products.forEach(product => {

            console.log(
                `ID: ${product.id} | ${product.title} | $${product.price}`
            );

        });


        // Select product IDs
        const id1 = Number(prompt("Enter first product ID:"));
        const id2 = Number(prompt("Enter second product ID:"));


        // Find products
        const product1 = products.find(product => {

            return product.id === id1;

        });

        const product2 = products.find(product => {

            return product.id === id2;

        });


        // Shopping cart
        const cart = [];


        if (product1) {

            cart.push(product1);

        }

        if (product2) {

            cart.push(product2);

        }


        console.log("===== CART =====");


        cart.forEach((product, index) => {

            console.log(`Product ${index + 1}: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log("-------------------");

        });


        // Calculate total
        const total = cart.reduce((sum, product) => {

            return sum + product.price;

        }, 0);


        // Discount
        let discount = 0;


        if (total > 200) {

            discount = 20;

        } else if (total > 100) {

            discount = 10;

        }


        const discountAmount =
            total * discount / 100;


        const finalAmount =
            total - discountAmount;


        console.log(`Total: $${total.toFixed(2)}`);
        console.log(`Discount: ${discount}%`);
        console.log(`Final Amount: $${finalAmount.toFixed(2)}`);

    })
    .catch(error => {

        console.log("Error:", error);

    })
    .finally(() => {

        console.log("===== CART COMPLETED =====");

    });













// --------------------------------
// Task 6 — FakeStore Product Report
// ---------------------------------



fetch(API)
    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();

    })
    .then(products => {


        console.log("========== PRODUCT REPORT ==========");


        // Total products
        console.log(`Total Products: ${products.length}`);


        // Display all products using forEach()
        console.log("===== ALL PRODUCTS =====");

        products.forEach(product => {

            console.log(`Title: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log("----------------------");

        });


        // map() - product names
        const productNames = products.map(product => {

            return product.title;

        });


        console.log("===== PRODUCT NAMES =====");

        productNames.forEach(name => {

            console.log(`- ${name}`);

        });


        // filter() - products above $100
        const expensiveProducts = products.filter(product => {

            return product.price > 100;

        });


        console.log("===== PRODUCTS ABOVE $100 =====");

        expensiveProducts.forEach(product => {

            console.log(
                `${product.title} - $${product.price}`
            );

        });


        // find() - first electronics product
        const electronicsProduct = products.find(product => {

            return product.category === "electronics";

        });


        console.log("===== ELECTRONICS PRODUCT =====");
        console.log(electronicsProduct);


        // reduce() - total price
        const totalPrice = products.reduce((total, product) => {

            return total + product.price;

        }, 0);


        console.log(
            `Total Product Value: $${totalPrice.toFixed(2)}`
        );


        // some() - any product above $500
        const anyAbove500 = products.some(product => {

            return product.price > 500;

        });


        console.log(`Any Product Above $500: ${anyAbove500}`);


        // every() - all products above $1
        const allAbove1 = products.every(product => {

            return product.price > 1;

        });


        console.log(
            `All Products Above $1: ${allAbove1}`
        );


        // sort() - highest to lowest
        const sortedProducts = [...products].sort((a, b) => {

            return b.price - a.price;

        });


        console.log("===== HIGHEST → LOWEST =====");

        sortedProducts.forEach(product => {

            console.log(
                `${product.title} - $${product.price}`
            );

        });

    })
    .catch(error => {

        console.log("Error:", error);

    })
    .finally(() => {

        console.log("========== REPORT COMPLETED ==========");

    });

