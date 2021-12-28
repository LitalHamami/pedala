const DUMMY_PLAYERS = [
    {
        id: 1,
        name: 'Yehouda Nabet',
        rating: 1,
        img: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/160929899_3743273802394278_8424406490745877003_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-_6Q_KB1kqMAX8UhK9W&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT8yXOYVipaoNzK02Cvc7fzazDl-w9R0voeYSbXWwRR8Jw&oe=61EDE3EB'
    },
    {
        id: 2,
        name: 'Omer Sharf',
        rating: 2,
        img: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/39514894_10217226143667076_3052445433499484160_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QTmIySdVHG4AX9cnE4q&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT--fPRRTOWO6nL6vNMT6LAe9BzyZczFGW6JLVAwLSCOIQ&oe=61EB4CB0'
    },
    {
        id: 3,
        name: 'Renny Chechiqe',
        rating: 3,
        img: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/33045289_10216765127860004_2423420586505011200_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OBCqMmtjxEIAX-0kucr&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-vjWm3HogyOY0w3fmzfK8SNIHvhsnBZ77T91VFgynXZw&oe=61ECB1E2'
    },
    {
        id: 4,
        name: 'name 4',
        rating: 4,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 5,
        name: 'name 5 ',
        rating: 5,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 6,
        name: 'name 6',
        rating: 6,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 7,
        name: 'name 7',
        rating: 7,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 8,
        name: 'name 8',
        rating: 8,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },  
    {
        id: 9,
        name: 'name 9',
        rating: 9,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 10,
        name: 'name 10',
        rating: 10,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 11,
        name: 'name 11',
        rating: 11,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 12,
        name: 'name 12',
        rating: 12,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },  
    {
        id: 13,
        name: 'name 13',
        rating: 13,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 14,
        name: 'name 14',
        rating: 14,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 15,
        name: 'name 15',
        rating: 15,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 16,
        name: 'name 16',
        rating: 16,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 17,
        name: 'name 17',
        rating: 17,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 18,
        name: 'name 18',
        rating: 18,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 19,
        name: 'name 19',
        rating: 19,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 20,
        name: 'name 20',
        rating: 20,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 21,
        name: 'name 21',
        rating: 21,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },  
    {
        id: 22,
        name: 'name 22',
        rating: 1,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 23,
        name: 'name 23',
        rating: 2,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 24,
        name: 'name 24',
        rating: 13,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 25,
        name: 'name 25',
        rating: 15,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 26,
        name: 'name 26',
        rating: 16,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    },
    {
        id: 27,
        name: 'name 27',
        rating: 17,
        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
    }
];

const DUMMY_GAMES = [
    {
        id: 1,
        name: 'name 1',
        date: '2021-05-12',
        startHour: '18:00',
        endHour: '22:00',
        groups: [
            {
                id: 1,
                name: 'group 1',
                players: [
                    {
                        id: 1,
                        name: 'Yehouda Nabet',
                        rating: 1,
                        img: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/160929899_3743273802394278_8424406490745877003_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-_6Q_KB1kqMAX8UhK9W&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT8yXOYVipaoNzK02Cvc7fzazDl-w9R0voeYSbXWwRR8Jw&oe=61EDE3EB'
                    },
                    {
                        id: 2,
                        name: 'Omer Sharf',
                        rating: 2,
                        img: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/39514894_10217226143667076_3052445433499484160_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=QTmIySdVHG4AX9cnE4q&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT--fPRRTOWO6nL6vNMT6LAe9BzyZczFGW6JLVAwLSCOIQ&oe=61EB4CB0'
                    },
                    {
                        id: 3,
                        name: 'Renny Chechiqe',
                        rating: 3,
                        img: 'https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/33045289_10216765127860004_2423420586505011200_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OBCqMmtjxEIAX-0kucr&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-vjWm3HogyOY0w3fmzfK8SNIHvhsnBZ77T91VFgynXZw&oe=61ECB1E2'
                    },
                    {
                        id: 4,
                        name: 'name 4',
                        rating: 4,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 5,
                        name: 'name 5 ',
                        rating: 5,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 6,
                        name: 'name 6',
                        rating: 6,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 7,
                        name: 'name 7',
                        rating: 7,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    }
                ]
            },
            {
                id: 2,
                name: 'group 2',
                players: [
                    {
                        id: 8,
                        name: 'name 8',
                        rating: 8,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },  
                    {
                        id: 9,
                        name: 'name 9',
                        rating: 9,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 10,
                        name: 'name 10',
                        rating: 10,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 11,
                        name: 'name 11',
                        rating: 11,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 12,
                        name: 'name 12',
                        rating: 12,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },  
                    {
                        id: 13,
                        name: 'name 13',
                        rating: 13,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 14,
                        name: 'name 14',
                        rating: 14,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 15,
                        name: 'name 15',
                        rating: 15,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                ]
            },
            {
                id: 3,
                name: 'group 3',
                players: [
                    {
                        id: 20,
                        name: 'name 20',
                        rating: 20,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 21,
                        name: 'name 21',
                        rating: 21,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },  
                    {
                        id: 22,
                        name: 'name 22',
                        rating: 1,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 23,
                        name: 'name 23',
                        rating: 2,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 24,
                        name: 'name 24',
                        rating: 13,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 25,
                        name: 'name 25',
                        rating: 15,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 26,
                        name: 'name 26',
                        rating: 16,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    },
                    {
                        id: 27,
                        name: 'name 27',
                        rating: 17,
                        img: 'https://www.americanaircraftsales.com/wp-content/uploads/2016/09/no-profile-img.jpg'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'game 2',
        date: '2021-05-12',
        startHour: '18:00',
        endHour: '22:00',
        groups: ''
    },
    {
        id: 3,
        name: 'game 3',
        date: '2021-05-12',
        startHour: '18:00',
        endHour: '22:00',
        groups: ''
    }
];

export function getAllPlayers(){
    return DUMMY_PLAYERS;
}

export function getAllGames(){
    return DUMMY_GAMES;
}

export function getGameById(gameId){
    return DUMMY_GAMES.find(game => game.id === +gameId);
}
