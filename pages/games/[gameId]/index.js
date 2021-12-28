import {getGameById} from '../../../dummy-data';
import {useRouter} from 'next/router';
import GameItem from '../../../components/games/game-item';
import GroupsList from '../../../components/groups/groups-list'

function GameDetailsPage(){
    const router = useRouter();
    const gameId = router.query.gameId;
    const game = getGameById(gameId);
    console.log('game :>> ', game);
    return (
        <div>
            <div>
                {game && game.groups
                    ? 
                    <div>
                        <GameItem 
                            key={game.id} 
                            id={GameItem.id} 
                            name={game.name} 
                            date= {game.date} 
                            startHour={game.startHour} 
                            endHour={game.endHour} 
                        />
                        <GroupsList groups={game.groups} gameId={game.id}/>
                        </div>
                   
                    : <h1>Game not founded</h1> 
                }
            </div>        
        </div>
    )
}

export default GameDetailsPage;