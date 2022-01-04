import { gql, useLazyQuery } from "@apollo/client"
import { useState } from "react"

function Search() {
    const GET_CHARACTER_LOCATION = gql`
    query GETCHARACTERLOCATION($name:String!){
        characters(filter:{name:$name}){
            results{
                location{
                    name
                }
            }
        }
    }
    `
    const [name, setname] = useState("")
    const [getLocations, {
        loading, error, data, called
    }] = useLazyQuery(GET_CHARACTER_LOCATION, {
        variables: {
            name
        }
    })
    console.log(
        {
            loading, error, data, called
        }
    );

    return (
        <div>
            <input type="text"
                placeholder="Name" onChange={(e) => setname(e.target.value)} />
            <button onClick={() => getLocations()}>Search</button>
            {
                loading && <div>SPINNER</div>
            }
            {
                error && <div>Error</div>
            }
            {
                data && (
                    <ul>
                        {data.characters.results.map((lodation: any) => {

                            return (
                                <li>
                                    {lodation.location.name}
                                </li>
                            )


                        })}
                    </ul>
                )
            }

        </div>
    )
}

export default Search
