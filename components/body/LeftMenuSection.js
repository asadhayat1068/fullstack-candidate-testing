import Fetch from 'isomorphic-unfetch'
import { useEffect, useState } from 'react'

const LeftMenuSection = (props) => {
    // console.log('Left Menu Section Props: ', props.section)
    return (
        <div className="card mb-4">
            <h1 className="uppercase font-bold">{props.title.split('_').join(' ')}</h1>
            <ul>
                {props.section.map((item, index) => {
                    return (<li key={item.key}> {item.key} <span className="text-xs text-gray-400 px-3">{ parseInt(item.doc_count).toLocaleString()}</span></li>)
                })}
            </ul>
        </div>
  )
}

export default LeftMenuSection
