const counter = {
    currentCount: 0,
    step: 1,
    set: function(n) {
        this.currentCount = n
        return this;
    },
    inc: function() {
        this.currentCount += this.step;
        return this;
    },
    dec: function() {
        this.currentCount -= this.step;
        return this;
    },
    now: function() {
        console.log(this.currentCount);
    },
    setStep: function(n) {
        this.step = n;
        return this;
    },
};