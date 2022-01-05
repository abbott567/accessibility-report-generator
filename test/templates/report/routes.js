/* global describe, it */

const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const chai = require('chai')
const expect = chai.expect
chai.use(sinonChai)

describe('Routes: app', () => {
  const router = require('../../../src/templates/report/lib/routes')
  const expectedResult = router.get('/')
  expect(expectedResult.stack).to.not.equal(undefined)
})

describe('Routes: Accessibility Statement', () => {
  it('should have a get function: pages/accessibility-statement', () => {
    const router = require('../../../src/templates/report/pages/accessibility-statement/routes')
    const expectedResult = router.get('/accessibility-statement')
    expect(expectedResult.stack).to.not.equal(undefined)
  })

  it('should render a template', () => {
    const { get } = require('../../../src/templates/report/pages/accessibility-statement/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })
})

describe('Routes: Next steps', () => {
  it('should have a get function: pages/next-steps-for-this-report', () => {
    const router = require('../../../src/templates/report/pages/next-steps-for-this-report/routes')
    const expectedResult = router.get('/next-steps-for-this-report')
    expect(expectedResult.stack).to.not.equal(undefined)
  })

  it('should render a template', () => {
    const { get } = require('../../../src/templates/report/pages/next-steps-for-this-report/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })
})

describe('Routes: Sitemap', () => {
  it('should have a get function: pages/sitemap', () => {
    const router = require('../../../src/templates/report/pages/sitemap/routes')
    const expectedResult = router.get('/sitemap')
    expect(expectedResult.stack).to.not.equal(undefined)
  })

  it('should render a template', () => {
    const { get } = require('../../../src/templates/report/pages/sitemap/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })
})

describe('Routes: Overview', () => {
  it('should have a get function: pages/overview', () => {
    const router = require('../../../src/templates/report/pages/overview/routes')
    const expectedResult = router.get('/overview')
    expect(expectedResult.stack).to.not.equal(undefined)
  })

  it('should render a template', () => {
    const { get } = require('../../../src/templates/report/pages/overview/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })
})

describe('Routes: Directorate', () => {
  it('should have a get function: pages/directorate', () => {
    const router = require('../../../src/templates/report/pages/directorate/routes')
    const expectedResult = router.get('/directorate-1')
    expect(expectedResult.stack).to.not.equal(undefined)
  })

  it('should render a template', () => {
    const { get } = require('../../../src/templates/report/pages/directorate/functions')
    const req = { params: { directorate: 'directorate-1' } }
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })
})

describe('Routes: PDU', () => {
  it('should have a get function: pages/pdu/pdu', () => {
    const router = require('../../../src/templates/report/pages/pdu/routes')
    const expectedResult = router.get('/directorate-1/pdu-1')
    expect(expectedResult.stack).to.not.equal(undefined)
  })

  it('should render a template', () => {
    const { get } = require('../../../src/templates/report/pages/pdu/functions')
    const req = { params: { directorate: 'directorate-1', pdu: 'd1-pdu-1' } }
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })
})

describe('Routes: Filters', () => {
  it('should have a get function: /filters/compliant-services', () => {
    const router = require('../../../src/templates/report/pages/filters/compliant-services/routes')
    const expectedResult = router.get('/filters/compliant-services')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
  it('should render a template: /filters/compliant-services', () => {
    const { get } = require('../../../src/templates/report/pages/filters/compliant-services/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res, 'compliant')
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })

  it('should have a get function: /filters/very-high-risk-services', () => {
    const router = require('../../../src/templates/report/pages/filters/very-high-risk-services/routes')
    const expectedResult = router.get('/filters/very-high-risk-services')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
  it('should render a template: /filters/very-high-risk-services', () => {
    const { get } = require('../../../src/templates/report/pages/filters/very-high-risk-services/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })

  it('should have a get function: filters/high-risk-services', () => {
    const router = require('../../../src/templates/report/pages/filters/high-risk-services/routes')
    const expectedResult = router.get('/filters/high-risk-services')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
  it('should render a template: filters/high-risk-services', () => {
    const { get } = require('../../../src/templates/report/pages/filters/high-risk-services/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })

  it('should have a get function: /filters/medium-risk-services', () => {
    const router = require('../../../src/templates/report/pages/filters/medium-risk-services/routes')
    const expectedResult = router.get('/filters/medium-risk-services')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
  it('should render a template: /filters/medium-risk-services', () => {
    const { get } = require('../../../src/templates/report/pages/filters/medium-risk-services/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })

  it('should have a get function: /filters/unknown-risk-services', () => {
    const router = require('../../../src/templates/report/pages/filters/unknown-risk-services/routes')
    const expectedResult = router.get('/filters/unknown-risk-services')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
  it('should render a template: /filters/unknown-risk-services', () => {
    const { get } = require('../../../src/templates/report/pages/filters/unknown-risk-services/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })

  it('should have a get function: /filters/sunsetting-services', () => {
    const router = require('../../../src/templates/report/pages/filters/sunsetting-services/routes')
    const expectedResult = router.get('/filters/sunsetting-services')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
  it('should render a template: /filters/sunsetting-services', () => {
    const { get } = require('../../../src/templates/report/pages/filters/sunsetting-services/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })

  it('should have a get function: /filters/critical-services', () => {
    const router = require('../../../src/templates/report/pages/filters/critical-services/routes')
    const expectedResult = router.get('/filters/critical-services')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
  it('should render a template: /filters/critical-services', () => {
    const { get } = require('../../../src/templates/report/pages/filters/critical-services/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })

  it('should have a get function: /filters/no-plans-for-compliance', () => {
    const router = require('../../../src/templates/report/pages/filters/no-plans-for-compliance/routes')
    const expectedResult = router.get('/filters/no-plans-for-compliance')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
  it('should render a template: /filters/critical-services', () => {
    const { get } = require('../../../src/templates/report/pages/filters/no-plans-for-compliance/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })

  it('should have a get function: /filters/citizen-facing-services', () => {
    const router = require('../../../src/templates/report/pages/filters/citizen-facing-services/routes')
    const expectedResult = router.get('/filters/citizen-facing-services')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
  it('should render a template: /filters/citizen-facing-services', () => {
    const { get } = require('../../../src/templates/report/pages/filters/citizen-facing-services/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })

  it('should have a get function: /filters/staff-facing-services', () => {
    const router = require('../../../src/templates/report/pages/filters/staff-facing-services/routes')
    const expectedResult = router.get('/filters/staff-facing-services')
    expect(expectedResult.stack).to.not.equal(undefined)
  })
  it('should render a template: /filters/staff-facing-services', () => {
    const { get } = require('../../../src/templates/report/pages/filters/staff-facing-services/functions')
    const req = {}
    const res = { send: (html) => { } }
    sinon.spy(res, 'send')
    const spyCall = res.send
    get(req, res)
    expect(spyCall).calledOnce // eslint-disable-line no-unused-expressions
  })
})
