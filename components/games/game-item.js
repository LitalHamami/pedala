import classes from './game-item.module.css'
import { useRouter } from 'next/router'

function GameItem(props){
    const {id ,name, date,startHour, endHour} = props;
    const router = useRouter()
    
    return (
        <div onClick={() => router.push(`games/${id}`)} className="col-12">
            <div className={classes.item}>
                <div className="content">
                    <div className={classes.name}>
                        {name}
                    </div>
                    <div>
                        {date}
                    </div>
                    <div>
                        {startHour} - {endHour}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameItem;