import { Link } from "react-router-dom";
import { useCharatcers } from "../hooks/useCharacters";
import "./CharacterList.css"

function CharactersList() {
    const { error, loading, data } = useCharatcers();
    console.log({ error, data, loading });
    if (loading === true) {
        return <div>SPineer</div>
    }
    if (error) {
        return (
            <div>
                ERROE
            </div>
        )
    }

    return (
        <div className="CharacterList">
            {data.characters.results.map((chara: any) => {
                return (
                    <Link to={`/${chara.id}`}>
                        <img src={chara.image} />
                        <h2>{chara.name}</h2>
                    </Link>
                )
            })}


        </div>
    )
}

export default CharactersList
