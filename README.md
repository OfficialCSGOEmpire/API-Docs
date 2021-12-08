# CSGOEmpire API Key Documentation

# Contents

- [CSGOEmpire API Key Documentation](#csgoempire-api-key-documentation)
- [Contents](#contents)
- [Getting started](#getting-started)
- [API Keys](#api-keys)
- [Rate Limits](#rate-limits)
- [Metadata](#metadata)
- [Get Active Auctions](#get-active-auctions)
- [Settings](#settings)
- [Trade Status Enums](#trade-status-enums)
- [Deposits](#deposits)
  - [Get CSGO Inventory](#get-csgo-inventory)
  - [Get Unique Info](#get-unique-info)
  - [Create Deposit](#create-deposit)
  - [Cancel Deposit](#cancel-deposit)
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
  - [new_item](#new_item)
  - [updated_item](#updated_item)
  - [auction_update](#auction_update)
  - [deleted_item](#deleted_item)
  - [trade_status](#trade_status)

# Getting started

All requests are included in bash form. You can use a program like [Postman](https://www.postman.com/downloads/) to import the request ([example](https://w1z0.xyz/i/fea03bc7f399b7d.mp4)) and generate ([example](https://w1z0.xyz/i/187fd8084ca40d6.mp4)) code for most major languages.

Any code provided is as an example, you should write your own if you wish to do more than the most basic tasks.

Any input marked '(required)' is required for the request to work, anything without that is optional.

# API Keys

API keys can be created, viewed and revoked here: https://csgoempire.com/trading/apikey

Setting up an API key requires 2FA to be activated, 2FA codes are not required for requests authenticated via API key.

# Rate Limits

Rate limits limit the number of requests you can make per second from one IP. Currently there is a global request limit (to any endpoint) of 120 requests per 10 seconds. If you exceed a ratelimit you'll be unable to access any endpoints for 60 seconds. This will return a response with a status code of 429.

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
    "data": {
        "deposits": [
            {
                "id": 28362974,
                "user_id": 303119,
                "item_id": 3731677704,
                "items": [
                    {
                        "app_id": 730,
                        "asset_id": 23569390085,
                        "context_id": 2,
                        "custom_price_percentage": 32,
                        "description_type": "★ Covert Knife",
                        "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJH4dmklYyPqPr1Ibndk2JL7cFOhuDG_Zi72VDh8kduZW37JIeWJ1Q9Yl2G8gToxrrmhpfvtZ6YynI1siRw7HbVmwv330-du9HHOA",
                        "id": 3731677704,
                        "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJH4dmklYyPqPr1Ibndk2JL7cFOhuDG_Zi72VDh8kduZW37JIeWJ1Q9Yl2G8gToxrrmhpfvtZ6YynI1siRw7HbVmwv330-du9HHOA",
                        "inspect_key": "14843909089252410308",
                        "is_commodity": false,
                        "market_name": "★ Bayonet | Gamma Doppler (Factory New) - Emerald",
                        "market_value": 7571.3,
                        "name": "★ Bayonet | Gamma Doppler (Factory New) - Emerald",
                        "name_color": "8650AC",
                        "paint_index": 568,
                        "position": null,
                        "preview_id": null,
                        "price_is_unreliable": 1,
                        "tradable": true,
                        "tradelock": false,
                        "type": "users",
                        "updated_at": "2021-11-29 18:44:26",
                        "wear": null
                    }
                ],
                "total_value": 757130,
                "security_code": "",
                "tradeoffer_id": 0,
                "trade_id": 2,
                "status": 2,
                "status_message": "",
                "metadata": {
                    "auction_highest_bid": null,
                    "auction_highest_bidder": null,
                    "auction_number_of_bids": 0,
                    "auction_ends_at": 1638211686,
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
                    "possible_abuse_detected_at": null,
                    "penalty": null,
                    "service_name": "csgoempire",
                    "service_invoice_id": 3850203
                },
                "created_at": "2021-11-29 18:45:06",
                "updated_at": "2021-11-30 09:16:22"
            }
        ],
        "withdrawals": []
    }
}
```

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
            "app_id": 730,
            "auction_auto_withdraw_failed": null,
            "auction_ends_at": 1638264095,
            "auction_highest_bid": 30,
            "auction_highest_bidder": 303119,
            "auction_number_of_bids": 5,
            "custom_name": null,
            "custom_price_percentage": null,
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJnY6PnvD7DLbUkmJE5YtwjLGVpd6s2QKx-RI_Yzr6JtOUdQRvZ1HVrAC5wOvqhp65tcnAn3ZqpGB8sqVEHs1X",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJnY6PnvD7DLbUkmJE5YtwjLGVpd6s2QKx-RI_Yzr6JtOUdQRvZ1HVrAC5wOvqhp65tcnAn3ZqpGB8sqVEHs1X",
            "is_commodity": false,
            "market_name": "StatTrak™ Glock-18 | Off World (Field-Tested)",
            "market_value": 26,
            "name": "StatTrak™ Glock-18 | Off World (Field-Tested)",
            "name_color": "CF6A32",
            "paint_index": 680,
            "paint_seed": 28,
            "preview_id": "fef648b7fc3a",
            "price_is_unreliable": false,
            "stickers": [
                {
                    "slot": 0,
                    "sticker_id": 4762,
                    "wear": null,
                    "scale": null,
                    "rotation": null,
                    "tint_id": null,
                    "name": "ESPADA (Holo) | 2020 RMR",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRPQV6CF7b9mMrAQ2J8KghYibakOQBlnaeYImUV74-0ktSIwqbwMbnTl20EvscijL6R84_33ATm-Eo5Nm72d4aLMlhpwcQqBfk"
                },
                {
                    "slot": 1,
                    "sticker_id": 4757,
                    "wear": null,
                    "scale": null,
                    "rotation": null,
                    "tint_id": null,
                    "name": "Virtus.pro | 2020 RMR",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRPQV6CF7b9mNnDbFF1NwNS-OvyflI2iqeaIThB7YvhkNjbz_ahZ-uExjkG7sAljruRpo-hjQ3t-UZyIzekFrt-2EA"
                },
                {
                    "slot": 2,
                    "sticker_id": 4790,
                    "wear": null,
                    "scale": null,
                    "rotation": null,
                    "tint_id": null,
                    "name": "Renegades (Holo) | 2020 RMR",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRPQV6CF7b9mN3WXWJ8KghYibakOQBlnfbJJWkTu4vnkIbYwqbxYu6BxWkJ65Zz2OjEodv0igPm_xZuMjylJI6LMlhpMRDciJU"
                },
                {
                    "slot": 3,
                    "sticker_id": 4770,
                    "wear": null,
                    "scale": null,
                    "rotation": null,
                    "tint_id": null,
                    "name": "100 Thieves (Holo) | 2020 RMR",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRPQV6CF7b9mNvbRWJ8KghYibakOQBlnfGaKG8VudjhldTbz6D2ZeLVkjgAuMYmi7mW8dyk3gXs80BqamD1d4eLMlhpm281b-A"
                }
            ],
            "tradable": true,
            "tradelock": false,
            "updated_at": "2021-11-30 09:15:58",
            "wear": 0.24,
            "published_at": "2021-11-30T09:20:35.933425Z",
            "id": 28384848
        }
    ]
}
```

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
    "updatedAt": 1638265100,
    "data": [
        {
            "app_id": 730,
            "asset_id": 23441306297,
            "context_id": 2,
            "custom_price_percentage": null,
            "customname": null,
            "defindex": null,
            "description_type": "Base Grade Tool",
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxqAhWSVieErT9hpbQAF8ncFNU4O3xe15l1afJcjhHu4jlxNiPlqWiZLmIx28DvYthhO6K88GN3g",
            "id": 3731677713,
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxqAhWSVieErT9hpbQAF8ncFNU4O3xe15l1afJcjhHu4jlxNiPlqWiZLmIx28DvYthhO6K88GN3g",
            "inspect_key": null,
            "invalid": "This item's price is either unstable or not found. (3)",
            "is_commodity": true,
            "killeaterscoretype": null,
            "killeatervalue": null,
            "market_name": "Storage Unit",
            "market_value": -1,
            "name": "Storage Unit",
            "name_color": "D2D2D2",
            "origin": null,
            "paint_index": null,
            "paintindex": null,
            "paintseed": null,
            "paintwear": null,
            "position": null,
            "preview_id": null,
            "price_is_unreliable": 0,
            "quality": null,
            "rarity": null,
            "stickers": null,
            "tradable": false,
            "tradelock": false,
            "type": "users",
            "updated_at": "2021-11-30 10:27:59",
            "wear": null
        },
        {
            "app_id": 730,
            "asset_id": 23569390085,
            "context_id": 2,
            "custom_price_percentage": null,
            "customname": null,
            "defindex": 500,
            "description_type": "\u2605 Covert Knife",
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJH4dmklYyPqPr1Ibndk2JL7cFOhuDG_Zi72VDh8kduZW37JIeWJ1Q9Yl2G8gToxrrmhpfvtZ6YynI1siRw7HbVmwv330-du9HHOA",
            "id": 3731677704,
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJH4dmklYyPqPr1Ibndk2JL7cFOhuDG_Zi72VDh8kduZW37JIeWJ1Q9Yl2G8gToxrrmhpfvtZ6YynI1siRw7HbVmwv330-du9HHOA",
            "inspect_key": "14843909089252410308",
            "is_commodity": false,
            "killeaterscoretype": null,
            "killeatervalue": null,
            "market_name": "\u2605 Bayonet | Gamma Doppler (Factory New) - Emerald",
            "market_value": 576811,
            "name": "\u2605 Bayonet | Gamma Doppler (Factory New) - Emerald",
            "name_color": "8650AC",
            "origin": 8,
            "paint_index": 568,
            "paintindex": 568,
            "paintseed": 909,
            "paintwear": 0.015505413524806,
            "position": null,
            "preview_id": "c968216d0590",
            "price_is_unreliable": 1,
            "quality": 3,
            "rarity": 6,
            "stickers": "[]",
            "tradable": true,
            "tradelock": false,
            "type": "users",
            "updated_at": "2021-11-30 10:18:14",
            "wear": 0.016
        },
        {
            "app_id": 730,
            "asset_id": 24053882249,
            "context_id": 2,
            "custom_price_percentage": null,
            "customname": null,
            "defindex": null,
            "description_type": "Restricted Pistol",
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJgJKCkPDxIYTVn3hS4dV9g-fEyoHwjF2hpl1uam-mcoeVIFNoYVGB_gTow7zqgsS1v5TJzHpq7HUrs3bZyxCwg0wdcKUx0iHm0tj7",
            "id": 3732134688,
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJgJKCkPDxIYTVn3hS4dV9g-fEyoHwjF2hpl1uam-mcoeVIFNoYVGB_gTow7zqgsS1v5TJzHpq7HUrs3bZyxCwg0wdcKUx0iHm0tj7",
            "inspect_key": "9560840743796123239",
            "is_commodity": false,
            "killeaterscoretype": null,
            "killeatervalue": null,
            "market_name": "Desert Eagle | Trigger Discipline (Field-Tested)",
            "market_value": 116,
            "name": "Desert Eagle | Trigger Discipline (Field-Tested)",
            "name_color": "D2D2D2",
            "origin": null,
            "paint_index": null,
            "paintindex": null,
            "paintseed": null,
            "paintwear": null,
            "position": null,
            "preview_id": null,
            "price_is_unreliable": 0,
            "quality": null,
            "rarity": null,
            "stickers": null,
            "tradable": false,
            "tradelock": {
                "time_left_days": 7,
                "time_left_hours": 21,
                "timestamp": 1638950400
            },
            "type": "users",
            "updated_at": "2021-11-30 10:27:29",
            "wear": null
        }
    ]
}
```

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
            "id": 3731677705,
            "asset_id": 23563048480,
            "wear": 0.107,
            "stickers": [
                {
                    "slot": 0,
                    "sticker_id": 4650,
                    "wear": null,
                    "scale": null,
                    "rotation": null,
                    "tint_id": null,
                    "name": "Hello AK-47 (Gold)",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRPSU_fTuji1sSHBGJmIAdYv7aaLAhs18zEcC9F6ZK0kNOPwaH2YemAw2oIvcB107-X8Y_w2VC2qEpsZDv1IY-RJ1I-ZFiG5BHgljEvnINE"
                },
                {
                    "slot": 1,
                    "sticker_id": 4650,
                    "wear": null,
                    "scale": null,
                    "rotation": null,
                    "tint_id": null,
                    "name": "Hello AK-47 (Gold)",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRPSU_fTuji1sSHBGJmIAdYv7aaLAhs18zEcC9F6ZK0kNOPwaH2YemAw2oIvcB107-X8Y_w2VC2qEpsZDv1IY-RJ1I-ZFiG5BHgljEvnINE"
                },
                {
                    "slot": 2,
                    "sticker_id": 4650,
                    "wear": null,
                    "scale": null,
                    "rotation": null,
                    "tint_id": null,
                    "name": "Hello AK-47 (Gold)",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRPSU_fTuji1sSHBGJmIAdYv7aaLAhs18zEcC9F6ZK0kNOPwaH2YemAw2oIvcB107-X8Y_w2VC2qEpsZDv1IY-RJ1I-ZFiG5BHgljEvnINE"
                },
                {
                    "slot": 3,
                    "sticker_id": 4650,
                    "wear": null,
                    "scale": null,
                    "rotation": null,
                    "tint_id": null,
                    "name": "Hello AK-47 (Gold)",
                    "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRPSU_fTuji1sSHBGJmIAdYv7aaLAhs18zEcC9F6ZK0kNOPwaH2YemAw2oIvcB107-X8Y_w2VC2qEpsZDv1IY-RJ1I-ZFiG5BHgljEvnINE"
                }
            ]
        },
        {
            "id": 3731677706,
            "asset_id": 23562816060,
            "wear": null,
            "stickers": []
        },
        {
            "id": 3731677707,
            "asset_id": 23556911771,
            "wear": 0.009,
            "stickers": []
        }
}
```

</details>
 
[[Back to contents](#contents)]

## Create Deposit

URL: https://csgoempire.com/api/v2/trading/deposit

Method: POST

Description goes here

Inputs:

- Items: (required) array with array elements: [id: itemId, custom_price: int, coin_value: int]

Notes: coin_value is in coin cents, so 100.01 coins is represented as 10001

<details>
<summary>Example Input:</summary>

```json
    {
        "items": [
            {
                "id": 3731677704,
                "custom_price_percentage": 32,
                "coin_value": 576811
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
    --data-raw '{"items":[{"id":3731677704,"custom_price_percentage":32,"coin_value":576811}]}'
```

</details>
 
<details>
<summary>Example Response:</summary>
 
```json
    {
        "success": true,
        "deposits": {
            "success": true,
            "id": "28391470",
            "item_id": 3731677704,
            "invoice": {
                "user_id": 303119,
                "ip_address": "0.0.0.0",
                "status": 200,
                "processor_id": 3,
                "currency_id": 4,
                "amount": 761391,
                "amount_coins": 761391,
                "metadata": {
                    "item_id": 3731677704,
                    "custom_price_percentage": 32
                },
                "updated_at": 1638271689,
                "created_at": 1638271688,
                "id": 3885971,
                "processor_ref": "28391470",
                "processor_name": "Steam",
                "provider_friendly_name": "Steam (P2P)",
                "Method_friendly_name": null,
                "status_name": "CREATED",
                "currency_code": "STEAM_ITEMS",
                "paid_at": null,
                "refunded_at": null
            }
        }
    }
```

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
 
[[Back to contents](#contents)]

## Sell Now

URL: https://csgoempire.com/api/v2//trading/deposit/{deposit_id}/sell

Method: POST

Description goes here

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
 
[[Back to contents](#contents)]

# Withdraw

## Get Listed Items

URL: https://csgoempire.com/api/v2/trading/items

Method: GET

Get a list of all items listed on the withdrawals page

Inputs:

- per_page - (required), number. How many items to fetch. Min is 1 and max is 200 for quests and 5000 for logged in user
- page - (required), number. Page to fetch.
- search - string. Item market name to search. 2 char min length.
- order - string. Field to use for ordering supported fields: market_value
- sort - string. Sorting asc or desc. Default asc
- auction - string. Auction only, yes/no, defaults to no.
- price_min - number. Minimum item current price.
- price_max - number. Maximum item current price.
- price_max_above - number. Maximum item percentage to show.

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
                "app_id": 730,
                "auction_auto_withdraw_failed": null,
                "auction_ends_at": 1638207128,
                "auction_highest_bid": null,
                "auction_highest_bidder": null,
                "auction_number_of_bids": 0,
                "custom_name": null,
                "custom_price_percentage": 20,
                "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f65Mli7DH9tXziQTgqUY4YmmnINSUJwQ-YVnT_wS7yOzngMW07ZrOmmwj5HeObpQQtA",
                "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f65Mli7DH9tXziQTgqUY4YmmnINSUJwQ-YVnT_wS7yOzngMW07ZrOmmwj5HeObpQQtA",
                "inspect_details": {
                    "defindex": 16,
                    "paintindex": 309,
                    "rarity": 7,
                    "quality": 9,
                    "paintwear": 0.04290539771318436,
                    "paintseed": 606,
                    "killeaterscoretype": 0,
                    "killeatervalue": 13,
                    "customname": null,
                    "stickers": [
                        {
                            "slot": 0,
                            "sticker_id": 4691,
                            "wear": null,
                            "scale": null,
                            "rotation": null,
                            "tint_id": null,
                            "name": "Battle Scarred (Holo)",
                            "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRfXkPbQuqS0c7dVBJ2JBBDur-aOARhweHNdQJK49C5q4yKhfDxfbiGwzsCupdy3LrE84-ijA3n_kdrYjv7doWRJlc7Zl2Dq1e8wO7ug5Si_MOeoh93ilM"
                        },
                        {
                            "slot": 1,
                            "sticker_id": 4691,
                            "wear": null,
                            "scale": null,
                            "rotation": null,
                            "tint_id": null,
                            "name": "Battle Scarred (Holo)",
                            "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRfXkPbQuqS0c7dVBJ2JBBDur-aOARhweHNdQJK49C5q4yKhfDxfbiGwzsCupdy3LrE84-ijA3n_kdrYjv7doWRJlc7Zl2Dq1e8wO7ug5Si_MOeoh93ilM"
                        },
                        {
                            "slot": 2,
                            "sticker_id": 4691,
                            "wear": null,
                            "scale": null,
                            "rotation": null,
                            "tint_id": null,
                            "name": "Battle Scarred (Holo)",
                            "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRfXkPbQuqS0c7dVBJ2JBBDur-aOARhweHNdQJK49C5q4yKhfDxfbiGwzsCupdy3LrE84-ijA3n_kdrYjv7doWRJlc7Zl2Dq1e8wO7ug5Si_MOeoh93ilM"
                        },
                        {
                            "slot": 3,
                            "sticker_id": 4691,
                            "wear": null,
                            "scale": null,
                            "rotation": null,
                            "tint_id": null,
                            "name": "Battle Scarred (Holo)",
                            "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRfXkPbQuqS0c7dVBJ2JBBDur-aOARhweHNdQJK49C5q4yKhfDxfbiGwzsCupdy3LrE84-ijA3n_kdrYjv7doWRJlc7Zl2Dq1e8wO7ug5Si_MOeoh93ilM"
                        }
                    ],
                    "origin": 8,
                    "created_at": "2021-11-15 08:35:17",
                    "updated_at": "2021-11-21 13:47:44"
                },
                "is_commodity": false,
                "market_name": "StatTrak™ M4A4 | Howl (Factory New)",
                "market_value": 2473202,
                "name": "StatTrak™ M4A4 | Howl (Factory New)",
                "name_color": "CF6A32",
                "paint_index": 309,
                "paint_seed": 606,
                "preview_id": "3a3717b91cb5",
                "price_is_unreliable": true,
                "stickers": [
                    {
                        "slot": 0,
                        "sticker_id": 4691,
                        "wear": null,
                        "scale": null,
                        "rotation": null,
                        "tint_id": null,
                        "name": "Battle Scarred (Holo)",
                        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRfXkPbQuqS0c7dVBJ2JBBDur-aOARhweHNdQJK49C5q4yKhfDxfbiGwzsCupdy3LrE84-ijA3n_kdrYjv7doWRJlc7Zl2Dq1e8wO7ug5Si_MOeoh93ilM"
                    },
                    {
                        "slot": 1,
                        "sticker_id": 4691,
                        "wear": null,
                        "scale": null,
                        "rotation": null,
                        "tint_id": null,
                        "name": "Battle Scarred (Holo)",
                        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRfXkPbQuqS0c7dVBJ2JBBDur-aOARhweHNdQJK49C5q4yKhfDxfbiGwzsCupdy3LrE84-ijA3n_kdrYjv7doWRJlc7Zl2Dq1e8wO7ug5Si_MOeoh93ilM"
                    },
                    {
                        "slot": 2,
                        "sticker_id": 4691,
                        "wear": null,
                        "scale": null,
                        "rotation": null,
                        "tint_id": null,
                        "name": "Battle Scarred (Holo)",
                        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRfXkPbQuqS0c7dVBJ2JBBDur-aOARhweHNdQJK49C5q4yKhfDxfbiGwzsCupdy3LrE84-ijA3n_kdrYjv7doWRJlc7Zl2Dq1e8wO7ug5Si_MOeoh93ilM"
                    },
                    {
                        "slot": 3,
                        "sticker_id": 4691,
                        "wear": null,
                        "scale": null,
                        "rotation": null,
                        "tint_id": null,
                        "name": "Battle Scarred (Holo)",
                        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRfXkPbQuqS0c7dVBJ2JBBDur-aOARhweHNdQJK49C5q4yKhfDxfbiGwzsCupdy3LrE84-ijA3n_kdrYjv7doWRJlc7Zl2Dq1e8wO7ug5Si_MOeoh93ilM"
                    }
                ],
                "tradable": true,
                "tradelock": false,
                "updated_at": "2021-11-30 11:56:31",
                "wear": 0.043,
                "published_at": "2021-11-30T12:11:23.938614Z",
                "id": 28360811
            },
            {
                "app_id": 730,
                "auction_auto_withdraw_failed": null,
                "auction_ends_at": 1638037717,
                "auction_highest_bid": null,
                "auction_highest_bidder": null,
                "auction_number_of_bids": 0,
                "custom_name": null,
                "custom_price_percentage": 15,
                "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f65Mli7DH9tXziQTgqUY4YmmnINSUJwQ-YVnT_wS7yOzngMW07ZrOmmwj5HeObpQQtA",
                "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLP7LWnn8f65Mli7DH9tXziQTgqUY4YmmnINSUJwQ-YVnT_wS7yOzngMW07ZrOmmwj5HeObpQQtA",
                "inspect_details": {
                    "defindex": 16,
                    "paintindex": 309,
                    "rarity": 7,
                    "quality": 9,
                    "paintwear": 0.03958660364151,
                    "paintseed": 205,
                    "killeaterscoretype": 0,
                    "killeatervalue": 18523,
                    "customname": null,
                    "stickers": [
                        {
                            "slot": 3,
                            "sticker_id": 3717,
                            "wear": 0.7717340588569641,
                            "scale": null,
                            "rotation": null,
                            "tint_id": null,
                            "name": "yuurih | Katowice 2019",
                            "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRWTVjfUO2u0p2DAgQ7Ng1QiaOwPhVp28zEcC9F6ZLnxILfk6ajN--Jwz0B7sQgjrrEotys31W3qUBpZz2gcdeQJw5qYA6B5BHglsl2pShJ"
                        }
                    ],
                    "origin": 8,
                    "created_at": "2021-11-27 18:18:35",
                    "updated_at": "2021-11-27 18:18:35"
                },
                "is_commodity": false,
                "market_name": "StatTrak™ M4A4 | Howl (Factory New)",
                "market_value": 2368054,
                "name": "StatTrak™ M4A4 | Howl (Factory New)",
                "name_color": "CF6A32",
                "paint_index": 309,
                "paint_seed": 205,
                "preview_id": "69161b71e1a2",
                "price_is_unreliable": true,
                "stickers": [
                    {
                        "slot": 3,
                        "sticker_id": 3717,
                        "wear": 0.7717340588569641,
                        "scale": null,
                        "rotation": null,
                        "tint_id": null,
                        "name": "yuurih | Katowice 2019",
                        "image": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRWTVjfUO2u0p2DAgQ7Ng1QiaOwPhVp28zEcC9F6ZLnxILfk6ajN--Jwz0B7sQgjrrEotys31W3qUBpZz2gcdeQJw5qYA6B5BHglsl2pShJ"
                    }
                ],
                "tradable": true,
                "tradelock": false,
                "updated_at": "2021-11-30 11:56:31",
                "wear": 0.04,
                "published_at": "2021-11-30T12:10:48.413542Z",
                "id": 28276894
            },
            {
                "app_id": 730,
                "auction_auto_withdraw_failed": null,
                "auction_ends_at": 1636542106,
                "auction_highest_bid": null,
                "auction_highest_bidder": null,
                "auction_number_of_bids": 0,
                "custom_name": null,
                "custom_price_percentage": 21,
                "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqOT1I6vZn3lU18hwmOvN8IXvjVCLqSwwOj6rYJiRdg42NAuE-lW5kri5hpbuvM7AzHtmsnMh4imPzUa3gB4aaOw9hfCeVxzAUJ5TOTzr",
                "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqOT1I6vZn3lU18hwmOvN8IXvjVCLqSwwOj6rYJiRdg42NAuE-lW5kri5hpbuvM7AzHtmsnMh4imPzUa3gB4aaOw9hfCeVxzAUJ5TOTzr",
                "inspect_details": {
                    "defindex": 515,
                    "paintindex": 619,
                    "rarity": 6,
                    "quality": 3,
                    "paintwear": 0.01931234635412693,
                    "paintseed": 921,
                    "killeaterscoretype": null,
                    "killeatervalue": null,
                    "customname": null,
                    "stickers": [],
                    "origin": 8,
                    "created_at": "2021-09-21 16:04:40",
                    "updated_at": "2021-10-14 03:08:10"
                },
                "is_commodity": false,
                "market_name": "★ Butterfly Knife | Doppler (Factory New) - Sapphire",
                "market_value": 2154762,
                "name": "★ Butterfly Knife | Doppler (Factory New) - Sapphire",
                "name_color": "8650AC",
                "paint_index": 619,
                "paint_seed": 921,
                "preview_id": "5ffcadd62470",
                "price_is_unreliable": true,
                "stickers": [],
                "tradable": true,
                "tradelock": false,
                "updated_at": "2021-11-30 12:10:55",
                "wear": 0.019,
                "published_at": "2021-11-30T12:11:18.024068Z",
                "id": 27596342
            }
        ],
        "first_page_url": "http://csgoempire.com/api/api/trading/items?page=1",
        "from": 1,
        "last_page": 5027,
        "last_page_url": "http://csgoempire.com/api/api/trading/items?page=5027",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=3",
                "label": "3",
                "active": false
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=4",
                "label": "4",
                "active": false
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=5",
                "label": "5",
                "active": false
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=6",
                "label": "6",
                "active": false
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=7",
                "label": "7",
                "active": false
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=8",
                "label": "8",
                "active": false
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=9",
                "label": "9",
                "active": false
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=10",
                "label": "10",
                "active": false
            },
            {
                "url": null,
                "label": "...",
                "active": false
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=5026",
                "label": "5026",
                "active": false
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=5027",
                "label": "5027",
                "active": false
            },
            {
                "url": "http://csgoempire.com/api/api/trading/items?page=2",
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": "http://csgoempire.com/api/api/trading/items?page=2",
        "path": "http://csgoempire.com/api/api/trading/items",
        "per_page": "3",
        "prev_page_url": null,
        "to": 3,
        "total": 15079
    }
```

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
 
[[Back to contents](#contents)]

## Create Withdrawal

URL: https://csgoempire.com/api/v2/trading/deposit/{DEPOSIT_ID}/withdraw

Method: POST

Withdraw item directly if the auction has expired without being won.

Inputs:

- deposit_id (required) : integer - Required in the URL

<details>
<summary>Example Request:</summary>

```bash
    curl --location --request POST 'https://csgoempire.com/api/v2/trading/deposit/28387732/withdraw' \
    --header 'Authorization: Bearer {API-KEY-HERE}'
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
 
[[Back to contents](#contents)]

## Place Bid

URL: https://csgoempire.com/api/v2/trading/deposit/{DEPOSIT_ID}/bid

Method:

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
 
[[Back to contents](#contents)]

# Websocket

## Connect To Websocket

URL: wss://trade.csgoempire.com/s/?EIO=3&transport=websocket

Example code for connecting to the websocket can be found [here](https://github.com/OfficialCSGOEmpire/API-Docs/blob/main/examples/websocket-connection.js)

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
 
[[Back to contents](#contents)]

## Websocket Events

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
42 / trade, ["new_item", {
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

## deleted_item

Emitted when the item is not anymore available for withdrawing. Eg. the auction ends and the winner withdraws it. Contains an array of ids. Currently always just one id but may be more in future.

<details>
<summary>Event sample:</summary>

```json
42/trade,["deleted_item",[10003]]
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
            "app_id": 730,
            "appid": 730,
            "asset_id": "5628460986",
            "assetid": "5628460986",
            "context_id": "2",
            "contextid": "2",
            "description_type": "Remarkable Sticker",
            "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRcWEDRSfCshZ-CBBJiNTtfubaqZQQ1gKGdJjwRvIjjxdOJxvP3Me3SzzMJuJwiiL6S9Irz2QfjrUVlamjtZNjCQh4JqWM",
            "id": "5628460986",
            "img": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9QVcJY8gulRcWEDRSfCshZ-CBBJiNTtfubaqZQQ1gKGdJjwRvIjjxdOJxvP3Me3SzzMJuJwiiL6S9Irz2QfjrUVlamjtZNjCQh4JqWM",
            "inspect_key": 2335751007372407000,
            "is_commodity": true,
            "market_name": "Sticker | Virtus.Pro (Holo) | Atlanta 2017",
            "market_value": 45.55,
            "name": "Sticker | Virtus.Pro (Holo) | Atlanta 2017",
            "name_color": "D2D2D2",
            "paint_index": null,
            "preview_id": null,
            "price_is_unreliable": 0,
            "raw_price": 3190,
            "tradable": true,
            "tradelock": false,
            "type": "users",
            "updated_at": "2021-09-10 06:49:35",
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
