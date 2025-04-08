//transaction_id - уникальный идентификатор транзакции.
//transaction_date - дата транзакции.
//transaction_amount - сумма транзакции.
//transaction_type - тип транзакции (приход или расход).
//transaction_description - описание транзакции.
//merchant_name - название магазина или сервиса.
//card_type - тип карты (кредитная или дебетовая).

/*const transactions = [
  {
    transaction_id: "1",
    transaction_date: "2019-01-01",
    transaction_amount: 100.0,
    transaction_type: "debit",
    transaction_description: "Payment for groceries",
    merchant_name: "SuperMart",
    card_type: "Visa",
  },
];

const transactions = [];*/


const transactions = [
    [
      {
        transaction_id: "1",
        transaction_date: "2019-01-01",
        transaction_amount: 100.0,
        transaction_type: "debit",
        transaction_description: "Payment for groceries",
        merchant_name: "SuperMart",
        card_type: "Visa",
      },
      {
        transaction_id: "2",
        transaction_date: "2019-01-02",
        transaction_amount: 50.0,
        transaction_type: "credit",
        transaction_description: "Refund for returned item",
        merchant_name: "OnlineShop",
        card_type: "MasterCard",
      },
      {
        transaction_id: "3",
        transaction_date: "2019-01-03",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Dinner with friends",
        merchant_name: "RestaurantABC",
        card_type: "Amex",
      },
      {
        transaction_id: "4",
        transaction_date: "2019-01-04",
        transaction_amount: 120.0,
        transaction_type: "debit",
        transaction_description: "Shopping at Mall",
        merchant_name: "FashionStoreXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "5",
        transaction_date: "2019-01-05",
        transaction_amount: 25.0,
        transaction_type: "credit",
        transaction_description: "Returned defective product",
        merchant_name: "ElectronicsShop",
        card_type: "Visa",
      },
      {
        transaction_id: "6",
        transaction_date: "2019-01-06",
        transaction_amount: 60.0,
        transaction_type: "debit",
        transaction_description: "Gasoline refill",
        merchant_name: "GasStationXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "7",
        transaction_date: "2019-01-07",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Lunch with colleagues",
        merchant_name: "Cafe123",
        card_type: "Visa",
      },
      {
        transaction_id: "8",
        transaction_date: "2019-01-08",
        transaction_amount: 90.0,
        transaction_type: "debit",
        transaction_description: "Movie tickets",
        merchant_name: "CinemaXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "9",
        transaction_date: "2019-01-09",
        transaction_amount: 150.0,
        transaction_type: "debit",
        transaction_description: "Weekend getaway",
        merchant_name: "ResortABC",
        card_type: "Discover",
      },
      {
        transaction_id: "10",
        transaction_date: "2019-01-10",
        transaction_amount: 20.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Visa",
      },
      {
        transaction_id: "11",
        transaction_date: "2019-01-11",
        transaction_amount: 65.0,
        transaction_type: "debit",
        transaction_description: "Dinner with family",
        merchant_name: "FamilyRestaurant",
        card_type: "MasterCard",
      },
      {
        transaction_id: "12",
        transaction_date: "2019-01-12",
        transaction_amount: 30.0,
        transaction_type: "credit",
        transaction_description: "Returned books",
        merchant_name: "BookstoreABC",
        card_type: "Visa",
      },
      {
        transaction_id: "13",
        transaction_date: "2019-01-13",
        transaction_amount: 85.0,
        transaction_type: "debit",
        transaction_description: "Home appliances purchase",
        merchant_name: "ApplianceStoreXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "14",
        transaction_date: "2019-01-14",
        transaction_amount: 45.0,
        transaction_type: "debit",
        transaction_description: "Coffee and snacks",
        merchant_name: "CoffeeShop123",
        card_type: "Amex",
      },
      {
        transaction_id: "15",
        transaction_date: "2019-01-15",
        transaction_amount: 110.0,
        transaction_type: "debit",
        transaction_description: "Electronics purchase",
        merchant_name: "ElectronicsStoreXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "16",
        transaction_date: "2019-01-16",
        transaction_amount: 70.0,
        transaction_type: "debit",
        transaction_description: "Car maintenance",
        merchant_name: "AutoServiceABC",
        card_type: "Visa",
      },
      {
        transaction_id: "17",
        transaction_date: "2019-01-17",
        transaction_amount: 55.0,
        transaction_type: "credit",
        transaction_description: "Refund for damaged item",
        merchant_name: "OnlineStoreXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "18",
        transaction_date: "2019-01-18",
        transaction_amount: 80.0,
        transaction_type: "debit",
        transaction_description: "Dinner at fancy restaurant",
        merchant_name: "FineDiningXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "19",
        transaction_date: "2019-01-19",
        transaction_amount: 95.0,
        transaction_type: "debit",
        transaction_description: "Grocery shopping",
        merchant_name: "GroceryStore123",
        card_type: "MasterCard",
      },
      {
        transaction_id: "20",
        transaction_date: "2019-01-20",
        transaction_amount: 35.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Visa",
      },
      {
        transaction_id: "21",
        transaction_date: "2019-01-21",
        transaction_amount: 130.0,
        transaction_type: "debit",
        transaction_description: "Shopping spree",
        merchant_name: "MallABC",
        card_type: "Discover",
      },
      {
        transaction_id: "22",
        transaction_date: "2019-01-22",
        transaction_amount: 45.0,
        transaction_type: "debit",
        transaction_description: "Lunch with friends",
        merchant_name: "Cafe456",
        card_type: "Visa",
      },
      {
        transaction_id: "23",
        transaction_date: "2019-01-23",
        transaction_amount: 70.0,
        transaction_type: "debit",
        transaction_description: "Health and wellness products",
        merchant_name: "WellnessStoreXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "24",
        transaction_date: "2019-01-24",
        transaction_amount: 25.0,
        transaction_type: "credit",
        transaction_description: "Returned clothing item",
        merchant_name: "FashionStore123",
        card_type: "MasterCard",
      },
      {
        transaction_id: "25",
        transaction_date: "2019-01-25",
        transaction_amount: 60.0,
        transaction_type: "debit",
        transaction_description: "Online subscription renewal",
        merchant_name: "SubscriptionServiceXYZ",
        card_type: "Visa",
      },
      {
        transaction_id: "26",
        transaction_date: "2019-01-26",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Date night dinner",
        merchant_name: "RomanticRestaurant",
        card_type: "Discover",
      },
      {
        transaction_id: "27",
        transaction_date: "2019-01-27",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Concert tickets",
        merchant_name: "ConcertHallXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "28",
        transaction_date: "2019-01-28",
        transaction_amount: 85.0,
        transaction_type: "debit",
        transaction_description: "Home decor purchase",
        merchant_name: "HomeDecorStoreABC",
        card_type: "MasterCard",
      },
      {
        transaction_id: "29",
        transaction_date: "2019-01-29",
        transaction_amount: 95.0,
        transaction_type: "debit",
        transaction_description: "Office supplies",
        merchant_name: "OfficeSupplyStoreXYZ",
        card_type: "Visa",
      },
      {
        transaction_id: "30",
        transaction_date: "2019-01-30",
        transaction_amount: 20.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "31",
        transaction_date: "2019-01-31",
        transaction_amount: 110.0,
        transaction_type: "debit",
        transaction_description: "Home improvement supplies",
        merchant_name: "HomeImprovementStore123",
        card_type: "Discover",
      },
      {
        transaction_id: "32",
        transaction_date: "2019-02-01",
        transaction_amount: 55.0,
        transaction_type: "debit",
        transaction_description: "Brunch with family",
        merchant_name: "FamilyBrunchCafe",
        card_type: "Visa",
      },
      {
        transaction_id: "33",
        transaction_date: "2019-02-02",
        transaction_amount: 70.0,
        transaction_type: "debit",
        transaction_description: "Sports equipment purchase",
        merchant_name: "SportingGoodsStoreXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "34",
        transaction_date: "2019-02-03",
        transaction_amount: 25.0,
        transaction_type: "credit",
        transaction_description: "Returned gadget",
        merchant_name: "ElectronicsStore123",
        card_type: "Visa",
      },
      {
        transaction_id: "35",
        transaction_date: "2019-02-04",
        transaction_amount: 95.0,
        transaction_type: "debit",
        transaction_description: "Dinner at Italian restaurant",
        merchant_name: "ItalianDinerXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "36",
        transaction_date: "2019-02-05",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Coffee and pastries",
        merchant_name: "Bakery456",
        card_type: "Amex",
      },
      {
        transaction_id: "37",
        transaction_date: "2019-02-06",
        transaction_amount: 65.0,
        transaction_type: "debit",
        transaction_description: "Gift purchase",
        merchant_name: "GiftShop123",
        card_type: "MasterCard",
      },
      {
        transaction_id: "38",
        transaction_date: "2019-02-07",
        transaction_amount: 120.0,
        transaction_type: "debit",
        transaction_description: "Furniture purchase",
        merchant_name: "FurnitureStoreXYZ",
        card_type: "Visa",
      },
      {
        transaction_id: "39",
        transaction_date: "2019-02-08",
        transaction_amount: 30.0,
        transaction_type: "credit",
        transaction_description: "Returned shoes",
        merchant_name: "ShoeStoreABC",
        card_type: "Discover",
      },
      {
        transaction_id: "40",
        transaction_date: "2019-02-09",
        transaction_amount: 50.0,
        transaction_type: "debit",
        transaction_description: "Haircut and styling",
        merchant_name: "SalonXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "41",
        transaction_date: "2019-02-10",
        transaction_amount: 85.0,
        transaction_type: "debit",
        transaction_description: "Gym membership renewal",
        merchant_name: "GymABC",
        card_type: "MasterCard",
      },
      {
        transaction_id: "42",
        transaction_date: "2019-02-11",
        transaction_amount: 110.0,
        transaction_type: "debit",
        transaction_description: "Electronics accessories",
        merchant_name: "AccessoriesStoreXYZ",
        card_type: "Visa",
      },
      {
        transaction_id: "43",
        transaction_date: "2019-02-12",
        transaction_amount: 35.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "44",
        transaction_date: "2019-02-13",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Dinner at Mexican restaurant",
        merchant_name: "MexicanRestaurant123",
        card_type: "Discover",
      },
      {
        transaction_id: "45",
        transaction_date: "2019-02-14",
        transaction_amount: 45.0,
        transaction_type: "debit",
        transaction_description: "Pet supplies",
        merchant_name: "PetStoreXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "46",
        transaction_date: "2019-02-15",
        transaction_amount: 60.0,
        transaction_type: "debit",
        transaction_description: "Home cleaning service",
        merchant_name: "CleaningServiceABC",
        card_type: "Visa",
      },
      {
        transaction_id: "47",
        transaction_date: "2019-02-16",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Dinner with colleagues",
        merchant_name: "Cafe789",
        card_type: "MasterCard",
      },
      {
        transaction_id: "48",
        transaction_date: "2019-02-17",
        transaction_amount: 95.0,
        transaction_type: "debit",
        transaction_description: "Home entertainment purchase",
        merchant_name: "EntertainmentStoreXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "49",
        transaction_date: "2019-02-18",
        transaction_amount: 30.0,
        transaction_type: "credit",
        transaction_description: "Returned kitchenware",
        merchant_name: "KitchenStore123",
        card_type: "Amex",
      },
      {
        transaction_id: "50",
        transaction_date: "2019-02-19",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Concert tickets",
        merchant_name: "MusicVenueXYZ",
        card_type: "Visa",
      },
      {
        transaction_id: "51",
        transaction_date: "2019-02-20",
        transaction_amount: 110.0,
        transaction_type: "debit",
        transaction_description: "Birthday gift",
        merchant_name: "GiftShop456",
        card_type: "MasterCard",
      },
      {
        transaction_id: "52",
        transaction_date: "2019-02-21",
        transaction_amount: 25.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "53",
        transaction_date: "2019-02-22",
        transaction_amount: 65.0,
        transaction_type: "debit",
        transaction_description: "Dinner at seafood restaurant",
        merchant_name: "SeafoodRestaurant123",
        card_type: "Amex",
      },
      {
        transaction_id: "54",
        transaction_date: "2019-02-23",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Coffee and muffins",
        merchant_name: "CafeABC",
        card_type: "Visa",
      },
      {
        transaction_id: "55",
        transaction_date: "2019-02-24",
        transaction_amount: 55.0,
        transaction_type: "debit",
        transaction_description: "Book purchase",
        merchant_name: "BookstoreXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "56",
        transaction_date: "2019-02-25",
        transaction_amount: 120.0,
        transaction_type: "debit",
        transaction_description: "Home decor",
        merchant_name: "HomeDecorShop123",
        card_type: "Discover",
      },
      {
        transaction_id: "57",
        transaction_date: "2019-02-26",
        transaction_amount: 85.0,
        transaction_type: "debit",
        transaction_description: "Fitness equipment",
        merchant_name: "FitnessStoreXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "58",
        transaction_date: "2019-02-27",
        transaction_amount: 60.0,
        transaction_type: "debit",
        transaction_description: "Car wash",
        merchant_name: "CarWashABC",
        card_type: "Visa",
      },
      {
        transaction_id: "59",
        transaction_date: "2019-02-28",
        transaction_amount: 95.0,
        transaction_type: "debit",
        transaction_description: "Electronics upgrade",
        merchant_name: "ElectronicsStore456",
        card_type: "MasterCard",
      },
      {
        transaction_id: "60",
        transaction_date: "2019-03-01",
        transaction_amount: 35.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "61",
        transaction_date: "2019-03-02",
        transaction_amount: 130.0,
        transaction_type: "debit",
        transaction_description: "Weekend trip",
        merchant_name: "TravelAgencyXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "62",
        transaction_date: "2019-03-03",
        transaction_amount: 45.0,
        transaction_type: "debit",
        transaction_description: "Lunch at diner",
        merchant_name: "Diner456",
        card_type: "Visa",
      },
      {
        transaction_id: "63",
        transaction_date: "2019-03-04",
        transaction_amount: 70.0,
        transaction_type: "debit",
        transaction_description: "Home improvement materials",
        merchant_name: "HomeImprovementStoreXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "64",
        transaction_date: "2019-03-05",
        transaction_amount: 25.0,
        transaction_type: "credit",
        transaction_description: "Returned tool",
        merchant_name: "HardwareStore123",
        card_type: "Discover",
      },
      {
        transaction_id: "65",
        transaction_date: "2019-03-06",
        transaction_amount: 95.0,
        transaction_type: "debit",
        transaction_description: "Dinner at steakhouse",
        merchant_name: "SteakhouseXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "66",
        transaction_date: "2019-03-07",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Coffee and cake",
        merchant_name: "Cafe789",
        card_type: "Visa",
      },
      {
        transaction_id: "67",
        transaction_date: "2019-03-08",
        transaction_amount: 65.0,
        transaction_type: "debit",
        transaction_description: "Home cleaning supplies",
        merchant_name: "CleaningSuppliesStoreXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "68",
        transaction_date: "2019-03-09",
        transaction_amount: 120.0,
        transaction_type: "debit",
        transaction_description: "Furniture",
        merchant_name: "FurnitureStore456",
        card_type: "Discover",
      },
      {
        transaction_id: "69",
        transaction_date: "2019-03-10",
        transaction_amount: 30.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "70",
        transaction_date: "2019-03-11",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Gym membership",
        merchant_name: "GymXYZ",
        card_type: "Visa",
      },
      {
        transaction_id: "71",
        transaction_date: "2019-03-12",
        transaction_amount: 110.0,
        transaction_type: "debit",
        transaction_description: "Tech gadgets",
        merchant_name: "GadgetStoreXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "72",
        transaction_date: "2019-03-13",
        transaction_amount: 35.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "73",
        transaction_date: "2019-03-14",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Dinner with friends",
        merchant_name: "Restaurant789",
        card_type: "Amex",
      },
      {
        transaction_id: "74",
        transaction_date: "2019-03-15",
        transaction_amount: 45.0,
        transaction_type: "debit",
        transaction_description: "Pet grooming",
        merchant_name: "PetGroomingServiceXYZ",
        card_type: "Visa",
      },
      {
        transaction_id: "75",
        transaction_date: "2019-03-16",
        transaction_amount: 60.0,
        transaction_type: "debit",
        transaction_description: "Car accessories",
        merchant_name: "AutoAccessoriesShop123",
        card_type: "MasterCard",
      },
      {
        transaction_id: "76",
        transaction_date: "2019-03-17",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Coffee and sandwiches",
        merchant_name: "CafeXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "77",
        transaction_date: "2019-03-18",
        transaction_amount: 95.0,
        transaction_type: "debit",
        transaction_description: "Home security system",
        merchant_name: "SecuritySystemsXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "78",
        transaction_date: "2019-03-19",
        transaction_amount: 30.0,
        transaction_type: "credit",
        transaction_description: "Returned clothing",
        merchant_name: "ClothingStore456",
        card_type: "Visa",
      },
      {
        transaction_id: "79",
        transaction_date: "2019-03-20",
        transaction_amount: 65.0,
        transaction_type: "debit",
        transaction_description: "Lunch at sushi bar",
        merchant_name: "SushiBar123",
        card_type: "MasterCard",
      },
      {
        transaction_id: "80",
        transaction_date: "2019-03-21",
        transaction_amount: 85.0,
        transaction_type: "debit",
        transaction_description: "Home office supplies",
        merchant_name: "OfficeSupplyStore456",
        card_type: "Discover",
      },
      {
        transaction_id: "81",
        transaction_date: "2019-03-22",
        transaction_amount: 35.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "82",
        transaction_date: "2019-03-23",
        transaction_amount: 120.0,
        transaction_type: "debit",
        transaction_description: "Home decor",
        merchant_name: "HomeDecorShop456",
        card_type: "Visa",
      },
      {
        transaction_id: "83",
        transaction_date: "2019-03-24",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Coffee and bagels",
        merchant_name: "Bakery789",
        card_type: "MasterCard",
      },
      {
        transaction_id: "84",
        transaction_date: "2019-03-25",
        transaction_amount: 55.0,
        transaction_type: "debit",
        transaction_description: "Book purchase",
        merchant_name: "Bookstore456",
        card_type: "Discover",
      },
      {
        transaction_id: "85",
        transaction_date: "2019-03-26",
        transaction_amount: 95.0,
        transaction_type: "debit",
        transaction_description: "Electronics upgrade",
        merchant_name: "ElectronicsStore789",
        card_type: "Amex",
      },
      {
        transaction_id: "86",
        transaction_date: "2019-03-27",
        transaction_amount: 60.0,
        transaction_type: "debit",
        transaction_description: "Car detailing",
        merchant_name: "CarDetailingServiceXYZ",
        card_type: "Visa",
      },
      {
        transaction_id: "87",
        transaction_date: "2019-03-28",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Home cleaning service",
        merchant_name: "CleaningService456",
        card_type: "MasterCard",
      },
      {
        transaction_id: "88",
        transaction_date: "2019-03-29",
        transaction_amount: 110.0,
        transaction_type: "debit",
        transaction_description: "Tech gadgets",
        merchant_name: "TechGadgetStoreXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "89",
        transaction_date: "2019-03-30",
        transaction_amount: 30.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "90",
        transaction_date: "2019-03-31",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Dinner with family",
        merchant_name: "FamilyRestaurant789",
        card_type: "Visa",
      },
      {
        transaction_id: "91",
        transaction_date: "2019-04-01",
        transaction_amount: 110.0,
        transaction_type: "debit",
        transaction_description: "Home decor",
        merchant_name: "HomeDecorShop789",
        card_type: "MasterCard",
      },
      {
        transaction_id: "92",
        transaction_date: "2019-04-02",
        transaction_amount: 35.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "93",
        transaction_date: "2019-04-03",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Gym membership",
        merchant_name: "Gym123",
        card_type: "Amex",
      },
      {
        transaction_id: "94",
        transaction_date: "2019-04-04",
        transaction_amount: 45.0,
        transaction_type: "debit",
        transaction_description: "Pet supplies",
        merchant_name: "PetStore789",
        card_type: "Visa",
      },
      {
        transaction_id: "95",
        transaction_date: "2019-04-05",
        transaction_amount: 60.0,
        transaction_type: "debit",
        transaction_description: "Auto repair",
        merchant_name: "AutoRepairShopXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "96",
        transaction_date: "2019-04-06",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Coffee and cookies",
        merchant_name: "Cafe123",
        card_type: "Discover",
      },
      {
        transaction_id: "97",
        transaction_date: "2019-04-07",
        transaction_amount: 95.0,
        transaction_type: "debit",
        transaction_description: "Home entertainment purchase",
        merchant_name: "EntertainmentStore456",
        card_type: "Amex",
      },
      {
        transaction_id: "98",
        transaction_date: "2019-04-08",
        transaction_amount: 30.0,
        transaction_type: "credit",
        transaction_description: "Returned clothing",
        merchant_name: "ClothingStore789",
        card_type: "Visa",
      },
      {
        transaction_id: "99",
        transaction_date: "2019-04-09",
        transaction_amount: 65.0,
        transaction_type: "debit",
        transaction_description: "Lunch at pizza place",
        merchant_name: "PizzaRestaurantXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "100",
        transaction_date: "2019-04-10",
        transaction_amount: 85.0,
        transaction_type: "debit",
        transaction_description: "Home office supplies",
        merchant_name: "OfficeSupplyStore789",
        card_type: "Discover",
      },
      {
        transaction_id: "101",
        transaction_date: "2019-04-11",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Coffee and croissant",
        merchant_name: "Bakery789",
        card_type: "Visa",
      },
      {
        transaction_id: "102",
        transaction_date: "2019-04-12",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Dinner at Thai restaurant",
        merchant_name: "ThaiRestaurantXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "103",
        transaction_date: "2019-04-13",
        transaction_amount: 110.0,
        transaction_type: "debit",
        transaction_description: "Home decor",
        merchant_name: "HomeDecorShop789",
        card_type: "Discover",
      },
      {
        transaction_id: "104",
        transaction_date: "2019-04-14",
        transaction_amount: 35.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "105",
        transaction_date: "2019-04-15",
        transaction_amount: 85.0,
        transaction_type: "debit",
        transaction_description: "Office supplies",
        merchant_name: "OfficeSupplyStore789",
        card_type: "Visa",
      },
      {
        transaction_id: "106",
        transaction_date: "2019-04-16",
        transaction_amount: 60.0,
        transaction_type: "debit",
        transaction_description: "Car wash",
        merchant_name: "CarWashXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "107",
        transaction_date: "2019-04-17",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Coffee and baguette",
        merchant_name: "Cafe456",
        card_type: "Discover",
      },
      {
        transaction_id: "108",
        transaction_date: "2019-04-18",
        transaction_amount: 95.0,
        transaction_type: "debit",
        transaction_description: "Electronics purchase",
        merchant_name: "ElectronicsStore789",
        card_type: "Amex",
      },
      {
        transaction_id: "109",
        transaction_date: "2019-04-19",
        transaction_amount: 30.0,
        transaction_type: "credit",
        transaction_description: "Returned item",
        merchant_name: "RetailStore123",
        card_type: "Visa",
      },
      {
        transaction_id: "110",
        transaction_date: "2019-04-20",
        transaction_amount: 65.0,
        transaction_type: "debit",
        transaction_description: "Lunch at burger joint",
        merchant_name: "BurgerJointXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "111",
        transaction_date: "2019-04-21",
        transaction_amount: 120.0,
        transaction_type: "debit",
        transaction_description: "Home decor",
        merchant_name: "HomeDecorStoreABC",
        card_type: "Discover",
      },
      {
        transaction_id: "112",
        transaction_date: "2019-04-22",
        transaction_amount: 35.0,
        transaction_type: "credit",
        transaction_description: "Cashback reward",
        merchant_name: "BankXYZ",
        card_type: "Amex",
      },
      {
        transaction_id: "113",
        transaction_date: "2019-04-23",
        transaction_amount: 75.0,
        transaction_type: "debit",
        transaction_description: "Dinner at steakhouse",
        merchant_name: "Steakhouse123",
        card_type: "Visa",
      },
      {
        transaction_id: "114",
        transaction_date: "2019-04-24",
        transaction_amount: 45.0,
        transaction_type: "debit",
        transaction_description: "Pet grooming",
        merchant_name: "PetGroomingXYZ",
        card_type: "MasterCard",
      },
      {
        transaction_id: "115",
        transaction_date: "2019-04-25",
        transaction_amount: 60.0,
        transaction_type: "debit",
        transaction_description: "Auto repair",
        merchant_name: "AutoRepairXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "116",
        transaction_date: "2019-04-26",
        transaction_amount: 40.0,
        transaction_type: "debit",
        transaction_description: "Coffee and doughnuts",
        merchant_name: "DoughnutShop789",
        card_type: "Amex",
      },
      {
        transaction_id: "117",
        transaction_date: "2019-04-27",
        transaction_amount: 95.0,
        transaction_type: "debit",
        transaction_description: "Home entertainment purchase",
        merchant_name: "EntertainmentStoreABC",
        card_type: "Visa",
      },
      {
        transaction_id: "118",
        transaction_date: "2019-04-28",
        transaction_amount: 30.0,
        transaction_type: "credit",
        transaction_description: "Returned item",
        merchant_name: "RetailStore456",
        card_type: "MasterCard",
      },
      {
        transaction_id: "119",
        transaction_date: "2019-04-29",
        transaction_amount: 65.0,
        transaction_type: "debit",
        transaction_description: "Lunch at sandwich shop",
        merchant_name: "SandwichShopXYZ",
        card_type: "Discover",
      },
      {
        transaction_id: "120",
        transaction_date: "2019-04-30",
        transaction_amount: 85.0,
        transaction_type: "debit",
        transaction_description: "Home office supplies",
        merchant_name: "OfficeSupplyStoreABC",
        card_type: "Amex",
      },
    ],
  ];




  /** первая функция 
   * Возвращает массив уникальных типов транзакций.
   * @param {transactions []} transactions - массив транзакций.
   * @returns {transactions []} - Возвращает массив уникальных типов транзакций.
   */
  function getUniqueTransactionTypes(transactions) {
    const allTransactions = transactions.flat(); // Разворачиваем массив массивов в плоский массив
    return [...new Set(allTransactions.map(tx => tx.transaction_type))];
};
console.log("\n Возвращает массив уникальных типов транзакций. \n" + getUniqueTransactionTypes(transactions));




