import { root } from "../src/utils/root"

export let test = function (name, template, callback) {
    it(name, () => {
        injectHtmlAndBootAlpine(cy, template, callback)
    })
}

test.only = (name, template, callback) => {
    it.only(name, () => {
        injectHtmlAndBootAlpine(cy, template, callback)
    })
}

test.retry = (count) => (name, template, callback) => {
    it(name, {
        retries: {
            // During "cypress run"
            runMode: count - 1,
            // During "cypress open"
            openMode: count - 1,
        }
    }, () => {
        injectHtmlAndBootAlpine(cy, template, callback)
    })
}

test.csp = (name, template, callback) => {
    it(name, () => {
        injectHtmlAndBootAlpine(cy, template, callback, 'http://alpine-next.test/cypress/spec-csp.html')
    })
}

function injectHtmlAndBootAlpine(cy, templateAndPotentiallyScripts, callback, page) {
    let [template, scripts] = Array.isArray(templateAndPotentiallyScripts)
        ? templateAndPotentiallyScripts
        : [templateAndPotentiallyScripts]

    cy.visit(page || 'http://alpine-next.test/cypress/spec.html')

    cy.get('#root').then(([el]) => {
        el.innerHTML = template

        let thing = cy.get

        el.evalScripts(scripts)

        cy.get('[alpine-is-ready]', { timeout: 5000 }).should('be.visible');

        callback(thing)
    })
}

export let haveData = (key, value) => ([ el ]) => expect(root(el)._x_dataStack[0][key]).to.equal(value)

export let haveAttribute = (name, value) => el => expect(el).to.have.attr(name, value)

export let notHaveAttribute = (name, value) => el => expect(el).not.to.have.attr(name, value)

export let haveText = text => el => expect(el).to.have.text(text)

export let notHaveText = text => el => expect(el).not.to.have.text(text)

export let beChecked = () => el => expect(el).to.be.checked

export let notBeChecked = () => el => expect(el).not.to.be.checked

export let beVisible = () => el => expect(el).to.be.visible

export let notBeVisible = () => el => expect(el).not.to.be.visible

export let beHidden = () => el => expect(el).to.be.hidden

export let haveClasses = classes => el => classes.forEach(aClass => expect(el).to.have.class(aClass))

export let notHaveClasses = classes => el => classes.forEach(aClass => expect(el).not.to.have.class(aClass))

export let haveValue = value => el => expect(el).to.have.value(value)

export let haveLength = length => el => expect(el).to.have.length(length)
