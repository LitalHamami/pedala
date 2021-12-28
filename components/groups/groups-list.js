import React, { useState } from 'react';
import PlayersList from '../players/players-list';
import classes from './groups-list.module.css';
import { useRouter } from 'next/router';

function GroupsList(props){
    console.log('props :>> ', props);
    const {groups, gameId} = props; 
    const router = useRouter();

    const getGroupById = (groupId) => groups.find(group => group.id === groupId).players;
    const handleTabClicked = (groupId) =>  {
        setActiveGroup(getGroupById(groupId));
        setActiveTab(groupId);
    }
    const isActive= groupId => activeTab === groupId; 
    const [activeGroup, setActiveGroup] = useState(getGroupById(groups[0].id));
    const [activeTab, setActiveTab] = useState(groups[0].id);

    return (
        <div>
            {/* onClick={() => router.push(`/games/${gameId}/rate-game`)} */}
            <button >Rate!</button>
            <div className={classes.tabs}>
                {groups.map(group => 
                    <li 
                        className={`${classes.tabItem} ${isActive(group.id) ? classes.active : ''}`}
                        onClick={()=> handleTabClicked(group.id)} 
                        key={group.id}>{group.name}
                    </li>
                )}
            </div>
            <div>
                <PlayersList items={activeGroup}/>
            </div>
        </div>
    )
}

export default GroupsList;