import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const Book = ({ book }) => (
  <Grid>
    <Row className="show-grid">
      <Col md={4}><code>&lt;{'Col md={4}'} /&gt;</code>{book.author}</Col>
      <Col md={4}><code>&lt;{'Col md={4}'} /&gt;</code>{book.description}</Col>
      <Col md={4}><code>&lt;{'Col md={4}'} /&gt;</code></Col>
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
