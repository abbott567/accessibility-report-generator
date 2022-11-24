# Accessibility Report Generator

Uses a collection of JavaScript objects as a data set and creates accessibility compliance reports to monitor progress in large organisations.

The generator will output:
- A full HTML report
- Complete JSON data
- An Excel workbook
- A diff file to track changes the last report
- Email templates for stakeholder updates

## How to install
1. Clone the repo
2. Run `npm install`
3. Change the name of `src/example-data` to `src/data`
4. Change the example data to match your organisation.

## How to preview the report
1. Run `npm start`
2. Find your report at [http://localhost:3000](http://localhost:3000)

## How to build the report
1. Run `npm run build`
2. Find your report in the `output` folder

## How to structure your data

In order to build the data model, you need to adhere to the correct folder structure on the `src/data` folder.

Each Service, PDU, Directorate will need an info.js file, as well as one for the Org at the top level directory. Edit the example-data structure if you get stuck.

**Warning:** If your put a folder in the wrong directory it will be missing in the report.

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


## Data model

### Org (Organisation)
Relationships:
- `has many Directorates`
- `has many PDUs`
- `has many Services`

Methods:
- `Org.getDirectorates()`
- `Org.getPDUs()`
- `Org.getServices()`

Attributes (auto assigned):
- `class`: string - 'Org' - auto assigned
- `id`: number - auto assigned
- `slug`: string - auto assigned
- `stats`: object - auto assigned

Attributed (user assigned):
- `name`: string - required
- `alias`: string - optional
- `templateData`: object - optional
- `templateData.report.repo`: string - optional
- `templateData.report.contact_email`: string - optional
- `templateData.email` - object - optional
- `templateData.email.reporter` - object - optional
- `templateData.email.reporter.first_name` - string - optional
- `templateData.email.reporter.last_name` - string - optional
- `templateData.email.reporter.email` - string - optional


Example Org
```js
module.exports = {
  name: 'Ministry of Big Cats', // Required
  alias: 'MBC', // Can be left blank

  // This data is used on the overview page
  templateData: {
    report: {
      repo: 'https://sharepoint.com/sites/mbc-dummy-url',
    },
    email: {
      reporter: {
        first_name: 'Craig',
        last_name: 'Abbott',
        email: 'craig.abbott@mbc.gov.uk'
      }
    }
  }
}

```

### Directorate
Relationships:
- `belongs to an Org`
- `has many PDUs`
- `has many Services`

Methods:
- `Directorate.getOrg()`
- `Directorate.getPDUs()`
- `Directorate.getServices()`

Attributes (auto assigned):
- `class`: string - 'Directorate' - auto assigned
- `id`: number - auto assigned
- `orgID`: number - auto assigned
- `slug`: string - auto assigned
- `stats`: object - auto assigned

Attributes (user assigned):
- `name`: string - required
- `alias`: string - optional
- `stakeholders` - array - optional
- `stakeholders[].first_name` - string - optional
- `stakeholders[].last_name` - string - optional
- `stakeholders[].email` - string - optional

Example Directorate:
```js
module.exports = {
  name: 'Tigers and Jaguars', // Required
  alias: 'T&J', // Can be left blank

  /* This section is optional, it doesn't do anything 
  at the moment, it's just used for reference */
  stakeholders: [
    {
      first_name: 'Carole',
      last_name: 'Baskin',
      email: 'carole@thebigcatsanctuary.org(fake-email)'
    }
  ]
}
```

### PDU (Product Development Unit)
Relationship:
- `belongs to an Org`
- `belongs to a Directorate`
- `has many Services`

Methods:
- `PDU.getOrg()`
- `PDU.getDirectorate()`
- `PDU.getServices()`

Attributes (auto assigned):
- `class`: string - 'PDU' - auto assigned
- `id`: number - auto assigned
- `orgID`: - number - auto assigned
- `directorateID`: number - auto assigned
- `slug`: string - auto assigned
- `stats`: object - auto assigned

Attributes (user assigned):
- `name`: string - required
- `alias`: string - optional
- `stakeholders` - array - optional
- `stakeholders[].first_name` - string - optional
- `stakeholders[].last_name` - string - optional
- `stakeholders[].email` - string - optional

Example PDU:
```js
module.exports = {
  name: 'Tigers', // Required
  alias: 'Stripes', // Can be left blank

  /* The app will generate emails templates for
  the people added into this array */
  stakeholders: [
    {
      first_name: 'Joe',
      last_name: 'Exotic',
      email: 'joe.exotic@mbc.gov.uk'
    }
  ]
}
```

### Service
Relationships:
- `belongs to an Org`
- `belongs to a Directorate`
- `belongs to a PDU`

Methods:
- `Service.getOrg`
- `Service.getDirectorate`
- `Service.getPDU()`

Attributes (auto generated):
- `class`: string - 'Service' - auto generated
- `id`: number - auto generated
- `orgID`: number - auto generated
- `directorateID` // Number
- `PDUID`: number - auto generated
- `slug`: string - auto generated
- `stats`: object - auto generated

Allowed attributes
- `name`: string - required
- `alias`: string - optional
- `status`: string - required<br>
  Options: `'live'`, `'not-live'`
- `type`: string - required<br>
  Options: `'citizen'`, `'staff'`
- `thirdParty`: string - required
  Options: `'true'`, `'false'`, `'unknown'`
- `risk`: string - required<br>
  Options: `'low'`, `'medium'`, `'high'`, `'very-high'` `'unknown'`, `'compliant'`
- `critical`: string - required
  Options: `'true'`, `'false'`
- `sunsetting`: string<br>
  Options: `'true'`, `'false'`
- `sunsetDate`: string - required<br>
  Options: `'n/a'`, `[valid date]` (eg: `'2 March 2022'`)
- `plans`: string - required<br>
  Options: `'true'`, `'false'`
- `legacy`: string - required<br>
  Options: `'true'`, `'false'`
- `notes`: string - optional
- `evidence`: object - required
- `evidence.wcag.status` - string - required<br>
  Options: `passed`, `failed`, `not-done`
- `evidence.wcag.date` - string - required<br>
  Options: `'n/a'`, `[valid date]` (eg: `'2 March 2022'`)
- `evidence.screen_reader.status` - string - required<br>
  Options: `passed`, `failed`, `not-done`
- `evidence.screen_reader.date` - string - required<br>
  Options: `'n/a'`, `[valid date]` (eg: `'2 March 2022'`)
- `evidence.voice_controller.status` - string - required<br>
  Options: `passed`, `failed`, `not-done`
- `evidence.voice_controller.date` - string - required<br>
  Options: `'n/a'`, `[valid date]` (eg: `'2 March 2022'`)
- `evidence.screen_magnifier.status` - string - required<br>
  Options: `passed`, `failed`, `not-done`
- `evidence.screen_magnifier.date` - string - required<br>
  Options: `'n/a'`, `[valid date]` (eg: `'2 March 2022'`)
- `evidence.statement.status` - string - required<br>
  Options: `done`, `not-done`, `failed`
- `evidence.statement.date` - string - required<br>
  Options: `'n/a'`, `[valid date]` (eg: `'2 March 2022'`)

Example Service
```js
module.exports = {
  name: 'Apply to pet a big cat', // Required
  alias: 'APC', // Can be left blank
  status: 'live', // Can be live or not-live
  type: 'citizen', // Can be citizen or staff
  thirdParty: 'false', // Can be false or true (remember quotes)
  risk: 'compliant', // Can be low, medium, high, very-high, compliant, unknown
  critical: 'false', // Can be false or true (remember quotes)
  sunsetting: 'false', // Can be false or true (remember quotes)
  sunsetDate: 'n/a', // Can be n/a or a valid date such as 2 March 2022
  plans: 'true', // Can be false or true (remember quotes)
  legacy: 'false', // Can be false or true (remember quotes)
  evidence: {
    wcag: {
      status: 'passed', // Can be passed, failed or not-done
      date: 'November 2022' // Can be n/a or a valid date such as 2 March 2022
    },
    screen_reader: {
      status: 'passed', // Can be passed, failed or not-done
      date: 'November 2022' // Can be n/a or a valid date such as 2 March 2022
    },
    voice_controller: {
      status: 'passed', // Can be passed, failed or not-done
      date: 'November 2022' // Can be n/a or a valid date such as 2 March 2022
    },
    screen_magnifier: {
      status: 'passed', // Can be passed, failed or not-done
      date: 'November 2022' // Can be n/a or a valid date such as 2 March 2022
    },
    statement: {
      status: 'done', // Can be done, not-done or failed
      date: 'November 2022' // Can be n/a or a valid date such as 2 March 2022
    }
  },
  // Notes can be left blank. They can span multiple lines if you use backticks
  notes: `
    Service was last tested in November 2022 and found to be compliant.
  `
}
```

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