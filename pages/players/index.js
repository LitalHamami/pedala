import PlayersList from '../../components/players/players-list';
import {getAllPlayers} from '../../dummy-data';

function PlayersListPage(){
    const players = getAllPlayers();
    return (
        <div className="container">
            <div className="row">
                <PlayersList items={players}/>
            </div>
        </div>
    )
}

export default PlayersListPage;