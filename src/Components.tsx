import React from 'react'

type Props = {
  children: JSX.Element
}
const Components= ({ children} : Props) => (
  <div>
    {children}
  </div>
)

export default Components