var NovelPub = require('./NovelPub.js')
var MemoirPub = require('./MemoirPub.js')
var AnthologyPub = require('./AnthologyPub.js')
var JournalPub = require('./JournalPub.js')

module.exports = class PublicationFactory {


	createPub(data) {
		if(data.type == 'novel') return new NovelPub(data)
		if(data.type == 'memoir') return new MemoirPub(data)
		if(data.type == 'anthology') return new AnthologyPub(data)
		if(data.type == 'journal') return new JournalPub(data)
	}
}