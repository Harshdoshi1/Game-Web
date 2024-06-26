let subSearch = document.getElementById("subSearch");

function toggleSearch(){
  subSearch.classList.toggle("open-search");
}

const Games = [
    {
        id: 0,
        image: 'BGMIMOB.png',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'BRAWLSTARS.png',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'CANDYCRUSH.png',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'CLASHROYAL.png',
        title: 'Headphones',
        price: 100,
    },
    {
        id: 4,
        image: 'FCMOBILE.png',
        title: 'Audio Microphone',
        price: 230,
    },
    {
        id: 5,
        image: 'CODMMOB.png',
        title: 'Smart Watch',
        price: 100,
    },
    {
        id: 6,
        image: 'GTAV.png',
        title: 'Smart Watch',
        price: 100,
    },
    {
        id: 7,
        image: 'GTASAN.png',
        title: 'Smart Watch',
        price: 100,
    },
    {
        id: 8,
        image: 'GTAVICE.png',
        title: 'Smart Watch',
        price: 100,
    },
    {
        id: 9,
        image: 'SUBWAY.png',
        title: 'Smart Watch',
        price: 100,
    },
    {
        id: 10,
        image: 'FREEFIRE.png',
        title: 'Smart Watch',
        price: 100,
    },
    {
        id: 11,
        image: 'COC.png',
        title: 'Smart Watch',
        price: 100,
    },
];

const categories = [...new Set(Games.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);