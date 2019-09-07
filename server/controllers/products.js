const fs = require ('fs');

exports.readProducts = (req, res, next) => {
    fs.readFile('./datas/datas.json', 'utf8', (err, data) =>{
        if(err){
            throw err;
        }
        res.send(JSON.parse(data));
    });
}
exports.readOneProduct = (req, res, next) => {
    fs.readFile('./datas/datas.json', 'utf8', (err, data) =>{
        if(err){
            throw err;
        }
        let newData = JSON.parse(data);
        let product = req.params["id"];
        const getProduct = newData.filter(d => d.id === product);
        res.send(getProduct[0]);
    });
}

exports.createProducts = (req, res, next) => {
    fs.readFile('./datas/datas.json', 'utf8', (err, data) =>{
        if(err){
            throw err;
        }
        const newData = JSON.parse(data);
        let newProduct = req.body;
        let key= "id";
        let enable = "enable";
        newData.push(newProduct);
        newProduct[key] = (newData.length - 1).toString();
        newProduct[enable] = true;
        
    fs.writeFile('./datas/datas.json', JSON.stringify(newData, null, 2), (err)=>{
        if(err){
            throw err;
        }
        res.status(200).send("file created");
        });
    });
}


exports.updateProduct = (req, res, next) => {
    fs.readFile('./datas/datas.json', 'utf8', (err, data) => {
        if(err){
            throw err;
        }
        let newData = JSON.parse(data);
        const product = req.params["id"];

        /* on cherche l'objet avec l'id dans l'url */
        const productId = newData.filter(d => d.id === product);
        
        /* fonction qui va retrouver l'index de l'objet avec l'id cherchée */
        function findId(id){
            return id.id === productId[0].id;
        }
        const items = newData.findIndex(findId);

        let key = "id";
        let enable = "enable";

        /* on remplace l'ancien objet par ce qui est retourné par l'utilisateur */
        newData[items] = req.body;

        /* on ajoute l'id correspond à l'ancien */
        newData[items][key] = product;
        
        /* on ajoute la valeur true à enable */
        newData[items][enable] = true;

        fs.writeFile('./datas/datas.json', JSON.stringify(newData, null, 2), (err) => {
            if(err){
                throw err;
            }
            res.status(200).send(`product with id : ${product} has been updated`)
        });
    });
}

exports.deleteProduct = (req, res, next) => {
    fs.readFile('./datas/datas.json', 'utf8', (err, data) => {
        if(err){
            throw err;
        }
        let newData = JSON.parse(data);
        let product = req.params["id"];
        const deletedProduct = newData.filter(d => d.id != product );

        fs.writeFile('./datas/datas.json', JSON.stringify(deletedProduct, null, 2), (err) =>{
            if(err){
                throw err;
            }
            res.status(200).send(`Product with id : ${product} has bee removed`);
        });
    });
}