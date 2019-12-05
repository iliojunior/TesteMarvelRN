import React from 'react'

import Table from '../Table'

const Content = ({ personagens, page, totalPages, onChangePage }) => (
  <Table
    page={page}
    totalPages={totalPages}
    onChangePage={onChangePage}
    data={personagens}
  />
)

export default Content
