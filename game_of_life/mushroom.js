class Mushroom {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.directions = [];
    }

    update() {
        this.energy--;
        if (this.energy == 0) {
            this.die();
        }
    }


    die() {
        matrix[this.y][this.x] = 0;
        for (var i in mushroomArr) {
            if (this.x == mushroomArr[i].x && this.y == mushroomArr[i].y) {
                mushroomArr.splice(i, 1);
                break;
            }
        }
    }
}