/*
 * MIT License
 * 
 * Copyright (c) 2024 Nuzulul Zulkarnain
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/

/*
 * https://github.com/nuzulul/telegram-scraper
*/

const VOID_TAGS = [
	'area',
	'base',
	'br',
	'hr',
	'img',
	'input',
	'link',
	'meta',
	'param',
	'command',
	'keygen',
	'source'
];

export default function html_parser(input) {
	
	const root = { children: [] }
	
	function regex_parser(regex, handler = () => {}) {
		
		const match = regex.exec(input)
		
		if (match !== null) {
			
			const [full_match, ...captures] = match
			
			input = input.substr(full_match.length)
			
			handler(...captures)
			
			return true
			
		} else {
			
			return false
			
		}
	}
	
	function content_parser(cursor) {
		
		let run = true
		
		while (run && input.length > 0) {
			
			// Parse an open tag
			
			const success = regex_parser(/^<([a-zA-Z][a-zA-Z0-9\-]*)/, tag => {
				
				const new_tag = { tag, attributes: {}, children: [] }
				
				cursor.children.push(new_tag)
				
				attributes_parser(new_tag)
				
				if (!VOID_TAGS.includes(tag.toLowerCase())) {
					
					content_parser(new_tag)
				}
			})
			
			// Parse a comment node:
			
			|| regex_parser(/^<!--((?:[^-]|-(?!->))*)-->/, comment => {
				
				cursor.children.push({
					
					comment
				})
			})
			
			// Parse close tag
			
			|| regex_parser(/^<\/([a-zA-Z][a-zA-Z0-9\-]*)>/, tag => {
				
				if (cursor.tag !== tag) {
					
					//throw new Error("Unmatched close tag")
					
				}
				
				run = false
				
			})
			
			// Parse a text node
			
			|| regex_parser(/^([^<]+)/, text => {
				
				cursor.children.push({
					
					text
					
				})
				
			})
			
			if (!success) {
				
				//throw new Error("Parse error")
				
			}
			
		}
		
	}
	
	function attributes_parser(cursor) {
		
		while(regex_parser(/^\s+([a-zA-Z][a-zA-Z0-9\-]+)="([^"]*)"/, (
		
			name,
			
			value
			
		) => {
			
			cursor.attributes[name] = value
			
		})) {}
		
		if (!regex_parser(/^\s*>/)) {
			
			//throw new Error("Malformed open tag")
			
		}
		
	}
	
	content_parser(root)
	
	return root.children
}