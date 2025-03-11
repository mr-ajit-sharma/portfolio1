import React from 'react'

const Footer = () => {
  return (
    <div><footer className="text-center p-4 bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText">
    © {new Date().getFullYear()} Ajit Sharma. All rights reserved.
  </footer></div>
  )
}

export default Footer