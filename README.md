# telegram-scraper
A simple Telegram channel scraper

[![NPM](https://nodei.co/npm/telegram-scraper.png?mini=true)](https://www.npmjs.com/package/telegram-scraper)
[![npm version](https://badge.fury.io/js/telegram-scraper.svg)](https://www.npmjs.com/package/telegram-scraper)

## Features

* ✅ 0 Dependencies
* ✅ No Authentication
* ✅ JSON Output

## Demo

[https://codesandbox.io/p/devbox/telegram-channel-scraper-q9g93l](https://codesandbox.io/p/devbox/telegram-channel-scraper-q9g93l)

## Installation

```javascript
npm install telegram-scraper
```

## Example Usage

```javascript
import {telegram_scraper} from 'telegram-scraper'

void async function main() {

	let telegram_channel_username = 'telegram'

	let result = await telegram_scraper(telegram_channel_username)

	console.log(result)
	
}()
```

```javascript
const {telegram_scraper} = require('telegram-scraper')

void async function main() {

	let telegram_channel_username = 'telegram'

	let result = await telegram_scraper(telegram_channel_username)

	console.log(result)
	
}()
```
## Example App

```javascript
const {telegram_scraper} = require('telegram-scraper')

const http = require('http')

const serverport =  process.env.PORT || 8080

let telegram_channel = 'telegram'

const server = http.createServer(async(req,res)=>{

	let result = await telegram_scraper(telegram_channel)

	res.statusCode = 200
	
	res.setHeader('Content-Type','application/json')
	
	res.setHeader('Access-Control-Allow-Origin','*')
	
	res.end(result)
	
})

server.listen(serverport,()=>{

	console.log(`Server running at ${serverport}`) 
	
})
```

## Example Output

```javascript
[
    {
        "data_post": "telegram/258",
        "data_view": "eyJjIjotMTAwNTY0MDg5MiwicCI6MjU4LCJ0IjoxNzA2OTQ3MjY0LCJoIjoiMTcwN2E5NzJjMTgzM2I2ZTM0In0",
        "user_url": "https://t.me/telegram",
        "user_photo": "https://cdn1.cdn-telegram.org/file/GFUVa7B7wr28OE5SeJ1yJnZaCmd8P4sP4-d_oCTURVJ6hUSRP9Y_nb2QxQWcpNnJDfV-4kByP7EKCmhoLaTFif02B3DV_7V5dixuLFdSICCSFs1s7gAZJNkLzsUAqYmkTGfmPZnHL58r9ljEXZGUIH6pHJz-Rn7BAfQHxA-Y87exrv4LsNLL68aFGRs9vsb71EcnxxymG50u-wsysTJ4u_aql1PzOWh4TX1TyCjHTlPJl3VmwMJinm77kUl-YtptIbnTCclnXuSvLlA0Z4B1lFVSzg1FX-JyX_xfo6FmvXtkhmEjnWzAYmlZ10qAorIr07hYdaFrwSS_nO0LLQ9bgg.jpg",
        "user_name": "Telegram News",
        "message_url": "https://t.me/telegram/258",
        "message_text": "For 8 more features from this update, like code highlighting in messages, custom reactions for channels, unique colors and logos for your profile, voice-to-text for everyone and more – check out the latest blog: https://telegram.org/blog/similar-channels  November Features 1 • 2 • 3 • More",
        "message_photo": [],
        "message_video": [],
        "views": "4.5M",
        "datetime": "2023-12-04T13:27:19+00:00"
    },
    {
        "data_post": "telegram/259",
        "data_view": "eyJjIjotMTAwNTY0MDg5MiwicCI6MjU5LCJ0IjoxNzA2OTQ3MjY0LCJoIjoiZDI3Y2QzY2NiNzViNjMwYWI2In0",
        "user_url": "https://t.me/telegram",
        "user_photo": "https://cdn1.cdn-telegram.org/file/GFUVa7B7wr28OE5SeJ1yJnZaCmd8P4sP4-d_oCTURVJ6hUSRP9Y_nb2QxQWcpNnJDfV-4kByP7EKCmhoLaTFif02B3DV_7V5dixuLFdSICCSFs1s7gAZJNkLzsUAqYmkTGfmPZnHL58r9ljEXZGUIH6pHJz-Rn7BAfQHxA-Y87exrv4LsNLL68aFGRs9vsb71EcnxxymG50u-wsysTJ4u_aql1PzOWh4TX1TyCjHTlPJl3VmwMJinm77kUl-YtptIbnTCclnXuSvLlA0Z4B1lFVSzg1FX-JyX_xfo6FmvXtkhmEjnWzAYmlZ10qAorIr07hYdaFrwSS_nO0LLQ9bgg.jpg",
        "user_name": "Telegram News",
        "message_url": "https://t.me/telegram/259",
        "message_text": "Stylize Your Channel. As channels level up from subscriber boosts and giveaways, they can customize their profile, set an emoji status, add unique wallpapers and more. 🏡❄️🚗  December Features ❄️ 1 • 2 • 3 • 4 • More",
        "message_photo": [],
        "message_video": [
            "https://cdn1.cdn-telegram.org/file/78f54bd0b3.mp4?token=YKBucZbZzGZELrwA1gLSWX0GrJKfGsZaheQchVc8K2LurR2_3KBJFp1obTLdlYdpig-zhVamIjnR5lTRm0TG4OotEAvvwF1RycDz8mU_8hjISNQmdhKhG_lKbZTYRfySR0oko8sU8arZ9azdzY2qmz9kqsI8kbr6k5ZRxIoZmmjnQozewGGGRQeVQOOrMCmd09YqNZtT28n3v_KO9rVfpliYfGBr-cRzr2IQgc3pRybOYtFkwge4Nnx0b7urT-GkekjGx4C6z-vpMNbIJROwg3R7O2Ym-Ep2enJmlefOs0iL8z886kVD6XxSoFXBBe4LyUcGxLbsOeltvLthsGcKmA"
        ],
        "views": "2.3M",
        "datetime": "2023-12-24T17:44:05+00:00"
    }
]
```

## License

MIT