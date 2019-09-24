## Credentials

There are no login credentials implemented, free to type anything for this example.

## REDUX: NOTE

Redux is used mainly for the purpose of proving knowledge; i don't totally agree with using Redux everywhere.
For this app Redux was not necessary; only if we think from a scalable point of view.

## The Architecture

* assets
    -- fonts
* common
    -- Buttons
    -- Loader
    -- Navigator
    -- Sidemenu
* redux
    -- actions
    -- reducers
* resources
    -- images
    -- constants
* screens
    -- Login
    -- Stocks
* theme
App.js
index.js

You will find the main concept divided into screens ( what usually are containers ), and common folder where other components are implemented like Buttons, Sidemenu, Loader and the Navigator where the Sidemenu is implemented.

The Provider encapsulating the store starts from the App.js, and the flow goes as following: CheckLogin to see if the user is logged in and returns a separate page according to this. After logging in, the user is redirected to an another page (Logged.js) from where he can log out or continue to the Stocks list (Stocks.js).

Stocks are calling the fetchAPI action from redux in componentDidMount with a timer; and it is unmounted in componentWillUnmount after clicking on a row and going to details view of a specific stock.

The details view shows us a chart with a few details from the selected stock; some tabs for more information available in the bottom. From this screen the user can go back to the list view and the details view will be unmounted also.

Used a theme folder where different constants are stored for styles, colors and sizes.

Redux-thunk used as middleware.

Loader implemented until data is fetched.

Recommended tool for debugging: React Native Debugger


## STOCKS

The API is fetched in redux/actions/fetchAPI. In the success case, I'm avoiding null values from the data.

In Stocks.js, as mentioned above, calling the fetchAPI action from redux in componentDidMount with a timer; and it is unmounted in componentWillUnmount after clicking on a row and going to details view of a specific stock.

Each stock item has an avatar created with their inital letters and taking the intradayPriceMutation as the data for showing how the stocks are changing. Displayed with red for negative values and green for positive.

In Stock Details page, we see the stock name in the header, the last updated time in the top right, and the currentPrice + intradayPriceMutation in the top left. After that, we have a chart that displays a few other values.


------------------------------------------------------------------------------------

## Assesment for Investments (React-native)

For this assesment you will be asked to build a React-Native application to display some stock exchange endpoint.
The goal is to deliver a working application that will show the available stocks and their price in a list.

### Polling
The endpoint should be polled, and after each new dataset is retrieved the list should highlight which instruments have increased in price,
and which instruments have decreased in price in comparison with the previous dataset.

### Navigation
On selecting a stock item from the list, a new view should be pushed where some more detailed information about the stock item is displayed.

### Networking
The endpoint to use is [here](https://services.ing.nl/api/securities/mobile/markets/stockmarkets/AEX).
If this endpoint is not reachable from your standard browser use a REST client Postman.

### JSON
Looking at the response, the list of instruments should be used as the datasource:

```
"instruments": [
        {
            "instrumentType": "STOCK",
            "exchange": "Equiduct Netherlands",
            "category": "Aandelen",
            "currency": "EUR",
            "isin": "NL0000009355",
            "name": "Unilever",
            "symbol": "UN",
            "uid": "7b2273796d626f6c223a22554e227d",
            "currentPrice": {
                "value": 49.055,
                "unit": "EUR",
                "percent": false
            },
            "priceDetails": {
                "closePrice": {
                    "value": 49.02,
                    "unit": "EUR",
                    "percent": false
                },
                "highPrice": {
                    "value": 49.255,
                    "unit": "EUR",
                    "percent": false
                },
                "lowPrice": {
                    "value": 48.78,
                    "unit": "EUR",
                    "percent": false
                },
                "openPrice": {
                    "value": 49.0699,
                    "unit": "EUR",
                    "percent": false
                }
            },
            "intradayPriceMutation": 0.07139942880456956,
            "datetime": "2019-02-20T15:15:39.739Z"
        },
        {...}
        ]
```

In particular, the `name` can be used for the name of the instrument, and the `currentPrice.value` for the price.
For the pushed detail view, you are free to display any additional fields.

### Assignment
In sum, the following features should be present in your app:

- [ ] List of all instruments is the initial view of the app
- [ ] Poll the endpoint and show increasers and decreasers compared to the previous dataset
- [ ] On selecting an instrument, push a view with more instrument details

The code can be pushed to this repository
