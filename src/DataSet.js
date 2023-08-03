import React from 'react'

const DataSet = ({ html_url, username }) => {
  return (
    <article className='card'>
      <h4>${username}</h4>
      <a href={html_url} className='btn'>
        View Data
      </a>
    </article>
  )
}

export default DataSet
