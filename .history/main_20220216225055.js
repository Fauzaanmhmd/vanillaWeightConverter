document.getElementById('lbsInput').addEventListener('input', function (e) {
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;
});