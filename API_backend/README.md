# Login Registration Backend 

## Diagram
![Screenshot 2021-01-13 at 23 38 08](https://user-images.githubusercontent.com/40702606/104789980-15581a00-578e-11eb-998d-30f2e6a9f461.png)

## Email verification link with expiry
![Screenshot 2021-01-13 at 23 37 33](https://user-images.githubusercontent.com/40702606/104789893-0c674880-578e-11eb-939a-2a1cd3a8dfd2.png)

### CURL
```
curl --location --request POST 'localhost:8080/api/v1/registration' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "Alex",
    "lastName": "Bsg",
    "email": "alex@yahoo.com",
    "password": "password"
}'
```
