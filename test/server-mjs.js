import telegram_scraper from './../src/telegram-scraper'

import http from 'http'

const serverport =  process.env.PORT || 8080

let telegram_channel = 'telegram'

const server = http.createServer(async(req,res)=>{

	let result = await telegram_scraper(telegram_channel)

	res.statusCode = 200
	
	res.setHeader('Content-Type','text/plain')
	
	res.setHeader('Access-Control-Allow-Origin','*')
	
	res.end(result)
	
})

server.listen(serverport,()=>{

	console.log(`Server running at ${serverport}`) 
	
})



/*void async function main() {
	let telegram_channel_username = 'telegram'

	let result = await telegram_scraper(telegram_channel_username)

	console.log(result)
}()*/

