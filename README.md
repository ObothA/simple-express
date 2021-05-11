# simple-express API to do CRUD ops on people/persons


> BASE_URL = `http://localhost:5000/`

## Sample Error Message
```
{
    "message": "Request unsuccessful.",
    "error": "Please add a valid email"
}
```

<br/>
<br/>
### GET ALL PERSONS [REQUEST TYPE : GET] <br/>
`GET` `{{ BASE_URL }}` `api/v1/persons` <br/>
> Sample Response <br/>
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
<br/>
### GET SINGLE PERSON [REQUEST TYPE : GET]<br/>
`GET` `{{ BASE_URL }}` `api/v1/persons/:id`<br/>
> Sample Response<br/>
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

### CREATE A PERSON [REQUEST TYPE : POST] <br/>
`POST` `{{ BASE_URL }}` `api/v1/persons` <br/>
> Dont forget to set header `Content-Type: application/json` <br/>
> Sample Response <br/>
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

### UPDATE A PERSON [REQUEST TYPE : PUT] <br/>
`PUT` `{{ BASE_URL }}` `api/v1/persons` <br/>
> Dont forget to set header `Content-Type: application/json` <br/>
> Sample Request Body <br/>
```
{
    "name": "Abel Oboth"
}
``` 
<br/>
> Sample Response <br/>
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

