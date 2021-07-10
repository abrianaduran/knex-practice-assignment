require('dotenv').config()
const knex = require('knex')

//the functions arguments specify where to 
//connect to 
//username and password to use for connecting
//and which driver to use
//options are passed as an object
const knexInstance = knex({
    client: 'pg',
    connection: 'postgresql://dunder_mifflin@localhost/knex-practice',
  })
//build a query that is equivalent to 
//SELECT * FROM amazong_products; 
// const q1 = knexInstance('amazong_products').select('*').toQuery()
// const q2 = knexInstance.from('amazong_products').select('*').toQuery()

// console.log('q1:', q1)

// console.log('q2:', q2)

//console.log('knex and driver installed correctly');

//build a query equivalent to 
//SELECT product_id, name, price, category
//FROM amazong_products
//WHERE name = 'Point of view gun';
// knexInstance
//   .select('product_id', 'name', 'price', 'category')
//   .from('amazong_products')
//   .where({ name: 'Point of view gun' })
//   .first()
//   .toQuery()
// //   .then(result => {
// //     console.log(result)
// //   })
// console.log(qry) 

function searchByProduceName(searchTerm) {
    knexInstance
      .select('product_id', 'name', 'price', 'category')
      .from('amazong_products')
      .where('name', 'ILIKE', `%${searchTerm}%`)
      .then(result => {
        console.log(result)
      })
  }
  
  searchByProduceName('holo')

//   SELECT product_id, name, price, category
//   FROM amazong_products
//   LIMIT 10
//   OFFSET 0;

function paginateProducts(page) {
  const productsPerPage = 10
  const offset = productsPerPage * (page - 1)
  knexInstance
    .select('product_id', 'name', 'price', 'category')
    .from('amazong_products')
    .limit(productsPerPage)
    .offset(offset)
    .then(result => {
      console.log(result)
    })
}

paginateProducts(2)

//see the most popular videos by view at 
//Whopipe by region for the last 30 days

function getProductsWithImages() {
    knexInstance
      .select('product_id', 'name', 'price', 'category', 'image')
      .from('amazong_products')
      .whereNotNull('image')
      .then(result => {
        console.log(result)
      })
  }
  
  getProductsWithImages() 


  
  function mostPopularVideosForDays(days) {
    knexInstance
      .select('video_name', 'region')
      .count('date_viewed AS views')
      .where(
        'date_viewed',
        '>',
        knexInstance.raw(`now() - '?? days'::INTERVAL`, days)
      )
      .from('whopipe_video_views')
      .groupBy('video_name', 'region')
      .orderBy([
        { column: 'region', order: 'ASC' },
        { column: 'views', order: 'DESC' },
      ])
      .then(result => {
        console.log(result)
      })
  }
  
  mostPopularVideosForDays(30)