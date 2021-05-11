# simple-express API to do CRUD ops on people/persons


> BASE_URL = `http://localhost:5000/`

## Sample Error Message
```
{
    "message": "Request unsuccessful.",
    "error": "Please add a valid email"
}
```


### GET ALL PERSONS [REQUEST TYPE : GET]
`GET` `{{ BASE_URL }}` `api/v1/persons`
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

