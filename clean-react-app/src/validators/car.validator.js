import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[a-zA-Zа-яёЁіІїЇ]{1,15}$')).required().messages({
        'string.empty': '"model" не може бути пустим',
        'string.pattern.base': 'тільки букви. мін 1 макс 15'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base': 'рік може бути від 1990 до теперішнього',
        'number.min': 'рік не може бути до 1990',
        'number.max': 'рік не може бути майбутнім'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base': 'ціна може бути від 1 до 1 000 000',
        'number.min': 'ціна не може буть від`ємною',
        'number.max': 'ціна не може перевищувати мільйон'
    }),
    updateById: Joi.string().allow('').optional()

})