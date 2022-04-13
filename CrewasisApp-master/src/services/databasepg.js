import 'pg';
import pkg from 'pg';

const {Client} = pkg;


const client = new Client({
    host: "kashin.db.elephantsql.com",
    user: "prvhztbg",
    post: 5433,
    password: "eRSTmCc_lmjknyk4-nso7Hp2TtDZlx42",
    database: 'prvhztbg'
})

client.connect();


/**
 * These are the classes/methods used to query the database. These could all probably be optimized. 
 * At the moment they are all in their own classes, but some could be taken out and just be written as methods.
 * (fetching data should remain in a class as it's written)
 * 
 * I didn't pay much attention to SQL injection safety, so my method of querying should be checked before deployment.
 */

/**
 * This is a class that contains the method to return an array of questions
 */
class returnQuestions{
    questionArray = new Array()
    constructor(){
        this.questionArray = new Array()
    }
    /**
     * This is the method to fetch questions from the database that 
     * match the given date passed as a parameter
     * 
     * @param {String} date 
     * @returns Array of questions
     */
    async updateDatabase(date){
        client
            .query(`Select * from question where "Start_Week" = '${date}'`)
            .then(res => {
                for(var i = 0; i<res.rows.length; i++){
                    this.questionArray[i] = (res.rows[i].Question)
                }
            }) 
            .catch(e => console.log(e.stack))
            return this.questionArray
    }
}

/**
 * Testing stuff
 */

// var test = new returnQuestions();
// await test.updateDatabase('12/10/2021');
// await QueryTime(1000)
// var questions = test.questionArray
// console.log(questions)

/**
 * This is the the class that contains the method that adds an answer to the DB
 */
class addAnswer{

    /**
     * This is the method that adds an answer to the database.
     * 
     * @param {Integer} answerID 
     * @param {Integer} UserID 
     * @param {Integer} questionID 
     * @param {String} answer 
     * @param {Integer} rating 
     */
    async updateDatabase(answerID, UserID, questionID, answer, rating){
        client
        .query(
            `Insert Into "answer" ("AnswerID", "UserID", "QuestionID", "Answer", "Rating")
             Values ('${answerID}', '${UserID}', '${questionID}', '${answer}', '${rating}')
            `)
        .then( () => {
            console.log("Answer is added to database.")
            return "Answer is added to database."
        })
        .catch(e => console.log(e.stack))
    }
}
/**
 * Testing stuff
 */


//var test = new addAnswer();
//await test.updateDatabase("999", "999", "999", "Test", "999");

/**
 * This is the class that contains the method that adds a question to the DB
 */
class addQuestion{
    /**
     * This is the method that adds a question to the database.
     * 
     * @param {String} question 
     * @param {String} date 
     */
    async updateDatabase(question, date){
        client
            //NOTE: Currently the DB is setup with a PK that is suquenced in, this may cause problems 
            // with fetching based on ID. 
            .query(
                `Insert Into "question" ("Question", "Start_Week")
                Values ('${question}', '${date}')`)
            .then(() => {
                console.log("Question added to database")
                return "Question added to database"
            })
            .catch(e => console.log(e.stack))
    }
}
/**
 * Testing stuff
 */

//var test = new addQuestion();
//var res = await test.updateDatabase("Test Question", "12/12/12");

/**
 * This is the method that is used to fix my lack of JS knowledge. 
 * It is used when fetching data from the DB. I couldn't figure out how async works, 
 * so I just used a delay feature. 
 * @param {Integer} ms 
 * @returns nothing, just sweet time. 
 */
function QueryTime(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
