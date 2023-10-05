import { useState } from "react"

type Props = {
    children:string,
    maxSize?:number
}
const ExpandableText = ({children,maxSize=100}:Props) => {
    const [isExpandend, setExpandend] = useState(false)
    const text = isExpandend || children.length <= maxSize ? children : `${children.substring(0,maxSize)}... `
  return (
    <div>
        {
           text
        }
        { children.length > maxSize  && <button onClick={()=>setExpandend(!isExpandend)}>{isExpandend?'Less':'More'}</button>}
    </div>
  )
}

export default ExpandableText