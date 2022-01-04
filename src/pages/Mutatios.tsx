import { gql, useMutation } from "@apollo/client"
const create_Product = gql`
mutation CreateProduct($name:String!, $quantityPerUnit:Int!){
    createProduct(record:{
        name:$name,
        quantityPerUnit:$quantityPerUnit
    }){
        record{
            name
        }
    }
}
`
function Mutatios() {
    const [Product] = useMutation(create_Product, {
        variables: {
            name: "hotdog",
            quantityPerUnit: 4
        }
    })
    return (
        <div>
            <button onClick={() => Product()}>

            </button>
        </div>
    )
}

export default Mutatios
