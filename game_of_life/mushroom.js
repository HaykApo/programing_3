class Mushroom extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.energy = 30;
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