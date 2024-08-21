This is a RESTful API for managing tasks.

API Endpoints:

GET /tasks : Retrieve all tasks. 

GET /tasks/:id : Retrieve a specific task by ID. 

GET /tasks/search/:keyword : Retrieve tasks containing the given keyword. 

GET /tasks/priority/:priority : Retrieve tasks of given priority. 

GET /tasks/status/:status : Retrieve tasks of given status.

POST /tasks: Add a new tasks with a name, status, description and priority. 

PUT /tasks/:id : Update a specific tasks by ID. 

PATCH /tasks/:id : Patch a specific tasks by ID. 

DELETE /tasks/:id : Delete a specific tasks by ID.

Middleware is used for taskValidation (i.e. Name and status must be provided), 
errorHandling and checking existence before deleting or updating.

Tasks are stored in a JSON file locally using fs module.

Tasks can be searched by id, name(keywords), priority and status. 

Tasks can be marked completed using PUT or PATCH methods.
