import { MyOwnRow } from "./MyOwnRow";
import { useState } from "react";

function MyOwnTable () {


    const [flag, setFlag] = useState(false);
    const data = ["text1", "text2", "text3", "text4", "text5"];


    const map = [
        {
            id : "7753242a-5fd2-4ef2-bf33-eaf144f681eb",
            key1 : "text1",
        },
        {
            id : "eb27327b-53de-4c82-baca-7313e52c6e28",
            key1: "text2",
        },
        {
            id: "da18b5b2-3ba1-4aeb-b3d6-6cb991e8d685",
            key1: "text2",
        },
        {
            id : "a80c8ff6-ffd6-45dd-8879-028067d552c1",
            key1: "text2",
        }
    ]

    return (
        <div>
            {
                flag ? <div>dziaa</div> : null
            }
            <input type="button" value={"click me to change flag status"} onClick={() => setFlag(!flag)}/>
            <table >
                <thead>
                    <tr>
                        <th>liczba poczatkowa</th>
                        <th>data one</th>
                        <th>data two</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.forEach(element => {
                        document.body.innerHTML += "<p>" + element + "</p>"
                    }) */}
                    {/* {data.map((element, index, array) => {
                        return (
                            <tr key={index}>
                                <td>{element}</td>
                            </tr>
                        )
                    })} */}

                    {map.map((element, index, array) => {
                        return <MyOwnRow onButtonClick={() => {
                            setFlag(!flag);
                        }} row={element} /> 
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default MyOwnTable;