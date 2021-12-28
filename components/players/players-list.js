import PlayerItem from './player-item';
import classes from './players-list.module.css';

function PlayersList(props){
    const items = props.items;
    return (
        <div className={classes.list}>
            {items.sort((a, b) => a.rating-b.rating).map((item)=> <PlayerItem key={item.id} id={item.id} name={item.name} rating={item.rating} img={item.img}/>)}
        </div>
    )
}

export default PlayersList;