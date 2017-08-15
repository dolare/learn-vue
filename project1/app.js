new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false,
        turns:[]
    },
    methods:{
        startGame:function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack:function(){
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) + 1,min);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer:true,
                text:"Payer hit monster for " + damage
            })
            if(this.monsterHealth <= 0){
                alert('you won');
                this.gameIsRunning = false;
                return;
            }

            max = 12;
            min = 6;
            damage = Math.max(Math.floor(Math.random() * max) + 1,min);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer:true,
                text:"Monster hit player for " + damage
            })
            if(this.playerHealth <= 0){
                alert('monster won');
                this.gameIsRunning = false;
                return;
            }
        },
        specialAttack:function(){
            var max = 30;
            var min = 10;
            var damage = Math.max(Math.floor(Math.random() * max) + 1,min);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer:true,
                text:"Payer hit monster for " + damage
            })
            if(this.monsterHealth <= 0){
                alert('you won');
                this.gameIsRunning = true;
                return;
            }

            max = 40;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1,min);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer:true,
                text:"Monster hit player for " + damage
            })
            if(this.playerHealth <= 0){
                alert('monster won');
                this.gameIsRunning = false;
                return;
            }
        },
        heal:function(){
            var max = 15;
            var min = 5;
            var damage = Math.max(Math.floor(Math.random() * max) + 1,min);
            this.monsterHealth += damage;

            if(this.monsterHealth >= 100){
                this.monsterHealth = 100;
            }

            max = 15;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1,min);
            this.playerHealth += damage;
            if(this.playerHealth >= 100){
                this.playerHealth = 100;
            }
        },
        giveUp:function(){
            this.gameIsRunning = false;
        },
    }
});