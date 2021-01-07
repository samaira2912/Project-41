class Umbrella {
    constructor() {
        var options = { 
            isStatic: true 
        }
        this.body = Bodies.rectangle(200, 500, 80, 200, options);
        World.add(world, this.body);
    }
}