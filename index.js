const path = require('path');

class RandomColor {

    setup(props, core) {
        this.props = props == null ? {} : props;
        this.core = core;
        this.localizedTexts = core.data.getLocalizations(path.join(__dirname, 'loc'));

        if (this.props == null) {
            this.props = {};
        }

        if (this.props.set_text == null) {
            this.props.set_text = true;
        }
    }

    init(initialState) {
        return this.execute(initialState)
    }

    getRandomColorHex() {
        const colorLetters = '0123456789ABCDEF';
        let color = '';
        for (let i = 0; i < 6; i++) {
            color += colorLetters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    execute(currentState) {
        const color = this.getRandomColorHex();
        if (this.props.set_text) {
            currentState.text = '#' + color;
        }
        currentState.bgColor = 'ff' + color;
        return Promise.resolve({ state: currentState });
    }

    onLongPress(currentState) {
        return Promise.resolve({ state: currentState });
    }

    getActionDescriptor() {
        const locale = this.core.data.getCurrentLocale();
        return Promise.resolve({
            name: "random-color",
            description: this.localizedTexts.tr(locale, "action_description"),
            props: [{
                name: "set_text",
                type: "Bool",
                defaultValue: "true",
                description: this.localizedTexts.tr(locale, "prop_set_text")
            }]
        });
    }
}

exports.IdeckiaAction = RandomColor;