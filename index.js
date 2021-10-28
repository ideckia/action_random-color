class RandomColor {

    setup(props, server) {
        this.props = props == null ? {} : props;
        this.server = server;

        if (this.props == null) {
            this.props = {};
        }

        if (this.props.setText == null) {
            this.props.setText = true;
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
        return new Promise((resolve, _) => {
            const color = this.getRandomColorHex();
            if (this.props.setText) {
                currentState.text = '#' + color;
            }
            currentState.bgColor = 'ff' + color;
            resolve(currentState);
        });
    }

    onLongPress(currentState) {
        return new Promise(function (resolve, _) {
            resolve(currentState);
        });
    }

    toJson() {
        return { name: "random-color", props: this.props };
    }

    getActionDescriptor() {
        return {
            name: "random-color",
            description: "Pick a random color each touch",
            props: [{
                "setText": false
            }]
        };
    }
}

exports.IdeckiaAction = RandomColor;