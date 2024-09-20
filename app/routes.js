//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/destination-branch', function (req, res) {
    let destination = req.session.data['destination']
  
    if (destination == 'Moon') {
      res.redirect(`/name_moon`)
    }
    else {
      res.redirect(`/name_mars`)
    }
  })
