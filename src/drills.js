require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL,
})

//Get all items that contain text
function searchByItemName(searchTerm) {
    knexInstance
        .select('name', 'price', 'category')
        .from('shopping_list')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log('SEARCH TERM', { searchTerm })
            console.log(result)
        })
}

//Get all items paginated
function paginateItems(pageNumber) {
    const limit = 10
    const offset = limit * (pageNumber - 1)
    knexInstance
        .select('*')
        .from('shopping_list')
        .limit(limit)
        .offset(offset)
        .then(result => {
            console.log('PAGINATE ITEMS', { page })
            console.log(result)
        })
}

//Get all items added after date 
function productsAddedDaysAgo(daysAgo) {
    knexInstance
        .select('*')
        .from('shopping_list')
        .where(
            'date_added',
            '>',
            knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
        )
        .then(results => {
            console.log('PRODUCTS ADDED DAYS AGO')
            console.log(results)
        })
}

//Get the total cost for each category
function costPerCategory() {
    knexInstance
        .select('category')
        .sum('price as total')
        .from('shopping_list')
        .groupBy('category')
        .then(result => {
            console.log('COST PER CATEGORY')
            console.log(result)
        })
}

//https://gist.github.com/tomatau/a0641a0899654768a0fa59291ccfa124