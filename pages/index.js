import {getAllGames} from '../dummy-data';
import GamesList from '../components/games/games-list';
export default function Home() {
  const games = getAllGames();
  return (
      <div className="container">
          <div className="row">
              <GamesList items={games}/>
          </div>
      </div>
  )
}
