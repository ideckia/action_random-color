class RandomColor {

    setup(props, server) {
        this.props = props == null ? {} : props;
        this.server = server;

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
        return Promise.resolve({
            name: "random-color",
            description: "Pick a random color each touch",
            props: [{
                "set_text": false
            }]
        });
    }
}

exports.IdeckiaAction = RandomColor;