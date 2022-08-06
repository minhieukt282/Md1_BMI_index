function bmi() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        document.getElementById("result").innerHTML = "Thiếu cân";
    } else if (bmi <= 25.0) {
        document.getElementById("result").innerHTML = "Bình thường";
    } else if (bmi <= 30.0) {
        document.getElementById("result").innerHTML = "Thừa cân";
    } else if (bmi > 30.0) {
        document.getElementById("result").innerHTML = "Béo phì";
    }

    document.getElementById("bmi").innerHTML = bmi;

}