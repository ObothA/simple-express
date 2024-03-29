# simple-express API to do CRUD ops on people/persons

Heroku hosting link is `https://simple-persons-api.herokuapp.com/`  


> BASE_URL = `https://simple-persons-api.herokuapp.com/`

## Sample Error Message
```
{
    "message": "Request unsuccessful.",
    "error": "Please add a valid email"
}
```

### GET ALL PERSONS [REQUEST TYPE : GET] 
`GET` `{{ BASE_URL }}` `api/v1/persons` 
<br/>
> Sample Response 
```
{
    "message": "Request Successful.",
    "data": [
        {
            "_id": "xxxxxxxxxxxxxxxxxxx",
            "name": "Oboth Abel",
            "email": "z@z.com",
            "country": "Uganda",
            "__v": 0
        }
    ]
}
```

### GET SINGLE PERSON [REQUEST TYPE : GET]
`GET` `{{ BASE_URL }}` `api/v1/persons/:id`
<br/>
> Sample Response
```
{
    "message": "Request Successful.",
    "data": {
        "_id": "XXXXXXXXXXXXXXXXX",
        "name": "Oboth Abel",
        "email": "oboth.abel.oa@gmail.com",
        "country": "Uganda",
        "__v": 0
    }
}
```

### CREATE A PERSON [REQUEST TYPE : POST] 
`POST` `{{ BASE_URL }}` `api/v1/persons` 
> Dont forget to set header `Content-Type: application/json`
  
> Sample Response
```
{
    "message": "Person Successfully added.",
    "data": {
        "_id": "XXXXXXXXXXXXXXXXX",
        "name": "Oboth Abel",
        "email": "k@k.com",
        "country": "Uganda",
        "__v": 0
    }
}
```

### UPDATE A PERSON [REQUEST TYPE : PUT]
`PUT` `{{ BASE_URL }}` `api/v1/persons/:id`
<br/>
> Dont forget to set header `Content-Type: application/json`

> Sample Request Body
```
{
    "name": "Abel Oboth"
}
``` 

> Sample Response
```
{
    "message": "Person Successfully updated.",
    "data": {
        "_id": "609ad6b54a31664f2c13f123",
        "name": "Abel Oboth",
        "email": "oboth.abel.oa@gmail.com",
        "country": "Uganda",
        "__v": 0
}
```

### DELETE A PERSON [REQUEST TYPE : DELETE]
`DELETE` `{{ BASE_URL }}` `api/v1/persons/:id`
  

> Sample Response
```
{
    "message": "Person Removed.",
    "data": {}
}
```

