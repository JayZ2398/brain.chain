//This function takes a dictionary as UserData, with the format:
//{"Name": [Questions, Answers, Tasks]}
//And then Groups as the number of groups required.
//Weights is an array that specifies the relative importance of 
//The question, the answer and the task respectively.

function Classifier(UserData, Groups, Weight) {
    //train the data
    //Weight takes the form:
    //Weight[0] -> Weighting for Questions, 
    //Weight[1] -> Weighting for Answers, 
    //Weight[2] -> Weighting for Tasks

    var x = UserData
    var score_list = []
    //Use appropriate binning:
    //Bin by frequency instead by value:
    sol = {}
    i = 1
    while (i <= Groups) {
        sol[["Group " + i]] = []
        i += 1
    } 
    //Get the keys of the dictionary:
    result = Object.keys(UserData)
    console.log(result)
    for(i = 0; i < result.length; i++) {
        person = result[i]
        entry = UserData[person]
        console.log(entry)
        for(j = 0; j < entry.length; j++) {
            //Get the relevant information on no. of questions, answers and tasks:
            question = entry[0]
            answer = entry[1]
            tasks = entry[2]
            score = Weight[0] * question + Weight[1] * answer + Weight[2] * tasks
        }
        score_list.push([score, person])
    } 
    //Now sort based on order:
    score_list.sort( (a, b) => {
        return b[0] - a[0]
      });
    console.log("After:", score_list)
    count = 1
    index_val = 0 
    //Now assign the people to groups:
    while (count <= result.length) {
        index_val = 1 + count%Groups
        person = score_list[count - 1]
        sol['Group ' + index_val].push(person[1])
        count += 1
    }
    return sol  
} 
//Sample input:
var mydict = {"Abe" :  [1, 2, 4], "Dave" : [3, 1, 5],  "Eve": [5, 0, 2], "Yohan": [8, 0, 2], "Alex" :[3, 1, 2], 
"Rob" : [5, 6, 2], 'Jeff': [1, 2, 3], "Tim" : [1, 0, 2], 'Margaret': [1, 5, 6], "Nate": [2, 3, 4], "Kevin" : [3, 1, 6], 
"Cindy": [6, 0, 4]};
console.log(Classifier(mydict, 8, [1, 2, 1]))