const express = require('express')
const env = require('dotenv/config')

const { USERNAME_APP, PASSWORD, PORT} = process.env

const app = express()

app.get("/api", (req, res) => {
    res.json({"usersList": ["Daniel", "Lucía", "Ana", "Cristina", "Suso", "Abuela", "Natillas", "Oreo"]})
})

app.listen(PORT, () => {console.log(`Server started at port ${PORT}`);})

// // import axios from 'axios';
// // import env from 'dotenv/config'


// // Configurar la solicitud con autenticación básica
// const user = {
//   auth: {
//     username: USERNAME_APP,
//     password: PASSWORD
//   }
// };

// const barcode = 3017624010701;
// const endpoint_product = `https://world.openfoodfacts.net/api/v2/product/${barcode}`
// const endpoint_name_nutriscore = `https://world.openfoodfacts.net/api/v2/product/${barcode}?fields=product_name,nutriscore_data`

// console.log(USERNAME_APP, PASSWORD);

// // Realizar la solicitud a la API
// axios.get(endpoint_name_nutriscore, user)
//   .then(response => {
//     // Procesar la respuesta
//     console.log('Respuesta:', response.data.product);
//   })
//   .catch(error => {
//     // Manejar errores
//     console.error('Error al realizar la solicitud:', error.message);
//   });
