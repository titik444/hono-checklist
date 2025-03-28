# Checklist API Spec

## Create Checklist

Endpoint : POST /api/checklist

Response Body :

```json
{
  "status": true,
  "statusCode": 200,
  "message": "Create checklist success",
  "data": {
    "id": 1,
    "code": "string",
    "title": "Untitled",
    "description": null,
    "createdAt": "2023-09-15T08:47:55.000Z",
    "expiredAt": "2023-09-22T08:47:55.000Z"
  }
}
```

## Get All Checklist

Endpoint : GET /api/checklist

Query Parameter :

- page : number, default 1
- per_page : number, default 10

Response Body :

```json
{
  "status": true,
  "statusCode": 200,
  "message": "Get all checklist success",
  "data": [
    {
      "id": 1,
      "code": "string",
      "title": "string",
      "description": "string",
      "createdAt": "2023-09-15T08:47:55.000Z",
      "expiredAt": "2023-09-22T08:47:55.000Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "perPage": 10,
    "totalPages": 1,
    "totalItems": 1
  }
}
```

## Get Checklist By Code

Endpoint : GET /api/checklist/{code}

Response Body :

```json
{
  "status": true,
  "statusCode": 200,
  "message": "Get checklist success",
  "data": {
    "id": 1,
    "code": "string",
    "title": "string",
    "description": "string",
    "createdAt": "2023-09-15T08:47:55.000Z",
    "expiredAt": "2023-09-22T08:47:55.000Z"
  }
}
```

## Update Checklist By Code

Endpoint : PATCH /api/checklist/{code}

Request Body :

```json
{
  "title": "string",
  "description": "string",
  "expired_at": "date"
}
```

Response Body :

```json
{
  "status": true,
  "statusCode": 200,
  "message": "Update checklist success",
  "data": {
    "id": 1,
    "code": "string",
    "title": "string",
    "description": "string",
    "createdAt": "2023-09-15T08:47:55.000Z",
    "expiredAt": "2023-09-22T08:47:55.000Z"
  }
}
```

## Remove Checklist By Code

Endpoint : DELETE /api/checklist/{code}

Response Body :

```json
{
  "status": true,
  "statusCode": 200,
  "message": "Remove checklist success"
}
```
