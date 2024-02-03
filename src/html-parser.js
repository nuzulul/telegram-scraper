/** HTML tag which cannot have children*/
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

/** 
 * Parse html document to object
 * @param {string} input - The html string to parse
 */
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