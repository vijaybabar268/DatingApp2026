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