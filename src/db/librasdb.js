
"use strict";

const MongoClient = require('mongodb').MongoClient;

class LibrasDB
{
	constructor(dbInfo)
	{
		this.db = null
		this.translationCollection = null
		this.librasCollection = null
		this.portugueseCollection = null
		MongoClient.connect(dbInfo.dburl, dbInfo.options, (err, client) => {
			
			if(!err) {
				this.db = client.db(dbInfo.dbname);
				this.translationCollection = this.db.collection("translations")
				this.portugueseCollection = this.db.collection("portuguese")
				this.librasCollection = this.db.collection("libras")

				console.log("Connected successfully to server");
			}
			else {
				console.error(err)
			}
		});
	}

	async addLibrasTranslation(librasData, ptData)
	{

		let translationPair = {libras: librasData.hash, pt: ptData.hash}
		
		let librasPromise = this.librasCollection.insertOne(librasData)
		let ptPromise = this.portugueseCollection.insertOne(ptData)
		let translationPromise = this.translationCollection.insertOne(translationPair)


		return Promise.all([librasPromise, ptPromise, translationPromise])

	}

	async getLibrasTranslation(librasHash)
	{

		let translation = await this.translationCollection.find({libras: librasHash}).toArray()

		let out = {}
		for(let t of translation) {
			
			let pt = await this.portugueseCollection.findOne({hash: t.pt})
			// out.push(pt)
			out[pt.hash] = pt
		}

		return out
	}

	async getAllTranslations()
	{
		throw new Error("Not implemented yet")
	}
}

module.exports = LibrasDB;