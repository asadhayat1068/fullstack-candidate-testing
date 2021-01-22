import Modal from './Modal'
import { useEffect, useState } from 'react'

const LeftMenuSection = (props) => {
    console.log('Left Menu Section Props: ', props.section)
    const [modalVisibility, setModalVisibility] = useState(false)
    return (
        <div>
            <div className="card mb-4">
                <h1 className="uppercase font-bold">{props.title.split('_').join(' ')}</h1>
                <ul>
                    {props.section.slice(0,10).map((item, index) => {
                        return (<li key={item.key}> {item.key} <span className="text-xs text-gray-400 px-3">{ parseInt(item.doc_count).toLocaleString()}</span></li>)
                    })}

                </ul>
                { props.section.length > 10 && (<p 
                    className="text-blue-500"
                    onClick={() => { setModalVisibility(true)}}
                >Show More</p>)}
            </div>
            { modalVisibility && (<Modal 
                setModalVisibility={setModalVisibility}
                title={props.title.split('_').join(' ')}
                section={props.section}
            />)
            }
        </div>

  )
}

export default LeftMenuSection
