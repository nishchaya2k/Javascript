//is it important to use DOM content Loader ?

function abc() {
    const currencies = {
        "en-IN": "INR",
        "en-US": "USD",
        "en-GB": "GBP",
        "en-DE": "EUR",
    };

    let selectedOption; // Declare selectedOption variable
    let selectedPrice; // Declare selectedPrice variable

    const options = document.getElementById('curr');
    const inputPrice = document.querySelector(".price");
    const submit = document.querySelector("#submit");
    const result = document.querySelector(".result");

    options.addEventListener("click", (e) => {
        selectedOption = e.target.value;

    });

    // inputPrice.addEventListener("keyup", (e) => {
    //     selectedPrice = e.target.value;

    // });

    inputPrice.addEventListener("change", (e) => {
        selectedPrice = e.target.value;

    });

    submit.addEventListener("click", (e) => {
        const locale = selectedOption;          //locale contained the value of selectedOption

        const formatOptions = {
            style: "currency",
            currency: currencies[locale],      //each values assocociated with currency
        };

        let formattedText = new Intl.NumberFormat(locale, formatOptions).format(selectedPrice)
        console.log(formattedText);

        let unformattedText = new Intl.NumberFormat().format(selectedPrice)
        console.log(unformattedText);

        result.innerHTML = formattedText

    });
};

abc();

// IIFE  immediate invoke function expression
/*
 -> This constructor takes in two major parameters, locales and options. They're both optional.

 -> The First Argument:     Locales

1.  The locale is an optional parameter that can be passed as a string. It represents a specific 
    geographical, political, or cultural region. It just formats the number based on the locale 
    and is not the currency formatting


 -> Second Argument:    Options (Style, Currency, …)

2.  currency: Another option is currency. You can use this option to specify the currency you 
    want to format to, such as 'USD', 'CAD', 'GBP``', 'INR' and lots more. This will also help 
    provide the symbol in the appropriate position based on the locale.

3.  style: You use this to specify the type of formatting you want. This takes in values like 
    decimals, currency, and units. For this article, you will use currency because that is the 
    style in which you want to format the number.

4.  In the provided code snippet, the default format used by Intl.NumberFormat().format() 
    without specifying any locale or options is dependent on the user's locale settings in 
    their browser.

5.  (e)When an event occurs, JavaScript generates an event object that contains information about 
    the event, such as what type of event it is, which element triggered it, and any relevant 
    data associated with it.

6.  event.target refers to the element on which the event was triggered, and event.target.value 
    specifically refers to the current value of that element.

*/