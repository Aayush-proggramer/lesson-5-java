var friends = ["aayush","random","rian"]
document.getElementById("demo").innerHTML= friends[2];
document.getElementById("demo1").innerHTML= friends.join(" + ");
friends.pop();
document.getElementById("demo2").innerHTML= friends; 