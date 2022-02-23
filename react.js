class Component {
    constructor() {

    }
    setState() {
        // update-eli a state-et és ujrarendereli a componenst
    }
    
    actualRender() {
        const componentToRender = this.render()
        // ez a fn a DOM API-t hasznalja, a fb fejlesztői megirták. a componentToRendert-t hasznalja
    }
}

module.exports = {Component}