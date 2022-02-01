import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇ]{1,20}$')).required().messages({
        'string.empty':'"model" не може бути пустим'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base':'рік не може бути відємним та з 1990-го'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base':'рік може бути від 0 до 1000000'
    })

})