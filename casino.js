class User{
    constructor (name = User.getDefaultName(), money){
        this.name = name;
        this.money = money;
    }

    get Name(){
        return this.name;
    }

    set Name(value){
        if (value !== undefined & value!= null){
            this.name = value;
        }
        else {
            console.log("Некоректно введене ім'я");
        }
    }

    get Money(){
        return this.money;
    }

    set Money(value){
        if (value !== undefined & value>0){
            this.money = value
        }
        else {
            console.log("Ваша сума для гри повинна бути більше 0.");
        }
    }

    play(money){       
        //var _gameMachine = new GameMachine();
        console.log("Game started");
    }

    static getDefaultName(){
        return "Yura";
    }
}


class SuperAdmin extends User{
    constructor(name,money){
        super(name);
        this.money = money;
        this.namecasino;
    } 

    createCasino(name){
        this.namecasino = new Casino(name);
    }

    createGameMachine(name){
        this.namecasino.createMachine(name);
        //this.namecasino.Machine[o].
        this.money -= 300;
        SuperAdmin.o +=1;
    }

    getMoneyFromMachine(number){
        
    }

    addMoneyMachine(number){
        
    }
}
SuperAdmin.o = 0;


class Casino{
    constructor(name){
        this.name = name;
        GameMachine this.machine = new GameMachine[];
    }

    createMachine(nameMachine){
        var _machina = new GameMachine(nameMachine);
        this.Machine.push(_machina);  
    }

    ShowAllMachine(){
        for(var i=0;i<this.Machine.length;i++){
             console.log(this.Machine[i]);
        }
    }

    get getMoney(){
        var amount = 0;
        if (this.Machine.length >= 0){
        for(var i=0;i<this.Machine.length;i++){
            var b = this.Machine[i](this.getMoney);
                amount = amount + b;
            }
        }
        else {console.log("У казино не має автоматів")}
        return amount;
        // return this.Machine.getMoney();
    }

    

    get getMachineCount(){
        return this.Machine.length;
    }

}


class GameMachine{
    constructor(_number){
        this._number = _number;
    }

    get getMoney(){
        return this.number;
    }

    putMoney(number){
        this._number += number;
    }

    takeMoney(number){
        if (this._number < number){
            console.log('Вибачте але суми у автоматі недостатньо зверніться до SuperAdmin');
        }
        else {
            this._number = this._number - number;
        }
    }

    playGame(number){
        this._number += number;
                
        let roll = this.getRandomInt(100,999);
        console.log(roll);
        var digits = [];

        while (roll > 0) {
            digits[digits.length] = roll % 10;
            roll = parseInt(roll / 10);
        }
        digits.reverse();
        
        for (var i = 0;i<digits.length;i++){
            console.log(digits[i]);
        }

        if ((digits[0]===digits[1]) && (digits[0]===digits[2]) && (digits[1]==digits[2])){
            console.log("У вас чарівна рука");
            number = number*3;
            this._number -= number;
            return number;
        }
        else if ( (digits[0]===digits[1]) || (digits[0]===digits[2]) || (digits[1]==digits[2])){
            console.log("Вітаю 2 цифри співпадать");
            number = number * 2;
            this._number -= number;
            return number;
        } 
        else {
            console.log("Спробуйте ще раз і ви обов'язково виграєте");
            number = 0;
        }
        return number;
    }
 
    getRandomInt(min, max) {    //Method for get random int from min to max
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;    
    }
}

var cas = new Casino("111");
console.log(cas.name);
cas.createMachine(222);
cas.createMachine(333);
cas.ShowAllMachine();

console.log(cas.getMachineCount);
console.log(cas.getMoney);

cas.ShowAllMachine();