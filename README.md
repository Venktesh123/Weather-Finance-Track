Clone the project and run the npm install command.
Run it locally using nodemon index.js.
Video Link=>https://www.loom.com/share/70862fd29b384eb6b2ebec7bf9c48a7b?sid=c24fac3a-c51a-4f7e-a840-e1f935b3fb44
https://weather-finance-track-bkyl.vercel.app/api/signup
{
  "email": "example2@example.com",
  "password": "securepassword123",
  "name": "John Doe",
  "role": "user"
}
{

https://weather-finance-track-bkyl.vercel.app/api/login
{
  "email": "example1@example.com",
  "password": "securepassword123"
}
Generated Token Used IN Role base Authentication
{
    "message": "Login successful.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGUxQGV4YW1wbGUuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MzU2Njc4ODIsImV4cCI6MTczNTY3ODY4Mn0.mlp2mlPwfrakB7SZstWugiRnXGwsmXDsvNI6qh040jA"
}
}
https://weather-finance-track-bkyl.vercel.app/api/weather/data
{
    "location":"Lucknow"
}
https://weather-finance-track-bkyl.vercel.app/api/stock/data
{
    "location":"Lucknow"
}
Add Stock
https://weather-finance-track-bkyl.vercel.app/api/stock/data
{
  "company": "TechCorp Inc.",
  "data": {
    "price": 150.75,
    "volume": 120000,
    "high": 155.00,
    "low": 148.00
  },
  "createdAt": "2024-12-31T10:30:00.000Z"
}
https://weather-finance-track-bkyl.vercel.app/api/v1/stocks/677049a4407330875fa738cd this id is present in db admin can delete the data
