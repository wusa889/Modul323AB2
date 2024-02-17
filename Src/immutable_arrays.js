const myArray = [ {id: 1, name: "Number1"}, {id: 2, name: "Number2"} ];
const myOtherArray = [...myArray, { id: 3, name: "Number3" } ];

const myNewArray = myOtherArray.map(p => {
    if(p.id === 2){
        p.name = "Number4"
    }
    return p
})

const filterdArray = myOtherArray.filter(p => {
    if(p.id !== 1)
    return p;
})


const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

const grouping = (groups, number) => {
    const { good = 0, ok = 0, bad = 0 } = groups;
    if(number >= 4){
        return {...groups, good: good +1}
    }
    else if(number >= 2.5){
        return{...groups, ok: ok + 1}
    }
    else {
        return{...groups, bad: bad + 1}
    }
}
const groupedReviews = reviews.reduce(grouping, {})

const averageReview = reviews.reduce( (n, g) => n + g) / reviews.length