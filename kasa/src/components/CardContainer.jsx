import "../styles/cardContainer.css";
import datas from "../data/data";
import Card from '../components/Card'

export default function cardContainer() {

    return (
        <main className="cardContainer">
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}