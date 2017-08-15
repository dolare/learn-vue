<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.2/vue.js"></script>
</head>
<body>
    <div id="vue"><h1 v-once>{{title}}</h1>    <a v-bind:href="link">Google</a></div>
    <p v-html></p>
</body>
<scirpt>
    new Vue({
        el:"#vue",
        data:{
            title:"hello world",
            link:"http://google.com",
            finishedLink:'<a href="google.com">Google</a>'
        }
        method:{
            sayHello:function(){
                return 'Hello';
            }
        }
    });
</scirpt>
</html>