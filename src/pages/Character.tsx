import { type } from "os";
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharater"
import "./Character.css"

export default function Character() {
    type Id = {
        id: any
    }
    const { id } = useParams<Id>()
    const { data, loading, error } = useCharacter(id);
    console.log("========>", { data, loading, error });
    if (error) {
        return <div>Error</div>
    }
    if (loading) {
        return <div>Loading</div>
    }
    return (
        <div className="Character">

            <img src={data.character.image} width={750} />
            <div className="Character-content">
                <h1>
                    {data.character.name}
                </h1>
                <p>{data.character.gender}</p>
                <div className="character-episode">
                    {
                        data.character.episode.map((episode: any) => {
                            return (
                                <div>
                                    {
                                        episode.name
                                    }
                                </div>
                            )

                        })
                    }

                </div>

            </div>

        </div>
    )
}
