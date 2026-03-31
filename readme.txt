Create .NET Project - .NET 10

1. dotnet new sln
2. dotnet new webapi -n API --use-controllers
3. dotnet sln add .\API\
4. dotnet sln list

5. dotnet dev-certs https --trust


Adding Entity Framework - Install packages

1. Microsoft.EntityFrameworkCore.Sqlite
2. Microsoft.EntityFrameworkCore.Design
3. Microsoft.EntityFrameworkCore.Tool

dotnet tool list -g


Apply Migrations

1. dotnet ef migrations add InitialCreate -o Data/Migrations

2. dotnet ef database update


Create Angular Project - v16

1. ng new client
2. ng serve

Install vs code extensions

1. C# dev kit
2. Angular language service

Install Bootstrap, Font Awesome

1. ng add ngx-bootstrap@11 -- for angular 16
2. npm i font-awesome

Search google 'mkcert' to run angular on HTTPS
https://github.com/FiloSottile/mkcert/releases
1. download mkcert-v*-windows-amd64.exe
2. rename mkcert
3. move to C:\Windows\System32\
4. open powershell mkcert --version
5. open ssl folder inside src -> mkcert -install
6. mkcert localhost
7. open angular.json and add below lines
 "serve": {
            "options": {
            "ssl": true,
            "sslCert": "./ssl/localhost.pem",
            "sslKey": "./ssl/localhost-key.pem"
          },

Create JWT token - Need package

1. System.IdentityModel.Tokens.Jwt
2. Microsoft.Aspnetcore.Authentication.Jwtbearer

Login & Register
1. ng add ngx-bootstrap  --component dropdowns

Drop database

1. dotnet ef database drop
2. dotnet ef database update


Notification

1. npm install ngx-toastr@17
2. add css in angular.json - "./node_modules/ngx-toastr/toastr.css"


Better Theme

1. npm install bootswatch