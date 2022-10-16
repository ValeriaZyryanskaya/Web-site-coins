const { request, response } = require('express');
const express=require('express');
const cors=require('cors')
const server = express();

const mysql=require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '20032001lerka/',
    database: 'coins_info'
  });
connection.connect((err)=>{
    if(!err){
        console.log("Success");
    }
})
server.use(cors())



server.get('/catalogs', (request, response)=>{
    connection.query(
    `
        SELECT 
	    c.*
        FROM coins_info.cataloges c
    `,
    (err, res)=>{
        response.json(res)
    }
    )
})

server.get(`/catalog/:id`, (request, response)=>{
    connection.query(
    `
        SELECT 
	        ci.*,
	        c.*
        FROM coins_info.coins ci
        INNER JOIN coins_info.cataloges c ON catalog_id  = c.cat_id 	
        WHERE c.cat_id = ${request.params.id}
    `,
    (err, res)=>{
        response.json(res)
    }
    )
})

server.get(`/coin/:id`, (request, response)=>{
    connection.query(
    `
    SELECT 
	    ci.*,
	    ic.country_name,
	    c2.composition_name,
	    q.quality_name,
	    c3.currency_symbol,
	    w.weight_name 
    FROM coins_info.coins ci 
    INNER JOIN coins_info.issuing_country ic ON issuing_country_id = ic.country_id
    INNER JOIN coins_info.composition c2 ON composition_id = c2.compos_id  
    INNER JOIN coins_info.quality q ON quality_id = q.q_id 
    INNER JOIN coins_info.currency c3 ON currency_id = c3.cur_id 
    INNER JOIN coins_info.weight w ON unit_of_weight_id = w.w_id	
        WHERE ci.coin_id = ${request.params.id}
    `,
    (err, res)=>{
        response.json(res)
    }
    )
})
server.get(`/coins`, (request, response)=>{
    console.log(request.query);
    let condition=``
    let i=1
    let and=''
    
    for(let nameCondition in request.query){
        and=''
        if(i>1 && condition.length > 0){
            and=" AND "
        }
        
        if(nameCondition === 'catalog'){
            condition+=`${and}ci.catalog_id=${request.query[nameCondition]}`
        }
        if(nameCondition === 'issuing_country'){
            condition+=`${and}ci.issuing_country_id=${request.query[nameCondition]}`
        }
        if(nameCondition === 'input'){
            condition+=`${and}ci.short_info LIKE '%${request.query[nameCondition]}%' OR ci.coin_name LIKE '%${request.query[nameCondition]}%'  OR ci.full_info LIKE '%${request.query[nameCondition]}%'`
           
        }
        if(nameCondition === 'metal'){
            condition+=`${and}ci.composition_id=${request.query[nameCondition]}`
        }
        
        i++
    }
 
    if(request.query.input_price_from != undefined && request.query.input_price_to!= undefined){
        and=' AND '
        condition+=`${and}ci.price BETWEEN ${request.query.input_price_from} and ${request.query.input_price_to}`
    } else if (request.query.input_price_from != undefined){
        and=' AND '
        condition+=`${and}ci.price > ${request.query.input_price_from} `
    } else if(request.query.input_price_to != undefined){
        and=' AND '
        condition+=`${and}ci.price < ${request.query.input_price_to} `
   
    }

    if(request.query.year_from != undefined && request.query.year_to != undefined){
        and=' AND '
        condition+=`${and}ci.year BETWEEN ${request.query.year_from} and ${request.query.year_to}`
    } else if (request.query.year_from != undefined){
        and=' AND '
        condition+=`${and}ci.year > ${request.query.year_from} `
    } else if(request.query.year_to != undefined){
        and=' AND '
        condition+=`${and}ci.year < ${request.query.year_to} `
    } 
    console.log(condition);
    let query=`SELECT 
    ci.*
    FROM coins_info.coins ci 
    WHERE ${condition}
    `
   
    connection.query(
        query
    ,
    (err, res)=>{
        response.json(res)
    }
    )

})

server.get(`/filters`, (request, response)=>{
    let filters=request.query.filters;
    filters=filters.split(',');
    let i=0
    let result={}
     
    filters.forEach((filter)=>{
        
         let query= `
            	SELECT
                    coins_info.${filter}.*
                FROM coins_info.${filter}
         `

         connection.query(query, (err,data)=>{
             i++
            if(err){
                response.json("Server error");
                return;
            }
           
            result[filter] = data
            if(filters.length===i){
                response.json(result)
                return;
            }
         })
         
    })

})


server.listen(3002, function(){
    console.log("Hellow");
})
