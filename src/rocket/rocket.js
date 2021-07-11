import './rocket.css';
/* Singleton*/

export default class Rocket {
    rocketTemplate;
    counter = 0;
    timerId;
    flyFn;

    constructor(name) {
        this.rocketName = name;

        if (typeof Rocket.instance === 'object') {
            return Rocket.instance;
        }

        Rocket.instance = this;

        this.createRocketTemplate();

        this.flyRocket();
        
        this.flyFn = this.flyRocket;
        
        return this;
    }

    createRocketTemplate() {
        this.rocketTemplate = document.createElement('div');
        this.rocketTemplate.classList.add('rocket-template');

        if (!document.querySelector('.open-space').contains(this.rocketTemplate)) {
            document.querySelector('.open-space').append(this.rocketTemplate);
        }
    }

    flyRocket() {
        this.timerId = setInterval(() => {
            this.counter+=10;
            this.rocketTemplate.style.bottom = this.counter + 'px';
        }, 400);
    }
}