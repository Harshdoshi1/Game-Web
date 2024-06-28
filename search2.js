let subSearch = document.getElementById("subSearch");

function toggleSearch(){
  subSearch.classList.toggle("open-search");
}

const Games = [
    // {
    //     id: 0,
    //     image: 'BGMIMOB.png',
    //     title: 'bgmi',
        
    // },
    // {
    //     id: 1,
    //     image: 'BRAWLSTARS.png',
    //     title: 'brawl stars',
        
    // },
    // {
    //     id: 2,
    //     image: 'CANDYCRUSH.png',
    //     title: 'candy crush',
        
    // },
    // {
    //     id: 3,
    //     image: 'CLASHROYAL.png',
    //     title: 'clashh royal',
        
    // },
    // {
    //     id: 4,
    //     image: 'FCMOBILE.png',
    //     title: 'fc mobile',
        
    // },
    // {
    //     id: 5,
    //     image: 'CODMMOB.png',
    //     title: 'cod',
        
    // },
    // {
    //     id: 6,
    //     image: 'GTAV.png',
    //     title: 'gtav',
        
    // },
    // {
    //     id: 7,
    //     image: 'GTASAN.png',
    //     title: 'gta sanandreas',
        
    // },
    // {
    //     id: 8,
    //     image: 'GTAVICE.png',
    //     title: 'gta vice',
        
    // },
    // {
    //     id: 9,
    //     image: 'SUBWAY.png',
    //     title: 'subway surfers',
        
    // },
    // {
    //     id: 10,
    //     image: 'FREEFIRE.png',
    //     title: 'freefire',
        
    // },
    // {
    //     id: 11,
    //     image: 'COC.png',
    //     title: 'coc',
        
    // },
    {
        id: 12,
        image: 'VALOPC.png',
        title: 'Valorant',
        
    },
    {
        id: 13,
        image: 'MINECRAFT.png',
        title: 'Minecraft',
        
    },
    {
        id: 14,
        image: 'FORZA4.png',
        title: 'Forza 4',
        
    },
    {
        id: 15,
        image: 'ANGRYBIRDS.png',
        title: 'Angry Birds',
        
    },
];

const categories = [...new Set(Games.map((item) => { return item }))]

document.getElementById('search').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('games').innerHTML = items.map((item) => {
        var { image, title } = item;
        return (
            // `<div class='box'>
            //     <div class='img-box'>
            //         <img class='images' src=${image}></img>
            //     </div> 
            //     <div class='bottom'>
            //         <p>${title}</p>
            //         <h2>$ ${price}.00</h2>
            //     <button>Add to cart</button>
            //     </div>
            // </div>`

            `
            <div class="game-container">
                <div class="container">
                    <div class="card">
                        <img src=${image}
                            alt="Image 1">
                        <p>${title}</p>
                    </div>
                </div>
            </div>
            `
        )
    }).join('')
};
displayItem(categories);