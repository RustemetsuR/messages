const fs = require("fs");

const fileName = "./db.json";
let data = [];
const dataOfFiveMessages = [];

module.exports = {
    init() {
        try {
            data = JSON.parse(fs.readFileSync(fileName));
        } catch (e) {
            data = [];
        };
    },
    getItems() {
        if (data.length !== 0) {
            for (let i = data.length - 1; i > data.length - 6; i--) {
                dataOfFiveMessages.push(data[i]);
            }
            console.log(dataOfFiveMessages);
        }
        return dataOfFiveMessages;
    },
    save() {
        fs.writeFileSync(fileName, JSON.stringify(data));
    },
    addItem(item) {
        const d = new Date();
        item.dateTime = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + 'T' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        data.push(item);
        this.save();
        return item;
    },
};