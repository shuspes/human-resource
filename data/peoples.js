export const peoples = [
  {
    Id: "1",
    FirstName: "Pol",
    LastName: "White",
    FullName: "Pol White",
    Gender: "male",
    Age: "34",
    Email: "pol.white@fake.com",
    Phone: "375-33-4561289",
    CompanyName: "White Circle",
    CurrentPosition: "manager",
    DesiredPosition: "manager"
  },
  {
    Id: "2",
    FirstName: "Jane",
    LastName: "Mustang",
    FullName: "Jane Mustang",
    Gender: "female",
    Age: "25",
    Email: "jane.mustang@fake.com",
    Phone: "375-29-9876734",
    CompanyName: "Pepelac",
    CurrentPosition: "developer",
    DesiredPosition: "team lead"
  },
  {
    Id: "3",
    FirstName: "Dean",
    LastName: "Jonhson",
    FullName: "Dean Jonhson",
    Gender: "male",
    Age: "56",
    Email: "dean.jonhson@fake.com",
    Phone: "375-44-6548965",
    CompanyName: "no-name",
    CurrentPosition: "designer",
    DesiredPosition: "top designer"
  }
];

export const properties = [
  {
    Code: "Id",
    Type: "string",
    Name: "Id",
    DisplayOrder: 0,
    ShouldDisplayInTable: false,
    IsVisible: false
  },
  {
    Code: "FirstName",
    Type: "string",
    Name: "First Name",
    DisplayOrder: 0,
    ShouldDisplayInTable: true,
    IsVisible: true
  },
  {
    Code: "LastName",
    Type: "boolean",
    Name: "Last Name",
    DisplayOrder: 1,
    ShouldDisplayInTable: true,
    IsVisible: true
  },
  {
    Code: "Gender",
    Type: "select",
    Name: "Gender",
    DisplayOrder: 2,
    ShouldDisplayInTable: true,
    IsVisible: true
  },
  {
    Code: "Age",
    Type: "number",
    Name: "Age",
    DisplayOrder: 3,
    ShouldDisplayInTable: true,
    IsVisible: true
  },
  {
    Code: "Email",
    Type: "string",
    Name: "Email",
    DisplayOrder: 4,
    ShouldDisplayInTable: false,
    IsVisible: true
  },
  {
    Code: "Phone",
    Type: "string",
    Name: "Phone",
    DisplayOrder: 5,
    ShouldDisplayInTable: false,
    IsVisible: true
  },
  {
    Code: "CompanyName",
    Type: "string",
    Name: "Company",
    DisplayOrder: 6,
    ShouldDisplayInTable: false,
    IsVisible: true
  },
  {
    Code: "CurrentPosition",
    Type: "string",
    Name: "Current Position",
    DisplayOrder: 7,
    ShouldDisplayInTable: false,
    IsVisible: true
  },
  {
    Code: "DesiredPosition",
    Type: "string",
    Name: "Desired Position",
    DisplayOrder: 8,
    ShouldDisplayInTable: true,
    IsVisible: true
  }
];