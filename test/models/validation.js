import Sails from 'sails'
import assert from 'assert'

describe('Validation', () => {

  before(done => Sails.lift(done))

  it('.create should persist to the database',done => {

    database.Validation.create({
      validation_public_key: 'n9LigbVAi4UeTtKGHHTXNcpBXwBPdVKVTjbSkLmgJvTn6qKB8Mqz',
      reporter_public_key: 'CD88E6F183A139CDC13A0278E908475C83DBA096C85124C4E94895B10EA3FB8A',
      ledger_hash: 'n9MD5h24qrQqiyBC8aeqqCWvpiBiYQ3jxSr91uiDvmrkyHRdYLUj'
    })
    .spread((validator, created) => {
      assert(created)
      done()
    })
  })

  it.skip('.create should require a validation_public_key')
  it.skip('.create should require a reporter_public_key')
  it.skip('.create should require a ledger_hash')
})

