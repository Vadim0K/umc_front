import uuidv4 from "uuid/v4";

export default class TaskData {

    data = [
        {
            id: uuidv4(),
            text: "Clean the bar",
            solved: false
        },
        {
            id: uuidv4(),
            text: "Fill the chocolate",
            solved: true
        },
        {
            id: uuidv4(),
            text: "Check tea",
            solved: false
        },
        {
            id: uuidv4(),
            text: "Clean terrace",
            solved: false
        }
    ];

    getTasks() {
        return new Promise((resolve, reject) => {
                if (!this.data) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this.data);
                }
        });
    }
}