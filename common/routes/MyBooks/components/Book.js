import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const Book = ({ book }) => (
  <Grid>
    <Row className="show-grid">
      <Col md={4}>{book.author}</Col>
      <Col md={4}>{book.description}</Col>
    </Row>
  </Grid>
)

Book.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.object,
  }),
}

export default Book
