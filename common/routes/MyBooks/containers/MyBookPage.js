import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import   Book   from '../components/Book'
import { provideHooks } from 'redial'
import { loadBook } from '../actions'



const redial = {
  fetch: ({ dispatch }) => dispatch(loadBook()),
}

const mapStateToProps = (state) => ({
  books: state.books,
})



const MyBookPage= ({ books }) => (

  <div id="app">
    <div style={{ marginTop: '50' }}>

      {
        books.data.recommendation.map((book, _) =>
          <div style={{ marginTop: '50' }}>
            <Book key={ book.title } book={ book } />
          </div>
        )
      }

    </div>
  </div>

)


MyBookPage.propTypes = {
  books: PropTypes.object.isRequired,
}

export default provideHooks(redial)(connect(mapStateToProps)(MyBookPage))
