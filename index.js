const express = require('express');
const joi = require('joi'); //use for validation 
const app = express();
app.use(express.json());

const cources = [
    
    {titile: 'Website Design & Development', id:1 ,   description:"Internscope is revolution program aimed at building the leaders of tomorrow , Develop your web-based applications using the Python programming language",   Duration:'3months & 6months '},
    {titile: 'Mobile App Developemnt', id:2 ,         description:"Make a single screen application in Android listing all the details of your favorite Avengers",  Duration:'3months & 6months '},
    {titile: 'Digital Marketing', id:3 ,              description:"Show your knowledge & develop e-commerce websites",    Duration:'3months & 6months '},
    {titile: 'Graphics Design', id:4 ,                description:"Apply your knowledge and design your own creative magazines, books etc",    Duration:'3months & 6months '},
    {titile: 'social Media Marketing', id:5 ,         description:"Advertise your business Set up your own blog and publish on multiple social platforms",    Duration:'3months & 6months '},
    {titile: 'Data Analytics', id:6,                  description:"Data Analysis can provide for a promising way to jumpstart your career",    Duration:'3months & 6months '},
    {titile: 'Dotnet Developer', id:7 ,               description:"Web application and development",     Duration:'3months & 6months '},
    {titile: 'Python Developer',       id:8 ,         description:"Develope your web-based applications using the Python programming language",   Duration:'3months & 6months '},
]

//Read request handler
app.get('/', (req, res) => {
    res.send("Welcome to Internship Programs!!");
});

app.get('/api/cources', (req, res) => {
    res.send(cources);
});

app.get('/api/cources/:id', (req, res) => {
    const cource = cources.find(c => c.id === parseInt(req.params.id));
    
    if(!cource) res.status(484).send('<h1 style="font-family: Malgum gothic;  color:darked;"> Oooops... Cant find </h1>');
    res.send(cource);
});

app.get('/api/cources/:description', (req, res) => {
    const cource = cources.find(c => c.description === parseInt(req.params.description));

    if(!cource) res.status(484).send('<h1 style="font-family: Malgum gothic;  color:darked;"> Oooops... Cant find </h1>');
    res.send(cource);
});

app.get('/api/cources/:Duration', (req, res) => {
    const cource = cources.find(c => c.Duration === parseInt(req.params.Duration));

    if(!cource) res.status(484).send('<h1 style="font-family: Malgum gothic;  color:darked;"> Oooops... Cant find </h1>');
    res.send(cource);
});

//create request handler
app.post('/api/cources', (req, res) => {

    const { error } = validateCource(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }
    const cource = {
        id: cources.length + 1,
        titile: req.body.title,
        description: req.body.description,
        Duration: req.body.Duration,
    };

    cources.push(cource);
    res.send(cource);
    });

//update request handler
app.put('/api/cources/:id', (req, res) => {
    const cources = cources.find(c => c.id === parseInt(req.params.id));
    if(!cource) res.status(484).send('<h1 style="font-family: Malgum gothic;  color:darked;"> Not Found!! </h1>');
    
    const { error } = validateCource(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
        return;
}

cource.title = req.body.title;
res.send(cource);

cource.description = req.body.description;
res.send(cource);

cource.Duration = req.body.Duration;
res.send(cource);

});


//delete request handler
app.delete('/app/cources/:id', (req, res) => {
    const index = cources.indexOf(cource);
    cources.splice(index, 1);
     res.send(cource);
});

 function validateCource(cource) {
     const schema = {
         title: joi.string().min(3).required()
     };
     return joi.validate(cource, schema);
 } 
 function validateCource(cource) {
    const schema = {
        description: joi.string().min(3).required()
    };
    return joi.validate(cource, schema);
} 
function validateCource(cource) {
    const schema = {
        Duration: joi.string().min(3).required()
    };
    return joi.validate(cource, schema);
} 

//poet envirnment variable
const port = process.env.PORT || 3010;
app.listen(port, () => console.log('Listening on port ${port}..'));







