let leader = {
    step : 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function(){ // 사다리에서 몇 번째 단에 올라와 있는지 보여준다.
        alert(this.step);
        return this;
    }
};
/*
leader.up();
leader.up();
leader.down();
leader.showStep(); // 1
*/

leader.up().up().down().up().down().showStep(); // 1