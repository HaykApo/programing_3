class Vahe extends LivingCreature{
    constructor(x,y) {
        super(x,y)
        this.grassCount = 20;
        this.grassEaterCount = 20;
        this.predatorCount = 15;
        this.mushroomCount = 20;
        this.cordinates = [
            [cell_count / 2, cell_count / 2],
            [cell_count / 2, cell_count / 2 - 1],
            [cell_count / 2 - 1, cell_count / 2],
            [cell_count / 2 - 1, cell_count / 2 - 1],
        ];
        matrix[cell_count / 2][cell_count / 2] = 5;
        matrix[cell_count / 2][cell_count / 2 - 1] = 5;
        matrix[cell_count / 2 - 1][cell_count / 2] = 5;
        matrix[cell_count / 2 - 1][cell_count / 2 - 1] = 5;
    }

    getNewCoordinate() {
        var cord;
        let isok = false;
        while (!isok) {
            isok = true;
            cord = [(Math.floor(Math.random() * cell_count)), (Math.floor(Math.random() * cell_count))];
            for (let i in this.cordinates) {
                if ((this.cordinates[i][0] == cord[0]) && (this.cordinates[i][1] == cord[1]) ) {
                    isok = false;
                    break;
                }
            }
        }
        return cord;
    }

    update() {
        this.grassCount--
        this.grassEaterCount--
        this.predatorCount--
        this.mushroomCount--
        if (this.grassCount == 0) {
            this.grassCount = 20; 
            let gr = new Grass(...this.getNewCoordinate());
            grassArr.push(gr);
            matrix[gr.y][gr.x] = 1;
        }
        if (this.grassEaterCount == 0) {
            this.grassEaterCount = 20;
            let grEat = new GrassEater(...this.getNewCoordinate());
            grassEaterArr.push(grEat);
            matrix[grEat.y][grEat.x] = 2;
        }
        if (this.predatorCount == 0) {
            this.predatorCount = 15;
            let pre = new Predator(...this.getNewCoordinate());
            predatorArr.push(pre);
            matrix[pre.y][pre.x] = 3;
        }
        if (this.mushroomCount == 0) {
            this.mushroomCount = 20;
            let mush = new Mushroom(...this.getNewCoordinate());
            mushroomArr.push(mush);
            matrix[mush.y][mush.x] = 4;
        }
    }
}


