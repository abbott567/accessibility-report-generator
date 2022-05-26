# Accessibility Report Generator

Uses a collection of JavaScript objects as a data set and creates accessibility compliance reports to monitor progress in large organisations.

The generator will output:
- A full HTML report
- Complete JSON data
- An Excel workbook
- A diff file to track changes the last report
- Email templates for stakeholder updates

## How to use
1. Clone the repo
2. Run `npm install`
3. Change the name of `src/example-data` to `src/data`
4. Change the example data to match your organisation.

### Preview the report
1. Run `npm start`
2. Find your report at [http://localhost:3000](http://localhost:3000)

### Building the report
1. Run `npm run build`
2. Find your report in the `output` folder

## Data management

### Folder structure
In order to build the data model, you need to adhere to the correct folder structure on the `src/data` folder.

Each Service, PDU, Directorate will need an info.js file, as well as one for the Org at the top level directory. Edit the example-data structure if you get stuck.

```
data
│  info.js // Org.info
└─ directorates
   └─ directorate-name
      │  info.js // Directorate.info
      └─ pdus
         └─ pdu-name
            │  info.js // PDU.info
            └─ services
               └─ service-name
                  │  info.js // Service.info
```


### Data model

#### Org
Relationships:
- `has many Directorates`
- `has many PDUs`
- `has many Services`

Methods:
- `Org.getDirectorates()`
- `Org.getPDUs()`
- `Org.getServices()`

Attributes:
- `class` // String = 'Org'
- `id` // Number
- `name` // String
- `alias` // String
- `slug` // String
- `stats` // Object

#### Directorate
Relationships:
- `belongs to an Org`
- `has many PDUs`
- `has many Services`

Methods:
- `Directorate.getOrg()`
- `Directorate.getPDUs()`
- `Directorate.getServices()`

Attributes:
- `class` // String = 'Directorate'
- `id` // Number
- `name` // String
- `alias` // String
- `orgID` // Number
- `stakeholders` // Array
- `stats` // Object

#### PDU:
Relationship:
- `belongs to an Org`
- `belongs to a Directorate`
- `has many Services`

Methods:
- `PDU.getOrg()`
- `PDU.getDirectorate()`
- `PDU.getServices()`

Attributes:
- `class` // String = 'PDU'
- `id` // Number
- `name` // String
- `slug` // String
- `alias` // String
- `orgID` // Number
- `directorateID` // Number
- `stakeholders` // Array
- `stats` // Object

#### Service
Relationships:
- `belongs to an Org`
- `belongs to a Directorate`
- `belongs to a PDU`

Methods:
- `Service.getOrg`
- `Service.getDirectorate`
- `Service.getPDU()`

Attributes:
- `class` // String = 'Service'
- `id` // Number
- `name` // String
- `alias` // String
- `orgID` // Number
- `directorateID` // Number
- `PDUID` // Number
- `status` // String (can be 'live' or 'not-live')
- `type` // String (can be 'citizen' or 'staff')
- `risk` // String (can be 'low', 'medium', 'high' or 'very-high')
- `critical` // String (can be 'true' or 'false')
- `sunsetting` // String (can be 'true' or 'false')
- `sunsetDate` // String (must be valid, eg: '2 March 2022')
- `plans` // String (can be 'true' or 'false')
- `legacy` // String (can be 'true' or 'false')
- `notes` // String
- `evidence` // Object
- `stats` // Object

## Overriding data in Excel
You can override any of the attributes in the data when exporting to Excel. 

You might have no purpose for this, it was added because in some organisations services or systems can be called different things in different areas.

You can override the excel data by removing `example-` from the file names in the `src/templates/excel/overrides` folder and modifying the object.

For example, to override `Minisry of Big Cats` as the `Org.name`:

```js
function overrideOrg (org) {
  org.name = 'Ministry of Reasonably Sized Cats'
  return org
}
```