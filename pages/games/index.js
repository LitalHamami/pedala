import GamesList from '../../components/games/games-list';
import {getAllGames} from '../../dummy-data';

function AllGamesPage(){
    const games = getAllGames();
    return (
        <div className="container">
            <div className="row">
                <GamesList items={games}/>
            </div>
        </div>
    )
}

export default AllGamesPage;