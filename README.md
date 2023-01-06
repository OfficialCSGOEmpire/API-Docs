# CSGOEmpire API Key Documentation

# Contents

- [CSGOEmpire API Key Documentation](#csgoempire-api-key-documentation)
- [Contents](#contents)
- [Getting started](#getting-started)
- [API Keys](#api-keys)
- [Libraries \& Links](#libraries--links)
  - [Libraries](#libraries)
  - [Links](#links)
- [Rate Limits](#rate-limits)
- [Trade Status Enums](#trade-status-enums)
- [Metadata](#metadata)
- [Get Active Trades](#get-active-trades)
- [Get Active Auctions](#get-active-auctions)
- [Settings](#settings)
- [Transaction History](#transaction-history)
- [Blocking Users](#blocking-users)
  - [Blocking a User](#blocking-a-user)
  - [Unblocking a User](#unblocking-a-user)
  - [View all blocked users](#view-all-blocked-users)
- [Deposits](#deposits)
  - [Get CSGO Inventory](#get-csgo-inventory)
  - [Get Unique Info](#get-unique-info)
  - [Create Deposit](#create-deposit)
  - [Cancel Deposit](#cancel-deposit)
  - [Cancel Multiple Deposits](#cancel-multiple-deposits)
  - [Sell Now](#sell-now)
- [Withdraw](#withdraw)
  - [Get Listed Items](#get-listed-items)
  - [Get Depositor Stats](#get-depositor-stats)
  - [Create Withdrawal](#create-withdrawal)
  - [Place Bid](#place-bid)
- [Websocket](#websocket)
  - [Connect To Websocket](#connect-to-websocket)
  - [Websocket Authentication](#websocket-authentication)
  - [Websocket Events](#websocket-events)
  - [timesync](#timesync)
  - [new\_item](#new_item)
  - [updated\_item](#updated_item)
  - [auction\_update](#auction_update)
  - [deleted\_item](#deleted_item)
  - [trade\_status](#trade_status)

# Getting started

All requests are included in bash form. You can use a program like [Postman](https://www.postman.com/downloads/) to import the request ([example](https://w1z0.xyz/i/fea03bc7f399b7d.mp4)) and generate ([example](https://w1z0.xyz/i/187fd8084ca40d6.mp4)) code for most major languages.

Any code provided is as an example, you should write your own if you wish to do more than the most basic tasks.

Any input marked '(required)' is required for the request to work, anything without that is optional.

# API Keys

API keys can be created, viewed and revoked here: https://csgoempire.com/trading/apikey

Setting up an API key requires 2FA to be activated, 2FA codes are not required for requests authenticated via API key.

# Libraries & Links

Currently we don't offer any official library for the API, but below you can find links to **unofficial** libraries and resources to help you with creating your first bot.

Please note as these are **unofficial** libraries, they may not be maintained or updated regularly, you should also verify the source code yourself.

If you have something you think should be added here, please [open an issue](https://github.com/OfficialCSGOEmpire/API-Docs/issues) with a link to the library or resource and a description of what it is/does.

## Libraries

 - [Javascript](https://github.com/gustavo-dev/csgoempire-api) by [@gustavo-dev](https://github.com/gustavo-dev)

## Links

- [Antal's Deposit Bot](https://github.com/antal-k/csgoempire-deposit) by [@antal-k](https://github.com/antal-k) - Automated deposit bot for CSGOEmpire
- [Pricempire](https://pricempire.com?utm_source=csgoempire_github) - Price comparison website for most CSGO marketplaces



# Rate Limits

Rate limits limit the number of requests you can make per second from one IP. Currently there is a global request limit (to any endpoint) of 120 requests per 10 seconds. If you exceed a ratelimit you'll be unable to access any endpoints for 60 seconds. This will return a response with a status code of 429.

[[Back to contents](#contents)]

# Trade Status Enums

Below are a list of trade statuses. Trade endpoints will return status enums.

- Error = -1;
- Pending = 0;
- Received = 1;
- Processing = 2;
- Sending = 3;
- Confirming = 4;
- Sent = 5;
- Completed = 6;
- Declined = 7;
- Canceled = 8;
- TimedOut = 9;
- Credited = 10;

[[Back to contents](#contents)]

# Metadata

URL: https://csgoempire.com/api/v2/metadata/socket

Method: GET

Returns the user object, which is used to identify via websocket, as well as socket token (authorizationToken) & socket signature (signature) which are used to authenticate on websocket.

<details>
<summary>Example Request:</summary>

```bash
curl --location --request GET 'https://csgoempire.com/api/v2/metadata/socket' \
--header 'Authorization: Bearer {API-KEY-HERE}'

```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
    "user": {
        "id": 303119,
        "steam_id": "76561198106192114",
        "steam_id_v3": "145926386",
        "steam_name": "Artemis",
        "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4f/4f619bc788f0d41261d2a5ced0e96a281af88479_full.jpg",
        "profile_url": "https://steamcommunity.com/id/G0FastMen/",
        "registration_timestamp": "2016-07-27 23:20:03",
        "registration_ip": "0.0.0.0",
        "last_login": "2021-11-29 13:02:54",
        "balance": 0,
        "total_profit": 0,
        "total_bet": 0,
        "betback_total": 0,
        "bet_threshold": 0,
        "total_trades": 0,
        "total_deposit": 0,
        "total_withdraw": 0,
        "withdraw_limit": 0,
        "csgo_playtime": 0,
        "last_csgo_playtime_cache": "2016-07-27 23:20:03",
        "trade_url": "https://steamcommunity.com/tradeoffer/new/?partner=145926386&token=ABCDEF",
        "trade_offer_token": "ABCDEF",
        "ref_id": 0,
        "total_referral_bet": 0,
        "total_referral_commission": 0,
        "ref_permission": 0,
        "ref_earnings": 0,
        "total_ref_earnings": 0,
        "total_ref_count": 0,
        "total_credit": 0,
        "referral_code": "Artemis",
        "referral_amount": 50,
        "muted_until": 1632354690,
        "mute_reason": "Other",
        "admin": 0,
        "super_mod": 0,
        "mod": 0,
        "utm_campaign": "",
        "country": "",
        "is_vac_banned": 2,
        "steam_level": 343,
        "last_steam_level_cache": "2021-11-30 07:41:07",
        "whitelisted": 1,
        "total_tips_received": 0,
        "total_tips_sent": 0,
        "withdrawal_fee_owed": "0.0000",
        "flags": 0,
        "ban": null,
        "balances": [],
        "level": 0,
        "xp": 0,
        "socket_token": "",
        "user_hash": "",
        "hashed_server_seed": "",
        "intercom_hash": "",
        "roles": [],
        "eligible_for_free_case": false,
        "extra_security_type": "2fa",
        "total_bet_skincrash": 0,
        "total_bet_matchbetting": 0,
        "total_bet_roulette": 0,
        "total_bet_coinflip": 0,
        "total_bet_supershootout": 0,
        "p2p_telegram_notifications_allowed": true,
        "p2p_telegram_notifications_enabled": true,
        "verified": false,
        "hide_verified_icon": false,
        "unread_notifications": [],
        "last_session": {},
        "email": "",
        "email_verified": false,
        "eth_deposit_address": "",
        "btc_deposit_address": "",
        "ltc_deposit_address": "",
        "bch_deposit_address": "",
        "steam_inventory_url": "https://steamcommunity.com/profiles/76561198106192114/inventory/#730",
        "steam_api_key": "",
        "has_crypto_deposit": true,
        "chat_tag": {},
        "linked_accounts": [],
        "api_token": "nice try"
    },
    "socket_token": "",
    "socket_signature": ""
}

````

</details>

<details>
<summary>Ratelimit</summary>

No specific ratelimit, global ratelimit of 120 requests per 10 seconds applies.
</details>

[[Back to contents](#contents)]


# Get Active Trades
URL: https://csgoempire.com/api/v2/trading/user/trades

Method: GET

Returns an array of all items currently being deposited or withdrawn by this account. This does not include bids placed on active items until the auction ends.


<details>
<summary>Example Request:</summary>


```bash
curl --location --request GET 'https://csgoempire.com/api/v2/trading/user/trades' \
--header 'Authorization: Bearer {API-KEY-HERE}'

````

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
  "success": true,
  "data": {
    "deposits": [
      {
        "id": 11203,
        "service_name": "csgoempire",
        "service_invoice_id": 920,
        "user_id": 303119,
        "item_id": 50755,
        "items": [
          {
            "asset_id": 26876810352,
            "created_at": "2022-10-14 13:54:35",
            "custom_price_percentage": 0,
            "full_position": 83,
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRd4cJ5nqeQ89mk2VHg_UpkYjj0JdLGdAFvNAvS81G6kLjq1pHtv5SdnHdhuCYq-z-DyHWIya-0",
            "id": 50755,
            "is_commodity": false,
            "market_name": "★ M9 Bayonet | Forest DDPAT (Factory New)",
            "market_value": 488.82,
            "name_color": "8650AC",
            "position": null,
            "preview_id": null,
            "price_is_unreliable": 1,
            "tradable": true,
            "tradelock": false,
            "updated_at": "2022-10-18 08:46:45",
            "wear": null
          }
        ],
        "total_value": 48882,
        "security_code": "",
        "tradeoffer_id": 0,
        "trade_id": 2,
        "status": 2,
        "status_message": "",
        "metadata": {
          "auction_highest_bid": null,
          "auction_highest_bidder": null,
          "auction_number_of_bids": 0,
          "auction_ends_at": 1666083002,
          "auction_auto_withdraw_failed": null,
          "price_updated_at": null,
          "trade_url": null,
          "partner": null,
          "total_fee": null,
          "fee": null,
          "old_total_value": null,
          "item_position_in_inventory": null,
          "item_inspected": true,
          "expires_at": null,
          "delivery_time": null,
          "phishingScamDetected": null,
          "item_validation": null,
          "penalty": null
        },
        "item_hash": "7d1cacdc3016c134e284ae253543cc3b0fd63942",
        "created_at": "2022-10-18 08:47:02",
        "updated_at": "2022-10-18 08:47:02"
      }
    ],
    "withdrawals": [
      
    ]
  }
}
```

</details>
 
<details>
<summary>Ratelimit</summary>
3 requests per 10 seconds, block for 1 minute.
</details>

[[Back to contents](#contents)]

# Get Active Auctions

URL: https://csgoempire.com/api/v2/trading/user/auctions

Method: GET

Returns an array of all auctions currently being bid on by this account.

<details>
<summary>Example Request:</summary>

```bash
curl --location --request GET 'https://csgoempire.com/api/v2/trading/user/auctions' \
--header 'Authorization: Bearer {API-KEY-HERE}'

```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
  "success": true,
  "active_auctions": [
    {
      "auction_ends_at": 1666083221,
      "auction_highest_bid": 227,
      "auction_highest_bidder": 303119,
      "auction_number_of_bids": 1,
      "custom_price_percentage": 0,
      "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUmqBwTTR7SQb37g5vWCwlxdFEC5uyncgZi0vGQJWwQudm0xtTexaD2ZOmClyVB5sL8h7mCHA",
      "is_commodity": true,
      "market_name": "Name Tag",
      "market_value": 227,
      "name_color": "D2D2D2",
      "preview_id": null,
      "price_is_unreliable": true,
      "stickers": [
        
      ],
      "wear": null,
      "published_at": "2022-10-18T08:51:02.803761Z",
      "id": 11204,
      "depositor_stats": {
        "delivery_rate_recent": 0.6,
        "delivery_rate_long": 0.7567567567567568,
        "delivery_time_minutes_recent": 7,
        "delivery_time_minutes_long": 7,
        "steam_level_min_range": 5,
        "steam_level_max_range": 10,
        "user_has_trade_notifications_enabled": false,
        "user_is_online": null
      },
      "above_recommended_price": -5
    }
  ]
}
```

</details>
 
<details>
<summary>Ratelimit</summary>

No specific ratelimit, global ratelimit of 120 requests per 10 seconds applies.
</details>

[[Back to contents](#contents)]

# Settings

URL: https://csgoempire.com/api/v2/trading/user/settings

Method: POST

Used to update your tradelink and/or Steam API key

Inputs:

- trade_url (required): string, your steam trade url
- steam_api_key : string, your steam api key

<details>
<summary>Example Request:</summary>

```bash
curl --location --request POST 'https://csgoempire.com/api/v2/trading/user/settings' \
--header 'Authorization: Bearer {API-KEY-HERE}' \
--header 'Content-Type: application/json' \
--data-raw '{"trade_url":"https://steamcommunity.com/tradeoffer/new/?partner=145926386&token=zYMYgbXB"}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
    "success": true,
    "escrow_seconds": 0
}
```

</details>
 
<details>
<summary>Ratelimit</summary>

No specific ratelimit, global ratelimit of 120 requests per 10 seconds applies.
</details>

[[Back to contents](#contents)]

# Transaction History

URL: https://csgoempire.com/api/v2/user/transactions?page={page_number}

Method: GET

Used to get your transaction history.

Inputs:
- page_number : int, the page you wish to get

<details>
<summary>Example Request:</summary>

```bash
    curl --location --request GET 'https://csgoempire.com/api/v2/user/transactions?page=1' \
    --header 'Authorization: Bearer {API-KEY-HERE}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
    "current_page": 1,
    "data": [
        {
            "id": 54773614,
            "key": "withdrawal_invoices",
            "type": "Steam Auction Bid Withdrawal",
            "balance": 17543153,
            "delta": -227,
            "balance_after": 17542926,
            "timestamp": 1666083061.355,
            "timestamp_raw": 1666083061355,
            "date": "2022-10-18 08:51:01",
            "invoice_id": null,
            "data": {
                "id": 69,
                "processor_name": "Steam",
                "status": 200,
                "status_name": "Created",
                "metadata": {
                    "deposit_id": 11204,
                    "payment_method": "auction_bid",
                    "id": 11204,
                    "auction_highest_bid": 227,
                    "auction_highest_bidder": 303119,
                    "auction_number_of_bids": 1,
                    "auction_ends_at": 1666083221
                }
            }
        }
    ],
    "first_page_url": "user/transactions?page=1",
    "from": 1,
    "last_page": 2499,
    "last_page_url": "user/transactions?page=2499",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "user/transactions?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": "user/transactions?page=2",
            "label": "2",
            "active": false
        },
        {
            "url": "user/transactions?page=3",
            "label": "3",
            "active": false
        },
        {
            "url": "user/transactions?page=4",
            "label": "4",
            "active": false
        },
        {
            "url": "user/transactions?page=5",
            "label": "5",
            "active": false
        },
        {
            "url": "user/transactions?page=6",
            "label": "6",
            "active": false
        },
        {
            "url": "user/transactions?page=7",
            "label": "7",
            "active": false
        },
        {
            "url": "user/transactions?page=8",
            "label": "8",
            "active": false
        },
        {
            "url": "user/transactions?page=9",
            "label": "9",
            "active": false
        },
        {
            "url": "user/transactions?page=10",
            "label": "10",
            "active": false
        },
        {
            "url": null,
            "label": "...",
            "active": false
        },
        {
            "url": "user/transactions?page=2498",
            "label": "2498",
            "active": false
        },
        {
            "url": "user/transactions?page=2499",
            "label": "2499",
            "active": false
        },
        {
            "url": "user/transactions?page=2",
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": "user/transactions?page=2",
    "path": "user/transactions",
    "per_page": 1,
    "prev_page_url": null,
    "to": 1,
    "total": 2499
}
```

</details>

<details>
<summary>Ratelimit</summary>

No specific ratelimit, global ratelimit of 120 requests per 10 seconds applies.
</details>

[[Back to contents](#contents)]

# Blocking Users

## Blocking a User

URL: https://csgoempire.com/api/v2/trading/block-list/{steam_id}

Method: POST

Used to block a user, preventing them from trading with you, and you with them.

Inputs:
- steam_id : string, the users steam ID

<details>
<summary>Example Request:</summary>

```bash
    curl --location --request POST 'https://csgoempire.com/api/v2/trading/block-list/76561197960287930' \
    --header 'Authorization: Bearer {API-KEY-HERE}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
    "success": true,
}
```

</details>

<details>
<summary>Ratelimit</summary>

No specific ratelimit, global ratelimit of 120 requests per 10 seconds applies.
</details>

[[Back to contents](#contents)]

## Unblocking a User

URL: https://csgoempire.com/api/v2/trading/block-list/{steam_id}

Method: DELETE

Used to unblock a user, allowing them to trade with you, and you with them.

Inputs:
- steam_id : string, the users steam ID

<details>
<summary>Example Request:</summary>

```bash
    curl --location --request DELETE 'https://csgoempire.com/api/v2/trading/block-list/76561197960287930' \
    --header 'Authorization: Bearer {API-KEY-HERE}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
    "success": true,
}
```

</details>

<details>
<summary>Ratelimit</summary>

No specific ratelimit, global ratelimit of 120 requests per 10 seconds applies.
</details>

[[Back to contents](#contents)]

## View all blocked users

URL: https://csgoempire.com/api/v2/trading/block-list

Method: GET

Used to get a list of all currently blocked users.

<details>
<summary>Example Request:</summary>

```bash
    curl --location --request GET 'https://csgoempire.com/api/v2/trading/block-list' \
    --header 'Authorization: Bearer {API-KEY-HERE}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
[
  {
    "id": 1,
    "blocker_user_id": 76561198106192114,
    "blocked_user_id": 76561197960287930,
    "created_at": "2022-02-15 11:57:08",
    "updated_at": "2022-02-15 11:57:08"
  }
]
```

</details>

<details>
<summary>Ratelimit</summary>

No specific ratelimit, global ratelimit of 120 requests per 10 seconds applies.
</details>

[[Back to contents](#contents)]

# Deposits

## Get CSGO Inventory

URL: https://csgoempire.com/api/v2/trading/user/inventory

Method: GET

Fetch your inventory from steam and caches it to the database for 1 hour.

Inputs:

- invalid : yes|no - Filters invalid items, defaults to no filtering

<details>
<summary>Example Request:</summary>

```bash
  curl --location --request GET 'https://csgoempire.com/api/v2/trading/user/inventory' \
  --header 'Authorization: Bearer {API-KEY-HERE}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
    "success": true,
    "updatedAt": 1666082810,
    "allowUpdate": true,
    "data": [
        {
            "asset_id": 26876810352,
            "created_at": "2022-10-14 13:54:35",
            "custom_price_percentage": null,
            "full_position": 83,
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRd4cJ5nqeQ89mk2VHg_UpkYjj0JdLGdAFvNAvS81G6kLjq1pHtv5SdnHdhuCYq-z-DyHWIya-0",
            "id": 50755,
            "invalid": "This item is currently in an active deposit.",
            "is_commodity": false,
            "market_name": "★ M9 Bayonet | Forest DDPAT (Factory New)",
            "market_value": 48882,
            "name_color": "8650AC",
            "position": null,
            "preview_id": "43246cdca7fe",
            "price_is_unreliable": 1,
            "stickers": [],
            "tradable": true,
            "tradelock": false,
            "updated_at": "2022-10-18 08:46:45",
            "wear": 0.064
        },
        {
            "asset_id": 27299195480,
            "created_at": "2022-10-14 13:54:34",
            "custom_price_percentage": null,
            "full_position": 27,
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhnwMzFcDoV09ajh5SClPLLP7LWnn8f7sZ1ib6S9I6i3w21qUNlYDymI9KcclI3YAvRr1Ltwujm18TvtMnPzGwj5Hdb1VS4mQ",
            "id": 50696,
            "is_commodity": false,
            "market_name": "StatTrak™ MAG-7 | Justice (Factory New)",
            "market_value": 3267,
            "name_color": "CF6A32",
            "position": 2,
            "preview_id": null,
            "price_is_unreliable": 0,
            "stickers": [
                {
                    "sticker_id": 3453,
                    "wear": null,
                    "name": "Legendary Eagle Master (Holo)",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROR0XcS-O_2NrDbF51NRdCur_qJwJt7PvHfTJ94N2kk4XFw_OhZbmAxWhT7Zcp3u2TpIqmilDl8hZsMjylJoHEIAA9ZQ2B-1W-xfCv28G5r0_B7Q"
                }
            ],
            "tradable": true,
            "tradelock": false,
            "updated_at": "2022-10-18 08:46:45",
            "wear": 0.068
        }
    ]
}
```

</details>
 
<details>
<summary>Ratelimit</summary>

No specific ratelimit, global ratelimit of 120 requests per 10 seconds applies.
</details>

[[Back to contents](#contents)]

## Get Unique Info

URL: https://csgoempire.com/api/v2/trading/user/inventory/unique-info

Method: GET

Get inspected unique info for items in user inventory. Examples include float/sticker data

<details>
<summary>Example Request:</summary>

```bash
    curl --location --request GET 'https://csgoempire.com/api/v2/trading/user/inventory/unique-info' \
    --header 'Authorization: Bearer {API-KEY-HERE}'
```

</details>


<details>
<summary>Example Response:</summary>
 
```json
{
    "success": true,
    "data": [
    {
      "id": 50696,
      "asset_id": 27299195480,
      "wear": 0.068,
      "stickers": [
        {
          "slot": 0,
          "sticker_id": 3453,
          "wear": null,
          "scale": null,
          "rotation": null,
          "tint_id": null,
          "name": "Legendary Eagle Master (Holo)",
          "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROR0XcS-O_2NrDbF51NRdCur_qJwJt7PvHfTJ94N2kk4XFw_OhZbmAxWhT7Zcp3u2TpIqmilDl8hZsMjylJoHEIAA9ZQ2B-1W-xfCv28G5r0_B7Q"
        }
      ]
    },
    {
      "id": 50697,
      "asset_id": 27297587028,
      "wear": 0.392,
      "stickers": [
        
      ]
    }
}
```

</details>
 
<details>
<summary>Ratelimit</summary>

No specific ratelimit, global ratelimit of 120 requests per 10 seconds applies.
</details>

[[Back to contents](#contents)]

## Create Deposit

URL: https://csgoempire.com/api/v2/trading/deposit

Method: POST

List an item(s) for sale.

Inputs:

- Items: (required) array with array elements: [id: itemId, coin_value: int] (Max 20 per request)

Notes: 
* coin_value is in coin cents, so 100.01 coins is represented as 10001
* coin_value should be the price you want to list at. If you want to list at 100.01 coins, you should set coin_value to 10001. See below for how to calculate the coin value.
* the frontend works differently, use how these docs suggest, the requests are smaller and therefore faster than the frontend.
* you *should* be chunking these requests into groups of 20, but it's not required. If you don't chunk, you'll list slower and hit ratelimits more often.
  
Pricing example:
```python
percent = 5
market_price = 10001
price = round(market_price * (percent/100+1))
item = {
    "id": 3731677705,
    "coin_value": price
}
```


<details>
<summary>Example Input:</summary>

```json
    {
        "items": [
            {
                "id": 3731677704,
                "coin_value": 576811
            },
            {
                "id": 3731677705,
                "coin_value": 52811
            }
        ]
    }
```

</details>

<details>
<summary>Example Request:</summary>y>

```bash
    curl --location --request POST 'https://csgoempire.com/api/v2/trading/deposit' \
    --header 'Authorization: Bearer {API-KEY-HERE}' \
    --header 'Content-Type: application/json' \
    --data-raw '{"items":[{"id":50755,"coin_value":48882}]}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
    "success": true,
    "deposits": {
        "success": true,
        "id": "11203",
        "item_id": 50755
    },
    "pending": []
}
```

</details>
 
<details>
<summary>Ratelimit</summary>

20 requests per 10 seconds, block for 1 minute.
</details>

[[Back to contents](#contents)]

## Cancel Deposit

URL: https://csgoempire.com/api/v2/trading/deposit/{DEPOSIT-ID}/cancel

Method: POST

Cancels processing deposit without any bids. Once a bid has been placed items are no longer eligible to be cancelled.

<details>
<summary>Example Request:</summary>

```bash
    curl --location --request POST 'https://csgoempire.com/api/v2/trading/deposit/28391470/cancel' \
    --header 'Authorization: Bearer {API-KEY-HERE}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
    "success": true
}
```

</details>
 
<details>
<summary>Ratelimit</summary>

Success: Global ratelimit
Error: 20 requests per 10 seconds, block for 1 minute.
</details>

[[Back to contents](#contents)]

## Cancel Multiple Deposits

URL: https://csgoempire.com/api/v2/trading/deposit/cancel

Method: POST

Cancels processing multiple deposit without any bids. Once a bid has been placed items are no longer eligible to be cancelled.

<details>
<summary>Example Request:</summary>

```bash
    curl --location --request GET 'https://csgoempire.com/api/v2/trading/deposit/cancel' \
    --header 'Authorization: Bearer {API-KEY-HERE}' \
    --data-raw '{"ids":[10001, 10002, 10003, 10004, 10005]}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
    "success": true,
    "data": {
        "10001": {"success":false,"message":"You don't have a cancellable deposit."},
        "10002": {"success":true},
        "10003": {"success":true},
        "10004": {"success":true},
        "10005": {"success":false,"message":"You don't have a cancellable deposit."}
    }
}

```

</details>
 
<details>
<summary>Ratelimit</summary>

Success: Global ratelimit
Error: 20 requests per 10 seconds, block for 1 minute.
</details>

[[Back to contents](#contents)]

## Sell Now

URL: https://csgoempire.com/api/v2//trading/deposit/{deposit_id}/sell

Method: POST

Sell an item immediately.

Inputs:

- deposit_id (required) : integer - Required in the URL

<details>
<summary>Example Request:</summary>

```bash
  curl --location --request POST 'https://csgoempire.com/api/v2/trading/deposit/28393316/sell' \
  --header 'Authorization: Bearer {API-KEY-HERE}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
    "success": true,
    "auction_data": {
        "id": 28393316,
        "app_id": 730,
        "auction_highest_bid": 54,
        "auction_highest_bidder": 2700170,
        "auction_number_of_bids": 2,
        "auction_ends_at": 1638273900
    }
}
```

</details>
 
<details>
<summary>Ratelimit</summary>

No specific ratelimit, global ratelimit of 120 requests per 10 seconds applies.
</details>

[[Back to contents](#contents)]

# Withdraw

## Get Listed Items

URL: https://csgoempire.com/api/v2/trading/items

Method: GET

Get a list of all items listed on the withdrawals page

Inputs:

- per_page - (required), number. How many items to fetch. Min is 1 and max is 200 for guests and 2500 for logged in user
- page - (required), number. Page to fetch.
- search - string. Item market name to search. 2 char min length.
- order - string. Field to use for ordering supported fields: market_value
- sort - string. Sorting asc or desc. Default asc
- auction - string. Auction only, yes/no, defaults to no.
- price_min - number. Minimum item current price.
- price_max - number. Maximum item current price.
- price_max_above - number. Maximum item percentage to show.
- wear_min - number (0-1). Minimum float wear value.
- wear_max - number (0-1). Maximum float wear value.
- delivery_time_long_min - number. Minimum delivery time average from the last 100 items.
- delivery_time_long_max - number. Maximum delivery time average from the last 100 items.
- has_stickers - yes/no. Filters for items that have stickers.
- is_commodity - yes/no. Filters for items that are commodities. Cannot have wear/sticker based filters.

<details>
<summary>Example Request:</summary>

```bash
  curl --location --request GET 'https://csgoempire.com/api/v2/trading/items?per_page=10&page=1&price_max_above=15&sort=desc&order=market_value' \
  --header 'Authorization: Bearer {API-KEY-HERE}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
    "current_page": 1,
    "data": [
        {
            "auction_ends_at": 1665762091,
            "auction_highest_bid": null,
            "auction_highest_bidder": null,
            "auction_number_of_bids": 0,
            "custom_price_percentage": 0,
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhnwMzFJQJE4NOhkZKYqPrxN7LEmyVQ7JMkieiTp92sjAzs_hc4Nm_7LdCcdQdrNVrU_gK6xOnt0MO4tZvP1zI97XHPMlL3",
            "is_commodity": false,
            "market_name": "StatTrak™ M4A4 | Spider Lily (Well-Worn)",
            "market_value": 240,
            "name_color": "CF6A32",
            "preview_id": "3d33db497b7b",
            "price_is_unreliable": false,
            "stickers": [],
            "wear": 0.431,
            "published_at": "2022-10-14T15:38:33.947439Z",
            "id": 11196,
            "depositor_stats": {
                "delivery_rate_recent": 1,
                "delivery_rate_long": 0.9565217391304348,
                "delivery_time_minutes_recent": 2,
                "delivery_time_minutes_long": 3,
                "steam_level_min_range": 5,
                "steam_level_max_range": 10,
                "user_has_trade_notifications_enabled": false,
                "user_is_online": null
            },
            "above_recommended_price": -6
        }
    ],
    "first_page_url": "http://csgoempire.com/api/trading/items?per_page=10&price_max_above=15&sort=desc&order=market_value&page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "http://csgoempire.com/api/trading/items?per_page=10&price_max_above=15&sort=desc&order=market_value&page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "http://csgoempire.com/api/trading/items?per_page=10&price_max_above=15&sort=desc&order=market_value&page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "http://csgoempire.com/api/trading/items",
    "per_page": "10",
    "prev_page_url": null,
    "to": 1,
    "total": 1
}
```

</details>
 
<details>
<summary>Ratelimit</summary>

20 requests per 10 seconds if not searching, 3 requests per 10 seconds if searching

</details>

[[Back to contents](#contents)]

## Get Depositor Stats

URL: https://csgoempire.com/api/v2/trading/deposit/{DEPOSIT_ID}/stats

Method: GET

Get the depositing users stats from a unique deposit ID

Inputs:

- deposit_id (required) : integer - Required in the URL

<details>
<summary>Example Request:</summary>

```bash
    curl --location --request GET 'https://csgoempire.com/api/v2/trading/deposit/28079776/stats' \
    --header 'Authorization: Bearer {API-KEY-HERE}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
{
    "delivery_rate_recent": 1,
    "delivery_rate_long": 1,
    "delivery_time_minutes_recent": null,
    "delivery_time_minutes_long": null,
    "steam_level_min_range": 100,
    "steam_level_max_range": 5000,
    "user_has_trade_notifications_enabled": false,
    "user_is_online": null
}
```

</details>
 
<details>
<summary>Ratelimit</summary>

No specific ratelimit, global ratelimit of 120 requests per 10 seconds applies.
</details>

[[Back to contents](#contents)]

## Create Withdrawal

URL: https://csgoempire.com/api/v2/trading/deposit/{DEPOSIT_ID}/withdraw

Method: POST

Withdraw item directly if the auction has expired without being won.

Inputs:

- deposit_id (required) : integer - Required in the URL
- coin_value (required) : integer - The item price.

<details>
<summary>Example Request:</summary>

```bash
    curl --location --request POST 'https://csgoempire.com/api/v2/trading/deposit/28396506/withdraw' \
    --header 'Authorization: Bearer {API-KEY-HERE}' \
    --header 'Content-Type: application/json' \
    --data-raw '{"coin_value":64}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
    {
        "success": true,
        "data": {
            "id": 13745535,
            "user_id": 303119,
            "item_id": null,
            "items": [
                {
                    "app_id": 730,
                    "created_at": 1638267229,
                    "custom_price_percentage": null,
                    "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROWEPTTOz_h52CHFp7ITtRubOpZVZh1vGbJW0Xuoq3zdiKxfKsNunVxj1TsMEk3LmS9930jQPnqEI6NW3tZNjC2hpzSfU",
                    "id": 28387732,
                    "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulROWEPTTOz_h52CHFp7ITtRubOpZVZh1vGbJW0Xuoq3zdiKxfKsNunVxj1TsMEk3LmS9930jQPnqEI6NW3tZNjC2hpzSfU",
                    "is_commodity": true,
                    "market_name": "Sticker | GODSENT (Foil) | Stockholm 2021",
                    "market_value": 0.41,
                    "name": "Sticker | GODSENT (Foil) | Stockholm 2021",
                    "name_color": "D2D2D2",
                    "paint_index": null,
                    "preview_id": null,
                    "price_is_unreliable": false,
                    "tradable": true,
                    "tradelock": false,
                    "type": "Exotic Sticker",
                    "updated_at": "2021-11-30 13:41:36",
                    "wear": null
                }
            ],
            "total_value": 41,
            "security_code": "",
            "tradeoffer_id": 28387732,
            "trade_id": 2,
            "status": 4,
            "status_message": "Confirming",
            "metadata": {
                "auction_highest_bid": null,
                "auction_highest_bidder": null,
                "auction_number_of_bids": 0,
                "auction_ends_at": 1638267409,
                "auction_auto_withdraw_failed": null,
                "price_updated_at": null,
                "trade_url": null,
                "partner": null,
                "total_fee": null,
                "fee": null,
                "old_total_value": null,
                "item_position_in_inventory": 2,
                "item_inspected": false,
                "steam_id": "76561198106192114",
                "expires_at": null,
                "delivery_time": null,
                "phishingScamDetected": null,
                "item_validation": null,
                "possible_abuse_detected_at": null,
                "penalty": null,
                "service_name": "csgoempire",
                "service_invoice_id": 3881481
            },
            "created_at": "2021-11-30 13:46:29",
            "updated_at": "2021-11-30 13:46:29"
        },
        "invoice": {
            "user_id": 303119,
            "status": 201,
            "processor_id": 1,
            "currency_id": 1,
            "amount_coins": 41,
            "metadata": {
                "deposit_id": 28387732
            },
            "ip": "0.0.0.0",
            "updated_at": "2021-11-30 13:46:29",
            "created_at": "2021-11-30 13:46:27",
            "id": 5191251,
            "processor_txid": "13745535",
            "user": {
                "id": 303119,
                "steam_id": "76561198106192114",
                "steam_id_v3": "145926386",
                "steam_name": "Artemis",
                "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4f/4f619bc788f0d41261d2a5ced0e96a281af88479_full.jpg",
                "profile_url": "https://steamcommunity.com/id/G0FastMen/",
                "registration_timestamp": "2016-07-27 23:20:03",
                "registration_ip": "0.0.0.0",
                "last_login": "2021-11-29 13:02:54",
                "balance": 0,
                "total_profit": 0,
                "total_bet": 0,
                "betback_total": 0,
                "bet_threshold": 0,
                "total_trades": 0,
                "total_deposit": 0,
                "total_withdraw": 0,
                "withdraw_limit": 0,
                "csgo_playtime": 0,
                "last_csgo_playtime_cache": "2016-07-27 23:20:03",
                "trade_url": "https://steamcommunity.com/tradeoffer/new/?partner=145926386&token=ABCDEF",
                "trade_offer_token": "ABCDEF",
                "ref_id": 0,
                "total_referral_bet": 1,
                "total_referral_commission": 1,
                "ref_permission": 1,
                "ref_earnings": 0,
                "total_ref_earnings": 1,
                "total_ref_count": 0,
                "total_credit": 1,
                "referral_code": null,
                "referral_amount": 50,
                "muted_until": 1632354690,
                "mute_reason": "Other",
                "admin": 0,
                "super_mod": 0,
                "mod": 0,
                "utm_campaign": "",
                "country": "",
                "is_vac_banned": 2,
                "steam_level": 343,
                "last_steam_level_cache": "2021-11-30T13:46:29.814674Z",
                "whitelisted": 1,
                "total_tips_received": 0,
                "total_tips_sent": 0,
                "withdrawal_fee_owed": "0.0000",
                "flags": 704,
                "encrypted_fields": [],
                "balances": [],
                "kyc": [],
                "steam_data": {
                    "user_id": 303119,
                    "timecreated": 1378522915
                }
            },
            "status_name": "Processing",
            "processor_name": "Steam P2P"
        }
    }
```

</details>
 
<details>
<summary>Ratelimit</summary>

Success: 8 requests per 10 seconds, block for 1 minute
Failure: 2 per 10 seconds, block for 1 minute

</details>

[[Back to contents](#contents)]

## Place Bid

URL: https://csgoempire.com/api/v2/trading/deposit/{DEPOSIT_ID}/bid

Method: POST

Place a bid on an auction.

Inputs:

- bid_value (required) : integer, the amount of coins to bid.

<details>
<summary>Example Request:</summary>

```bash
    curl --location --request POST 'https://csgoempire.com/api/v2/trading/deposit/28396506/bid' \
    --header 'Authorization: Bearer {API-KEY-HERE}' \
    --header 'Content-Type: application/json' \
    --data-raw '{"bid_value":64}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
    {
        "success": true,
        "auction_data": {
            "id": 28396506,
            "app_id": 730,
            "auction_highest_bid": 64,
            "auction_highest_bidder": 303119,
            "auction_number_of_bids": 11,
            "auction_ends_at": 1638279554
        },
        "invoice": {
            "user_id": 303119,
            "status": 200,
            "processor_id": 1,
            "currency_id": 1,
            "amount_coins": 64,
            "metadata": {
                "deposit_id": 28396506
            },
            "ip": "0.0.0.0",
            "updated_at": 1638279494,
            "created_at": 1638279490,
            "id": 5190329,
            "processor_ref": "15064711",
            "status_name": "CREATED",
            "processor_name": "Steam P2P",
            "currency_code": "CSGOEMPIRE_COIN",
            "complete_at": null,
            "refunded_at": null
        }
    }
```

</details>
 
<details>
<summary>Ratelimit</summary>

Success: 20 requests per 10 seconds, block for 1 minute
Failure: 20 per 10 seconds, block for 1 minute

</details>

[[Back to contents](#contents)]

# Websocket

## Connect To Websocket

URL: wss://trade.csgoempire.com/s/?EIO=3&transport=websocket

Example code for connecting to the websocket can be found [here](https://github.com/OfficialCSGOEmpire/API-Docs/blob/main/examples/websocket/websocket-connection.js)

Note:
Connecting to the socket requires Socket.IO v2.x Client

[[Back to contents](#contents)]

## Websocket Authentication

The socket can be used as unauthenticated but if you want to receive trade updates you need to auth. To authenticate you need to emit identify event with the data:

<details>
 <summary>Example Frame:</summary>

```json
  {
    "uid": <userid>,
    "model": { ...user_model },
    "authorizationToken": <token>,
    "signature": <token_signature>,
    "uuid": <optional_device_identifier>
  }
```

</details>
 
See [metadata](#metadata) on how to get the required socket auth data.

This returns the following:

<details>
<summary>Example Response:</summary>

```json
42/trade,
[
   "init",
   {
      "authenticated":true,
      "serverTime":"2021-11-30T08:30:09.443Z",
      "server":"trade:slave-server:GpOfWK",
      "id":303119,
      "steam_name":"Artemis",
      "steam_id":"76561198106192114",
      "verified":false,
      "hide_verified_icon":false,
      "avatar":"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/4f/4f619bc788f0d41261d2a5ced0e96a281af88479_full.jpg",
      "profile_url":"https://steamcommunity.com/id/G0FastMen/",
      "balance":1533471521,
      "bet_threshold":0,
      "total_bet":2147483647,
      "total_deposit":2182538,
      "withdraw_limit":234118685,
      "ref_id":0,
      "referral_code":"Artemis",
      "muted_until":0,
      "mute_reason":"",
      "utm_campaign":"",
      "is_vac_banned":2,
      "whitelisted":false,
      "registration_ip":"0.0.0.0",
      "steam_level":343,
      "registration_timestamp":"2016-07-27 23:20:03",
      "total_profit":-689280648,
      "roles":[
         "super-mod",
         "tester",
         "support-manager",
         "root",
         "matchbetting-beta",
         "shark",
         "admin",
         "manager",
         "mod"
      ],
      "chat_tag":null,
      "uid":303119,
      "helper_mod":false,
      "mod":true,
      "super_mod":true,
      "admin":true,
      "qa":false,
      "deposited":true,
      "lvl":119,
      "badge_text":null,
      "badge_text_localized":null,
      "badge_color":null,
      "hide_rank":null,
      "name":"Artemis"
   }
]
```

</details>
 
After you're identified you'll want to submit the default filters to subscribe to item updates. **Without this being emitted, item updates will not be sent to you.**

To do this, emit the following:


<details>
<summary>Filters:</summary>

```json
{
    "price_max": 9999999
}
```
</details>


In most languages, this will look something like `emit('filters', {'price_max': 9999999});`.


[[Back to contents](#contents)]

## Websocket Events

All websocket events can be either a single item OR an array containing multiple items.

## timesync

Syncing server timestamp. It is not emitted unless the client asks it by sending timesync event.

<details>
<summary>Event sample:</summary>

```json
  42/trade,["timesync",1619682261540]
```

</details>
 
[[Back to contents](#contents)]

## new_item

Emitted when a new item is available.

<details>
<summary>Event sample:</summary>

```json
42/trade,
[
    "new_item",
    [
        {
            "auction_ends_at": 1667634833,
            "auction_highest_bid": null,
            "auction_highest_bidder": null,
            "auction_number_of_bids": 0,
            "custom_price_percentage": 15,
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJkJKKkPj6NbLDk1RC68phj9bN_Iv9nBrg80FkZmGgLdKVeg46ZFyC_lPrxO25hZTotZ_OmHphuiNx43aJyUa1n1gSOaKu3f6c",
            "is_commodity": false,
            "market_name": "SSG 08 | Dragonfire (Factory New)",
            "market_value": 2735,
            "name_color": "D2D2D2",
            "preview_id": "314f2ed36b33",
            "price_is_unreliable": false,
            "stickers": [],
            "wear": 0.05,
            "published_at": "2022-11-05T07:50:54.575295Z",
            "id": 92048513,
            "depositor_stats": {
                "delivery_rate_recent": 1,
                "delivery_rate_long": 1,
                "delivery_time_minutes_recent": 3,
                "delivery_time_minutes_long": 29,
                "steam_level_min_range": 21,
                "steam_level_max_range": 40,
                "user_has_trade_notifications_enabled": true,
                "user_is_online": null
            },
            "above_recommended_price": 9
        },
        {
            "auction_ends_at": 1667634834,
            "auction_highest_bid": null,
            "auction_highest_bidder": null,
            "auction_number_of_bids": 0,
            "custom_price_percentage": -3,
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5k5SDnvnzIITck29Y_cg_i-rHoYrw3VLs_RZlZ2umLYSTdQc_Zl7ZrwPoxefp18Du7Z-bwHZh6z5iuyiJTfqMXg",
            "is_commodity": false,
            "market_name": "AK-47 | Ice Coaled (Field-Tested)",
            "market_value": 2849,
            "name_color": "D2D2D2",
            "preview_id": "2b26bb4fd4d2",
            "price_is_unreliable": false,
            "stickers": [
                {
                    "sticker_id": 5283,
                    "wear": null,
                    "name": "Cloud9 | Antwerp 2022",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRcQljHQva9hZ-BARJ3fDtbt6iiLklkhaaQc25D7Ym3l4baxKSsauvUlzgHv8cm27mUotWh3Abh-hc_Z2umOsbLJassj6yL"
                },
                {
                    "sticker_id": 4925,
                    "wear": null,
                    "name": "Great Wave",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRSXHPCTvS53svWHFpmIAVDia2kPQJfw_LYdC994N2kk4XFlKetZb-FlzhUu5Aj3bmUrImj3lay-Bc9Nzv7LIKUIVA8YVjX_Vnox_Cv28FYyXBDZA"
                },
                {
                    "sticker_id": 3945,
                    "wear": null,
                    "name": "Baited",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRbSV7RS9u9xcrXUkl7NxcYtLusPwJk7PTEfi5R9eO6lZKMkrn3ar2BlDxU7JUo3L7ErImh3gy1qhVla277ddLBdQc7NA3T8wXvxOu-m9bi6woR5I7k"
                },
                {
                    "sticker_id": 5898,
                    "wear": null,
                    "name": "Baby Cerberus",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulReX0vfFrTi1c7RSmJ3IBZVs6iwODhw0uPNYwJO7c6xkc6IxfT3ZOiJwThX7ZR12L-W8dWm3gGyrxA4Zmr3I9PGdwM4aAnS-VDs366x0lpBDHM_"
                }
            ],
            "wear": 0.193,
            "published_at": "2022-11-05T07:50:54.712228Z",
            "id": 92048515,
            "depositor_stats": {
                "delivery_rate_recent": 1,
                "delivery_rate_long": 0.9852941176470589,
                "delivery_time_minutes_recent": 1,
                "delivery_time_minutes_long": 1,
                "steam_level_min_range": 5,
                "steam_level_max_range": 10,
                "user_has_trade_notifications_enabled": true,
                "user_is_online": null
            },
            "above_recommended_price": -9
        },
        {
            "auction_ends_at": 1667634833,
            "auction_highest_bid": null,
            "auction_highest_bidder": null,
            "auction_number_of_bids": 0,
            "custom_price_percentage": 6,
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eO-m5WFk-TgPLTFnlRD7cFOh-zF_Jn4xg3srUtuZW-iJIDEI1BvZ13UqVm_xurq08Pt6J2cmCYy7yhz5infmECpwUYb3NOh42I",
            "is_commodity": false,
            "market_name": "★ Sport Gloves | Scarlet Shamagh (Field-Tested)",
            "market_value": 43003,
            "name_color": "8650AC",
            "preview_id": null,
            "price_is_unreliable": false,
            "stickers": [],
            "wear": 0.354,
            "published_at": "2022-11-05T07:50:54.867698Z",
            "id": 92048514,
            "depositor_stats": {
                "delivery_rate_recent": 1,
                "delivery_rate_long": 0.99,
                "delivery_time_minutes_recent": 5,
                "delivery_time_minutes_long": 9,
                "steam_level_min_range": 61,
                "steam_level_max_range": 99,
                "user_has_trade_notifications_enabled": true,
                "user_is_online": null
            },
            "above_recommended_price": 0
        }
    ]
]
```

</details>
 
[[Back to contents](#contents)]

## updated_item

Emitted when an existing item has been updated. For example, if status changes.

<details>
<summary>Event sample:</summary>

```json
42 / trade, ["updated_item", {
    "app_id": 730,
    "auction_auto_withdraw_failed": null,
    "auction_ends_at": 1631921311,
    "auction_highest_bid": null,
    "auction_highest_bidder": null,
    "auction_number_of_bids": 0,
    "custom_name": null,
    "description_type": "Souvenir Mil-Spec Grade SMG",
    "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZu7OHNdQJO5du-gM7bwqb2MeuClTsCv8Ek2LiZ9t2giwa28hVlZGD0doSUIANqYV_U_gC2366x0j0WoURS",
    "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZu7OHNdQJO5du-gM7bwqb2MeuClTsCv8Ek2LiZ9t2giwa28hVlZGD0doSUIANqYV_U_gC2366x0j0WoURS",
    "is_commodity": false,
    "market_name": "Souvenir MP9 | Hot Rod (Factory New)",
    "market_value": 3394,
    "name": "Souvenir MP9 | Hot Rod (Factory New)",
    "name_color": "FFD700",
    "paint_index": null,
    "paint_seed": null,
    "preview_id": null,
    "price_is_unreliable": 0,
    "stickers": [],
    "tradable": true,
    "tradelock": false,
    "updated_at": "2021-09-17 23:15:33",
    "wear": null,
    "published_at": "2021-09-17T23:25:31.111700Z",
    "id": 10003,
}]

```

</details>
 
[[Back to contents](#contents)]

## auction_update

Emitted when someone places a bid for an auction item.

<details>
<summary>Event sample:</summary>

```json
42/trade,
[
   "auction_update",
   [
      {
         "id":12345,
         "auction_highest_bid":1234,
         "auction_highest_bidder":123456,
         "auction_number_of_bids":1,
         "auction_ends_at":166763000
      },
      {
         "id":54321,
         "auction_highest_bid":1234,
         "auction_highest_bidder":123456,
         "auction_number_of_bids":1,
         "auction_ends_at":166763000
      }
   ]
]

```

</details>
 
[[Back to contents](#contents)]

## deleted_item

Emitted when the item is not anymore available for withdrawing. Eg. the auction ends and the winner withdraws it. Contains an array of ids.

<details>
<summary>Event sample:</summary>

```json
42/trade,
[
   "deleted_item",
   [
      91997374,
      92044606,
      92019018,
      92044607,
      91997376,
      92044608,
      91997377
   ]
]
```

</details>
 
[[Back to contents](#contents)]

## trade_status

Emitted when the trade status gets updated.

<details>
<summary>Event sample:</summary>

```json
42 / trade, ["trade_status", {
    "type": "deposit",
    "data": {
        "id": 10002,
        "user_id": 303119,
        "items": [{ 
            "asset_id": 27275301674,
            "created_at": "2022-10-17 16:42:33",
            "custom_price_percentage": 0,
            "full_position": 29,
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf1OD3YjoXuY-Jm5aOhcj8NrrFk29u5Mx2gv2P9I702wXs80BqYzvxdY6SIA44aV-E_VLvl-i8h8O_vJ7Ny3tjviAgtmGdwUKuDFVKtQ",
            "id": 3896059228,
            "is_commodity": false,
            "market_name": "StatTrak™ SG 553 | Danger Close (Minimal Wear)",
            "market_value": 0.27,
            "name_color": "CF6A32",
            "position": null,
            "preview_id": null,
            "price_is_unreliable": 0,
            "tradable": true,
            "tradelock": false,
            "updated_at": "2022-10-18 11:36:36",
            "wear": null
        }],
        "total_value": 4555,
        "tradeoffer_id": 10002,
        "status": 4,
        "status_message": "Confirming",
        "metadata": {
            "auction_item_id": "1aruaja",
            "auction_highest_bid": 4555,
            "auction_highest_bidder": 4900627,
            "auction_number_of_bids": 1,
            "auction_ends_at": 1631266352,
            "auction_auto_withdraw_failed": null,
            "timestamp": null,
            "price_updated_at": null,
            "trade_url": null,
            "bot": null,
            "total_fee": null,
            "fee": null,
            "old_total_value": null,
            "pending_withdrawal_id": null,
            "item_position_in_inventory": null,
            "item_inspected": null,
            "steam_id": "76561198106192114",
            "phishingScamDetected": null,
            "item_validation": null,
            "possible_abuse_detected_at": null,
            "penalty": null
        },
        "created_at": "2021-09-10 09:32:14",
        "updated_at": "2021-09-10 09:32:33"
    }
}]

```

</details>
 
[[Back to contents](#contents)]
