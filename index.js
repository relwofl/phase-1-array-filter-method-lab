// Code your solution here
function findMatching(drivers, same){
return drivers.filter(function(x){
    return x.toLowerCase() === same.toLowerCase()
    })
}

function fuzzyMatch(drivers, firstLetter){
    return drivers.filter(function(x){
    return x.toLowerCase().indexOf(firstLetter.toLowerCase()) === 0
    })
}

function matchName(drivers, possMatch){
    return drivers.filter(function(x){
        return x.name === possMatch
    })

}