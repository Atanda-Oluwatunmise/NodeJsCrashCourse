import {createServer} from 'http';
const PORT = process.env.PORT;

//creating a users api
const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'}
];

//Logger middleware to log the url and the method whenever a request is made.
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);

    //this says okay it is done, lets move on to the next middleware
    next();
}

//json middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
};

//Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
};

//Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));

    if (user){
        res.write(JSON.stringify(user));
    } else{
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User not found'}));
    }
    res.end(); 
};

//NotFound Handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message: 'Route not found'}));
    res.end(); 
}

const server = createServer((req, res) => {
    logger(req, res, ()=> {
        jsonMiddleware(req, res, ()=> {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res);
            }else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                getUserByIdHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
        });
    })
    
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});