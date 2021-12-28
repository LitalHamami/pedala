import classes from "./player-item.module.css";

function PlayerItem(props){
    const {id, name, rating, img} = props; 
    return (
        <div className="col-12 col-md-4">
            <li className={classes.item}>
                    <div className={classes.imgWrapper}>
                        <img className={classes.img} src={img}/>    
                    </div>
                    <div className={classes.name}>
                        {name}
                    </div>
                    <div className={classes.ratingWrapper}>
                        <div className={classes.ratingContent}>
                            <span className={classes.rating}>{rating}</span>
                            <span>rates</span>
                        </div>
                    </div>
                </li>
        </div>
        
    )
}

export default PlayerItem;