/** вторая функция 
 * Вычисляет сумму всех транзакций.
 * @param {Array<Object>} transactions - Массив транзакций.
 * @returns {number} - Возвращает сумму всех транзакций.
 */
function calculateTotalAmount(transactions) {
  transactions = transactions.flat();
  return transactions.reduce((sum, transaction) => sum + transaction.transaction_amount, 0);
}
 console.log("\n Вычисляет сумму всех транзакций. \n" + calculateTotalAmount(transactions));



 
 /** треться функция // пока что не работает 
   Вычисляет общую сумму транзакций за указанный год, месяц и день.
 * Если передать `0`, то этот параметр будет проигнорирован.
 * @param {Array<Object>} transactions - Массив транзакций.
 * @param {number} year - Год (например, 2019). Если 0, то не фильтруется.
 * @param {number} month - Месяц (от 1 до 12). Если 0, то не фильтруется.
 * @param {number} day - День месяца (от 1 до 31). Если 0, то не фильтруется.
 * @returns {number} - Общая сумма транзакций за указанный период.
 */
function calculateTotalAmountByDate(transactions, year, month, day) {
  transactions = transactions.flat(); // Разворачиваем вложенные массивы, если они есть

  // Фильтруем транзакции по дате
  const filteredTransactions = transactions.filter(transaction => {
    const date = new Date(transaction.transaction_date); // Преобразуем строку в Date

    // Проверяем, соответствует ли дата заданным условиям
    const matchYear = year === 0 || date.getFullYear() === year;
    const matchMonth = month === 0 || date.getMonth() + 1 === month; // JS считает месяцы с 0
    const matchDay = day === 0 || date.getDate() === day;

    return matchYear && matchMonth && matchDay;
  });

  // Складываем суммы отфильтрованных транзакций
  return filteredTransactions.reduce((sum, transaction) => sum + transaction.transaction_amount, 0);
}
 console.log("\n Вычисляет общую сумму транзакций за указанный год, месяц и день. \n" + calculateTotalAmountByDate(transactions,2019,3,29));




 /** четвертая функция 
  * Фильтрует транзакции по заданному типу.
 *
 * @param {Array<Object>} transactions - Массив транзакций (может содержать вложенные массивы).
 * @param {string} type - Тип транзакции (например, "debit" или "credit").
 * @returns {Array<Object>} - Массив транзакций указанного типа.
  */
 function getTransactionByType(transactions, type) {
  transactions = transactions.flat();
  const allTransactions = transactions.filter(transaction => transaction.transaction_type == type);
  return allTransactions;
 };
  console.log("\n Фильтрует транзакции по заданному типу. \n" , getTransactionByType(transactions,"debit"));




 /** пятая функция //надо разобрать 
  *  Возвращает массив транзакций, проведенных в указанном диапазоне дат от startDate до endDate.
  * @param {Array<Object>} transactions - Массив транзакций (может содержать вложенные массивы).
  * @param {string} startDate - Начальная дата в формате "YYYY-MM-DD".
  * @param {string} endDate - Конечная дата в формате "YYYY-MM-DD".
  * @returns {Array<Object>} - Массив транзакций, попадающих в указанный диапазон дат.
  */
function getTransactionsInDateRange(transactions, startDate, endDate) {
  transactions = transactions.flat(); 
  
  // Преобразуем строки в объекты Date
  const start = new Date(startDate);
  const end = new Date(endDate);

  return transactions.filter(trans => {
    const transactionDate = new Date(trans.transaction_date);
    return transactionDate >= start && transactionDate <= end;
  });
};
 console.log("\nВозвращает массив транзакций, проведенных в указанном диапазоне дат от startDate до endDate.\n" , getTransactionsInDateRange(transactions, "2019-01-26", "2019-04-30"));




 /** шестая функция 
  * Возвращает массив транзакций, совершенных с указанным merchantName
  *  @param {Array<Object>} transactions - Массив транзакций (может содержать вложенные массивы).
  * @param {string} merchantName - Название продавца, по которому нужно фильтровать.
  * @returns {Array<Object>} - Массив транзакций, относящихся к указанному продавцу.
  */
 function getTransactionsByMerchant(transactions, merchantName){
  transactions = transactions.flat();
  return transactions.filter(trans => trans.merchant_name === merchantName);
 };
 console.log("\nВозвращает массив транзакций, совершенных с указанным merchantName\n" , getTransactionsByMerchant(transactions,"OfficeSupplyStoreABC"));




 /** седьмая функция
  * Возвращает среднее значение транзакций.
  * @param {Array<Object>} transactions - Массив транзакций (может содержать вложенные массивы).
  * Каждая транзакция должна содержать свойство `transaction_amount` (число).
  * @returns {number} - Средняя сумма транзакций.
  */
 function calculateAverageTransactionAmount(transactions){
  transactions = transactions.flat();
    return calculateTotalAmount(transactions) / transactions.length || 0;
 };
 console.log("\nВозвращает среднее значение транзакций.\n" , calculateAverageTransactionAmount(transactions));




 /** восьмая функция
  * Возвращает массив транзакций с суммой в заданном диапазоне от minAmount до maxAmount.
  *  @param {Array<Object>} transactions - Массив транзакций.
  * @param {number} minAmount - Минимальная сумма транзакции.
  * @param {number} maxAmount - Максимальная сумма транзакции.
  * @returns {Array<Object>} - Массив транзакций в пределах указанного диапазона.
  */
 function getTransactionsByAmountRange(transactions, minAmount, maxAmount) {
  transactions = transactions.flat();
  return transactions.filter(transaction => (transaction.transaction_amount > minAmount && transaction.transaction_amount < maxAmount));
 };
 console.log("\nВозвращает массив транзакций с суммой в заданном диапазоне от minAmount до maxAmount.\n" , getTransactionsByAmountRange(transactions,70,100));




 /** девятая функция
  * Вычисляет общую сумму дебетовых транзакций
  * @param {Array<Object>} transactions - Массив транзакций. Каждая транзакция должна содержать свойство `transaction_amount` и `transaction_type`.
  * @returns {number} - Общая сумма всех дебетовых транзакций.
  */
 function calculateTotalDebitAmount(transactions){
  transactions = transactions.flat();
  transactions = transactions.filter(trans => trans.transaction_type === "debit");
  return transactions.reduce((sum,amount) => sum + amount.transaction_amount,0);
 };
 console.log("\nВычисляет общую сумму дебетовых транзакций\n" , calculateTotalDebitAmount(transactions));




 /** 10 //переделать или разобраться 
  * Возвращает месяц, в котором было больше всего транзакций.
  * @param {Array<Object>} transactions - Массив транзакций. Каждая транзакция должна содержать свойство `transaction_date`, которое может быть строкой или объектом `Date`.
  * @returns {number} - Месяц с наибольшим количеством транзакций (от 0 до 11, где 0 - январь, 11 - декабрь).
  */
 function findMostTransactionsMonth(transactions) {

  transactions = transactions.flat();

    const months = transactions.map(tx => {
    const date = new Date(tx.transaction_date); // Преобразуем строку в объект Date
    return date.getMonth(); // Получаем месяц (от 0 до 11)
  });

  const monthCounts = {};
  months.forEach(month => {
    monthCounts[month] = (monthCounts[month] || 0) + 1; // Увеличиваем счетчик для месяца
  });

  let mostTransactionsMonth = 0;
  let maxCount = 0;
  
  for (let month in monthCounts) { //это цикл for...in, который используется для перебора свойств объекта.
    if (monthCounts[month] > maxCount) {
      mostTransactionsMonth = month;
      maxCount = monthCounts[month];
    }
  }

  return parseInt(mostTransactionsMonth, 10); // Возвращаем месяц как число (от 0 до 11)
 };
 console.log("\nВозвращает месяц, в котором было больше всего транзакций.\n" , findMostTransactionsMonth(transactions) + " (0 = январь)");




 /**11
  * Возвращает месяц, в котором было больше дебетовых транзакций.
  * @param {Array<Object>} transactions - Массив транзакций. Каждая транзакция должна содержать свойство `transaction_type`, которое указывает на тип транзакции, и свойство `transaction_date`, которое может быть строкой или объектом `Date`.
  * @returns {number} - Месяц с наибольшим количеством дебетовых транзакций (от 0 до 11, где 0 - январь, 11 - декабрь).
  */
 function findMostDebitTransactionMonth(transactions) {
  transactions = transactions.flat();
  transactions = transactions.filter(arr => arr.transaction_type === "debit");

  return findMostTransactionsMonth(transactions);
 };
 console.log("\nВозвращает месяц, в котором было больше дебетовых транзакций.\n" , findMostDebitTransactionMonth(transactions) + " (0 = январь)");




 /** 12
  * Возвращает каких транзакций больше всего.
  *  @param {Array<Object>} transactions - Массив транзакций (вложенный или одномерный).
  * @returns {string} - Тип транзакции, который встречается чаще всего: `"debit"`, `"credit"` или `"equal"`.
  */
 function mostTransactionTypes(transactions) {
  transactions = transactions.flat();
  let debits = 0;
  let credits = 0;
  transactions.forEach( trans => {
    if(trans.transaction_type === "debit"){debits++;};
    if(trans.transaction_type === "credit"){credits++;};
 })
 if(debits===credits){return "equal";};
 if(debits > credits){return "debit";};
 return "credit";
 };
 console.log("\nВозвращает каких транзакций больше всего.\n" , mostTransactionTypes(transactions));




 /** 13
  * – Возвращает массив транзакций, совершенных до указанной даты.
  * @param {Array<Object>} transactions - Массив транзакций.
  * @param {string|Date} date - Дата в формате строки ("YYYY-MM-DD") или объект Date.
  * @returns {Array<Object>} - Транзакции, совершенные до указанной даты.
  */
 function getTransactionsBeforeDate(transactions, date) {
  transactions = transactions.flat();
  const targetDate = new Date(date);
  transactions = transactions.filter(arr => 
  {
    let date1 = new Date(arr.transaction_date);
    if(date1.getTime() < targetDate.getTime()) {return true}
  })
  return transactions;
 };
 console.log("\nВозвращает массив транзакций, совершенных до указанной даты.\n" , getTransactionsBeforeDate(transactions, "2019-04-30"));



 
 /**14
  * – Возвращает транзакцию по ее уникальному идентификатору (id).
  * @param {Array<Object>} transactions - Массив транзакций.
 * @param {string|number} id - Уникальный идентификатор транзакции.
 * @returns {Object|null} - Найденная транзакция или null, если не найдено.
  */
 function findTransactionById(transactions, id) {
  transactions = transactions.flat();
  return transactions.find(arr => arr.transaction_id == id) || "no such transaction";
 };
 console.log("\nВозвращает транзакцию по ее уникальному идентификатору (id).\n" , findTransactionById(transactions , 100));




 /** 15
  *  – Возвращает новый массив, содержащий только описания транзакций.
  @param {Array<Object>} transactions - Массив транзакций.
 * @returns {Array<string>} - Массив строк с описаниями транзакций.
 */
function mapTransactionDescriptions(transactions) {
  transactions = transactions.flat();
  return transactions.map(transaction => transaction.transaction_description);
}
 console.log("\nВозвращает новый массив, содержащий только описания транзакций.\n" , mapTransactionDescriptions(transactions));




//transaction_id - уникальный идентификатор транзакции.
//transaction_date - дата транзакции.
//transaction_amount - сумма транзакции.
//transaction_type - тип транзакции (приход или расход).
//transaction_description - описание транзакции.
//merchant_name - название магазина или сервиса.
//card_type - тип карты (кредитная или дебетовая).