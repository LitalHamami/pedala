import GameItem from './game-item';
import { useRouter } from 'next/router'

function GamesList(props){
    const items = props.items
    const router = useRouter()

    return (
        <div>
            <button onClick={()=> router.push(`games/new-game`)}>Create Game</button>
            {items.map((item) => 
            <GameItem
                onClick={() => router.push(`games/${item.id}`)} 
                key={item.id} 
                id={item.id} 
                name={item.name} 
                date={item.date} 
                startHour = {item.startHour} 
                endHour={item.endHour} 
            / >)}
        </div>
    )
}

export default GamesList;