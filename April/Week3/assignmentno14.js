const names = ['virat', 'ronaldo', 'messi', 'dhoni', 'rohit']
const h1 = document.querySelector('h1')
const element = 
    `
    <div>
        <p class ="user1 ">${names[0]}</p>
        <p class ="user2 ">${names[1]}</p>
        <p class ="user3 ">${names[2]}</p>
        <p class ="user4 ">${names[3]}</p>
        <p class ="user5 ">${names[4]}</p>
    </div>
    `
    h1.innerHTML = h1.innerHTML + element
    