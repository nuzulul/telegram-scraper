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

## Usage

```javascript
import telegram_scraper from 'telegram-scraper'

void async function main() {

	let telegram_channel_username = 'telegram'

	let result = await telegram_scraper(telegram_channel_username)

	console.log(result)
	
}()
```

```javascript
const telegram_scraper = require('telegram-scraper').default

void async function main() {

	let telegram_channel_username = 'telegram'

	let result = await telegram_scraper(telegram_channel_username)

	console.log(result)
	
}()
```

## Example Output

```javascript
[
          {
                    "data_post": "telegram/273",
                    "data_view": "eyJjIjotMTAwNTY0MDg5MiwicCI6MjczLCJ0IjoxNzA2MDIxNDM4LCJoIjoiZDhmYjYxZTY2YjNkN2U5MDhjIn0",
                    "user_url": "https://t.me/telegram",
                    "user_photo": "https://cdn1.cdn-telegram.org/file/nNL6OPWszs6ukBWYYE29IVkpXLnODwiktlGA2cGdDmgEjIzF69xTlYmr6yudxxf47h8HRovBHDJa5zOIluMkVOLQTg-NePGvpUnSD56QzI49__W_PUXMNR11M4VItBvBiwcC3rJsPAh1yKHCwKnoe-GDswGVCZa9pBH-GzTqQbyp6Lku5ZwS5ASI7S-D6eBqvZeH4baj5PShtSXRaQWsFIHhCX-Driia0jtV8mmtZRcSb7sgtusVXrOl1EOk7mTQrzToiq4Y9YEuMUE2_587fq3G3uFCAh-7jIMpdrU7ZxvDuwdZlS9VZRT-LGvrz3P7YLtTzLt_nOXWARpCS8pJNg.jpg",
                    "user_name": "Telegram News",
                    "message_url": "https://t.me/telegram/273",
                    "message_text": "â­ï¸ One-Way Last Seen and Read Times. Users who hide their read time aren&#39;t able to see read times from other users.  With Telegram Premium, you can hide your read time and still see the read times of users who share theirs with you.  If a user hides their read time, it is always hidden from all users, including Premium users.  January Features 1 â€¢ 2 â€¢ 3 â€¢&nbsp;4 â€¢ 5",
                    "message_photo": [],
                    "message_video": [
                              "https://cdn1.cdn-telegram.org/file/21caaf78bd.mp4?token=SqjZNcBiqv8ttYltO9lx7cO-t_n7-dhY9zPyCU6TGBo_kO1nfxiw_RP1HctzTvG_BYzwXa7TwZuzafYP95FSA2QCqHoDmg_Jva7FTytW6DhA6upAaRUcCMb5BUbA93TYRIGeziz7a46bCHhefDMqdS9hW45oQBdc_hmC3X3M1Wni6ItxLavI8NvaSPwgB7IMUQCKI1YmmRfpKSgmvLLbF_a2jQpwPvYUiM68quXI85Je-N89AWgLI1oCY2qemeJ1Z8tQfVAj6At4KO8FWq5UbWlnuejiHlicNROi9ajKSFDHowr_RgqZwXP2iciSmvSbycwfbU_46sxV_NTMNaPp9A"
                    ],
                    "views": "818.8K",
                    "datetime": "2024-01-22T14:09:46+00:00"
          },
          {
                    "data_post": "telegram/274",
                    "data_view": "eyJjIjotMTAwNTY0MDg5MiwicCI6Mjc0LCJ0IjoxNzA2MDIxNDM4LCJoIjoiNzFkMGYyYzk2ZDg0NGJlNzBjIn0",
                    "user_url": "https://t.me/telegram",
                    "user_photo": "https://cdn1.cdn-telegram.org/file/nNL6OPWszs6ukBWYYE29IVkpXLnODwiktlGA2cGdDmgEjIzF69xTlYmr6yudxxf47h8HRovBHDJa5zOIluMkVOLQTg-NePGvpUnSD56QzI49__W_PUXMNR11M4VItBvBiwcC3rJsPAh1yKHCwKnoe-GDswGVCZa9pBH-GzTqQbyp6Lku5ZwS5ASI7S-D6eBqvZeH4baj5PShtSXRaQWsFIHhCX-Driia0jtV8mmtZRcSb7sgtusVXrOl1EOk7mTQrzToiq4Y9YEuMUE2_587fq3G3uFCAh-7jIMpdrU7ZxvDuwdZlS9VZRT-LGvrz3P7YLtTzLt_nOXWARpCS8pJNg.jpg",
                    "user_name": "Telegram News",
                    "message_url": "https://t.me/telegram/274",
                    "message_text": "â­ï¸ Private Message Permissions. Premium users can select who is able to send them messages â€“&nbsp;either Everyone or My Contacts and Premium Users.  When enabled, users who aren&#39;t contacts or don&#39;t have Premium can&#39;t start chats with you â€“ but can reply if you message them first.  More new features are coming throughout the month, so stay tuned. ðŸ˜‰  January Features 1 â€¢ 2 â€¢ 3 â€¢&nbsp;4 â€¢ 5",
                    "message_photo": [],
                    "message_video": [
                              "https://cdn1.cdn-telegram.org/file/996f9913df.mp4?token=t19EAOhdLFUijLDFebsVFdqWtuRkm4MDPLVbWhAUaOQnsrd5NbkXSiTFcT2DWsqU1WjATM_7xsMCiNDX1Tk28Q6FNp8QgbWHOxZVGoNvmzI3WzpRUWz5z3en0RdvaL3407GPcXUAB98OWdEe8cgVbR167UMisvaMmAPrsmc3Pvam6WEeTuxZRVrykTfbWHq6FRoiVKKOVsWytGDWSlaG6uhy4ch3Z8F2dE6sAbX7UJeqAcsOkZr3EnC1kNAkly13bEUZ9JNYHh7896VkmaEMkuF8KPQs4TBZ9-t0xzkld5vie1XwFfn7CeTL7bIsAswpLznOaL8SiTq3e4UVQjJvkg"
                    ],
                    "views": "861.0K",
                    "datetime": ""
          }
]
```

## License

MIT