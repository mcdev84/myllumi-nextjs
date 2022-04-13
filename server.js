const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const Odoo = require('odoo-xmlrpc')

app.listen(port, () => console.log(`Listening on port ${ port }`))

const odoo = new Odoo({
	                      url     : `https://mauro.odoo.com`,
	                      db      : `mauro`,
	                      username: `mauro.cabrele@lightinup.net`,
	                      password: `9ea44e8790c62ff4e95f99361943fb225eaa6977`,
                      })

app.get('/products_lists',
        (
	        req,
	        res) => {
	        odoo.connect(function (err) {
	            if (err) { return console.log(err); }
	            console.log('Connected to Odoo server.');
	            let inParams = [];
	            inParams.push('read');  //attributes
	            let params = [];
	            params.push(inParams);
	         /*   odoo.execute_kw('res.users', 'check_access_rights', params, function (err, value) {
	                if (err) { return console.log(err); }
	                console.log('Result: ', value);
	            });*/
		        odoo.execute_kw('product.product', 'product_qty', params, function (err, value1) {
		        	                if (err) { return console.log(err); }
		        	                console.log('Result: ', value1);
		        	            });
	        });

        })
