import {telegram_scraper} from './../dist/mjs/telegram-scraper.js'

void async function main() {

	let telegram_channel_username = 'telegram'

	let result = await telegram_scraper(telegram_channel_username)

	console.log(result)
	
}()

