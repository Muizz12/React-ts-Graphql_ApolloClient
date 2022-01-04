import {useQuery,gql} from "@apollo/client"

const GET_CHARACTERS=gql`
query{
    characters{
        results{
            id
            name
            image
        }
    }
}
`
export const useCharatcers =()=>{
    const {error,data,loading}=useQuery(GET_CHARACTERS)
    return{
        error,data,loading
    }


}