
export function test(name, template, callback) {
    it(name, () => {
        cy.visit('http://alpine-next.test/cypress/spec.html')

        cy.get('#root').then(([el]) => {
            el.innerHTML = template

            el.evalScripts()

            el.startAlpine()

            callback(cy.get)
        })
    })
}

export let haveData = (key, value) => ([ el ]) => expect(el._x_root()._x_$data[key]).to.equal(value)

export let beMissingAttribute = attr => el => expect(el).not.to.have.attr(attr)

export let haveAttribute = (name, value) => el => expect(el).to.have.attr(name, value)

export let haveText = text => el => expect(el).to.have.text(text)

export let beChecked = () => el => expect(el).to.be.checked

export let beVisible = () => el => expect(el).to.be.visible

export let beHidden = () => el => expect(el).to.be.hidden

export let haveClasses = classes => el => classes.forEach(aClass => expect(el).to.have.class(aClass))

export let notHaveClasses = classes => el => classes.forEach(aClass => expect(el).not.to.have.class(aClass))