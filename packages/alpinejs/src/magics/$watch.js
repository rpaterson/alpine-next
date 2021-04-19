import { effect } from './../reactivity'
import { evaluateLater } from '../evaluator'
import { magic } from '../magics'

magic('watch', el => (key, callback) => {
    let evaluate =evaluateLater(el, key)

    let firstTime = true

    effect(() => evaluate(value => {
        // This is a hack to force deep reactivity for things like "items.push()".
        let div = document.createElement('div')

        div.dataset.throwAway = value

        if (! firstTime) callback(value)

        firstTime = false
    }))
})