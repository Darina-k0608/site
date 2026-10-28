function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateMath() {
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

function generateTask1() {
    let x1 = rnd(-5, 5), y1 = rnd(-5, 5), z1 = rnd(-5, 5);
    let x2 = rnd(-5, 5), y2 = rnd(-5, 5), z2 = rnd(-5, 5);
    let task = `Составьте каноническое уравнение прямой, проходящей через точки <b>M₁(${x1}; ${y1}; ${z1})</b> и <b>M₂(${x2}; ${y2}; ${z2})</b>. Найдите координаты направляющего вектора.`;
    document.getElementById('task1').innerHTML = task;
    document.getElementById('img1').src = `https://placehold.co/600x300/e0e0e0/333?text=Прямая+M1M2`;
    updateMath();
}

function generateTask2() {
    let x0 = rnd(-3, 3), y0 = rnd(-3, 3), z0 = rnd(-3, 3);
    let a = rnd(-3, 3) || 1, b = rnd(-3, 3) || 1, c = rnd(-3, 3) || 1;
    let m = rnd(-3, 3) || 1, n = rnd(-3, 3) || 1, p = rnd(-3, 3) || 1;
    let task = `Найдите расстояние от точки <b>M₀(${x0}; ${y0}; ${z0})</b> до прямой:<br> \\[ \\frac{x-${a}}{${m}} = \\frac{y-${b}}{${n}} = \\frac{z-${c}}{${p}} \\]`;
    document.getElementById('task2').innerHTML = task;
    document.getElementById('img2').src = `https://placehold.co/600x300/e0e0e0/333?text=Расстояние+до+прямой`;
    updateMath();
}

function generateTask3() {
    let A = [rnd(-4, 4), rnd(-4, 4), rnd(-4, 4)];
    let B = [rnd(-4, 4), rnd(-4, 4), rnd(-4, 4)];
    let C = [rnd(-4, 4), rnd(-4, 4), rnd(-4, 4)];
    let task = `Составьте общее уравнение плоскости через три точки:<br><b>A(${A[0]}; ${A[1]}; ${A[2]})</b>, <b>B(${B[0]}; ${B[1]}; ${B[2]})</b>, <b>C(${C[0]}; ${C[1]}; ${C[2]})</b>.`;
    document.getElementById('task3').innerHTML = task;
    document.getElementById('img3').src = `https://placehold.co/600x300/e0e0e0/333?text=Плоскость+через+3+точки`;
    updateMath();
}

function generateTask4() {
    let x0 = rnd(-4, 4), y0 = rnd(-4, 4), z0 = rnd(-4, 4);
    let A = rnd(-4, 4) || 1, B = rnd(-4, 4) || 1, C = rnd(-4, 4) || 1, D = rnd(-10, 10);
    let task = `Найдите расстояние от точки <b>M(${x0}; ${y0}; ${z0})</b> до плоскости:<br><b>${A}x + ${B}y + ${C}z + ${D} = 0</b>.`;
    document.getElementById('task4').innerHTML = task;
    document.getElementById('img4').src = `https://placehold.co/600x300/e0e0e0/333?text=Расстояние+до+плоскости`;
    updateMath();
}

function generateTask5() {
    let m1 = [rnd(-4, 4)||1, rnd(-4, 4)||1, rnd(-4, 4)||1];
    let m2 = [rnd(-4, 4)||1, rnd(-4, 4)||1, rnd(-4, 4)||1];
    let task = `Найдите угол между скрещивающимися прямыми, если их направляющие векторы:<br><b>m₁ = {${m1[0]}; ${m1[1]}; ${m1[2]}}</b> и <b>m₂ = {${m2[0]}; ${m2[1]}; ${m2[2]}}</b>.`;
    document.getElementById('task5').innerHTML = task;
    document.getElementById('img5').src = `https://placehold.co/600x300/e0e0e0/333?text=Угол+между+прямыми`;
    updateMath();
}

function generateTask6() {
    let c = [rnd(-4, 4)||1, rnd(-4, 4)||1, rnd(-4, 4)||1];
    let n = [rnd(-4, 4)||1, rnd(-4, 4)||1, rnd(-4, 4)||1];
    let task = `Найдите угол между прямой и плоскостью. Направляющий вектор прямой <b>c = {${c[0]}; ${c[1]}; ${c[2]}}</b>, вектор нормали плоскости <b>n = {${n[0]}; ${n[1]}; ${n[2]}}</b>.`;
    document.getElementById('task6').innerHTML = task;
    document.getElementById('img6').src = `https://placehold.co/600x300/e0e0e0/333?text=Угол+прямая-плоскость`;
    updateMath();
}

function generateTask7() {
    let n1 = [rnd(-4, 4)||1, rnd(-4, 4)||1, rnd(-4, 4)||1];
    let n2 = [rnd(-4, 4)||1, rnd(-4, 4)||1, rnd(-4, 4)||1];
    let task = `Найдите угол между плоскостями. Векторы нормали:<br><b>n₁ = {${n1[0]}; ${n1[1]}; ${n1[2]}}</b> и <b>n₂ = {${n2[0]}; ${n2[1]}; ${n2[2]}}</b>.`;
    document.getElementById('task7').innerHTML = task;
    document.getElementById('img7').src = `https://placehold.co/600x300/e0e0e0/333?text=Угол+между+плоскостями`;
    updateMath();
}

window.onload = function() {
    generateTask1(); generateTask2(); generateTask3();
    generateTask4(); generateTask5(); generateTask6(); generateTask7();
};