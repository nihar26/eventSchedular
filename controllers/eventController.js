const mongoose = require('mongoose');

const eventModel = require('../models/eventModel');

const validator = require('../utils/validator')

const scheduledEvent = async function (req, res) {
    try {
        let textFromParams = req.query;

        if (!validator.isValidRequestBody(textFromParams)) {
            res.status(400).send({ status: false, message: 'Invalid request parameters. Please provide event details' })
            return
        }

        function Interval(text, time) {
            setInterval(function () {
                console.log(text)
            }, time * 60 * 1000);
        }

        for (let i = 0; i < textFromParams.length; i++) {
            if (!validator.isValid(textFromParams[i].text)) {
                res.status(400).send({ status: false, message: "Text is not provided" })
                return;
            }
            if (!validator.isValid(textFromParams[i].dateTime)) {
                res.status(400).send({ status: false, message: "dateTime is not provided" })
                return;
            }

            Interval(textFromParams[i].text.split("").reverse().join(""),textFromParams[i].dateTime)
        }

        res.status(200).send({status: true, message: "success"})
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
};

module.exports = {
    scheduledEvent
}