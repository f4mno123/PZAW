import { useState } from "react"

export const MyOwnRow = (props) => {
    const [flag, setFlag] = useState(false)

    console.log(props)
    return (
        <div>
            <input type="button" onClick={props.onButtonClick}/>
            <tr>
            <td>
                {props.row.id}
                {props.row.key1}
            </td>
        </tr>
        </div>
    )
}
